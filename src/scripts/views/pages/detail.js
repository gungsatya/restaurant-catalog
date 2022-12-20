import API_ENDPOINT from '../../global/api-endpoint'
import { IMAGE_SIZE } from '../../global/config'
import RestoDicodingApi from './../../data/resto-dicoding-api'
import UrlParser from './../../routes/url-parser'
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

    console.log(restaurant)

    const imageEndPoint = API_ENDPOINT.IMAGE({
      pictureId: restaurant.pictureId,
      size: IMAGE_SIZE.LARGE
    })

    const categories = restaurant.categories
      .map((category) => `#${category.name}`)
      .join(', ')

    const foods = restaurant.menus.foods
      .map((menu) => `<li>${menu.name}</li>`)
      .join('\n')

    const drinks = restaurant.menus.drinks
      .map((menu) => `<li>${menu.name}</li>`)
      .join('\n')

    const customerReviews = restaurant.customerReviews
      .map(
        (review) => `
        <div class="review">
          <div class="message">${review.review}</div>
          <span><strong>${review.name}</strong> on <strong>${review.date}</strong></span>
        </div>
        `
      )
      .join('\n')

    document.querySelector('#restaurant-detail .container').innerHTML = `
    <div class="restaurant-card">
        <div class="badge">Rating ${restaurant.rating}</div>
        <div class="restaurant-tumb">
            <img src="${imageEndPoint}">
        </div>
        <div class="restaurant-details">
            <span class="restaurant-city">${restaurant.city}</span>
            <h4>${restaurant.name}</h4>
            <p class="subtitle">${restaurant.address}</p>
            <p class="full">${restaurant.description}</p>
            <div class="foods-drinks">
              <div class="product">
                <p>Foods</p>
                <ul>${foods}</ul>
              </div>
              <div class="product">
                <p>Drinks</p>
                <ul>${drinks}</ul>
              </div>
            </div>
            <div class="restaurant-bottom-detail">
              <div class="categories">${categories}</div>
              <div><button><i class="fa fa-heart"></i></button></div>
            </div>
        </div>
    </div>
    <div class="user-reviews">
      <h4>Customer Reviews</h4>
      <div class="reviews">
      ${customerReviews}
      </div>
    </div>
    `
  }
}

export default Detail
