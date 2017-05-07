"use strict";
const fs = require('fs');
const path = require('path');

module.exports = (fileName) => fs.createWriteStream(path.join(__dirname, '..', 'logs', fileName), {flags: 'a'});
