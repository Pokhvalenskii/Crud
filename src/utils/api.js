class Api {
  constructor(data) {
    this._urlApi = data._urlApi;
  }

  _checkResponses (res) {
    if(res.ok) {
      return res.json();
    } return Promise.reject(`Ошибка: ${res.status}`);
  }

  showPosts(data) {
    return fetch (`${this._urlApi}/post`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(this._checkResponses);
  }
}

const api = new Api({
  urlApi: 'https://test.flcd.ru/api'
})

export default api;