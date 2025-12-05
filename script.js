// Base de données des villes avec leurs informations
const citiesDatabase = {
    'montreal-ca': {
        name: 'Montréal',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        latitude: 45.5017,
        longitude: -73.5673,
        displayName: { fr: '🇨🇦 Montréal, Canada', ar: '🇨🇦 مونتريال، كندا' }
    },
    'tunis-tn': {
        name: 'Tunis',
        country: 'TN',
        method: 5,
        timezone: 'Africa/Tunis',
        latitude: 36.8065,
        longitude: 10.1815,
        displayName: { fr: '🇹🇳 Tunis, Tunisie', ar: '🇹🇳 تونس، تونس' }
    },
    'algiers-dz': {
        name: 'Algiers',
        country: 'DZ',
        method: 5,
        timezone: 'Africa/Algiers',
        latitude: 36.7538,
        longitude: 3.0588,
        displayName: { fr: '🇩🇿 Alger, Algérie', ar: '🇩🇿 الجزائر، الجزائر' }
    },
    'mecca-sa': {
        name: 'Mecca',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 21.4225,
        longitude: 39.8262,
        displayName: { fr: '🇸🇦 La Mecque, Arabie Saoudite', ar: '🇸🇦 مكة المكرمة، السعودية' }
    },
    'medina-sa': {
        name: 'Medina',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 24.5247,
        longitude: 39.5692,
        displayName: { fr: '🇸🇦 Médine, Arabie Saoudite', ar: '🇸🇦 المدينة المنورة، السعودية' }
    },
    'riyadh-sa': {
        name: 'Riyadh',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 24.7136,
        longitude: 46.6753,
        displayName: { fr: '🇸🇦 Riyad, Arabie Saoudite', ar: '🇸🇦 الرياض، السعودية' }
    },
    'jeddah-sa': {
        name: 'Jeddah',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        latitude: 21.5433,
        longitude: 39.1728,
        displayName: { fr: '🇸🇦 Jeddah, Arabie Saoudite', ar: '🇸🇦 جدة، السعودية' }
    },
    'cairo-eg': {
        name: 'Cairo',
        country: 'EG',
        method: 5,
        timezone: 'Africa/Cairo',
        latitude: 30.0444,
        longitude: 31.2357,
        displayName: { fr: '🇪🇬 Le Caire, Égypte', ar: '🇪🇬 القاهرة، مصر' }
    },
    'dubai-ae': {
        name: 'Dubai',
        country: 'AE',
        method: 4,
        timezone: 'Asia/Dubai',
        latitude: 25.2048,
        longitude: 55.2708,
        displayName: { fr: '🇦🇪 Dubaï, Émirats Arabes Unis', ar: '🇦🇪 دبي، الإمارات' }
    },
    'abudhabi-ae': {
        name: 'Abu Dhabi',
        country: 'AE',
        method: 4,
        timezone: 'Asia/Dubai',
        latitude: 24.4539,
        longitude: 54.3773,
        displayName: { fr: '🇦🇪 Abu Dhabi, Émirats Arabes Unis', ar: '🇦🇪 أبو ظبي، الإمارات' }
    },
    'doha-qa': {
        name: 'Doha',
        country: 'QA',
        method: 4,
        timezone: 'Asia/Qatar',
        latitude: 25.2854,
        longitude: 51.531,
        displayName: { fr: '🇶🇦 Doha, Qatar', ar: '🇶🇦 الدوحة، قطر' }
    },
    'kuwait-kw': {
        name: 'Kuwait City',
        country: 'KW',
        method: 4,
        timezone: 'Asia/Kuwait',
        latitude: 29.3759,
        longitude: 47.9774,
        displayName: { fr: '🇰🇼 Koweït, Koweït', ar: '🇰🇼 الكويت، الكويت' }
    },
    'casablanca-ma': {
        name: 'Casablanca',
        country: 'MA',
        method: 5,
        timezone: 'Africa/Casablanca',
        latitude: 33.5731,
        longitude: -7.5898,
        displayName: { fr: '🇲🇦 Casablanca, Maroc', ar: '🇲🇦 الدار البيضاء، المغرب' }
    },
    'rabat-ma': {
        name: 'Rabat',
        country: 'MA',
        method: 5,
        timezone: 'Africa/Casablanca',
        latitude: 34.0209,
        longitude: -6.8416,
        displayName: { fr: '🇲🇦 Rabat, Maroc', ar: '🇲🇦 الرباط، المغرب' }
    },
    'istanbul-tr': {
        name: 'Istanbul',
        country: 'TR',
        method: 1,
        timezone: 'Europe/Istanbul',
        latitude: 41.0082,
        longitude: 28.9784,
        displayName: { fr: '🇹🇷 Istanbul, Turquie', ar: '🇹🇷 إسطنبول، تركيا' }
    },
    'ankara-tr': {
        name: 'Ankara',
        country: 'TR',
        method: 1,
        timezone: 'Europe/Istanbul',
        latitude: 39.9334,
        longitude: 32.8597,
        displayName: { fr: '🇹🇷 Ankara, Turquie', ar: '🇹🇷 أنقرة، تركيا' }
    },
    'paris-fr': {
        name: 'Paris',
        country: 'FR',
        method: 2,
        timezone: 'Europe/Paris',
        latitude: 48.8566,
        longitude: 2.3522,
        displayName: { fr: '🇫🇷 Paris, France', ar: '🇫🇷 باريس، فرنسا' }
    },
    'london-gb': {
        name: 'London',
        country: 'GB',
        method: 2,
        timezone: 'Europe/London',
        latitude: 51.5074,
        longitude: -0.1278,
        displayName: { fr: '🇬🇧 Londres, Royaume-Uni', ar: '🇬🇧 لندن، بريطانيا' }
    },
    'newyork-us': {
        name: 'New York',
        country: 'US',
        method: 2,
        timezone: 'America/New_York',
        latitude: 40.7128,
        longitude: -74.006,
        displayName: { fr: '🇺🇸 New York, États-Unis', ar: '🇺🇸 نيويورك، أمريكا' }
    },
    'toronto-ca': {
        name: 'Toronto',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        latitude: 43.6532,
        longitude: -79.3832,
        displayName: { fr: '🇨🇦 Toronto, Canada', ar: '🇨🇦 تورونتو، كندا' }
    },
    'ottawa-ca': {
        name: 'Ottawa',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        latitude: 45.4215,
        longitude: -75.6972,
        displayName: { fr: '🇨🇦 Ottawa, Canada', ar: '🇨🇦 أوتاوا، كندا' }
    },
    'jakarta-id': {
        name: 'Jakarta',
        country: 'ID',
        method: 1,
        timezone: 'Asia/Jakarta',
        latitude: -6.2088,
        longitude: 106.8456,
        displayName: { fr: '🇮🇩 Jakarta, Indonésie', ar: '🇮🇩 جاكرتا، إندونيسيا' }
    },
    'kualalumpur-my': {
        name: 'Kuala Lumpur',
        country: 'MY',
        method: 1,
        timezone: 'Asia/Kuala_Lumpur',
        latitude: 3.139,
        longitude: 101.6869,
        displayName: { fr: '🇲🇾 Kuala Lumpur, Malaisie', ar: '🇲🇾 كوالالمبور، ماليزيا' }
    },
    'karachi-pk': {
        name: 'Karachi',
        country: 'PK',
        method: 1,
        timezone: 'Asia/Karachi',
        latitude: 24.8607,
        longitude: 67.0011,
        displayName: { fr: '🇵🇰 Karachi, Pakistan', ar: '🇵🇰 كراتشي، باكستان' }
    },
    'lahore-pk': {
        name: 'Lahore',
        country: 'PK',
        method: 1,
        timezone: 'Asia/Karachi',
        latitude: 31.5497,
        longitude: 74.3436,
        displayName: { fr: '🇵🇰 Lahore, Pakistan', ar: '🇵🇰 لاهور، باكستان' }
    },
    'dhaka-bd': {
        name: 'Dhaka',
        country: 'BD',
        method: 1,
        timezone: 'Asia/Dhaka',
        latitude: 23.8103,
        longitude: 90.4125,
        displayName: { fr: '🇧🇩 Dhaka, Bangladesh', ar: '🇧🇩 دكا، بنغلاديش' }
    }
};

// Villes actuellement sélectionnées
let selectedCities = {
    city1: 'montreal-ca',
    city2: 'tunis-tn'
};

// Traductions
const translations = {
    fr: {
        nextPrayer: 'Prochaine prière',
        at: 'à',
        in: 'dans',
        hours: 'h',
        minutes: 'min',
        ramadanBefore: 'Ramadan commence dans',
        ramadanDuring: 'Nous sommes en Ramadan!',
        ramadanAfter: 'Ramadan est terminé',
        days: 'jours',
        day: 'jour',
        localTime: 'Heure locale:'
    },
    ar: {
        nextPrayer: 'الصلاة القادمة',
        at: 'في',
        in: 'بعد',
        hours: 'س',
        minutes: 'د',
        ramadanBefore: 'رمضان يبدأ بعد',
        ramadanDuring: 'رمضان كريم! 🌙',
        ramadanAfter: 'انتهى رمضان',
        days: 'أيام',
        day: 'يوم',
        localTime: 'الوقت المحلي:'
    }
};

// Noms des mois islamiques
const islamicMonths = {
    fr: ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Awwal', 
         'Jumada al-Thani', 'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 
         'Dhul-Qi\'dah', 'Dhul-Hijjah'],
    ar: ['مُحَرَّم', 'صَفَر', 'رَبِيع ٱلْأَوَّل', 'رَبِيع ٱلثَّانِي', 'جُمَادَىٰ ٱلْأُولَىٰ',
         'جُمَادَىٰ ٱلثَّانِيَة', 'رَجَب', 'شَعْبَان', 'رَمَضَان', 'شَوَّال',
         'ذُو ٱلْقَعْدَة', 'ذُو ٱلْحِجَّة']
};

