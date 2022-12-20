import { createElement } from '../../utils/create-element'

const createRestaurantDeck = (restaurants = []) => {
  return restaurants.map((restaurant) =>
    createElement('restaurant-elm', { attributes: restaurant })
  )
}

export { createRestaurantDeck }
