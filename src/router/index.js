import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Gallery from "../views/Gallery.vue";
import Booking from "../views/Booking.vue";
import Contact from "../views/Contact.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/about", name: "about", component: About },
	{ path: "/gallery", name: "gallery", component: Gallery },
	{ path: "/booking", name: "booking", component: Booking },
	{ path: "/contact", name: "contact", component: Contact },
	{ path: "/:pathMatch(.*)*", name: "not-found", component: NotFound }
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;
