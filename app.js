let allEvents = [];
const USD_RATE = 2.7;

// ენების ლექსიკონი
const translations = {
  ka: {
    profileBtn: "პირადი კაბინეთი",
    headerSubtitle: "იპოვეთ, დაჯავშნეთ და მიიღეთ ექსკლუზიური შეტყობინებები ტექნოლოგიურ ივენთებზე",
    labelSearch: "ძებნა:",
    searchPlaceholder: "მოძებნეთ ივენთი ან სპიკერი...",
    labelCategory: "ტექნოლოგია:",
    labelFormat: "ფორმატი:",
    labelSort: "სორტირება:",
    sortDate: "თარიღით (უახლოესი)",
    sortPriceAsc: "ფასით (დაბლიდან მაღლა)",
    sortPriceDesc: "ფასით (მაღლიდან დაბლა)",
    sortRating: "რეიტინგით",
    labelCurrency: "ვალუტა:",
    optAll: "ყველა",
    btnInterested: "მაინტერესებს",
    bannerTitle: "🔔 გამოწერეთ პრემიუმ პაკეტი და მიიღეთ შეტყობინებები მეილზე!",
    bannerDesc: "შეიტყვეთ დაგეგმილი ივენთებისა და ტრენინგების შესახებ ყველაზე ადრე და დაჯავშნეთ ადგილები პრიორიტეტულად.",
    btnViewPackages: "💎 პაკეტების ნახვა",
    nextEventTitle: "უახლოეს ივენთამდე დარჩენილია:",
    unitDays: "დღე",
    unitHours: "საათი",
    unitMinutes: "წუთი",
    unitSeconds: "წამი",
    modalBookingTitle: "ღონისძიების დაჯავშნა",
    labelFullName: "სახელი, გვარი:",
    phFullName: "მაგ: გიორგი ბერიძე",
    labelEmail: "ელ-ფოსტა:",
    btnConfirm: "დადასტურება",
    profileTitle: "👤 პირადი კაბინეთი",
    chooseAvatar: "აირჩიეთ ავატარი:",
    yourName: "თქვენი სახელი:",
    phEnterName: "შეიყვანეთ სახელი",
    emailForNotifications: "ელ-ფოსტა შეტყობინებებისთვის:",
    subStatus: "გამოწერის სტატუსი:",
    saveProfile: "პროფილის შენახვა",
    subPackagesTitle: "💎 აირჩიეთ გამოწერის პაკეტი",
    subPackagesSubtitle: "მიიღეთ შეტყობინებები მეილზე ახალ ივენთებსა და ტრენინგებზე!",
    perMonth: "თვეში",
    proFeat1: "✅ ადრეული შეტყობინებები მეილზე",
    proFeat2: "✅ პრიორიტეტული დაჯავშნა",
    vipFeat1: "✅ ყველა ივენთზე პრიორიტეტი",
    vipFeat2: "✅ მეილ შეტყობინებები + ფასდაკლება",
    vipFeat3: "✅ ექსკლუზიური ვორქშოფები",
    btnSelect: "შერჩევა",
    btnBookNow: "დაჯავშნა",
    noEvents: "ღონისძიება ვერ მოიძებნა.",
    bookingPrefix: "დაჯავშნა:",
    alertProfileUpdated: "პროფილი წარმატებით განახლდა!",
    alertSubSuccess: "🎉 გილოცავთ! თქვენ წარმატებით გამოიწერეთ {pkg} პაკეტი.",
    yourTicketTitle: "🎟️ თქვენი ციფრული ბილეთი",
    labelHolder: "მფლობელი:",
    labelDate: "თარიღი:",
    labelLocation: "ადგილი:",
    labelTicketId: "ბილეთის ID:",
    qrScanTip: "წარადგინეთ ეს QR კოდი შესასვლელთან",
    btnDownload: "ჩამოტვირთვა (PDF)",
    btnAddToCalendar: "კალენდარში დამატება",
    btnClose: "დახურვა",
    myTicketsHeading: "🎟️ ჩემი დაჯავშნილი ბილეთები",
    noSavedTickets: "ჯერ არ გაქვთ დაჯავშნილი ბილეთები.",
    robotInfo: [
      "💡 იცოდით? პირველი კომპიუტერული მაუსი 1964 წელს ხისგან დამზადდა.",
      "💡 მსოფლიოში პირველი ვებ-საიტი 1991 წელს შეიქმნა და დღესაც აქტიურია.",
      "💡 Python-ის სახელი ცნობილი ბრიტანული კომედიური შოუსგან (Monty Python) მოდის.",
      "💡 ტერმინი Bug 1947 წელს კომპიუტერში ნაპოვნ რეალურ ჩრჩილს უკავშირდება.",
      "📅 დაჯავშნის შემდეგ ბილეთი ინახება თქვენს პირად კაბინეტში!"
    ]
  },
  en: {
    profileBtn: "My Profile",
    headerSubtitle: "Discover, book and get exclusive notifications for tech events",
    labelSearch: "Search:",
    searchPlaceholder: "Search event or speaker...",
    labelCategory: "Category:",
    labelFormat: "Format:",
    labelSort: "Sort by:",
    sortDate: "Date (Upcoming)",
    sortPriceAsc: "Price (Low to High)",
    sortPriceDesc: "Price (High to Low)",
    sortRating: "Rating",
    labelCurrency: "Currency:",
    optAll: "All",
    btnInterested: "Favorites",
    bannerTitle: "🔔 Subscribe to Premium & Get Email Alerts!",
    bannerDesc: "Learn about upcoming events and workshops first and get priority booking.",
    btnViewPackages: "💎 View Packages",
    nextEventTitle: "Time left until next event:",
    unitDays: "Days",
    unitHours: "Hours",
    unitMinutes: "Mins",
    unitSeconds: "Secs",
    modalBookingTitle: "Event Booking",
    labelFullName: "Full Name:",
    phFullName: "e.g. John Doe",
    labelEmail: "Email Address:",
    btnConfirm: "Confirm",
    profileTitle: "👤 My Profile",
    chooseAvatar: "Choose Avatar:",
    yourName: "Your Name:",
    phEnterName: "Enter your name",
    emailForNotifications: "Email for Notifications:",
    subStatus: "Subscription Status:",
    saveProfile: "Save Profile",
    subPackagesTitle: "💎 Choose Subscription Plan",
    subPackagesSubtitle: "Get email alerts for upcoming tech events and workshops!",
    perMonth: "month",
    proFeat1: "✅ Early email notifications",
    proFeat2: "✅ Priority booking access",
    vipFeat1: "✅ VIP priority for all events",
    vipFeat2: "✅ Email alerts + Discounts",
    vipFeat3: "✅ Exclusive workshops",
    btnSelect: "Select Plan",
    btnBookNow: "Book Now",
    noEvents: "No events found.",
    bookingPrefix: "Booking:",
    alertProfileUpdated: "Profile updated successfully!",
    alertSubSuccess: "🎉 Congratulations! You subscribed to {pkg} plan.",
    yourTicketTitle: "🎟️ Your Digital Ticket",
    labelHolder: "Holder:",
    labelDate: "Date:",
    labelLocation: "Location:",
    labelTicketId: "Ticket ID:",
    qrScanTip: "Present this QR code at the entrance",
    btnDownload: "Download (PDF)",
    btnAddToCalendar: "Add to Calendar",
    btnClose: "Close",
    myTicketsHeading: "🎟️ My Booked Tickets",
    noSavedTickets: "You have no booked tickets yet.",
    robotInfo: [
      "💡 Did you know? The first computer mouse was made of wood in 1964.",
      "💡 The world's first website created in 1991 is still online today.",
      "💡 Python was named after the Monty Python show, not the snake.",
      "💡 The term 'Bug' came from an actual moth found inside a computer in 1947.",
      "📅 After booking, your tickets are saved in your profile!"
    ]
  }
};