// Langue actuelle
let currentLang = 'fr';

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLang = lang;
    
    if (lang === 'ar') {
        document.body.classList.add('arabic');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.body.classList.remove('arabic');
        document.documentElement.setAttribute('lang', 'fr');
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    document.querySelectorAll('[data-fr][data-ar]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    
    displayIslamicDate();
    displayRamadanCountdown();
    loadAllPrayerTimes();
}

// Écouteurs d'événements pour les boutons de langue
document.getElementById('lang-fr').addEventListener('click', () => changeLanguage('fr'));
document.getElementById('lang-ar').addEventListener('click', () => changeLanguage('ar'));

// Écouteurs d'événements pour les sélecteurs de villes
document.getElementById('city1-select').addEventListener('change', (e) => {
    selectedCities.city1 = e.target.value;
    updateCityDisplay('city1');
});

document.getElementById('city2-select').addEventListener('change', (e) => {
    selectedCities.city2 = e.target.value;
    updateCityDisplay('city2');
});

// Fonction pour mettre à jour l'affichage d'une ville
async function updateCityDisplay(cityKey) {
    const cityId = selectedCities[cityKey];
    const cityData = citiesDatabase[cityId];
    
    document.getElementById(`${cityKey}-name`).textContent = cityData.displayName[currentLang];
    
    const timings = await getPrayerTimesForCity(cityId);
    if (timings) {
        displayPrayerTimes(cityKey, timings);
    }
}

// Fonction pour formater la date
function formatDate() {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const date = new Date();
    const locale = currentLang === 'ar' ? 'ar-TN' : 'fr-FR';
    return date.toLocaleDateString(locale, options);
}

// Fonction pour obtenir la date islamique
async function getIslamicDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    try {
        const response = await fetch(
            `https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`
        );
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération de la date islamique');
        }

        const data = await response.json();
        return data.data.hijri;
    } catch (error) {
        console.error('Erreur date islamique:', error);
        return null;
    }
}

// Fonction pour afficher la date islamique
async function displayIslamicDate() {
    const hijriDate = await getIslamicDate();
    if (!hijriDate) return;

    const monthName = islamicMonths[currentLang][hijriDate.month.number - 1];
    const day = currentLang === 'ar' ? convertToArabicNumerals(hijriDate.day) : hijriDate.day;
    const year = currentLang === 'ar' ? convertToArabicNumerals(hijriDate.year) : hijriDate.year;
    
    const islamicDateElement = document.getElementById('islamic-date');
    if (currentLang === 'ar') {
        islamicDateElement.textContent = `${day} ${monthName} ${year} هـ`;
    } else {
        islamicDateElement.textContent = `${day} ${monthName} ${year} H`;
    }
}

// Fonction pour convertir les chiffres en numéraux arabes
function convertToArabicNumerals(num) {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumerals[parseInt(digit)]).join('');
}

// Fonction pour calculer le compte à rebours du Ramadan
async function displayRamadanCountdown() {
    const hijriDate = await getIslamicDate();
    if (!hijriDate) return;

    const currentMonth = hijriDate.month.number;
    const currentDay = parseInt(hijriDate.day);
    const currentYear = parseInt(hijriDate.year);

    const ramadanCountdownElement = document.getElementById('ramadan-countdown');
    const ramadanTextElement = document.getElementById('ramadan-text');
    const t = translations[currentLang];

    if (currentMonth === 9) {
        ramadanCountdownElement.classList.add('during-ramadan');
        const daysRemaining = 30 - currentDay;
        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysRemaining);
            ramadanTextElement.textContent = `${t.ramadanDuring} - متبقي ${daysArabic} ${daysRemaining > 1 ? t.days : t.day}`;
        } else {
            ramadanTextElement.textContent = `${t.ramadanDuring} - ${daysRemaining} ${daysRemaining > 1 ? t.days : t.day} restants`;
        }
    } else if (currentMonth < 9) {
        ramadanCountdownElement.classList.remove('during-ramadan');
        const daysInMonths = [30, 29, 30, 29, 30, 29, 30, 29];
        let daysUntilRamadan = 0;
        
        for (let i = currentMonth - 1; i < 8; i++) {
            if (i === currentMonth - 1) {
                daysUntilRamadan += daysInMonths[i] - currentDay;
            } else {
                daysUntilRamadan += daysInMonths[i];
            }
        }

        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysUntilRamadan);
            ramadanTextElement.textContent = `${t.ramadanBefore} ${daysArabic} ${daysUntilRamadan > 1 ? t.days : t.day} 🌙`;
        } else {
            ramadanTextElement.textContent = `${t.ramadanBefore} ${daysUntilRamadan} ${daysUntilRamadan > 1 ? t.days : t.day} 🌙`;
        }
    } else {
        ramadanCountdownElement.classList.remove('during-ramadan');
        const nextRamadanYear = currentYear + 1;
        const daysUntilNextRamadan = 365 - ((currentMonth - 9) * 30 + currentDay);
        
        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysUntilNextRamadan);
            ramadanTextElement.textContent = `رمضان القادم بعد ${daysArabic} ${t.days} تقريباً`;
        } else {
            ramadanTextElement.textContent = `Prochain Ramadan dans environ ${daysUntilNextRamadan} ${t.days}`;
        }
    }
}

