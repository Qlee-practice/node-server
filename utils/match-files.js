"use strict";

import originFs from 'fs';
import Promise from 'bluebird';
import path from 'path';

const fs = Promise.promisifyAll(originFs);

const matchFiles = async(pwd, reg = /.*/) => {
  const stats = await fs.statAsync(pwd);

  if (stats.isFile()) return reg.test(pwd) ? [pwd] : [];

  return fs.readdirAsync(pwd).then(files => {
    const all = files.map(file => matchFiles(path.join(pwd, file)));
    return Promise.all(all)
      .then(files => files.reduce((arr, f) => arr.concat(f), []));
  });
};

export default matchFiles;