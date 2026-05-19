// ======================================================
//  Інтерактивні елементи сайту "Подорож мрії — Японія"
// ======================================================

// ----- 1. Кнопка з привітанням на головній -----
const changeColorBtn = document.getElementById('changeColorBtn');
const welcomeMessage = document.getElementById('welcomeMessage');

if (changeColorBtn && welcomeMessage) {
    // Палітра кольорів для градієнту героя
    const palettes = [
        'linear-gradient(135deg, #d63384 0%, #ff6b9d 100%)', // рожевий
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // фіолетовий
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // персиковий
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // блакитний
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'  // захід сонця
    ];
    let paletteIndex = 0;

    const messages = [
        'Йоукосо! Ласкаво просимо до подорожі мрії! 🎌',
        'Конічіва! Готові до пригод? 🗾',
        'Аріґато за відвідування! 🌸',
        'Японія чекає на вас! 🏯',
        'Прокидайтеся з мріями і робіть їх реальністю! ✨'
    ];

    changeColorBtn.addEventListener('click', () => {
        // Зміна фону героя
        const hero = document.querySelector('.hero');
        paletteIndex = (paletteIndex + 1) % palettes.length;
        hero.style.background = palettes[paletteIndex];

        // Показ і зміна повідомлення
        welcomeMessage.textContent = messages[paletteIndex];
        welcomeMessage.classList.remove('hidden');
        welcomeMessage.classList.add('show');

        // Анімація кнопки
        changeColorBtn.textContent = 'Ще раз! 🎨';
    });
}

// ----- 2. Випадаючий список міст на сторінці "Про Японію" -----
const citySelect = document.getElementById('citySelect');
const cityInfo = document.getElementById('cityInfo');

if (citySelect && cityInfo) {
    const cityData = {
        tokyo: {
            title: '🏙️ Токіо',
            text: 'Столиця Японії та одне з найбільших мегаполісів світу. Тут понад 13 млн мешканців. Не пропустіть район Шибуя зі знаменитим перехрестям, Акіхабару — рай для любителів аніме й електроніки, та древній храм Сенсо-дзі в Асакусі.'
        },
        kyoto: {
            title: '⛩️ Кіото',
            text: 'Стародавня столиця Японії з понад 1600 буддійськими храмами та 400 синтоїстськими святилищами. Тут знаходяться знаменитий Золотий Павільйон (Кінкаку-дзі), бамбуковий ліс Арашіяма та район гейш Гіон.'
        },
        osaka: {
            title: '🍜 Осака',
            text: 'Гастрономічна столиця Японії — місто, відоме своєю кухнею. Тут обов\'язково треба спробувати такоякі (кульки з восьминогом), окономіякі та кушікацу. Замок Осаки — один із найвідоміших у країні.'
        },
        hiroshima: {
            title: '🕊️ Хіросіма',
            text: 'Місто з трагічною історією, яке стало символом миру. Меморіальний парк миру та Атомний купол нагадують про події 1945 року. Поруч знаходиться острів Міядзіма зі знаменитою "плавучою" торії.'
        }
    };

    citySelect.addEventListener('change', (e) => {
        const value = e.target.value;
        if (value && cityData[value]) {
            const city = cityData[value];
            cityInfo.innerHTML = `<h4>${city.title}</h4><p>${city.text}</p>`;
            cityInfo.classList.add('show');
        } else {
            cityInfo.classList.remove('show');
            cityInfo.innerHTML = '';
        }
    });
}

// ----- 3. Обробка форми зворотного зв'язку -----
const contactForm = document.getElementById('contactForm');
const formResult = document.getElementById('formResult');

if (contactForm && formResult) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Збираємо значення
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const country = document.getElementById('country').value;
        const message = document.getElementById('message').value.trim();

        // Проста валідація
        if (!name || !email || !message) {
            formResult.textContent = '⚠️ Будь ласка, заповніть усі обов\'язкові поля.';
            formResult.classList.remove('hidden');
            formResult.classList.add('error');
            return;
        }

        // Проста перевірка email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formResult.textContent = '⚠️ Будь ласка, введіть коректну email-адресу.';
            formResult.classList.remove('hidden');
            formResult.classList.add('error');
            return;
        }

        // "Надсилання" (в реальності — без бекенду)
        const countryNames = {
            japan: 'Японію',
            iceland: 'Ісландію',
            italy: 'Італію',
            newzealand: 'Нову Зеландію',
            other: 'іншу країну'
        };

        let successText = `✅ Дякую, ${name}! Ваше повідомлення отримано.`;
        if (country && countryNames[country]) {
            successText += ` Чудовий вибір — ${countryNames[country]}!`;
        }
        successText += ' Я відповім вам найближчим часом. 🌸';

        formResult.textContent = successText;
        formResult.classList.remove('hidden', 'error');

        // Очищаємо форму
        contactForm.reset();
    });
}

// ----- 4. Привітання у консолі (для розробника) -----
console.log('%c🌸 Йоукосо! Ласкаво просимо!', 'color: #d63384; font-size: 18px; font-weight: bold;');
console.log('Сайт "Подорож мрії — Японія" завантажено успішно.');
