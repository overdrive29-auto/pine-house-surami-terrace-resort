import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales/i18n'

// PrimeVue
import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu'
import Ripple from 'primevue/ripple'
import Tooltip from 'primevue/tooltip'
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

import 'primeicons/primeicons.css'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{lime.50}',
      100: '{lime.100}',
      200: '{lime.200}',
      300: '{lime.300}',
      400: '{lime.400}',
      500: '{lime.500}',
      600: '{lime.600}',
      700: '{lime.700}',
      800: '{lime.800}',
      900: '{lime.900}',
      950: '{lime.950}',
    },
  },
  components: {
    menubar: {
      padding: '0.75rem 1rem',
      // borderRadius: '0',
    },
  },
})

const app = createApp(App)

app.use(router) 
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: '.phstr-app-dark',
      cssLayer: false,
    },
  },
  ripple: true,
})
app.use(i18n)

app
    .component('Button', Button)
    .component('Menubar', Menubar)
    .component('Menu', Menu)
    .component('IconField', IconField)
    .component('InputIcon', InputIcon)
    .component('InputText', InputText)

app.directive('ripple', Ripple).directive('tooltip', Tooltip)


app.mount('#app')