let currentLang = localStorage.getItem('currentLang') || 'ka';
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';
let userFavorites = JSON.parse(localStorage.getItem('userFavorites')) || [];
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
  name: '',
  email: '',
  avatar: 'Felix',
  subscription: 'Free'
};
let myTickets = JSON.parse(localStorage.getItem('myTickets')) || [];
let showOnlyFavorites = false;
let selectedEventForBooking = null;
let currentActiveTicket = null;

// DOM
const eventsGrid = document.getElementById('events-grid');
const favCountSpan = document.getElementById('fav-count');
const profileBtn = document.getElementById('profile-btn');
const langSelect = document.getElementById('language-select');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Modals
const bookingModal = document.getElementById('booking-modal');
const ticketModal = document.getElementById('ticket-modal');
const profileModal = document.getElementById('profile-modal');
const subModal = document.getElementById('subscription-modal');

// 🤖 რობოტი
const robotContainer = document.getElementById('cute-robot');
const robotBubble = document.getElementById('robot-bubble');

// 🌙 Dark / Light Mode ლოგიკა
if (isDarkMode) {
  document.body.classList.add('dark-theme');
  themeToggleBtn.textContent = '☀️';
} else {
  themeToggleBtn.textContent = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-theme', isDarkMode);
  themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
  localStorage.setItem('isDarkMode', isDarkMode);
});

