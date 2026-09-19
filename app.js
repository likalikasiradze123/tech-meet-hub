let allEvents = [];
const USD_RATE = 2.7;

// ენების ლექსიკონი და შემეცნებითი/საინფორმაციო ფრაზები
const translations = {
  ka: {
    profileBtn: "პირადი კაბინეთი",
    headerSubtitle: "იპოვეთ, დაჯავშნეთ და მიიღეთ ექსკლუზიური შეტყობინებები ტექნოლოგიურ ივენთებზე",
    labelSearch: "ძებნა:",
    searchPlaceholder: "მოძებნეთ ივენთი ან სპიკერი...",
    labelCategory: "ტექნოლოგია:",
    labelFormat: "ფორმატი:",
    labelCurrency: "ვალუტა:",
    optAll: "ყველა",
    btnInterested: "მაინტერესებს",
    bannerTitle: "🔔 გამოწერეთ პრემიუმ პაკეტი და მიიღეთ შეტყობინებები მეილზე!",
    bannerDesc: "შეიტყვეთ დაგეგმილი ივენთებისა და ტრენინგების შესახებ ყველაზე ადრე და დაჯავშნეთ ადგილები პრიორიტეტულად.",
    btnViewPackages: "💎 პაკეტების ნახვა",
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
    alertBookingSuccess: "ადგილი წარმატებით დარეგისტრირდა!",
    robotInfo: [
      "💡 იცოდით? პირველი კომპიუტერული მაუსი 1964 წელს ხისგან დამზადდა.",
      "💡 მსოფლიოში პირველი ვებ-საიტი 1991 წელს შეიქმნა და დღესაც აქტიურია.",
      "💡 Python-ის სახელი ცნობილი ბრიტანული კომედიური შოუსგან (Monty Python) მოდის.",
      "💡 ტერმინი Bug (შეცდომა კოდში) 1947 წელს კომპიუტერში ნაპოვნ რეალურ ჩრჩილს უკავშირდება.",
      "💡 QWERTY კლავიატურა 1873 წელს საბეჭდი მანქანების გაჭედვის თავიდან ასაცილებლად შეიქმნა.",
      "📅 არ დაგავიწყდეთ სასურველი ივენთის ფავორიტებში დამატება!",
      "🔔 პრემიუმ გამოწერით პირველი მიიღებთ შეტყობინებებს ახალ ვორქშოფებზე."
    ]
  },
  en: {
    profileBtn: "My Profile",
    headerSubtitle: "Discover, book and get exclusive notifications for tech events",
    labelSearch: "Search:",
    searchPlaceholder: "Search event or speaker...",
    labelCategory: "Category:",
    labelFormat: "Format:",
    labelCurrency: "Currency:",
    optAll: "All",
    btnInterested: "Favorites",
    bannerTitle: "🔔 Subscribe to Premium & Get Email Alerts!",
    bannerDesc: "Learn about upcoming events and workshops first and get priority booking.",
    btnViewPackages: "💎 View Packages",
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
    alertBookingSuccess: "Spot booked successfully!",
    robotInfo: [
      "💡 Did you know? The first computer mouse was made of wood in 1964.",
      "💡 The world's first website created in 1991 is still online today.",
      "💡 Python was named after the Monty Python show, not the snake.",
      "💡 The term 'Bug' came from an actual moth found inside a computer in 1947.",
      "💡 QWERTY keyboard was designed in 1873 to slow down typists and prevent jams.",
      "📅 Don't forget to add events to your favorites list!",
      "🔔 Premium subscribers receive early notifications for new workshops."
    ]
  }
};

let currentLang = localStorage.getItem('currentLang') || 'ka';
let userFavorites = JSON.parse(localStorage.getItem('userFavorites')) || [];
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
  name: '',
  email: '',
  avatar: 'Felix',
  subscription: 'Free'
};
let showOnlyFavorites = false;

// DOM
const eventsGrid = document.getElementById('events-grid');
const favCountSpan = document.getElementById('fav-count');
const profileBtn = document.getElementById('profile-btn');
const langSelect = document.getElementById('language-select');

// Modals
const bookingModal = document.getElementById('booking-modal');
const profileModal = document.getElementById('profile-modal');
const subModal = document.getElementById('subscription-modal');

// 🤖 რობოტი
const robotContainer = document.getElementById('cute-robot');
const robotBubble = document.getElementById('robot-bubble');

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

langSelect.value = currentLang;
langSelect.addEventListener('change', (e) => setLanguage(e.target.value));

fetch('src/data/events.json')
  .then(res => res.json())
  .then(data => {
    allEvents = data;
    setLanguage(currentLang);
  })
  .catch(err => console.error('შეცდომა:', err));

function updateUI() {
  favCountSpan.textContent = userFavorites.length;
  updateProfileButton();
  filterEvents();
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

    card.innerHTML = `
      <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${event.id}">
        ${isFav ? '❤️' : '🤍'}
      </button>
      <img src="${event.image}" alt="${event.title}">
      <div class="event-info">
        <span class="badge">${event.category} • ${event.format}</span>
        <h3 class="event-title">${event.title}</h3>
        <p class="speaker">🎤 ${event.speaker}</p>
        <p class="event-details">📅 ${event.date} | 📍 ${event.location}</p>
        <div class="card-footer">
          <span class="price">${formattedPrice}</span>
          <button class="btn-details" data-title="${event.title}">${translations[currentLang].btnBookNow}</button>
        </div>
      </div>
    `;

    eventsGrid.appendChild(card);
  });
}

function filterEvents() {
  const category = document.getElementById('category-filter').value;
  const format = document.getElementById('format-filter').value;
  const query = document.getElementById('search-input').value.toLowerCase().trim();

  const filtered = allEvents.filter(e => {
    const catMatch = category === 'all' || e.category === category;
    const fmtMatch = format === 'all' || e.format === format;
    const searchMatch = query === '' || 
      e.title.toLowerCase().includes(query) || 
      e.speaker.toLowerCase().includes(query);
    const favMatch = !showOnlyFavorites || userFavorites.includes(e.id);

    return catMatch && fmtMatch && searchMatch && favMatch;
  });

  displayEvents(filtered);
}

document.getElementById('category-filter').addEventListener('change', filterEvents);
document.getElementById('format-filter').addEventListener('change', filterEvents);
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

  if (e.target.classList.contains('btn-details')) {
    const title = e.target.dataset.title;
    document.getElementById('modal-event-title').textContent = `${translations[currentLang].bookingPrefix} ${title}`;
    bookingModal.style.display = 'flex';
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
  profileModal.style.display = 'flex';
});

document.getElementById('subscribe-plan-btn').addEventListener('click', () => {
  subModal.style.display = 'flex';
});

document.getElementById('close-booking').onclick = () => bookingModal.style.display = 'none';
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

document.getElementById('booking-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert(translations[currentLang].alertBookingSuccess);
  bookingModal.style.display = 'none';
});

// 🧠 მხოლოდ შემეცნებითი და საინფორმაციო ფუნქცია
let factIndex = 0;

function showNextFact() {
  const facts = translations[currentLang].robotInfo;
  factIndex = (factIndex + 1) % facts.length;
  robotBubble.textContent = facts[factIndex];
}

// რობოტზე დაჭერისას ახალი ტექ-ფაქტი გამოვა
robotContainer.addEventListener('click', showNextFact);

// ყოველ 12 წამში ავტომატურად შეიცვლება ტექ-ფაქტი
setInterval(showNextFact, 12000);