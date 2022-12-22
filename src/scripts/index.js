import 'regenerator-runtime'
import '../styles/styles.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './utils/sw-register'

console.log('Hello Coders!')

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.getElementById('menu-toggle'),
  drawer: document.getElementById('menu'),
  content: document.getElementById('maincontent'),
  loadingIndicator: document.getElementById('loading')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
