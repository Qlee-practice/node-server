'use strict';
import Koa from 'koa';
import database from './initializers/database';
import router from './initializers/router';
import errorHanlder from './middlewares/handle-error';

const Port = 3000;

(async(app) => {
  try {
    app.use(errorHanlder);
    await database();
    await router(app);
    app.listen(Port, () => console.log(`Server started at ${Port}`));
  } catch (e) {
    console.log('Starting server has error: \n', e.message)
  }
})(new Koa());


