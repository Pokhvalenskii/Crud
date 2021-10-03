class Api {
  constructor(data) {
    this._urlApi = data.urlApi;
  }

  _checkResponses (res) {
    if(res.ok) {
      return res.json();
    } return Promise.reject(`Ошибка: ${res.status}`);
  }

  showPosts() {
    return fetch (`${this._urlApi}/post`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(this._checkResponses);
  }

  signup(data) {
    // console.log('check signup')
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
    // console.log('check signin')
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

  aboutMe(data) {
    // console.log('aboutMe', data.jwt)
    return fetch(`${this._urlApi}/user/self`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${data.jwt}`
      }
    })
      .then(this._checkResponses);
  }

}

const api = new Api({
  urlApi: 'http://test.flcd.ru/api'
})

export default api;