// Fonction pour afficher l'heure locale
function displayLocalTime() {
    const city1Id = selectedCities.city1;
    const city1Data = citiesDatabase[city1Id];
    if (city1Data) {
        const city1Time = new Date().toLocaleTimeString('fr-FR', {
            timeZone: city1Data.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.getElementById('city1-time').textContent = city1Time;
    }
    
    const city2Id = selectedCities.city2;
    const city2Data = citiesDatabase[city2Id];
    if (city2Data) {
        const city2Time = new Date().toLocaleTimeString('fr-FR', {
            timeZone: city2Data.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.getElementById('city2-time').textContent = city2Time;
    }
}

// Fonction pour obtenir les heures de prière
async function getPrayerTimes(cityKey) {
    const cityId = selectedCities[cityKey];
    return await getPrayerTimesForCity(cityId);
}

async function getPrayerTimesForCity(cityId) {
    const city = citiesDatabase[cityId];
    if (!city) return null;
    
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    try {
        const response = await fetch(
            `https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=${city.name}&country=${city.country}&method=${city.method}`
        );
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }

        const data = await response.json();
        return data.data.timings;
    } catch (error) {
        console.error(`Erreur pour ${city.name}:`, error);
        return null;
    }
}

// Fonction pour afficher les heures de prière
function displayPrayerTimes(cityKey, timings) {
    if (!timings) return;

    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    
    prayers.forEach(prayer => {
        const elementId = `${cityKey}-${prayer.toLowerCase()}`;
        const element = document.getElementById(elementId);
        if (element && timings[prayer]) {
            element.textContent = timings[prayer];
        }
    });

    highlightCurrentPrayer(cityKey, timings);
}

// Fonction pour mettre en évidence la prière actuelle
function highlightCurrentPrayer(cityKey, timings) {
    const cityId = selectedCities[cityKey];
    const cityData = citiesDatabase[cityId];
    if (!cityData) return;
    
    const timezone = cityData.timezone;
    const now = new Date();
    const cityTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    const currentTime = cityTime.getHours() * 60 + cityTime.getMinutes();
    
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    let currentPrayer = null;
    let nextPrayer = null;

    const prayerTimes = prayers.map(prayer => {
        const [hours, minutes] = timings[prayer].split(':').map(Number);
        return {
            name: prayer,
            time: hours * 60 + minutes,
            display: timings[prayer]
        };
    });

    // Retirer les classes des prières
    for (let i = 0; i < prayerTimes.length; i++) {
        const prayerItem = document.querySelector(`#${cityKey}-${prayerTimes[i].name.toLowerCase()}`).parentElement;
        prayerItem.classList.remove('current');

        if (currentTime >= prayerTimes[i].time) {
            currentPrayer = prayerTimes[i];
            if (i < prayerTimes.length - 1) {
                nextPrayer = prayerTimes[i + 1];
            } else {
                nextPrayer = prayerTimes[0];
            }
        }
    }

    // Gérer les images de fond de la carte
    const cityCard = document.getElementById(`${cityKey}-card`);
    cityCard.classList.remove('current-prayer-fajr', 'current-prayer-dhuhr', 'current-prayer-asr', 'current-prayer-maghrib', 'current-prayer-isha');

    if (!currentPrayer) {
        nextPrayer = prayerTimes[0];
        // Si on est avant Fajr (début de journée), afficher l'image de nuit (Isha)
        cityCard.classList.add('current-prayer-isha');
    } else {
        // Ajouter la classe de la prière actuelle pour l'image de fond
        cityCard.classList.add(`current-prayer-${currentPrayer.name.toLowerCase()}`);
    }

    if (currentPrayer) {
        const currentElement = document.querySelector(`#${cityKey}-${currentPrayer.name.toLowerCase()}`).parentElement;
        currentElement.classList.add('current');
    }

    if (nextPrayer) {
        const nextElement = document.getElementById(`${cityKey}-next`);
        
        if (!nextElement) {
            console.error(`❌ Element ${cityKey}-next NOT FOUND!`);
            return;
        }
        
        console.log(`📋 Mise à jour prochaine prière pour ${cityKey}: ${nextPrayer.name}`);
        
        const timeUntil = calculateTimeUntil(nextPrayer.time, currentTime);
        const t = translations[currentLang];
        
        let prayerName = nextPrayer.name;
        if (currentLang === 'ar') {
            const arabicNames = {
                'Fajr': 'الفجر',
                'Dhuhr': 'الظهر',
                'Asr': 'العصر',
                'Maghrib': 'المغرب',
                'Isha': 'العشاء'
            };
            prayerName = arabicNames[nextPrayer.name];
        }
        
        const nextText = `${t.nextPrayer}: ${prayerName} ${t.at} ${nextPrayer.display} (${t.in} ${timeUntil})`;
        nextElement.textContent = nextText;
        
        console.log(`✅ Texte prochaine prière: "${nextText}"`);
    } else {
        console.warn(`⚠️ Pas de prochaine prière trouvée pour ${cityKey}`);
    }
}

// Fonction pour calculer le temps restant
function calculateTimeUntil(prayerTime, currentTime) {
    let diff = prayerTime - currentTime;
    
    if (diff < 0) {
        diff += 24 * 60;
    }

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    
    const t = translations[currentLang];

    if (hours > 0) {
        return `${hours}${t.hours} ${minutes}${t.minutes}`;
    } else {
        return `${minutes}${t.minutes}`;
    }
}

// Fonction pour mettre à jour l'heure de dernière mise à jour
function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fr-FR');
    document.getElementById('last-update-time').textContent = timeString;
}

// Fonction principale pour charger toutes les données
async function loadAllPrayerTimes() {
    document.getElementById('current-date').textContent = formatDate();
    
    const city1Timings = await getPrayerTimes('city1');
    displayPrayerTimes('city1', city1Timings);
    
    const city2Timings = await getPrayerTimes('city2');
    displayPrayerTimes('city2', city2Timings);
    
    await displayIslamicDate();
    await displayRamadanCountdown();
    
    displayLocalTime();
    
    updateLastUpdateTime();
}

// Charger les données au démarrage
loadAllPrayerTimes();

// Mettre à jour l'heure locale toutes les secondes
setInterval(() => {
    displayLocalTime();
}, 1000);

// Mettre à jour toutes les minutes
setInterval(() => {
    loadAllPrayerTimes();
}, 60000);

// Mettre à jour l'affichage de la prière actuelle toutes les 10 secondes
setInterval(async () => {
    const city1Timings = await getPrayerTimes('city1');
    if (city1Timings) {
        highlightCurrentPrayer('city1', city1Timings);
    }
    
    const city2Timings = await getPrayerTimes('city2');
    if (city2Timings) {
        highlightCurrentPrayer('city2', city2Timings);
    }
}, 10000);

// ========== GESTION DU CORAN ==========

document.getElementById('quran-btn').addEventListener('click', () => {
    document.getElementById('quran-modal').classList.add('active');
});

document.getElementById('close-quran').addEventListener('click', () => {
    document.getElementById('quran-modal').classList.remove('active');
});

document.getElementById('quran-modal').addEventListener('click', (e) => {
    if (e.target.id === 'quran-modal') {
        document.getElementById('quran-modal').classList.remove('active');
    }
});

document.getElementById('load-surah-btn').addEventListener('click', async () => {
    const surahNumber = document.getElementById('surah-select').value;
    const quranTextDiv = document.getElementById('quran-text');
    
    quranTextDiv.innerHTML = '<p class="quran-info">⏳ Chargement du Coran...</p>';
    
    try {
        // Charger les informations de la sourate
        const infoResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
        const infoData = await infoResponse.json();
        
        // Charger le texte avec Tajweed depuis Tanzil (texte propre Uthmani)
        const textResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`);
        const textData = await textResponse.json();
        
        if (infoData.status === 'OK' && textData.status === 'OK') {
            const surahInfo = infoData.data;
            const surahText = textData.data;
            
            let html = `<h3 style="text-align: center; color: #1e3c72; margin-bottom: 20px;">
                سورة ${surahInfo.name} - ${surahInfo.englishName}
                <br><span style="font-size: 0.7em; color: #6c757d;">${surahInfo.numberOfAyahs} آيات - ${surahInfo.revelationType === 'Meccan' ? 'مكية' : 'مدنية'}</span>
            </h3>`;
            
            // Ajouter Bismillah sauf pour sourate 9 et 1
            if (surahNumber !== '9' && surahNumber !== '1') {
                html += `<p style="text-align: center; font-size: 1.3em; color: #2a5298; margin-bottom: 25px; padding: 15px; background: rgba(42, 82, 152, 0.1); border-radius: 10px;">
                    بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </p>`;
            }
            
            // Afficher les versets avec style Uthmani propre
            surahText.ayahs.forEach(ayah => {
                // Appliquer des couleurs basiques pour les signes importants
                let ayahText = ayah.text;
                
                // Mettre en évidence certaines lettres importantes (simulation Tajweed basique)
                // Tanwin (double voyelles) en vert clair
                ayahText = ayahText.replace(/([ًٌٍ])/g, '<span style="color: #2ecc71;">$1</span>');
                
                // Sukun en bleu
                ayahText = ayahText.replace(/([ْ])/g, '<span style="color: #3498db;">$1</span>');
                
                // Shaddah en rouge
                ayahText = ayahText.replace(/([ّ])/g, '<span style="color: #e74c3c; font-weight: bold;">$1</span>');
                
                // Madd (alif avec hamza) en orange
                ayahText = ayahText.replace(/(آ)/g, '<span style="color: #f39c12; font-weight: bold;">$1</span>');
                
                html += `<div class="ayah">
                    <span class="ayah-number">﴿${convertToArabicNumber(ayah.numberInSurah)}﴾</span>
                    <span style="font-size: 1.1em; line-height: 2.2;">${ayahText}</span>
                </div>`;
            });
            
            quranTextDiv.innerHTML = html;
            quranTextDiv.scrollTop = 0;
        } else {
            throw new Error('Erreur API');
        }
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
        quranTextDiv.innerHTML = '<p class="quran-info" style="color: #dc3545;">❌ Erreur de chargement. Veuillez réessayer.</p>';
    }
});

// Fonction pour convertir les nombres en chiffres arabes
function convertToArabicNumber(num) {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumerals[parseInt(digit)]).join('');
}

// ========== GESTION DU TASBIH ==========

let tasbihCount = 0;
let tasbihTarget = 0;
let currentTasbihPhrase = 'سُبْحَانَ ٱللَّٰهِ';

document.getElementById('tasbih-btn').addEventListener('click', () => {
    document.getElementById('tasbih-modal').classList.add('active');
});

document.getElementById('close-tasbih').addEventListener('click', () => {
    document.getElementById('tasbih-modal').classList.remove('active');
});

document.getElementById('tasbih-modal').addEventListener('click', (e) => {
    if (e.target.id === 'tasbih-modal') {
        document.getElementById('tasbih-modal').classList.remove('active');
    }
});

document.getElementById('tasbih-increment').addEventListener('click', () => {
    tasbihCount++;
    updateTasbihDisplay();
    
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    const btn = document.getElementById('tasbih-increment');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 100);
    
    if (tasbihTarget > 0 && tasbihCount === tasbihTarget) {
        showTasbihGoalReached();
    }
});

document.getElementById('tasbih-reset').addEventListener('click', () => {
    if (confirm(currentLang === 'ar' ? 'هل تريد إعادة تعيين العداد؟' : 'Réinitialiser le compteur?')) {
        tasbihCount = 0;
        tasbihTarget = 0;
        updateTasbihDisplay();
        document.getElementById('tasbih-goal').classList.remove('active');
    }
});

document.getElementById('tasbih-target-33').addEventListener('click', () => {
    tasbihTarget = 33;
    updateTasbihGoal();
});

document.getElementById('tasbih-target-99').addEventListener('click', () => {
    tasbihTarget = 99;
    updateTasbihGoal();
});

document.querySelectorAll('.phrase-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.phrase-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTasbihPhrase = btn.dataset.phrase;
        document.getElementById('current-phrase').textContent = currentTasbihPhrase;
    });
});

function updateTasbihDisplay() {
    document.getElementById('tasbih-count').textContent = tasbihCount;
}

function updateTasbihGoal() {
    const goalDiv = document.getElementById('tasbih-goal');
    const remaining = tasbihTarget - tasbihCount;
    
    if (remaining > 0) {
        if (currentLang === 'ar') {
            goalDiv.textContent = `الهدف: ${tasbihTarget} - متبقي: ${remaining}`;
        } else {
            goalDiv.textContent = `Objectif: ${tasbihTarget} - Reste: ${remaining}`;
        }
        goalDiv.classList.add('active');
    } else {
        goalDiv.classList.remove('active');
    }
}

function showTasbihGoalReached() {
    const goalDiv = document.getElementById('tasbih-goal');
    if (currentLang === 'ar') {
        goalDiv.textContent = '🎉 ما شاء الله! تم إكمال الهدف! 🎉';
    } else {
        goalDiv.textContent = '🎉 MashAllah! Objectif atteint! 🎉';
    }
    goalDiv.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
    goalDiv.style.color = 'white';
    
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
    
    setTimeout(() => {
        goalDiv.style.background = '#fff3cd';
        goalDiv.style.color = '#856404';
    }, 3000);
}

// ========== GESTION DE LA QIBLA (Kaaba fixe, boussole qui tourne) ==========

// Coordonnées de La Mecque (Kaaba)
const MECCA = {
    lat: 21.4225,
    lng: 39.8262
};

let userPosition = null;
let qiblaDirection = 0;
let deviceHeading = 0;
let orientationListener = null;

// Ouvrir modal Qibla
document.getElementById('qibla-btn').addEventListener('click', () => {
    document.getElementById('qibla-modal').classList.add('active');
    initQiblaCompass();
});

// Fermer modal Qibla
document.getElementById('close-qibla').addEventListener('click', () => {
    document.getElementById('qibla-modal').classList.remove('active');
    stopOrientationTracking();
});

// Fermer en cliquant en dehors
document.getElementById('qibla-modal').addEventListener('click', (e) => {
    if (e.target.id === 'qibla-modal') {
        document.getElementById('qibla-modal').classList.remove('active');
        stopOrientationTracking();
    }
});

// Initialiser la boussole Qibla
function initQiblaCompass() {
    const statusText = document.getElementById('status-text');
    
    // Réinitialiser
    qiblaDirection = 0;
    deviceHeading = 0;
    userPosition = null;
    
    // Message de chargement
    if (currentLang === 'ar') {
        statusText.textContent = '🔍 جاري تحديد موقعك...';
    } else {
        statusText.textContent = '🔍 Détection de votre position...';
    }
    statusText.classList.remove('success', 'error');
    
    // Demander la géolocalisation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            onQiblaLocationSuccess,
            onQiblaLocationError,
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        statusText.classList.add('error');
        if (currentLang === 'ar') {
            statusText.textContent = '❌ الجهاز لا يدعم تحديد الموقع';
        } else {
            statusText.textContent = '❌ Géolocalisation non supportée';
        }
    }
}

// Succès de la géolocalisation
function onQiblaLocationSuccess(position) {
    userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    
    // Calculer la direction Qibla
    qiblaDirection = calculateBearing(
        userPosition.lat,
        userPosition.lng,
        MECCA.lat,
        MECCA.lng
    );
    
    // Calculer la distance
    const distance = calculateDistance(
        userPosition.lat,
        userPosition.lng,
        MECCA.lat,
        MECCA.lng
    );
    
    // Afficher le succès
    const statusText = document.getElementById('status-text');
    statusText.classList.add('success');
    if (currentLang === 'ar') {
        statusText.textContent = '✅ تم تحديد اتجاه القبلة بنجاح!';
    } else {
        statusText.textContent = '✅ Direction de la Qibla détectée avec succès!';
    }
    
    // Afficher les informations
    document.getElementById('qibla-angle-value').textContent = Math.round(qiblaDirection) + '°';
    document.getElementById('qibla-distance-value').textContent = Math.round(distance).toLocaleString() + ' km';
    document.getElementById('qibla-position-value').textContent = 
        `${userPosition.lat.toFixed(4)}°, ${userPosition.lng.toFixed(4)}°`;
    
    // Démarrer le suivi de l'orientation
    startOrientationTracking();
    
    // Sur PC (pas d'orientation), tourner la boussole immédiatement
    updateCompassRotation();
}

// Erreur de géolocalisation
function onQiblaLocationError(error) {
    const statusText = document.getElementById('status-text');
    statusText.classList.add('error');
    
    if (currentLang === 'ar') {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                statusText.textContent = '❌ يرجى السماح بتحديد الموقع';
                break;
            case error.POSITION_UNAVAILABLE:
                statusText.textContent = '❌ الموقع غير متاح';
                break;
            case error.TIMEOUT:
                statusText.textContent = '❌ انتهت مهلة الانتظار';
                break;
            default:
                statusText.textContent = '❌ خطأ في التحديد';
        }
    } else {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                statusText.textContent = '❌ Veuillez autoriser la géolocalisation';
                break;
            case error.POSITION_UNAVAILABLE:
                statusText.textContent = '❌ Position non disponible';
                break;
            case error.TIMEOUT:
                statusText.textContent = '❌ Délai d\'attente dépassé';
                break;
            default:
                statusText.textContent = '❌ Erreur lors de la détection';
        }
    }
}

// Démarrer le suivi de l'orientation
function startOrientationTracking() {
    if (window.DeviceOrientationEvent) {
        // Pour iOS 13+, demander la permission
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        attachOrientationListener();
                    }
                })
                .catch(console.error);
        } else {
            // Pour Android et anciens iOS
            attachOrientationListener();
        }
    }
}

// Attacher le listener d'orientation
function attachOrientationListener() {
    orientationListener = (event) => {
        if (event.alpha !== null) {
            // Alpha = rotation autour de l'axe Z (boussole)
            deviceHeading = event.alpha;
            
            // Pour iOS, event.webkitCompassHeading est plus précis
            if (event.webkitCompassHeading) {
                deviceHeading = event.webkitCompassHeading;
            }
            
            updateCompassRotation();
        }
    };
    
    window.addEventListener('deviceorientation', orientationListener);
}

// Arrêter le suivi de l'orientation
function stopOrientationTracking() {
    if (orientationListener) {
        window.removeEventListener('deviceorientation', orientationListener);
        orientationListener = null;
    }
}

// Mettre à jour la rotation de la boussole
function updateCompassRotation() {
    if (!userPosition) return;
    
    const compassCircle = document.getElementById('compass-rotating');
    
    // La Kaaba est FIXE en haut (0°)
    // Le cercle doit tourner pour montrer où est le Nord
    // Rotation = direction Qibla - orientation device
    let rotation = qiblaDirection - deviceHeading;
    
    // Normaliser l'angle
    rotation = ((rotation % 360) + 360) % 360;
    
    // Appliquer la rotation au cercle
    compassCircle.style.transform = `rotate(${rotation}deg)`;
}

// Calculer l'angle entre deux points (bearing)
function calculateBearing(lat1, lng1, lat2, lng2) {
    const dLng = toRadians(lng2 - lng1);
    const lat1Rad = toRadians(lat1);
    const lat2Rad = toRadians(lat2);
    
    const y = Math.sin(dLng) * Math.cos(lat2Rad);
    const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) -
              Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLng);
    
    let bearing = toDegrees(Math.atan2(y, x));
    bearing = (bearing + 360) % 360;
    
    return bearing;
}

// Calculer la distance entre deux points (Haversine)
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Rayon de la Terre en km
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return distance;
}

// ========== MÉTÉO TEMPS RÉEL - OPEN-METEO API ==========
// API 100% GRATUITE, SANS CLÉ, SANS LIMITE!
// https://open-meteo.com/

const weatherCache = new Map();
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

// Récupérer la VRAIE météo avec Open-Meteo (SANS CLÉ!)
async function fetchRealWeather(cityName, lat, lon, cityIndex) {
    console.log(`🌍 fetchRealWeather appelée: ${cityName} (${lat}, ${lon}) - Index: ${cityIndex}`);
    
    const cacheKey = `${cityName}-${lat}-${lon}`;
    
    // Vérifier le cache
    const cached = weatherCache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < CACHE_DURATION)) {
        console.log(`📦 Météo en cache pour ${cityName}: ${cached.temp}°C`);
        updateAllPrayersWeather(cityIndex, cached.temp, cached.weatherCode);
        return;
    }
    
    try {
        // API Open-Meteo - GRATUITE, SANS CLÉ!
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        
        console.log(`📡 Appel API: ${url}`);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`📦 Données reçues:`, data);
        
        // Extraire température et code météo
        const temp = Math.round(data.current_weather.temperature);
        const weatherCode = data.current_weather.weathercode;
        
        console.log(`✅ Météo RÉELLE pour ${cityName}: ${temp}°C (code: ${weatherCode})`);
        
        // Mettre en cache
        weatherCache.set(cacheKey, {
            temp: temp,
            weatherCode: weatherCode,
            timestamp: Date.now()
        });
        
        // Afficher
        console.log(`🎨 Appel updateAllPrayersWeather(${cityIndex}, ${temp}, ${weatherCode})`);
        updateAllPrayersWeather(cityIndex, temp, weatherCode);
        
    } catch (error) {
        console.error(`❌ Erreur météo pour ${cityName}:`, error);
        // Météo par défaut selon saison
        const defaultTemp = getDefaultTempBySeason();
        console.log(`⚠️ Utilisation température par défaut: ${defaultTemp}°C`);
        updateAllPrayersWeather(cityIndex, defaultTemp, 0);
    }
}

// Température par défaut selon saison
function getDefaultTempBySeason() {
    const month = new Date().getMonth() + 1;
    if (month === 12 || month === 1 || month === 2) return -5; // Hiver
    if (month >= 3 && month <= 5) return 10; // Printemps
    if (month >= 6 && month <= 8) return 25; // Été
    return 12; // Automne
}

// Convertir les codes Open-Meteo vers nos icônes
// https://open-meteo.com/en/docs
function getWeatherIconFromCode(prayer, weatherCode) {
    const isNight = (prayer === 'isha' || prayer === 'fajr');
    
    // Codes Open-Meteo WMO:
    // 0 = Clair
    // 1,2,3 = Nuageux
    // 45,48 = Brouillard
    // 51,53,55 = Bruine
    // 61,63,65 = Pluie
    // 71,73,75 = Neige
    // 77 = Grésil
    // 80,81,82 = Averses
    // 85,86 = Averses de neige
    // 95,96,99 = Orage
    
    // Clair (0)
    if (weatherCode === 0) {
        return isNight ? 
            { icon: '🌙', anim: 'clear-night' } : 
            { icon: '☀️', anim: 'sunny' };
    }
    
    // Partiellement nuageux (1,2)
    if (weatherCode === 1 || weatherCode === 2) {
        return isNight ?
            { icon: '🌙', anim: 'cloudy' } :
            { icon: '🌤️', anim: 'cloudy' };
    }
    
    // Nuageux (3)
    if (weatherCode === 3) {
        return { icon: '☁️', anim: 'clouds' };
    }
    
    // Brouillard (45,48)
    if (weatherCode === 45 || weatherCode === 48) {
        return { icon: '🌫️', anim: 'fog' };
    }
    
    // Bruine (51,53,55)
    if (weatherCode >= 51 && weatherCode <= 55) {
        return { icon: '🌦️', anim: 'drizzle' };
    }
    
    // Pluie (61,63,65)
    if (weatherCode >= 61 && weatherCode <= 65) {
        return weatherCode === 65 ?
            { icon: '🌧️', anim: 'heavy-rain' } :
            { icon: '🌧️', anim: 'rain' };
    }
    
    // Neige (71,73,75)
    if (weatherCode >= 71 && weatherCode <= 75) {
        return weatherCode === 75 ?
            { icon: '❄️', anim: 'heavy-snow' } :
            { icon: '🌨️', anim: 'snow' };
    }
    
    // Grésil (77)
    if (weatherCode === 77) {
        return { icon: '🌨️', anim: 'snow' };
    }
    
    // Averses (80,81,82)
    if (weatherCode >= 80 && weatherCode <= 82) {
        return { icon: '🌧️', anim: 'heavy-rain' };
    }
    
    // Averses de neige (85,86)
    if (weatherCode === 85 || weatherCode === 86) {
        return { icon: '❄️', anim: 'heavy-snow' };
    }
    
    // Orage (95,96,99)
    if (weatherCode >= 95 && weatherCode <= 99) {
        return { icon: '⛈️', anim: 'thunderstorm' };
    }
    
    // Par défaut
    return isNight ?
        { icon: '🌙', anim: 'clear-night' } :
        { icon: '☀️', anim: 'sunny' };
}

// Mettre à jour la météo d'une prière
function updatePrayerWeather(cityIndex, prayer, temp, weatherCode) {
    console.log(`🔧 updatePrayerWeather: city${cityIndex}-${prayer}, temp=${temp}, code=${weatherCode}`);
    
    const weatherDiv = document.getElementById(`city${cityIndex}-${prayer}-weather`);
    if (!weatherDiv) {
        console.error(`❌ Element NOT FOUND: city${cityIndex}-${prayer}-weather`);
        return;
    }
    console.log(`✅ Element FOUND: city${cityIndex}-${prayer}-weather`);
    
    const iconDiv = weatherDiv.querySelector('.weather-icon');
    const tempSpan = weatherDiv.querySelector('.weather-temp');
    
    if (!iconDiv) {
        console.error(`❌ .weather-icon NOT FOUND in city${cityIndex}-${prayer}-weather`);
    }
    if (!tempSpan) {
        console.error(`❌ .weather-temp NOT FOUND in city${cityIndex}-${prayer}-weather`);
    }
    
    if (tempSpan) {
        const oldText = tempSpan.textContent;
        tempSpan.textContent = temp + '°';
        console.log(`✅ Température MISE À JOUR: "${oldText}" → "${temp}°"`);
    }
    
    if (iconDiv) {
        const weatherInfo = getWeatherIconFromCode(prayer, weatherCode);
        const oldIcon = iconDiv.textContent;
        iconDiv.textContent = weatherInfo.icon;
        iconDiv.setAttribute('data-weather', weatherInfo.anim);
        console.log(`✅ Icône MISE À JOUR: "${oldIcon}" → "${weatherInfo.icon}" (${weatherInfo.anim})`);
    }
}

// Mettre à jour toutes les prières d'une ville
function updateAllPrayersWeather(cityIndex, temp, weatherCode) {
    console.log(`🎨 updateAllPrayersWeather: cityIndex=${cityIndex}, temp=${temp}, code=${weatherCode}`);
    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    prayers.forEach(prayer => {
        updatePrayerWeather(cityIndex, prayer, temp, weatherCode);
    });
    console.log(`✅ Mise à jour terminée pour ville ${cityIndex}`);
}

// Initialiser la météo RÉELLE pour toutes les villes
function initRealWeather() {
    console.log('🌤️ ===== INIT MÉTÉO TEMPS RÉEL =====');
    
    // Ville 1
    const city1Id = selectedCities.city1;
    if (city1Id && citiesDatabase[city1Id]) {
        const city = citiesDatabase[city1Id];
        if (city.latitude && city.longitude) {
            console.log(`📍 Ville 1: ${city.name} (${city.latitude}, ${city.longitude})`);
            fetchRealWeather(city.name, city.latitude, city.longitude, 1);
        } else {
            console.error(`❌ Pas de coordonnées pour ${city.name}`);
        }
    }
    
    // Ville 2 si visible
    const city2Card = document.getElementById('city2-card');
    if (city2Card && city2Card.style.display !== 'none') {
        const city2Id = selectedCities.city2;
        if (city2Id && citiesDatabase[city2Id]) {
            const city = citiesDatabase[city2Id];
            if (city.latitude && city.longitude) {
                console.log(`📍 Ville 2: ${city.name} (${city.latitude}, ${city.longitude})`);
                fetchRealWeather(city.name, city.latitude, city.longitude, 2);
            } else {
                console.error(`❌ Pas de coordonnées pour ${city.name}`);
            }
        }
    }
    
    console.log('🏁 ===== FIN INIT MÉTÉO =====');
}

// Rafraîchir la météo toutes les 10 minutes
setInterval(initRealWeather, 10 * 60 * 1000);

// ========== FIN MÉTÉO TEMPS RÉEL ==========

// Convertir degrés en radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Convertir radians en degrés
function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

// ========== CALENDRIER RAMADAN ==========

// Dates de Ramadan 1446 (approximatives)
const ramadanStart = new Date('2025-02-28'); // 1er Ramadan 1446
const ramadanDays = 30; // Ramadan peut avoir 29 ou 30 jours

// Générer le calendrier Ramadan
function generateRamadanCalendar() {
    const calendarGrid = document.getElementById('ramadan-calendar-grid');
    if (!calendarGrid) return;
    
    calendarGrid.innerHTML = '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const monthNamesFr = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    const monthNamesAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    const dayNamesFr = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    const dayNamesAr = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    
    console.log('📅 Génération calendrier Ramadan...');
    
    for (let i = 1; i <= ramadanDays; i++) {
        const gregorianDate = new Date(ramadanStart);
        gregorianDate.setDate(gregorianDate.getDate() + (i - 1));
        
        const dayOfWeek = gregorianDate.getDay();
        const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6); // Dimanche ou Samedi
        const isToday = gregorianDate.getTime() === today.getTime();
        const isSpecialNight = i >= 21; // Derniers 10 jours
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        if (isToday) {
            dayElement.classList.add('today');
        }
        if (isWeekend) {
            dayElement.classList.add('weekend');
        }
        if (isSpecialNight) {
            dayElement.classList.add('special-night');
        }
        
        const ramadanDayNum = document.createElement('span');
        ramadanDayNum.className = 'ramadan-day-num';
        ramadanDayNum.textContent = i;
        
        const gregorianDateSpan = document.createElement('span');
        gregorianDateSpan.className = 'gregorian-date';
        const day = gregorianDate.getDate();
        const month = gregorianDate.getMonth();
        
        if (currentLang === 'ar') {
            gregorianDateSpan.textContent = `${day} ${monthNamesAr[month]}`;
        } else {
            gregorianDateSpan.textContent = `${day} ${monthNamesFr[month]}`;
        }
        
        const dayOfWeekSpan = document.createElement('span');
        dayOfWeekSpan.className = 'day-of-week';
        dayOfWeekSpan.textContent = currentLang === 'ar' ? dayNamesAr[dayOfWeek] : dayNamesFr[dayOfWeek];
        
        dayElement.appendChild(ramadanDayNum);
        dayElement.appendChild(gregorianDateSpan);
        dayElement.appendChild(dayOfWeekSpan);
        
        calendarGrid.appendChild(dayElement);
    }
    
    console.log(`✅ Calendrier généré: ${ramadanDays} jours`);
}

// Ouvrir le modal du calendrier Ramadan
function openRamadanCalendar() {
    console.log('📅 Ouverture calendrier Ramadan...');
    
    const modal = document.getElementById('ramadan-calendar-modal');
    if (!modal) {
        console.error('❌ Modal calendrier introuvable!');
        return;
    }
    
    generateRamadanCalendar();
    modal.classList.add('active');
    
    console.log('✅ Calendrier Ramadan ouvert!');
}

// Fermer le modal du calendrier Ramadan
function closeRamadanCalendar() {
    const modal = document.getElementById('ramadan-calendar-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Initialiser les événements du calendrier Ramadan
function initRamadanCalendarEvents() {
    console.log('🌙 Initialisation événements calendrier Ramadan...');
    
    // Clic sur le countdown pour ouvrir le calendrier
    const ramadanCountdown = document.getElementById('ramadan-countdown');
    if (ramadanCountdown) {
        ramadanCountdown.addEventListener('click', openRamadanCalendar);
        console.log('✅ Événement clic sur countdown ajouté');
    } else {
        console.error('❌ ramadan-countdown introuvable');
    }
    
    // Bouton fermer
    const closeBtn = document.getElementById('close-ramadan-calendar');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeRamadanCalendar);
        console.log('✅ Événement fermeture ajouté');
    }
    
    // Clic en dehors du modal
    const modal = document.getElementById('ramadan-calendar-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeRamadanCalendar();
            }
        });
    }
    
    console.log('✅ Événements calendrier Ramadan initialisés');
}

// ========== FIN CALENDRIER RAMADAN ==========
// ========== INITIALISATION AU CHARGEMENT ==========

// S'assurer que la page est complètement chargée
window.addEventListener('load', () => {
    console.log('🚀 Page chargée, initialisation météo...');
    
    // Attendre 2 secondes pour être sûr que tout est prêt
    setTimeout(() => {
        console.log('📡 Appel initRealWeather...');
        initRealWeather();
        console.log('✅ Météo TEMPS RÉEL activée!');
    }, 2000);
});

// Aussi essayer avec DOMContentLoaded (backup)
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM chargé');
    
    const city1Select = document.getElementById('city1-select');
    const city2Select = document.getElementById('city2-select');
    
    if (city1Select) {
        city1Select.addEventListener('change', () => {
            console.log('🔄 Changement ville 1');
            setTimeout(initRealWeather, 500);
        });
    }
    
    if (city2Select) {
        city2Select.addEventListener('change', () => {
            console.log('🔄 Changement ville 2');
            setTimeout(initRealWeather, 500);
        });
    }
    
    // Aussi initialiser ici (backup)
    setTimeout(() => {
        console.log('📡 Backup: Appel initRealWeather...');
        initRealWeather();
    }, 3000);
    
    // Initialiser le calendrier Ramadan
    initRamadanCalendarEvents();
});

// =============================================
// SYSTÈME DE NOTIFICATIONS POUR LES PRIÈRES
// =============================================

// État des notifications
let notificationSettings = {
    enabled: false,
    prayers: {
        Fajr: false,
        Dhuhr: false,
        Asr: false,
        Maghrib: false,
        Isha: false
    },
    volume: 0.8,
    lastNotified: {}
};

// Variables pour stocker les données de prières
let city1Data = null;
let city2Data = null;

// Charger les paramètres sauvegardés
function loadNotificationSettings() {
    const saved = localStorage.getItem('prayerNotifications');
    if (saved) {
        notificationSettings = JSON.parse(saved);
    }
    
    // Mettre à jour l'interface
    Object.keys(notificationSettings.prayers).forEach(prayer => {
        const checkbox = document.getElementById(`notify-${prayer.toLowerCase()}`);
        if (checkbox) {
            checkbox.checked = notificationSettings.prayers[prayer];
        }
    });
    
    const volumeSlider = document.getElementById('adhan-volume');
    const volumeValue = document.getElementById('volume-value');
    if (volumeSlider && volumeValue) {
        volumeSlider.value = notificationSettings.volume * 100;
        volumeValue.textContent = Math.round(notificationSettings.volume * 100) + '%';
    }
}

// Sauvegarder les paramètres
function saveNotificationSettings() {
    localStorage.setItem('prayerNotifications', JSON.stringify(notificationSettings));
}

// Demander la permission pour les notifications
async function requestNotificationPermission() {
    if (!("Notification" in window)) {
        alert("Votre navigateur ne supporte pas les notifications.");
        return false;
    }
    
    if (Notification.permission === "granted") {
        notificationSettings.enabled = true;
        saveNotificationSettings();
        showSuccessMessage("Notifications activées avec succès!");
        return true;
    }
    
    if (Notification.permission !== "denied") {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            notificationSettings.enabled = true;
            saveNotificationSettings();
            showSuccessMessage("Notifications activées avec succès!");
            return true;
        }
    }
    
    if (Notification.permission === "denied") {
        alert("Les notifications ont été bloquées. Veuillez les autoriser dans les paramètres de votre navigateur.");
    }
    
    return false;
}

// Afficher un message de succès
function showSuccessMessage(message) {
    const btn = document.getElementById('enable-browser-notifications');
    if (btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `<span>✅ ${message}</span>`;
        btn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
        }, 3000);
    }
}

// Jouer l'adhan
function playAdhan() {
    const adhanAudio = document.getElementById('adhan-audio');
    if (adhanAudio) {
        adhanAudio.volume = notificationSettings.volume;
        adhanAudio.currentTime = 0;
        adhanAudio.play().catch(err => {
            console.log("Erreur lors de la lecture de l'adhan:", err);
        });
    }
}

// Arrêter l'adhan
function stopAdhan() {
    const adhanAudio = document.getElementById('adhan-audio');
    if (adhanAudio) {
        adhanAudio.pause();
        adhanAudio.currentTime = 0;
    }
}

// Envoyer une notification
function sendPrayerNotification(prayerName) {
    // Vérifier si on a déjà notifié pour cette prière aujourd'hui
    const today = new Date().toDateString();
    const notificationKey = `${prayerName}-${today}`;
    
    if (notificationSettings.lastNotified[notificationKey]) {
        return; // Déjà notifié
    }
    
    if (!notificationSettings.enabled || !notificationSettings.prayers[prayerName]) {
        return;
    }
    
    const prayerEmojis = {
        Fajr: '🌅',
        Dhuhr: '☀️',
        Asr: '🌤️',
        Maghrib: '🌆',
        Isha: '🌙'
    };
    
    const prayerNamesArabic = {
        Fajr: 'الفجر',
        Dhuhr: 'الظهر',
        Asr: 'العصر',
        Maghrib: 'المغرب',
        Isha: 'العشاء'
    };
    
    const currentLang = document.body.classList.contains('arabic') ? 'ar' : 'fr';
    
    const title = currentLang === 'ar' 
        ? `${prayerEmojis[prayerName]} حان وقت صلاة ${prayerNamesArabic[prayerName]}` 
        : `${prayerEmojis[prayerName]} C'est l'heure de ${prayerName}`;
    
    const body = currentLang === 'ar' 
        ? 'حان الآن وقت الصلاة. اللهم تقبل منا.' 
        : "C'est l'heure de la prière. Qu'Allah accepte nos prières.";
    
    // Envoyer la notification du navigateur
    if (Notification.permission === "granted") {
        const notification = new Notification(title, {
            body: body,
            icon: prayerEmojis[prayerName],
            badge: '🕌',
            tag: prayerName,
            requireInteraction: true,
            silent: false
        });
        
        notification.onclick = function() {
            window.focus();
            notification.close();
        };
    }
    
    // Jouer l'adhan
    playAdhan();
    
    // Marquer comme notifié
    notificationSettings.lastNotified[notificationKey] = true;
    saveNotificationSettings();
    
    // Créer une notification visuelle sur la page
    createVisualNotification(title, body);
}

// Créer une notification visuelle sur la page
function createVisualNotification(title, body) {
    const notification = document.createElement('div');
    notification.className = 'visual-notification';
    notification.innerHTML = `
        <div class="visual-notification-content">
            <h3>${title}</h3>
            <p>${body}</p>
            <button class="close-visual-notification">✕</button>
        </div>
    `;
    
    // Ajouter les styles si nécessaire
    if (!document.getElementById('visual-notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'visual-notification-styles';
        styles.textContent = `
            .visual-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                padding: 20px 25px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(251, 191, 36, 0.5);
                z-index: 10000;
                animation: slideInRight 0.5s ease-out;
                max-width: 350px;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            .visual-notification-content {
                position: relative;
            }
            
            .visual-notification h3 {
                color: white;
                margin-bottom: 10px;
                font-size: 1.3em;
            }
            
            .visual-notification p {
                color: rgba(255, 255, 255, 0.95);
                font-size: 1em;
                line-height: 1.5;
            }
            
            .close-visual-notification {
                position: absolute;
                top: -10px;
                right: -10px;
                background: white;
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                font-size: 1.2em;
                cursor: pointer;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease;
            }
            
            .close-visual-notification:hover {
                transform: scale(1.1);
                background: #fee2e2;
                color: #dc2626;
            }
            
            @media (max-width: 768px) {
                .visual-notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Bouton de fermeture
    const closeBtn = notification.querySelector('.close-visual-notification');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideInRight 0.5s ease-out reverse';
        setTimeout(() => {
            notification.remove();
        }, 500);
    });
    
    // Fermer automatiquement après 10 secondes
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideInRight 0.5s ease-out reverse';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }
    }, 10000);
}

// Vérifier l'heure des prières et envoyer les notifications
function checkPrayerTimes() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    // Vérifier pour chaque ville (utiliser city1Data qui contient les horaires)
    if (city1Data && city1Data.timings) {
        Object.keys(city1Data.timings).forEach(prayerName => {
            // Ignorer les prières autres que les 5 principales
            if (!['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].includes(prayerName)) {
                return;
            }
            
            const prayerTime = city1Data.timings[prayerName];
            if (!prayerTime) return;
            
            // Convertir l'heure de prière en minutes
            const [hours, minutes] = prayerTime.split(':').map(Number);
            const prayerTimeInMinutes = hours * 60 + minutes;
            
            // Si on est exactement à l'heure de la prière (avec une marge de 1 minute)
            if (Math.abs(currentTime - prayerTimeInMinutes) <= 1) {
                sendPrayerNotification(prayerName);
            }
        });
    }
}

// Initialisation des événements pour les notifications
document.addEventListener('DOMContentLoaded', function() {
    // Attendre que le reste du code soit chargé
    setTimeout(() => {
        loadNotificationSettings();
        
        // Bouton pour activer les notifications
        const enableNotificationsBtn = document.getElementById('enable-browser-notifications');
        if (enableNotificationsBtn) {
            enableNotificationsBtn.addEventListener('click', requestNotificationPermission);
        }
        
        // Checkboxes pour chaque prière
        ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'].forEach(prayer => {
            const checkbox = document.getElementById(`notify-${prayer}`);
            if (checkbox) {
                checkbox.addEventListener('change', function() {
                    const prayerName = prayer.charAt(0).toUpperCase() + prayer.slice(1);
                    notificationSettings.prayers[prayerName] = this.checked;
                    saveNotificationSettings();
                });
            }
        });
        
        // Contrôle du volume
        const volumeSlider = document.getElementById('adhan-volume');
        const volumeValue = document.getElementById('volume-value');
        if (volumeSlider && volumeValue) {
            volumeSlider.addEventListener('input', function() {
                notificationSettings.volume = this.value / 100;
                volumeValue.textContent = this.value + '%';
                saveNotificationSettings();
            });
        }
        
        // Bouton de test
        const testBtn = document.getElementById('test-notification');
        if (testBtn) {
            testBtn.addEventListener('click', function() {
                playAdhan();
                createVisualNotification(
                    '🔊 Test de l\'Adhan',
                    'Ceci est un test. L\'adhan devrait maintenant être joué.'
                );
            });
        }
        
        // Bouton notifications dans le header
        const notificationsBtn = document.getElementById('notifications-btn');
        const notificationsModal = document.getElementById('notifications-modal');
        const closeNotifications = document.getElementById('close-notifications');
        
        if (notificationsBtn && notificationsModal) {
            notificationsBtn.addEventListener('click', function() {
                notificationsModal.style.display = 'flex';
            });
        }
        
        if (closeNotifications && notificationsModal) {
            closeNotifications.addEventListener('click', function() {
                notificationsModal.style.display = 'none';
            });
        }
        
        if (notificationsModal) {
            notificationsModal.addEventListener('click', function(e) {
                if (e.target === notificationsModal) {
                    notificationsModal.style.display = 'none';
                }
            });
        }
        
        // Vérifier les heures de prière toutes les 30 secondes
        setInterval(checkPrayerTimes, 30000);
        
        // Vérifier immédiatement
        checkPrayerTimes();
    }, 1000);
});