langSelect.value = currentLang;

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('currentLang', lang);

  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (translations[lang][key]) {
      elem.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      elem.placeholder = translations[lang][key];
    }
  });

  robotBubble.textContent = translations[lang].robotInfo[0];
  updateUI();
}

langSelect.addEventListener('change', (e) => setLanguage(e.target.value));

fetch('src/data/events.json')
  .then(res => res.json())
  .then(data => {
    allEvents = data;
    setLanguage(currentLang);
    startCountdownTimer();
  })
  .catch(err => console.error('შეცდომა:', err));

function updateUI() {
  favCountSpan.textContent = userFavorites.length;
  updateProfileButton();
  filterEvents();
  renderMyTickets();
}

function updateProfileButton() {
  const label = translations[currentLang].profileBtn;
  if (userProfile.name) {
    profileBtn.innerHTML = `👤 ${userProfile.name} (${userProfile.subscription})`;
  } else {
    profileBtn.innerHTML = `👤 ${label}`;
  }
}

function displayEvents(events) {
  eventsGrid.innerHTML = '';

  if (events.length === 0) {
    eventsGrid.innerHTML = `<p style="text-align: center; grid-column: 1/-1;">${translations[currentLang].noEvents}</p>`;
    return;
  }

  const currency = document.getElementById('currency-select').value;

  events.forEach(event => {
    const isFav = userFavorites.includes(event.id);
    const card = document.createElement('div');
    card.className = 'event-card';

    let formattedPrice = currency === 'USD' 
      ? `$${(event.price / USD_RATE).toFixed(0)}` 
      : `${event.price} ₾`;

    const ratingStars = '⭐'.repeat(Math.floor(event.rating || 5)) + ` (${event.rating || 5.0})`;

    card.innerHTML = `
      <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${event.id}">
        ${isFav ? '❤️' : '🤍'}
      </button>
      <img src="${event.image}" alt="${event.title}">
      <div class="event-info">
        <span class="badge">${event.category} • ${event.format}</span>
        <h3 class="event-title">${event.title}</h3>
        <div class="rating-stars">${ratingStars}</div>
        <p class="speaker">🎤 ${event.speaker}</p>
        <p class="event-details">📅 ${event.date} | 📍 ${event.location}</p>
        <div class="card-footer">
          <span class="price">${formattedPrice}</span>
          <div style="display: flex; gap: 5px;">
            <button class="btn-calendar-icon" data-id="${event.id}" title="Google Calendar">🗓️</button>
            <button class="btn-details" data-id="${event.id}">${translations[currentLang].btnBookNow}</button>
          </div>
        </div>
      </div>
    `;

    eventsGrid.appendChild(card);
  });
}

function filterEvents() {
  const category = document.getElementById('category-filter').value;
  const format = document.getElementById('format-filter').value;
  const sort = document.getElementById('sort-select').value;
  const query = document.getElementById('search-input').value.toLowerCase().trim();

  let filtered = allEvents.filter(e => {
    const catMatch = category === 'all' || e.category === category;
    const fmtMatch = format === 'all' || e.format === format;
    const searchMatch = query === '' || 
      e.title.toLowerCase().includes(query) || 
      e.speaker.toLowerCase().includes(query);
    const favMatch = !showOnlyFavorites || userFavorites.includes(e.id);

    return catMatch && fmtMatch && searchMatch && favMatch;
  });

  // 🔍 სორტირების ლოგიკა
  if (sort === 'date') {
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => (b.rating || 5) - (a.rating || 5));
  }

  displayEvents(filtered);
}

document.getElementById('category-filter').addEventListener('change', filterEvents);
document.getElementById('format-filter').addEventListener('change', filterEvents);
document.getElementById('sort-select').addEventListener('change', filterEvents);
document.getElementById('search-input').addEventListener('input', filterEvents);
document.getElementById('currency-select').addEventListener('change', filterEvents);

