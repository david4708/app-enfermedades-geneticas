import app from './app.js';

import { authenticated, syncUp } from './config/database/database.js';
import { envs } from './config/envirotment/envirotment.js';
import InitModel from './motorcycleRepair/initModel.js';

async function main() {
  try {
    await authenticated();
    InitModel();
    await syncUp();
  } catch (error) {
    console.log(error);
  }
}
main();

app.listen(envs.PORT, () => {
  console.log('Server running on port: ' + envs.PORT);
});
