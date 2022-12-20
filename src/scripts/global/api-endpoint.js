import CONFIG from './config'

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  IMAGE: ({ size = CONFIG.DEFAULT_IMAGE_SIZE, pictureId }) =>
    `${CONFIG.BASE_URL}/images/${size}/${pictureId}`
}

export default API_ENDPOINT
