import Router from 'koa-router';
import matchFiles from '../utils/match-files';
import path from 'path';

const router = new Router();
const pwd = path.join(__dirname, '..', 'apis');

export default async(app) => {
  const files = await matchFiles(pwd, /\.js$/);

  files.forEach(file => {
    const {method, path, action} = require(file);
    router[method.toLowerCase()](path, action);
  });

  app
    .use(router.routes())
    .use(router.allowedMethods());
}
