import fetch from 'node-fetch';
import API_ENDPOINTS from './constants/API_ENDPOINTS.js';
import DEVICES from './constants/DEVICES.js';
import Doorman from './Doorman.js';

const getDevices = async (tokenType, token) => {
  const response = await fetch(API_ENDPOINTS.STATE, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `${tokenType} ${token}`,
    },
  });

  const data = await response.json();

  if (data.message !== 'OK!') {
    throw new Error('request unsuccessfull');
  }

  return data.data.device_status.filter(({ type }) => type === DEVICES.DOOR_LOCK)
    .map(({
      device_id: deviceId,
      name,
      status_open: [state],
      area,
      type,
    }) => (new Doorman({
      deviceId,
      name,
      state,
      area,
      type,
    })));
};

export default getDevices;
