'use strict';
import Koa from 'koa';
import database from './initializers/database';
import router from './initializers/router';
import errorHanlder from './middlewares/handle-error';
import config from './config/config.json';

(async(app) => {
  try {
    app.use(errorHanlder);
    await database();
    await router(app);
    app.listen(config.port, () => console.log(`Server started at ${config.port}`));
  } catch (e) {
    console.log('Starting server has error: \n', e.message)
  }
})(new Koa());


