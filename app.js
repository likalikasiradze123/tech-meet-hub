// JSON ფაილიდან მონაცემების წამოღება
fetch('src/data/events.json')
  .then(response => response.json())
  .then(data => {
    displayEvents(data);
  })
  .catch(error => console.error('შეცდომა მონაცემების წამოღებისას:', error));

// ივენთების ბადეში (Grid) გამოჩენა
function displayEvents(events) {
  const container = document.getElementById('events-grid');
  container.innerHTML = '';

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