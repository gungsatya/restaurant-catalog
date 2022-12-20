import API_ENDPOINT from '../global/api-endpoint'

class RestoDicodingApi {
  static async getList() {
    const response = await fetch(API_ENDPOINT.LIST)
    const responseJson = await response.json()

    return responseJson
  }

  static async getListByKeyword(keyword) {
    const response = await fetch(API_ENDPOINT.SEARCH(keyword))
    const responseJson = await response.json()

    return responseJson
  }

  static async setReview(data) {
    const dataJson = JSON.stringify(data)
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: dataJson
    })
    const responseJson = await response.json()

    return responseJson
  }

  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()

    return responseJson
  }
}

export default RestoDicodingApi
