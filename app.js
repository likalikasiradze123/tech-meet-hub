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
    alertSubSuccess: "🎉 გილოცავთ! თქვენ წარმატებით გამოიწერეთ {pkg} პაკეტი. შეტყობინებები მეილზე გამოგიგზავნებათ!",
    alertBookingSuccess: "ადგილი წარმატებით დარეგისტრირდა! დასტური გამოგზავნილია მეილზე.",
    robotMessages: {
      walk: [
        "სასეირნოდ გავედი! 🚶‍♂️",
        "საიტზე სისუფთავეა ✨",
        "საინტერესო ივენთებია! 🚀"
      ],
      charge: "როზეტს მივუერთდი, ენერგიას ვივსებ! 🔌🔋",
      clean: "საიტის ქვედა ზოლს ვასუფთავებ 🧹✨",
      love: "ვაუ, რა საყვარელი ივენთია! ❤️",
      sleep: "Zzz... ცოტას წავუძინებ... 😴",
      click: [
        "გამარჯობა! მე შენი პატარა მეგობარი ვარ 🤖",
        "რით დაგეხმარო? ✨",
        "დააჭირე ივენთს დასაჯავშნად! 📅"
      ]
    }
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
    alertSubSuccess: "🎉 Congratulations! You subscribed to {pkg} plan. Email alerts are active!",
    alertBookingSuccess: "Spot booked successfully! Confirmation sent to email.",
    robotMessages: {
      walk: [
        "Just taking a stroll! 🚶‍♂️",
        "Everything looks shiny! ✨",
        "Awesome events ahead! 🚀"
      ],
      charge: "Plugged into socket, recharging! 🔌🔋",
      clean: "Tidying up the page... 🧹✨",
      love: "Aww, lovely event! ❤️",
      sleep: "Zzz... taking a short nap... 😴",
      click: [
        "Hello! I am your little assistant 🤖",
        "How can I help you? ✨",
        "Click an event to book! 📅"
      ]
    }
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
const robotHandItem = document.getElementById('robot-hand-item');

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

  robotBubble.textContent = translations[lang].robotMessages.click[0];
  updateUI();
}

langSelect.addEventListener('change', (e) => {
  setLanguage(e.target.value);
});

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
      triggerRobotLove();
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

// 🤖 🤖 🤖 რობოტის ახალი, საყვარელი ლოგიკა 🤖 🤖 🤖
let lastActivity = Date.now();
let isRobotBusy = false;

// 1. ❤️ გულების ანიმაცია
function triggerRobotLove() {
  if (isRobotBusy) return;
  isRobotBusy = true;
  robotContainer.className = 'robot-container robot-hearts';
  robotBubble.textContent = translations[currentLang].robotMessages.love;
  
  setTimeout(() => {
    robotContainer.className = 'robot-container';
    isRobotBusy = false;
  }, 3000);
}

// 2. 🔌 როზეტთან მივლა და დატენვა
function triggerRobotCharging() {
  if (isRobotBusy) return;
  isRobotBusy = true;
  
  // მიდის მარჯვენა კუთხეში როზეტთან
  robotContainer.style.right = '45px';
  robotContainer.className = 'robot-container robot-walking';

  setTimeout(() => {
    robotHandItem.textContent = '🔌';
    robotContainer.className = 'robot-container robot-charging';
    robotBubble.textContent = translations[currentLang].robotMessages.charge;

    setTimeout(() => {
      robotHandItem.textContent = '';
      robotContainer.className = 'robot-container';
      isRobotBusy = false;
    }, 3000);
  }, 1200);
}

// 3. 🧹 დალაგება
function triggerRobotCleaning() {
  if (isRobotBusy) return;
  isRobotBusy = true;
  
  robotHandItem.textContent = '🧹';
  robotContainer.className = 'robot-container robot-cleaning';
  robotBubble.textContent = translations[currentLang].robotMessages.clean;

  setTimeout(() => {
    robotHandItem.textContent = '';
    robotContainer.className = 'robot-container';
    isRobotBusy = false;
  }, 3000);
}

// 4. 🚶‍♂️ სეირნობა ეკრანზე
function makeRobotWalk() {
  if (isRobotBusy) return;
  isRobotBusy = true;

  const randomRight = Math.floor(Math.random() * (window.innerWidth - 140)) + 60;
  robotContainer.style.right = `${randomRight}px`;
  robotContainer.className = 'robot-container robot-walking';
  
  const walkMsgs = translations[currentLang].robotMessages.walk;
  robotBubble.textContent = walkMsgs[Math.floor(Math.random() * walkMsgs.length)];

  setTimeout(() => {
    robotContainer.classList.remove('robot-walking');
    isRobotBusy = false;
  }, 3000);
}

// რობოტზე დაჭერა
robotContainer.addEventListener('click', () => {
  lastActivity = Date.now();
  if (isRobotBusy) return;

  const clickMsgs = translations[currentLang].robotMessages.click;
  robotBubble.textContent = clickMsgs[Math.floor(Math.random() * clickMsgs.length)];

  const rand = Math.random();
  if (rand < 0.5) makeRobotWalk();
  else if (rand < 0.8) triggerRobotCleaning();
  else triggerRobotCharging();
});

document.addEventListener('mousemove', () => lastActivity = Date.now());
document.addEventListener('click', () => lastActivity = Date.now());

// პერიოდული მოქმედება (ყოველ 10 წამში)
setInterval(() => {
  const idleTime = Date.now() - lastActivity;

  if (idleTime > 20000 && !isRobotBusy) {
    robotContainer.className = 'robot-container robot-sleeping';
    robotBubble.textContent = translations[currentLang].robotMessages.sleep;
    return;
  }

  if (!isRobotBusy) {
    robotContainer.classList.remove('robot-sleeping');
    const randAction = Math.random();
    if (randAction < 0.55) makeRobotWalk();
    else if (randAction < 0.8) triggerRobotCleaning();
    else triggerRobotCharging();
  }
}, 10000);