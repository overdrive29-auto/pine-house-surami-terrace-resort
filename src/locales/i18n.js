import { createI18n } from "vue-i18n";

const messages = {
	en: {
		navlinks: {
			home: "Home",
			about: "About",
			booking: "Booking",
			contact: "Contact",
			find_reservation: "Find Reservation"
		},
		homepage: {
			title: "Pine House Surami &\n Terrace Resort",
			intro: "We offer a stay in Surami, in two beautiful modern cottages.\n Surami is one of the best resorts in the world,\n known for its beneficial and healing properties for health, ancient history, and diverse nature and beautiful views.",

			aboutsection: {
				resort: "Resort",
				environment: "Environment",
				cottage: "Cottage",
				// Resort items
				resort_items: {
					diverse_nature: "Diverse nature",
					dry_subtropical_climate: "Dry subtropical climate",
					therapeutic_environment: "Therapeutic environment, air, waters",
					ancient_monuments: "Ancient cultural monuments and landmarks"
				},
				// Environment items
				environment_items: {
					mountains_views: "Mountains and beautiful views",
					pine_forest: "Pine forest",
					peace_quiet: "Peace and quiet",
					free_parking: "Free parking",
					private_yard: "Well-maintained private yard",
					pool: "Framed pool"
				},
				// Cottage items
				cottage_items: {
					two_cottages: "Two modern cottages",
					balcony_view: "Balcony with beautiful view",
					full_comfort: "Full comfort",
					fully_equipped: "Fully equipped with all necessary appliances and inventory",
					modern_furniture: "Modern furniture and decor",
					three_bedrooms: "3 isolated bedrooms",
					fully_equipped_kitchen: "Fully equipped kitchen",
					central_heating: "Central heating",
					air_conditioning: "Air conditioning",
					washer_dryer: "Washing machine and dryer",
					tv: "TV",
					wifi: "WiFi",
					capacity: "Capacity 6-8 persons"
				}
			},

			bookingsection: {
				title: "Book Your Stay",
				check_in_out: "Check-in — Check-out",
				adults: "Adults",
				children: "Children",
				check_in: "Check-in",
				check_out: "Check-out",
				check_availability: "Check Availability"
			},
			contactsection: {
				title: "Contact",
				address: "26 May Street #49a, Surami, Georgia, 5700",
				email: "{'m.udzilauri@hotmail.com'}",
				facebook: "Pine House & Surami Terrace Resort",
				phone: "511 18 50 41",
				whatsapp: "551 18 50 41"
			}
		},

		footer: { copyright: "© 2026 Pine House & Surami Terrace Resort. All rights reserved." }
	},
	ru: {
		navlinks: {
			home: "Главная",
			about: "О нас",
			booking: "Бронирование",
			contact: "Контакты",
			find_reservation: "Найти бронирование"
		},
		homepage: {
			title: "Pine House Surami &\n Terrace Resort",
			intro: "Мы предлагаем отдых в Сурами, в двух красивых современных коттеджах.\n Сурами - один из лучших курортов в мире,\n известный своими полезными и лечебными свойствами для здоровья, древней историей и разнообразной природой и красивыми видами.",

			aboutsection: {
				resort: "Курорт",
				environment: "Окружение",
				cottage: "Коттедж",
				// Resort items
				resort_items: {
					diverse_nature: "Разнообразная природа",
					dry_subtropical_climate: "Сухой субтропический климат",
					therapeutic_environment: "Лечебная среда, воздух, воды",
					ancient_monuments: "Древние культурные памятники и достопримечательности"
				},
				// Environment items
				environment_items: {
					mountains_views: "Горы и прекрасный вид",
					pine_forest: "Хвойный лес",
					peace_quiet: "Тишина и покой",
					free_parking: "Бесплатная парковка",
					private_yard: "Благоустроенный частный двор",
					pool: "Каркасный бассейн"
				},
				// Cottage items
				cottage_items: {
					two_cottages: "Два современных коттеджа",
					balcony_view: "Балкон с прекрасным видом",
					full_comfort: "Полный комфорт",
					fully_equipped:
						"Полностью укомплектовано всей необходимой техникой и инвентарем",
					modern_furniture: "Современная мебель и декор",
					three_bedrooms: "3 изолированные спальни",
					fully_equipped_kitchen: "Полностью оборудованная кухня",
					central_heating: "Центральное отопление",
					air_conditioning: "Кондиционер",
					washer_dryer: "Стиральная и сушильная машина",
					tv: "Телевизор",
					wifi: "WiFi",
					capacity: "Вместимость 6-8 человек"
				}
			},

			bookingsection: {
				title: "Забронируйте ваше пребывание",
				check_in_out: "Заезд — Выезд",
				adults: "Взрослые",
				children: "Дети",
				check_in: "Заезд",
				check_out: "Выезд",
				check_availability: "Проверить наличие"
			},
			contactsection: {
				title: "Контакты",
				address: "26 Маиси улица #49а, Сурами, Грузия, 5700",
				email: "{'m.udzilauri@hotmail.com'}",
				facebook: "Pine House & Surami Terrace Resort",
				phone: "511 18 50 41",
				whatsapp: "551 18 50 41"
			}
		},

		footer: { copyright: "© 2026 Pine House & Surami Terrace Resort. Все права защищены." }
	},
	ka: {
		navlinks: {
			home: "მთავარი",
			about: "შესახებ",
			booking: "დაჯავშნა",
			contact: "კონტაქტი",
			find_reservation: "ჯავშანის ძიება"
		},

		homepage: {
			title: "Pine House Surami &\n Terrace Resort",
			intro: "გთავაზობთ დასვენებას სურამში, ორ ულამაზეს თანამედროვე კოტეჯში.\n სურამი მსოფლიოში ერთ-ერთი საუკეთესო კურორტია,\n გამორჩეულია ჯანმრთელობისთვის სასარგებლო და სამკურნალო თვისებებით, უძველესი ისტორიით და მრავალფეროვანი ბუნებითა და ულამაზესი ხედებით.",

			aboutsection: {
				resort: "კურორტი",
				environment: "გარემოცვა",
				cottage: "კოტეჯი",
				// Resort items
				resort_items: {
					diverse_nature: "მრავალფეროვანი ბუნება",
					dry_subtropical_climate: "მშრალი სუბტროპიკული ჰავა",
					therapeutic_environment: "სამკურნალო, თერაპიული გარემო, ჰაერი, წყლები",
					ancient_monuments: "უძველესი კულტურული ძეგლები და ღირსშესანიშნაობები"
				},
				// Environment items
				environment_items: {
					mountains_views: "მთები და ულამაზესი ხედი",
					pine_forest: "წიწვოვანი ტყე",
					peace_quiet: "სიწყნარე და სიმყუდროვე",
					free_parking: "უფასო პარკინგი",
					private_yard: "კეთილმოწყობილი კერძო ეზო",
					pool: "კარკასული აუზი"
				},
				// Cottage items
				cottage_items: {
					two_cottages: "ორი თანამედროვე კოტეჯი",
					balcony_view: "ბალკონი ულამაზესი ხედით",
					full_comfort: "სრული კომფორტი",
					fully_equipped: "აღჭურვილი ყველა საჭირო ტექნიკით და ინვენტარით",
					modern_furniture: "თანამედროვე ავეჯი და დეკორი",
					three_bedrooms: "3 იზოლირებული საძინებელი",
					fully_equipped_kitchen: "სრულად აღჭურვილი სასტუმრო-სამზარეულო",
					central_heating: "ცენტრალური გათბობა",
					air_conditioning: "კონდიციონერი",
					washer_dryer: "სარეცხი და საშრობი მანქანა",
					tv: "ტელევიზია",
					wifi: "WiFi",
					capacity: "ტევადობა 6-8 ადამიანი"
				}
			},

			bookingsection: {
				title: "დაჯავშნეთ თქვენი დარჩენა",
				check_in_out: "Check-in — Check-out",
				adults: "მოზრდილები",
				children: "ბავშვები",
				check_in: "Check-in",
				check_out: "Check-out",
				check_availability: "გადაამოწმეთ ხელმისაწვდომობა"
			},
			contactsection: {
				title: "კონტაქტი",
				address: "26 მაისი 49ა , Surami, Georgia, 5700",
				email: "{'m.udzilauri@hotmail.com'}",
				facebook: "Pine House & Surami Terrace Resort",
				phone: "511 18 50 41",
				whatsapp: "551 18 50 41"
			}
		},

		footer: {
			copyright: "© 2026 Pine House & Surami Terrace Resort. ყველა უფლება დაცულია."
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
