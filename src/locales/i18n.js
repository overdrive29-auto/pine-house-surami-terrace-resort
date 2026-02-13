import { createI18n } from "vue-i18n";

const messages = {
	en: {
		check_availability: "Check Availability",
		adults: "Adults",
		children: "Children",
		check_in_out: "Check-in — Check-out",
		navlinks: {
			home: "Home",
			about: "About",
			gallery: "Gallery",
			book: "Reservation",
			contact: "Contact",
			find_reservation: "Find reservation"
		},
		welcome: "Welcome to Pine House Surami Terrace Resort",
		homepage: {
			title: "Welcome!",
			intro: "Experience the perfect blend of nature and comfort at Pine House Surami Terrace Resort. Nestled in the serene pine forests, our resort offers a tranquil escape with breathtaking views and fresh mountain air. Whether you're seeking adventure or relaxation, our resort provides the ideal setting for an unforgettable getaway."
		},
		contactpage: {
			intro_1: "Relax in the heart of pine forests with fresh mountain air",
			intro_2:
				"Experience the perfect blend of nature and comfort at Pine House Surami Terrace Resort. Nestled in the serene pine forests, our resort offers a tranquil escape with breathtaking views and fresh mountain air. Whether you're seeking adventure or relaxation, our resort provides the ideal setting for an unforgettable getaway.",
			title: "Contact us",
			address: "26 მაისი 49ა , Surami, Georgia, 5700",
			phone: "511 18 50 41",
			whatsapp: "551 18 50 41",
			facebook: "pinehousesurami",
			email: "{'m.udzilauri@hotmail.com'}"
		},
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
		check_availability: "გადაამოწმეთ ხელმისაწვდომობა",
		adults: "მოზრდილები",
		children: "ბავშვები",
		check_in_out: "ჩექ-ინი — ჩექ-აუთი",
		navlinks: {
			home: "მთავარი",
			about: "შესახებ",
			gallery: "გალერეა",
			book: "დაჯავშნა",
			contact: "კონტაქტი",
			find_reservation: "ჯავშანის ძიება"
		},
		welcome: "მოგესალმებით Pine House Surami & Terrace Resort",
		homepage: {
			title: "მოგესალმებით",
			intro: "გაიხსენით ბუნებისა და კომფორტის იდეალური კომბინაცია Pine House Surami Terrace Resort-ში. განლაგებული მშვიდი ფიჭვის ტყეებში, ჩვენი კურორტი გთავაზობთ მშვიდ დასვენებას breath-taking ხედებით და სუფთა მთის ჰაერით. თუ ეძებთ თავგადასავალს ან დასვენებას, ჩვენი კურორტი უზრუნველყოფს იდეალურ გარემოს დაუვიწყარი დასვენებისთვის."
		},
		contactpage: {
			intro_1: "დასვენება სუნთქვადი მთის ჰაერით სავსე ფიჭვის ტყეში",
			intro_2:
				"Experience the perfect blend of nature and comfort at Pine House Surami Terrace Resort. Nestled in the serene pine forests, our resort offers a tranquil escape with breathtaking views and fresh mountain air. Whether you're seeking adventure or relaxation, our resort provides the ideal setting for an unforgettable getaway.",
			title: "დაგვიკავშირდით",
			address: "26 მაისი 49ა , Surami, Georgia, 5700",
			phone: "511 18 50 41",
			whatsapp: "551 18 50 41",
			facebook: "pinehousesurami",
			email: "{'m.udzilauri@hotmail.com'}"
		},
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
