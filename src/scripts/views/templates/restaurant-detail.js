import { IMAGE_SIZE } from '../../global/config'
import API_ENDPOINT from './../../global/api-endpoint'

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i> Favorite
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="favorite" class="active">
    <i class="fa fa-heart" aria-hidden="true"></i> Favorited
  </button>
`

const createRestaurantDetail = (restaurant = {}) => {
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

  return `
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
            <div id="favorite-container"></div>
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

export {
  createRestaurantDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
