import fetch from 'node-fetch';
import API_ENDPOINTS from './constants/API_ENDPOINTS.js';

const login = async (username, password, initialToken) => {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);
  params.append('grant_type', 'password');

  const response = await fetch(API_ENDPOINTS.LOGIN, {
    method: 'POST',
    body: params,
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${initialToken}`,
    },
  });
  const lastLogin = Date.now();
  const data = await response.json();

  const {
    access_token: accessToken,
    token_type: tokenType = 'Bearer',
    scope,
    expires_in: expiresIn,
    refresh_token: refreshToken,
  } = data;

  const loginData = {
    accessToken,
    tokenType,
    scope,
    expiresIn,
    refreshToken,
    lastLogin,
  };

  return loginData;
};

export default login;