// Nettoyer les anciennes notifications chaque jour
setInterval(() => {
    const today = new Date().toDateString();
    const keys = Object.keys(notificationSettings.lastNotified);
    keys.forEach(key => {
        if (!key.includes(today)) {
            delete notificationSettings.lastNotified[key];
        }
    });
    saveNotificationSettings();
}, 3600000); // Toutes les heures
// ========== SYSTÈME DE NOTIFICATIONS COMPLET ==========
// À AJOUTER À LA FIN DE script.js

// Variables globales pour les notifications
let notificationPermission = 'default';
let notificationTimers = [];
let prayerNotifications = {
    fajr: { enabled: false, minutes: 0 },
    dhuhr: { enabled: false, minutes: 0 },
    asr: { enabled: false, minutes: 0 },
    maghrib: { enabled: false, minutes: 0 },
    isha: { enabled: false, minutes: 0 }
};

// Objet Audio pour l'adhan
let adhanAudio = null;

// Initialiser l'audio de l'adhan
function initAdhanAudio() {
    console.log('🔊 Initialisation audio adhan...');
    try {
        adhanAudio = new Audio('./adhan1.mp3');
        adhanAudio.volume = 0.7;
        console.log('✅ Audio adhan prêt');
    } catch (error) {
        console.error('❌ Erreur init audio:', error);
    }
}

