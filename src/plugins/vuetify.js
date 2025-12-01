/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const customTheme = {
  dark: false,
  colors: {
    primary: '#A8DADC',      // Azul pastel
    secondary: '#F1FAEE',    // Blanco crema
    accent: '#E9C9C9',       // Rosa pastel
    background: '#FEFEFE',   // Blanco suave
    surface: '#FFFFFF',
    text: '#2D3748',         // Gris oscuro para texto
    'text-light': '#718096'  // Gris claro para texto secundario
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme
    }
  }
})