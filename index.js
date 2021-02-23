import login from './src/login.js';
import getDevices from './src/getDevices.js';

async function init() {
  const loginData = await login(
    process.env.YALE_USERNAME,
    process.env.YALE_PASSWORD,
    process.env.YALE_INITIAL_TOKEN,
  );

  const [door] = await getDevices(loginData.tokenType, loginData.accessToken);

  door.pincode = process.env.PINCODE;

  const res = await door.unlock(loginData.tokenType, loginData.accessToken);
  console.log(res);
}
init();