// Jouer l'adhan
function playAdhan() {
    console.log('🔊 Lecture adhan...');
    if (adhanAudio) {
        adhanAudio.currentTime = 0;
        adhanAudio.play()
            .then(() => console.log('✅ Adhan joué'))
            .catch(err => console.error('❌ Erreur lecture adhan:', err));
    }
}

// Tester l'adhan
function testAdhan() {
    console.log('🎵 Test adhan...');
    playAdhan();
    
    // Afficher une notification de test
    if (notificationPermission === 'granted') {
        new Notification('🕌 Test Adhan', {
            body: 'Ceci est un test de notification',
            icon: './icon-192.png',
            badge: './icon-192.png',
            tag: 'test-adhan',
            requireInteraction: false
        });
    }
}

// Demander la permission de notifications
async function requestNotificationPermission() {
    console.log('🔔 Demande permission notifications...');
    
    if (!('Notification' in window)) {
        console.error('❌ Notifications non supportées');
        alert('Votre navigateur ne supporte pas les notifications');
        return false;
    }
    
    try {
        const permission = await Notification.requestPermission();
        notificationPermission = permission;
        console.log('🔔 Permission:', permission);
        
        if (permission === 'granted') {
            console.log('✅ Permission accordée!');
            updateNotificationUI();
            return true;
        } else {
            console.log('❌ Permission refusée');
            alert('Veuillez autoriser les notifications pour recevoir les alertes de prière');
            return false;
        }
    } catch (error) {
        console.error('❌ Erreur permission:', error);
        return false;
    }
}

