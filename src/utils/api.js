class Api {
  constructor(data) {
    this._urlApi = data.urlApi;
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

  signup(data) {
    console.log('check signup')
    return fetch(`${this._urlApi}/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'name': data.name,
        'email': data.email,
        'password': data.password,
        'password_confirmation': data.password_confirmation
      })
    })
      .then(this._checkResponses);
  }

  signin(data) {
    console.log('check signin')
    return fetch (`${this._urlApi}/token`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'email': data.email,
        'password': data.password
      })
    })
      .then(this._checkResponses);
  }
}

const api = new Api({
  urlApi: 'http://test.flcd.ru/api'
})

export default api;