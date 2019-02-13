import axios from 'axios';

import { BASE_URL } from 'constants/APIEndpoints';

class RequestProvider {

  constructor() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    // headers.append('Access-Control-Allow-Origin' , '*');
    // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // axios.defaults.headers.common['Authorization'] = `Bearer Token`;
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => resolve(response.data))
        .catch((error) => {
          this._handleError(error, reject);
        });
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(response => resolve(response.data))
        .catch((error) => {
          this._handleError(error, reject);
        });
    });
  }

  delete(url, data) {
    return new Promise((resolve, reject) => {
      axios.delete(url, data)
        .then(response => resolve(response.data))
        .catch((error) => {
          this._handleError(error, reject);
        });
    });
  }

  get(url) {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => resolve(response.data))
        .catch((error) => {
            this._handleError(error, reject);
        });
    });
  }

  _handleError(error, reject) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        reject(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        reject(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
      }
  }
}

export default new RequestProvider();
