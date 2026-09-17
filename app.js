let allEvents = [];

// JSON-იდან მონაცემების წამოღება
fetch('src/data/events.json')
  .then(response => response.json())
  .then(data => {
    allEvents = data;
    displayEvents(allEvents);
  })
  .catch(error => console.error('შეცდომა მონაცემების წამოღებისას:', error));

// ივენთების გამოჩენის ფუნქცია
function displayEvents(events) {
  const container = document.getElementById('events-grid');
  container.innerHTML = '';

  if (events.length === 0) {
    container.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">ღონისძიება ვერ მოიძებნა.</p>';
    return;
  }

  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';

    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="event-info">
        <span class="badge">${event.category} • ${event.format}</span>
        <h3 class="event-title">${event.title}</h3>
        <p class="speaker">🎤 ${event.speaker}</p>
        <p class="event-details">📅 ${event.date} | 📍 ${event.location}</p>
        <div class="card-footer">
          <span class="price">$${event.price}</span>
          <button class="btn-details">დაჯავშნა</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// ფილტრაციის ლოგიკა
function filterEvents() {
  const selectedCategory = document.getElementById('category-filter').value;
  const selectedFormat = document.getElementById('format-filter').value;

  const filtered = allEvents.filter(event => {
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    const formatMatch = selectedFormat === 'all' || event.format === selectedFormat;
    return categoryMatch && formatMatch;
  });

  displayEvents(filtered);
}

// Event Listeners ფილტრებისთვის
document.getElementById('category-filter').addEventListener('change', filterEvents);
document.getElementById('format-filter').addEventListener('change', filterEvents);