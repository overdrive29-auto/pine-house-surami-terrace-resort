import { createI18n } from "vue-i18n";

const messages = {
	en: {
		navlinks: {
			home: "Home",
			about: "About",
			gallery: "Gallery",
			book: "Reservation",
			contact: "Contact",
			find_reservation: "Find reservation"
		},
		welcome: "Welcome to Pine House Surami Terrace Resort",
		book_now: "Book Your Stay",
		footer: {
			copyright: "© {year} Pine House Surami Terrace Resort"
		}
		// Add more sections later, for example:
		// rooms: { ... },
		// bookingForm: { ... },
		// errors: { ... }
	},

	ru: {
		navlinks: {
			home: "Главная",
			about: "О курорте",
			gallery: "Галерея",
			book: "Бронирование",
			contact: "Контакты",
			find_reservation: "Найти бронирование"
		},
		welcome: "Добро пожаловать в Pine House Surami Terrace Resort",
		book_now: "Забронируйте свое пребывание",
		footer: {
			copyright: "© {year} Pine House Surami Terrace Resort"
		}
	},

	ka: {
		navlinks: {
			home: "მთავარი",
			about: "შესახებ",
			gallery: "გალერეა",
			book: "დაჯავშნა",
			contact: "კონტაქტი",
			find_reservation: "ჯავშანის ძიება"
		},
		welcome: "მოგესალმებით Pine House Surami Terrace Resort-ში",
		book_now: "დაჯავშნეთ თქვენი დარჩენა",
		footer: {
			copyright: "© {year} Pine House Surami Terrace Resort"
		}
	}
};

const i18n = createI18n({
	legacy: false,
	locale: "ka",
	fallbackLocale: "en",

	messages,

	// Optional: number and date formatting
	numberFormats: {
		en: {
			currency: {
				style: "currency",
				currency: "GEL"
			}
		},
		ru: {
			currency: {
				style: "currency",
				currency: "GEL"
			}
		},
		ka: {
			currency: {
				style: "currency",
				currency: "GEL"
			}
		}
	},

	datetimeFormats: {
		en: {
			short: {
				year: "numeric",
				month: "short",
				day: "numeric"
			}
		},
		ru: {
			short: {
				year: "numeric",
				month: "short",
				day: "numeric"
			}
		},
		ka: {
			short: {
				year: "numeric",
				month: "short",
				day: "numeric"
			}
		}
	}
});

export default i18n;
