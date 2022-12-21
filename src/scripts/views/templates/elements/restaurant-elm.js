import API_ENDPOINT from './../../../global/api-endpoint'

export default class RestaurantElm extends HTMLElement {
  id = null
  name = null
  city = null
  pictureId = null
  rating = null
  description = null

  connectedCallback() {
    this.id = this.getAttribute('id') || null
    this.name = this.getAttribute('name') || null
    this.city = this.getAttribute('city') || null
    this.pictureId = this.getAttribute('pictureId') || null
    this.rating = this.getAttribute('rating') || null
    this.description = this.getAttribute('description') || null

    const imageEndPoint = API_ENDPOINT.IMAGE({ pictureId: this.pictureId })

    this.innerHTML = `
    <div class="restaurant-card">
            <div class="badge">Rating ${this.rating}</div>
            <div class="restaurant-tumb">
                <img src="${imageEndPoint}">
            </div>
            <div class="restaurant-details">
                <span class="restaurant-city">${this.city}</span>
                <h4><a href="/#/detail/${this.id}">${this.name}</a></h4>
                <p>${this.description}</p>
            </div>
        </div>
    `
  }
}
