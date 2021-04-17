import axios from 'axios';

class NetworkClient {
  constructor() {}

  request(method = 'get', url = '', config = {}) {
    const baseConfig = {
      method,
      url: `http://localhost:8080/api${url}`,
      data: config.data || {},
      params: config.params || {}
    };

    const axiosConfig = Object.assign(config, baseConfig);

    return axios(axiosConfig);
  }

  get(url, config) {
    return this.request('get', url, config);
  }

  post(url, config) {
    return this.request('post', url, config);
  }
}

export default NetworkClient;