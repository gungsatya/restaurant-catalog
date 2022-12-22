import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'
import DrawerInitiator from '../utils/drawer-initiator'
import { initCustomElement } from './templates/elements/init-custom-element'

export default class App {
  constructor({ button, drawer, content, loadingIndicator }) {
    this._button = button
    this._drawer = drawer
    this._content = content
    this._loadingIndicator = loadingIndicator

    initCustomElement()
    this._initialAppShell()
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._loadingIndicator.style.display = 'flex'
    this._content.innerHTML = await page.render()
    await page.afterRender().finally(() => {
      this._loadingIndicator.style.display = 'none'
    })
  }
}
