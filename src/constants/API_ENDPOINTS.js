const API_URL = 'https://mob.yalehomesystem.co.uk';

const LOGIN = `${API_URL}/yapi/o/token/`;
const UNLOCK = `${API_URL}/yapi/api/minigw/unlock/`;
const LOCK = null;
const STATE = `${API_URL}/yapi/api/panel/cycle/`;

export default {
  LOGIN,
  UNLOCK,
  LOCK,
  STATE,
};
