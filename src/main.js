import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./locales/i18n";

// PrimeVue
import PrimeVue from "primevue/config";
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Menu from "primevue/menu";
import Ripple from "primevue/ripple";
import Tooltip from "primevue/tooltip";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Galleria from "primevue/galleria";

import DatePicker from "primevue/datepicker";

import Chip from "primevue/chip";

import "primeicons/primeicons.css";

const MyPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: "{lime.50}",
			100: "{lime.100}",
			200: "{lime.200}",
			300: "{lime.300}",
			400: "{lime.400}",
			500: "{lime.500}",
			600: "{lime.600}",
			700: "{lime.700}",
			800: "{lime.800}",
			900: "{lime.900}",
			950: "{lime.950}"
		}
	},
	components: {
		datepicker: {
			colorScheme: {
				light: {
					date: {
						selected: {
							background: "{surface.700}",
							color: "{surface.0}"
						},
						rangeSelected: {
							background: "{surface.700}",
							color: "{surface.0}"
						}
					}
				},
				dark: {
					date: {
						selected: {
							background: "{surface.50}",
							color: "{surface.900}"
						},
						rangeSelected: {
							background: "{surface.50}",
							color: "{surface.900}"
						}
					}
				}
			}
		},
		chip: {
			root: {
				padding: "0.75rem 1.25rem", // Default: 0.5rem 1rem
				gap: "0.75rem" // Default: 0.5rem
			},
			icon: {
				size: "1.5rem" // Default: 1rem
			}
		}
	}
});

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
	theme: {
		preset: MyPreset,
		options: {
			prefix: "p",
			darkModeSelector: ".phastr-app-dark",
			cssLayer: false
		}
	},
	ripple: true
});
app.use(i18n);

app.component("Button", Button)
	.component("Menubar", Menubar)
	.component("Menu", Menu)
	.component("IconField", IconField)
	.component("InputIcon", InputIcon)
	.component("InputText", InputText)
	.component("Card", Card)
	.component("Galleria", Galleria)
	.component("DatePicker", DatePicker)
	.component("Chip", Chip);

app.directive("ripple", Ripple).directive("tooltip", Tooltip);

app.mount("#app");