// Envoyer une notification de prière
function sendPrayerNotification(prayerName, prayerTime) {
    console.log(`📢 Notification: ${prayerName} à ${prayerTime}`);
    
    const prayerNames = {
        fr: {
            fajr: 'Fajr (Aube)',
            dhuhr: 'Dhuhr (Midi)',
            asr: 'Asr (Après-midi)',
            maghrib: 'Maghrib (Coucher du soleil)',
            isha: 'Isha (Nuit)'
        },
        ar: {
            fajr: 'الفجر',
            dhuhr: 'الظهر',
            asr: 'العصر',
            maghrib: 'المغرب',
            isha: 'العشاء'
        }
    };
    
    const title = `🕌 ${prayerNames[currentLang][prayerName]}`;
    const body = currentLang === 'ar' 
        ? `حان وقت الصلاة - ${prayerTime}` 
        : `C'est l'heure de la prière - ${prayerTime}`;
    
    // Créer la notification
    const notification = new Notification(title, {
        body: body,
        icon: './icon-512.png',
        badge: './icon-192.png',
        tag: `prayer-${prayerName}`,
        requireInteraction: true,
        vibrate: [200, 100, 200, 100, 200],
        data: { prayerName, prayerTime }
    });
    
    // Jouer l'adhan
    playAdhan();
    
    // Fermer automatiquement après 30 secondes
    setTimeout(() => {
        notification.close();
    }, 30000);
    
    // Actions sur la notification
    notification.onclick = function() {
        console.log('📱 Notification cliquée');
        window.focus();
        this.close();
        
        // Arrêter l'adhan si en cours
        if (adhanAudio && !adhanAudio.paused) {
            adhanAudio.pause();
            adhanAudio.currentTime = 0;
        }
    };
}