eventsGrid.addEventListener('click', (e) => {
  if (e.target.classList.contains('fav-btn')) {
    const id = Number(e.target.dataset.id);
    if (userFavorites.includes(id)) {
      userFavorites = userFavorites.filter(favId => favId !== id);
    } else {
      userFavorites.push(id);
    }
    localStorage.setItem('userFavorites', JSON.stringify(userFavorites));
    updateUI();
  }

  if (e.target.classList.contains('btn-calendar-icon')) {
    const eventId = Number(e.target.dataset.id);
    const ev = allEvents.find(item => item.id === eventId);
    if (ev) {
      openGoogleCalendar(ev.title, ev.date, ev.location);
    }
  }

  if (e.target.classList.contains('btn-details')) {
    const eventId = Number(e.target.dataset.id);
    selectedEventForBooking = allEvents.find(ev => ev.id === eventId);
    if (selectedEventForBooking) {
      document.getElementById('modal-event-title').textContent = `${translations[currentLang].bookingPrefix} ${selectedEventForBooking.title}`;
      if (userProfile.name) document.getElementById('user-name').value = userProfile.name;
      if (userProfile.email) document.getElementById('user-email').value = userProfile.email;
      bookingModal.style.display = 'flex';
    }
  }
});

document.getElementById('show-favorites-btn').addEventListener('click', () => {
  showOnlyFavorites = !showOnlyFavorites;
  const btn = document.getElementById('show-favorites-btn');
  btn.style.background = showOnlyFavorites ? '#059669' : '#e11d48';
  filterEvents();
});

profileBtn.addEventListener('click', () => {
  document.getElementById('profile-name').value = userProfile.name;
  document.getElementById('profile-email').value = userProfile.email;
  document.getElementById('user-sub-status').textContent = userProfile.subscription;
  document.getElementById('user-sub-status').className = userProfile.subscription === 'Free' ? 'badge-free' : 'badge-vip';
  renderMyTickets();
  profileModal.style.display = 'flex';
});

document.getElementById('subscribe-plan-btn').addEventListener('click', () => {
  subModal.style.display = 'flex';
});

document.getElementById('close-booking').onclick = () => bookingModal.style.display = 'none';
document.getElementById('close-ticket').onclick = () => ticketModal.style.display = 'none';
document.getElementById('close-ticket-btn').onclick = () => ticketModal.style.display = 'none';
document.getElementById('close-profile').onclick = () => profileModal.style.display = 'none';
document.getElementById('close-sub').onclick = () => subModal.style.display = 'none';

document.getElementById('profile-form').addEventListener('submit', (e) => {
  e.preventDefault();
  userProfile.name = document.getElementById('profile-name').value;
  userProfile.email = document.getElementById('profile-email').value;
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
  updateUI();
  profileModal.style.display = 'none';
  alert(translations[currentLang].alertProfileUpdated);
});

document.querySelectorAll('.avatar-img').forEach(img => {
  img.addEventListener('click', (e) => {
    document.querySelectorAll('.avatar-img').forEach(i => i.classList.remove('selected'));
    e.target.classList.add('selected');
    userProfile.avatar = e.target.dataset.avatar;
  });
});

document.querySelectorAll('.btn-buy-pkg').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const pkg = e.target.dataset.pkg;
    userProfile.subscription = pkg;
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    updateUI();
    subModal.style.display = 'none';
    const msg = translations[currentLang].alertSubSuccess.replace('{pkg}', pkg);
    alert(msg);
  });
});

