import {
  createLikeButtonTemplate,
  createLikedButtonTemplate
} from '../views/templates/restaurant-detail'
import FavoriteRestoIdb from './../data/favorite-resto-idb'

const FavoriteInitiator = {
  async init({ favoriteButtonContainer, resto }) {
    this._favoriteButtonContainer = favoriteButtonContainer
    this._resto = resto

    await this._renderButton()
  },

  async _renderButton() {
    const { id } = this._resto

    if (await this._isRestoExist(id)) {
      this._renderFavorited()
    } else {
      this._renderFavorite()
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id)
    return !!resto
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createLikeButtonTemplate()

    const favoriteButton = document.querySelector('#favorite')
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto)
      this._renderButton()
    })
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createLikedButtonTemplate()

    const favoriteButton = document.querySelector('#favorite')
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id)
      this._renderButton()
    })
  }
}

export default FavoriteInitiator