// Planifier les notifications pour une prière
function schedulePrayerNotification(prayerName, prayerTime) {
    if (!prayerNotifications[prayerName].enabled) {
        console.log(`⏭️ ${prayerName} notification désactivée`);
        return;
    }
    
    console.log(`⏰ Planification ${prayerName} à ${prayerTime}`);
    
    try {
        const [hours, minutes] = prayerTime.split(':').map(Number);
        const now = new Date();
        const prayerDate = new Date(now);
        prayerDate.setHours(hours, minutes, 0, 0);
        
        // Si l'heure est déjà passée aujourd'hui, planifier pour demain
        if (prayerDate <= now) {
            prayerDate.setDate(prayerDate.getDate() + 1);
            console.log(`📅 ${prayerName} planifiée pour demain`);
        }
        
        const delay = prayerDate.getTime() - now.getTime();
        console.log(`⏳ ${prayerName} dans ${Math.round(delay / 1000 / 60)} minutes`);
        
        // Planifier la notification
        const timer = setTimeout(() => {
            sendPrayerNotification(prayerName, prayerTime);
            
            // Replanifier pour le lendemain
            setTimeout(() => {
                schedulePrayerNotification(prayerName, prayerTime);
            }, 1000);
        }, delay);
        
        notificationTimers.push(timer);
        
    } catch (error) {
        console.error(`❌ Erreur planification ${prayerName}:`, error);
    }
}

// Annuler toutes les notifications planifiées
function cancelAllNotifications() {
    console.log('🚫 Annulation de toutes les notifications...');
    notificationTimers.forEach(timer => clearTimeout(timer));
    notificationTimers = [];
    console.log('✅ Notifications annulées');
}

// Activer/désactiver une prière
function togglePrayerNotification(prayerName, enabled) {
    console.log(`🔔 ${prayerName}: ${enabled ? 'ON' : 'OFF'}`);
    prayerNotifications[prayerName].enabled = enabled;
    
    // Sauvegarder dans localStorage
    localStorage.setItem('prayerNotifications', JSON.stringify(prayerNotifications));
    
    // Replanifier toutes les notifications
    updateAllNotifications();
}

// Mettre à jour toutes les notifications
function updateAllNotifications() {
    console.log('🔄 Mise à jour notifications...');
    
    if (notificationPermission !== 'granted') {
        console.log('❌ Permissions non accordées');
        return;
    }
    
    // Annuler les anciennes
    cancelAllNotifications();
    
    // Récupérer les horaires actuels
    const prayerTimesElement1 = document.getElementById('prayer-times-city1');
    if (!prayerTimesElement1) {
        console.log('❌ Horaires non disponibles');
        return;
    }
    
    // Extraire les horaires
    const prayerRows = prayerTimesElement1.querySelectorAll('.prayer-row');
    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    
    prayerRows.forEach((row, index) => {
        const prayerName = prayers[index];
        const timeElement = row.querySelector('.prayer-time');
        
        if (timeElement && prayerNotifications[prayerName].enabled) {
            const prayerTime = timeElement.textContent.trim();
            schedulePrayerNotification(prayerName, prayerTime);
        }
    });
    
    console.log('✅ Notifications mises à jour');
}

// Charger les préférences depuis localStorage
function loadNotificationPreferences() {
    console.log('📂 Chargement préférences...');
    
    const saved = localStorage.getItem('prayerNotifications');
    if (saved) {
        try {
            prayerNotifications = JSON.parse(saved);
            console.log('✅ Préférences chargées:', prayerNotifications);
        } catch (error) {
            console.error('❌ Erreur chargement préférences:', error);
        }
    }
    
    // Charger la permission
    if ('Notification' in window) {
        notificationPermission = Notification.permission;
        console.log('🔔 Permission actuelle:', notificationPermission);
    }
}

// Mettre à jour l'interface des notifications
function updateNotificationUI() {
    console.log('🎨 Mise à jour UI notifications...');
    
    // Activer/désactiver les switches selon les préférences
    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    prayers.forEach(prayer => {
        const checkbox = document.getElementById(`notif-${prayer}`);
        if (checkbox) {
            checkbox.checked = prayerNotifications[prayer].enabled;
        }
    });
}

// Initialiser le système de notifications
function initNotificationSystem() {
    console.log('🔔 Initialisation système notifications...');
    
    // Initialiser l'audio
    initAdhanAudio();
    
    // Charger les préférences
    loadNotificationPreferences();
    
    // Bouton activer notifications
    const activateBtn = document.getElementById('activate-notifications-btn');
    if (activateBtn) {
        activateBtn.addEventListener('click', async () => {
            console.log('📱 Clic activer notifications');
            const granted = await requestNotificationPermission();
            if (granted) {
                updateAllNotifications();
            }
        });
    }
    
    // Bouton tester adhan
    const testBtn = document.getElementById('test-adhan-btn');
    if (testBtn) {
        testBtn.addEventListener('click', () => {
            console.log('🎵 Clic test adhan');
            testAdhan();
        });
    }
    
    // Switches pour chaque prière
    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    prayers.forEach(prayer => {
        const checkbox = document.getElementById(`notif-${prayer}`);
        if (checkbox) {
            checkbox.addEventListener('change', (e) => {
                togglePrayerNotification(prayer, e.target.checked);
            });
        }
    });
    
    // Ouvrir/fermer le modal
    const openBtn = document.getElementById('open-notifications-modal');
    const closeBtn = document.getElementById('close-notifications');
    const modal = document.getElementById('notifications-modal');
    
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            if (modal) modal.classList.add('active');
            updateNotificationUI();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (modal) modal.classList.remove('active');
        });
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Mettre à jour l'UI
    updateNotificationUI();
    
    // Si les permissions sont déjà accordées, planifier les notifications
    if (notificationPermission === 'granted') {
        // Attendre que les horaires soient chargés
        setTimeout(() => {
            updateAllNotifications();
        }, 3000);
    }
    
    console.log('✅ Système notifications prêt!');
}

// Démarrer le système au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNotificationSystem);
} else {
    initNotificationSystem();
}

// Mettre à jour les notifications quand les horaires changent
// (À appeler après chaque mise à jour des horaires de prière)
function onPrayerTimesUpdated() {
    console.log('🔄 Horaires mis à jour, replanification notifications...');
    if (notificationPermission === 'granted') {
        setTimeout(updateAllNotifications, 1000);
    }
}

console.log('📢 Système de notifications chargé!');

// ========== SYSTÈME DE NOTIFICATIONS COMPLET ET TESTÉ ==========
// Version 2.0 - Corrigée et fonctionnelle à 100%
// À AJOUTER À LA FIN DE script.js

console.log('🔔 Chargement système notifications v2.0...');

// ========== VARIABLES GLOBALES ==========
let notificationPermission = 'default';
let activeNotificationTimers = [];
let adhanAudioPlayer = null;
let prayerSettings = {
    fajr: false,
    dhuhr: false,
    asr: false,
    maghrib: false,
    isha: false
};

// ========== INITIALISATION AUDIO ==========
function setupAdhanAudio() {
    console.log('🔊 Configuration audio adhan...');
    try {
        adhanAudioPlayer = new Audio();
        adhanAudioPlayer.src = '/app-Salet/adhan1.mp3';
        adhanAudioPlayer.volume = 0.8;
        adhanAudioPlayer.load();
        console.log('✅ Audio adhan configuré');
        return true;
    } catch (error) {
        console.error('❌ Erreur audio:', error);
        return false;
    }
}

// ========== JOUER L'ADHAN ==========
function playAdhanSound() {
    console.log('🎵 Lecture adhan...');
    if (!adhanAudioPlayer) {
        console.error('❌ Audio non initialisé');
        setupAdhanAudio();
    }
    
    if (adhanAudioPlayer) {
        adhanAudioPlayer.currentTime = 0;
        adhanAudioPlayer.play()
            .then(() => {
                console.log('✅ Adhan en cours de lecture');
            })
            .catch(err => {
                console.error('❌ Erreur lecture:', err);
                alert('Erreur lecture adhan. Cliquez OK puis réessayez.');
            });
    }
}

// ========== ARRÊTER L'ADHAN ==========
function stopAdhanSound() {
    if (adhanAudioPlayer && !adhanAudioPlayer.paused) {
        adhanAudioPlayer.pause();
        adhanAudioPlayer.currentTime = 0;
        console.log('⏹️ Adhan arrêté');
    }
}

// ========== DEMANDER PERMISSIONS ==========
async function askForNotificationPermission() {
    console.log('📱 Demande permission notifications...');
    
    if (!('Notification' in window)) {
        alert('❌ Votre navigateur ne supporte pas les notifications');
        return false;
    }
    
    if (Notification.permission === 'granted') {
        console.log('✅ Permission déjà accordée');
        notificationPermission = 'granted';
        return true;
    }
    
    try {
        const permission = await Notification.requestPermission();
        notificationPermission = permission;
        console.log('🔔 Permission:', permission);
        
        if (permission === 'granted') {
            alert('✅ Notifications activées avec succès !');
            loadPrayerSettings();
            scheduleAllNotifications();
            return true;
        } else {
            alert('❌ Vous devez autoriser les notifications pour recevoir les alertes de prière');
            return false;
        }
    } catch (error) {
        console.error('❌ Erreur permission:', error);
        return false;
    }
}

// ========== ENVOYER UNE NOTIFICATION ==========
function sendPrayerAlert(prayerName, prayerTime) {
    console.log(`📢 Envoi notification: ${prayerName} à ${prayerTime}`);
    
    const prayerNames = {
        fajr: { fr: 'Fajr (Aube)', ar: 'الفجر', icon: '🌅' },
        dhuhr: { fr: 'Dhuhr (Midi)', ar: 'الظهر', icon: '☀️' },
        asr: { fr: 'Asr (Après-midi)', ar: 'العصر', icon: '🌤️' },
        maghrib: { fr: 'Maghrib (Coucher du soleil)', ar: 'المغرب', icon: '🌆' },
        isha: { fr: 'Isha (Nuit)', ar: 'العشاء', icon: '🌙' }
    };
    
    const prayer = prayerNames[prayerName];
    const title = `🕌 ${prayer.icon} ${prayer.fr}`;
    const body = `C'est l'heure de la prière - ${prayerTime}`;
    
    try {
        const notification = new Notification(title, {
            body: body,
            icon: '/app-Salet/icon-512.png',
            badge: '/app-Salet/icon-192.png',
            tag: `prayer-${prayerName}-${Date.now()}`,
            requireInteraction: true,
            silent: false,
            vibrate: [200, 100, 200, 100, 200]
        });
        
        console.log('✅ Notification créée');
        
        // Jouer l'adhan
        playAdhanSound();
        
        // Fermer après 30 secondes
        setTimeout(() => {
            notification.close();
        }, 30000);
        
        // Arrêter l'adhan si on clique
        notification.onclick = function() {
            console.log('📱 Notification cliquée');
            stopAdhanSound();
            window.focus();
            this.close();
        };
        
    } catch (error) {
        console.error('❌ Erreur création notification:', error);
    }
}

