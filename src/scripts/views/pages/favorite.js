import { createRestaurantDeck } from '../templates/restaurant-deck'
import FavoriteRestoIdb from './../../data/favorite-resto-idb'

const Favorite = {
  async render() {
    return `
    <section id="restaurants">
      <div class="container">
        <h2 class="title">Your Favorite Restaurant</h2>
        <div class="card-deck" id="restaurant-deck"></div>
      </div>
    </section>`
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto()

    document
      .getElementById('restaurant-deck')
      .replaceChildren(...createRestaurantDeck(restaurants))
  }
}

export default Favorite
