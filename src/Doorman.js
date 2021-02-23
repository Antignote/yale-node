import fetch from 'node-fetch';
import API_ENDPOINTS from './constants/API_ENDPOINTS.js';

const UNLOCK_SUCCESS = '000';
// eslint-disable-next-line no-unused-vars
const UNLOCK_FAILURE = '996';

class Doorman {
  #pincode;

  #device;

  constructor(device) {
    this.#device = device;
  }

  set pincode(pincode) {
    this.#pincode = pincode;
  }

  async unlock(tokenType, token) {
    const params = new URLSearchParams();
    params.append('area', this.#device.area);
    params.append('zone', this.#device.area);
    params.append('pincode', this.#pincode);

    const response = await fetch(API_ENDPOINTS.UNLOCK, {
      method: 'POST',
      body: params,
      headers: {
        Accept: 'application/json',
        Authorization: `${tokenType} ${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error(`Unable to unlock, status: ${response.status}`);
    }

    const status = await response.json();

    if (status.code !== UNLOCK_SUCCESS) {
      throw new Error(`Unable to unlock, code: ${status.code}`);
    }

    return status;
  }
}

export default Doorman;
