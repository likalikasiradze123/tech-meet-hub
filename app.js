let allEvents = [];
const USD_RATE = 2.7; // 1 USD = 2.7 GEL

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
  const currency = document.getElementById('currency-select').value;
  container.innerHTML = '';

  if (events.length === 0) {
    container.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">ღონისძიება ვერ მოიძებნა.</p>';
    return;
  }

  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';

    // ფასის დათვლა არჩეული ვალუტის მიხედვით (JSON-ში ფასი GEL-შია)
    let formattedPrice = '';
    if (currency === 'USD') {
      const usdPrice = (event.price / USD_RATE).toFixed(0);
      formattedPrice = `$${usdPrice}`;
    } else {
      formattedPrice = `${event.price} ₾`;
    }

    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="event-info">
        <span class="badge">${event.category} • ${event.format}</span>
        <h3 class="event-title">${event.title}</h3>
        <p class="speaker">🎤 ${event.speaker}</p>
        <p class="event-details">📅 ${event.date} | 📍 ${event.location}</p>
        <div class="card-footer">
          <span class="price">${formattedPrice}</span>
          <button class="btn-details">დაჯავშნა</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// ფილტრაციის და ძებნის ლოგიკა
function filterEvents() {
  const selectedCategory = document.getElementById('category-filter').value;
  const selectedFormat = document.getElementById('format-filter').value;
  const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();

  const filtered = allEvents.filter(event => {
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    const formatMatch = selectedFormat === 'all' || event.format === selectedFormat;
    
    // ძებნა სათაურში ან სპიკერის სახელში
    const titleMatch = event.title.toLowerCase().includes(searchQuery);
    const speakerMatch = event.speaker.toLowerCase().includes(searchQuery);
    const searchMatch = searchQuery === '' || titleMatch || speakerMatch;

    return categoryMatch && formatMatch && searchMatch;
  });

  displayEvents(filtered);
}

// Event Listeners ფილტრების, ძებნისა და ვალუტისთვის
document.getElementById('category-filter').addEventListener('change', filterEvents);
document.getElementById('format-filter').addEventListener('change', filterEvents);
document.getElementById('search-input').addEventListener('input', filterEvents);
document.getElementById('currency-select').addEventListener('change', filterEvents);

// Modal-ისა და დაჯავშნის ლოგიკა
const modal = document.getElementById('booking-modal');
const closeModalBtn = document.getElementById('close-modal');
const bookingForm = document.getElementById('booking-form');

// ღილაკზე დაჭერისას Modal-ის გახსნა
document.getElementById('events-grid').addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-details')) {
    const card = e.target.closest('.event-card');
    const title = card.querySelector('.event-title').textContent;
    document.getElementById('modal-event-title').textContent = `დაჯავშნა: ${title}`;
    modal.style.display = 'flex';
  }
});

// Modal-ის დახურვა X-ზე დაჭერისას
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// ფორმის გაგზავნა
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('ადგილი წარმატებით დარეგისტრირდა!');
  modal.style.display = 'none';
  bookingForm.reset();
});