import { createRestaurantDetail } from '../templates/restaurant-detail'
import RestoDicodingApi from './../../data/resto-dicoding-api'
import UrlParser from './../../routes/url-parser'
import FavoriteInitiator from './../../utils/favorite-initiator'
const Detail = {
  async render() {
    return `
          <section id="restaurant-detail">
            <div class="container">
            </div>
          </section>
          `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const response = await RestoDicodingApi.getDetail(url.id)
    const restaurant = response.restaurant

    document.querySelector('#restaurant-detail .container').innerHTML =
      createRestaurantDetail(restaurant)

    FavoriteInitiator.init({
      favoriteButtonContainer: document.getElementById('favorite-container'),
      resto: restaurant
    })
  }
}

export default Detail
