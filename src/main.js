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

import Drawer from "primevue/drawer";

import DatePicker from "primevue/datepicker";

import Chip from "primevue/chip";

import "primeicons/primeicons.css";

const MyPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: "{green.50}",
			100: "{green.100}",
			200: "{green.200}",
			300: "{green.300}",
			400: "{green.400}",
			500: "{green.500}",
			600: "{green.600}",
			700: "{green.700}",
			800: "{green.800}",
			900: "{green.900}",
			950: "{green.950}"
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
			colorScheme: {
				light: {
					root: {
						background: "{surface.100}", // or '{surface.200}'
						color: "{surface.700}", // text color
						padding: "0.75rem 1.25rem",
						gap: "0.75rem"
					},
					icon: {
						color: "{surface.700}", // icon color
						size: "1.125rem"
					},
					removeIcon: {
						color: "{surface.500}" // removable icon color
					}
				},
				dark: {
					root: {
						background: "{surface.800}",
						color: "{surface.100}",
						padding: "0.75rem 1.25rem",
						gap: "0.75rem"
					},
					icon: {
						color: "{surface.100}",
						size: "1.125rem"
					},
					removeIcon: {
						color: "{surface.400}"
					}
				}
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
	.component("Chip", Chip)
	.component("Drawer", Drawer);

app.directive("ripple", Ripple).directive("tooltip", Tooltip);

app.mount("#app");