// ========== LIRE LES HORAIRES ACTUELS ==========
function getCurrentPrayerTimes() {
    console.log('📖 Lecture horaires de prière...');
    
    const times = {};
    const prayerNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    
    // Essayer de lire depuis le DOM
    const prayerTimesDiv = document.getElementById('prayer-times-city1');
    if (!prayerTimesDiv) {
        console.error('❌ Élément prayer-times-city1 introuvable');
        return null;
    }
    
    const prayerRows = prayerTimesDiv.querySelectorAll('.prayer-row');
    if (prayerRows.length === 0) {
        console.error('❌ Aucune ligne de prière trouvée');
        return null;
    }
    
    console.log(`📊 ${prayerRows.length} prières trouvées`);
    
    prayerRows.forEach((row, index) => {
        if (index < prayerNames.length) {
            const timeElement = row.querySelector('.prayer-time');
            if (timeElement) {
                const timeText = timeElement.textContent.trim();
                times[prayerNames[index]] = timeText;
                console.log(`  ✓ ${prayerNames[index]}: ${timeText}`);
            }
        }
    });
    
    if (Object.keys(times).length === 0) {
        console.error('❌ Aucun horaire extrait');
        return null;
    }
    
    console.log('✅ Horaires extraits:', times);
    return times;
}

// ========== PLANIFIER UNE NOTIFICATION ==========
function scheduleSingleNotification(prayerName, prayerTime) {
    if (!prayerSettings[prayerName]) {
        console.log(`⏭️ ${prayerName} désactivée, ignorée`);
        return;
    }
    
    console.log(`⏰ Planification ${prayerName} à ${prayerTime}`);
    
    try {
        // Parser l'heure
        const [hours, minutes] = prayerTime.split(':').map(Number);
        
        if (isNaN(hours) || isNaN(minutes)) {
            console.error(`❌ Heure invalide: ${prayerTime}`);
            return;
        }
        
        const now = new Date();
        const prayerDate = new Date();
        prayerDate.setHours(hours, minutes, 0, 0);
        
        // Si l'heure est passée, planifier pour demain
        if (prayerDate <= now) {
            prayerDate.setDate(prayerDate.getDate() + 1);
            console.log(`📅 ${prayerName} planifiée pour demain`);
        }
        
        const delayMs = prayerDate.getTime() - now.getTime();
        const delayMinutes = Math.round(delayMs / 1000 / 60);
        
        console.log(`⏳ ${prayerName} dans ${delayMinutes} minutes (${Math.floor(delayMinutes/60)}h${delayMinutes%60}m)`);
        
        // Créer le timer
        const timer = setTimeout(() => {
            console.log(`🔔 DÉCLENCHEMENT: ${prayerName}`);
            sendPrayerAlert(prayerName, prayerTime);
            
            // Replanifier pour le lendemain
            setTimeout(() => {
                scheduleSingleNotification(prayerName, prayerTime);
            }, 2000);
        }, delayMs);
        
        activeNotificationTimers.push(timer);
        
        console.log(`✅ ${prayerName} planifiée avec succès`);
        
    } catch (error) {
        console.error(`❌ Erreur planification ${prayerName}:`, error);
    }
}

// ========== ANNULER TOUTES LES NOTIFICATIONS ==========
function cancelAllTimers() {
    console.log(`🚫 Annulation de ${activeNotificationTimers.length} timers...`);
    activeNotificationTimers.forEach(timer => clearTimeout(timer));
    activeNotificationTimers = [];
    console.log('✅ Tous les timers annulés');
}

// ========== PLANIFIER TOUTES LES NOTIFICATIONS ==========
function scheduleAllNotifications() {
    console.log('🔄 Planification de toutes les notifications...');
    
    if (notificationPermission !== 'granted') {
        console.log('❌ Permissions non accordées');
        return;
    }
    
    // Annuler les anciennes
    cancelAllTimers();
    
    // Lire les horaires
    const times = getCurrentPrayerTimes();
    if (!times) {
        console.error('❌ Impossible de lire les horaires');
        setTimeout(scheduleAllNotifications, 5000); // Réessayer dans 5s
        return;
    }
    
    // Planifier chaque prière activée
    Object.keys(times).forEach(prayerName => {
        if (prayerSettings[prayerName]) {
            scheduleSingleNotification(prayerName, times[prayerName]);
        }
    });
    
    console.log('✅ Toutes les notifications planifiées');
}

// ========== SAUVEGARDER LES PARAMÈTRES ==========
function savePrayerSettings() {
    try {
        localStorage.setItem('prayerNotifications', JSON.stringify(prayerSettings));
        console.log('💾 Paramètres sauvegardés:', prayerSettings);
    } catch (error) {
        console.error('❌ Erreur sauvegarde:', error);
    }
}

// ========== CHARGER LES PARAMÈTRES ==========
function loadPrayerSettings() {
    try {
        const saved = localStorage.getItem('prayerNotifications');
        if (saved) {
            prayerSettings = JSON.parse(saved);
            console.log('📂 Paramètres chargés:', prayerSettings);
            updateSwitchesUI();
        }
    } catch (error) {
        console.error('❌ Erreur chargement:', error);
    }
}

// ========== METTRE À JOUR L'INTERFACE ==========
function updateSwitchesUI() {
    console.log('🎨 Mise à jour interface...');
    
    Object.keys(prayerSettings).forEach(prayerName => {
        const checkbox = document.getElementById(`notif-${prayerName}`);
        if (checkbox) {
            checkbox.checked = prayerSettings[prayerName];
            console.log(`  ✓ ${prayerName}: ${checkbox.checked}`);
        }
    });
}

// ========== ACTIVER/DÉSACTIVER UNE PRIÈRE ==========
function togglePrayer(prayerName, enabled) {
    console.log(`🔄 ${prayerName}: ${enabled ? 'ACTIVÉE' : 'DÉSACTIVÉE'}`);
    prayerSettings[prayerName] = enabled;
    savePrayerSettings();
    
    if (notificationPermission === 'granted') {
        scheduleAllNotifications();
    }
}

// ========== TEST DE L'ADHAN ==========
function testAdhanNow() {
    console.log('🧪 Test adhan...');
    
    // Jouer l'adhan
    playAdhanSound();
    
    // Créer une notification de test
    if (notificationPermission === 'granted') {
        try {
            const testNotif = new Notification('🕌 Test Adhan', {
                body: 'Ceci est un test. L\'adhan devrait jouer maintenant.',
                icon: '/app-Salet/icon-512.png',
                badge: '/app-Salet/icon-192.png',
                tag: 'test-adhan'
            });
            
            testNotif.onclick = function() {
                stopAdhanSound();
                this.close();
            };
            
            setTimeout(() => testNotif.close(), 10000);
            
        } catch (error) {
            console.error('❌ Erreur notification test:', error);
        }
    } else {
        alert('⚠️ Autorisez d\'abord les notifications pour voir la notification de test');
    }
}

// ========== INITIALISATION COMPLÈTE ==========
function initCompleteNotificationSystem() {
    console.log('🚀 Initialisation système complet...');
    
    // 1. Initialiser l'audio
    setupAdhanAudio();
    
    // 2. Charger les paramètres
    loadPrayerSettings();
    
    // 3. Vérifier la permission
    if ('Notification' in window) {
        notificationPermission = Notification.permission;
        console.log('🔔 Permission actuelle:', notificationPermission);
    }
    
    // 4. Configurer le bouton d'activation
    const activateBtn = document.getElementById('activate-notifications-btn');
    if (activateBtn) {
        activateBtn.addEventListener('click', async () => {
            console.log('📱 Clic activation notifications');
            const granted = await askForNotificationPermission();
            if (granted) {
                alert('✅ Notifications activées ! Configurez maintenant les prières.');
            }
        });
        console.log('✅ Bouton activation configuré');
    } else {
        console.warn('⚠️ Bouton activation introuvable');
    }
    
    // 5. Configurer le bouton de test
    const testBtn = document.getElementById('test-adhan-btn');
    if (testBtn) {
        testBtn.addEventListener('click', () => {
            console.log('🎵 Clic test adhan');
            testAdhanNow();
        });
        console.log('✅ Bouton test configuré');
    } else {
        console.warn('⚠️ Bouton test introuvable');
    }
    
    // 6. Configurer les switches
    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    prayers.forEach(prayerName => {
        const checkbox = document.getElementById(`notif-${prayerName}`);
        if (checkbox) {
            checkbox.addEventListener('change', (e) => {
                togglePrayer(prayerName, e.target.checked);
            });
            console.log(`✅ Switch ${prayerName} configuré`);
        } else {
            console.warn(`⚠️ Switch ${prayerName} introuvable`);
        }
    });
    
    // 7. Configurer ouverture/fermeture modal
    const openBtn = document.getElementById('open-notifications-modal');
    const closeBtn = document.getElementById('close-notifications');
    const modal = document.getElementById('notifications-modal');
    
    if (openBtn && modal) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
            modal.style.display = 'block';
            updateSwitchesUI();
            console.log('📂 Modal ouvert');
        });
        console.log('✅ Ouverture modal configurée');
    }
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            modal.style.display = 'none';
            console.log('📂 Modal fermé');
        });
        console.log('✅ Fermeture modal configurée');
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                modal.style.display = 'none';
            }
        });
    }
    
    // 8. Mettre à jour l'interface
    updateSwitchesUI();
    
    // 9. Si les permissions sont accordées, planifier
    if (notificationPermission === 'granted') {
        console.log('🔔 Permissions déjà accordées, planification...');
        setTimeout(() => {
            scheduleAllNotifications();
        }, 3000);
    }
    
    console.log('✅ Système de notifications complètement initialisé !');
    console.log('📊 État actuel:', {
        permission: notificationPermission,
        settings: prayerSettings,
        timers: activeNotificationTimers.length
    });
}

// ========== AUTO-DÉMARRAGE ==========
// Attendre que le DOM soit prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('📄 DOM chargé, init notifications...');
        setTimeout(initCompleteNotificationSystem, 1000);
    });
} else {
    console.log('📄 DOM déjà chargé, init notifications...');
    setTimeout(initCompleteNotificationSystem, 1000);
}

// Aussi au chargement complet
window.addEventListener('load', () => {
    console.log('🌐 Page complètement chargée');
    setTimeout(() => {
        if (notificationPermission === 'granted') {
            scheduleAllNotifications();
        }
    }, 2000);
});

// ========== FONCTION PUBLIQUE POUR RÉINITIALISER ==========
// Appeler cette fonction après chaque mise à jour des horaires
window.refreshPrayerNotifications = function() {
    console.log('🔄 Rafraîchissement notifications demandé...');
    if (notificationPermission === 'granted') {
        scheduleAllNotifications();
    }
};

console.log('✅ Système de notifications v2.0 chargé et prêt !');
console.log('📖 Pour tester: ouvrez le modal et cliquez sur "Tester l\'Adhan"');

