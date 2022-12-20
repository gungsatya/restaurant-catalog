import RestaurantElm from './restaurant-elm'

const initCustomElement = () => {
  customElements.define('restaurant-elm', RestaurantElm)
}

export { initCustomElement }