// 🎟️ დაჯავშნა და QR კოდიანი ციფრული ბილეთის გენერაცია
document.getElementById('booking-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const userName = document.getElementById('user-name').value;
  const userEmail = document.getElementById('user-email').value;
  const ticketId = 'TKT-' + Math.floor(100000 + Math.random() * 900000);

  currentActiveTicket = {
    id: ticketId,
    userName: userName,
    userEmail: userEmail,
    eventTitle: selectedEventForBooking.title,
    eventDate: selectedEventForBooking.date,
    eventLocation: selectedEventForBooking.location
  };

  myTickets.push(currentActiveTicket);
  localStorage.setItem('myTickets', JSON.stringify(myTickets));

  document.getElementById('ticket-event-title').textContent = currentActiveTicket.eventTitle;
  document.getElementById('ticket-user-name').textContent = currentActiveTicket.userName;
  document.getElementById('ticket-event-date').textContent = currentActiveTicket.eventDate;
  document.getElementById('ticket-event-location').textContent = currentActiveTicket.eventLocation;
  document.getElementById('ticket-id-code').textContent = `#${currentActiveTicket.id}`;

  const qrContent = encodeURIComponent(`TicketID: ${currentActiveTicket.id} | Event: ${currentActiveTicket.eventTitle} | Holder: ${currentActiveTicket.userName}`);
  document.getElementById('ticket-qr-img').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrContent}`;

  bookingModal.style.display = 'none';
  ticketModal.style.display = 'flex';
  updateUI();
});

// ⏳ უკუთვლის ტაიმერის ლოგიკა
function startCountdownTimer() {
  if (allEvents.length === 0) return;

  const sortedEvents = [...allEvents].sort((a, b) => new Date(a.date) - new Date(b.date));
  const nextEvent = sortedEvents[0];
  document.getElementById('next-event-name').textContent = nextEvent.title;

  const eventDate = new Date(nextEvent.date + 'T10:00:00').getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      document.getElementById('timer-days').textContent = '00';
      document.getElementById('timer-hours').textContent = '00';
      document.getElementById('timer-minutes').textContent = '00';
      document.getElementById('timer-seconds').textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer-days').textContent = days < 10 ? '0' + days : days;
    document.getElementById('timer-hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('timer-minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('timer-seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
}

// 🗓️ Google Calendar-ში დამატების ფუნქცია
function openGoogleCalendar(title, dateStr, location) {
  const formattedDate = dateStr.replace(/-/g, '');
  const startTime = `${formattedDate}T100000Z`;
  const endTime = `${formattedDate}T120000Z`;

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startTime}/${endTime}&details=${encodeURIComponent('Tech Meet & Greet Hub Event')}&location=${encodeURIComponent(location)}`;
  
  window.open(calendarUrl, '_blank');
}

document.getElementById('add-calendar-btn').addEventListener('click', () => {
  if (currentActiveTicket) {
    openGoogleCalendar(currentActiveTicket.eventTitle, currentActiveTicket.eventDate, currentActiveTicket.eventLocation);
  }
});

// 📥 ბილეთის ჩამოტვირთვა / დაბეჭდვა (PDF)
document.getElementById('download-ticket-btn').addEventListener('click', () => {
  const ticketElement = document.getElementById('digital-ticket').outerHTML;
  
  const printWindow = window.open('', '', 'width=600,height=700');
  printWindow.document.write(`
    <html>
      <head>
        <title>Ticket - ${document.getElementById('ticket-event-title').textContent}</title>
        <style>
          body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; padding: 40px; background: #f4f7f6; }
          .ticket-card { background: #0f172a; color: white; border-radius: 12px; padding: 25px; width: 350px; border: 2px dashed #38bdf8; }
          .ticket-header { border-bottom: 1px solid #334155; padding-bottom: 10px; margin-bottom: 15px; }
          .ticket-badge { background: #38bdf8; color: #0f172a; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
          .ticket-body p { margin-bottom: 8px; font-size: 14px; color: #cbd5e1; }
          .ticket-qr-container { text-align: center; margin-top: 15px; background: white; padding: 10px; border-radius: 8px; color: #333; }
          .ticket-qr-container img { width: 130px; height: 130px; }
        </style>
      </head>
      <body>
        ${ticketElement}
        <script>
          setTimeout(() => {
            window.print();
            window.close();
          }, 500);
        <\/script>
      </body>
    </html>
  `);
  printWindow.document.close();
});

// 🎟️ პირადი კაბინეტის ბილეთების სიის რენდერი
function renderMyTickets() {
  const container = document.getElementById('my-tickets-list');
  container.innerHTML = '';

  if (myTickets.length === 0) {
    container.innerHTML = `<p style="font-size: 0.85rem; color: #888;">${translations[currentLang].noSavedTickets}</p>`;
    return;
  }

  myTickets.forEach(tkt => {
    const item = document.createElement('div');
    item.className = 'ticket-item-mini';
    item.innerHTML = `
      <div>
        <h4>${tkt.eventTitle}</h4>
        <p>📅 ${tkt.eventDate} | 🆔 ${tkt.id}</p>
      </div>
      <span style="font-size: 1.2rem;">🎟️</span>
    `;
    container.appendChild(item);
  });
}

// 🧠 შემეცნებითი რობოტი
let factIndex = 0;
function showNextFact() {
  const facts = translations[currentLang].robotInfo;
  factIndex = (factIndex + 1) % facts.length;
  robotBubble.textContent = facts[factIndex];
}
robotContainer.addEventListener('click', showNextFact);
setInterval(showNextFact, 12000);