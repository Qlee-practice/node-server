'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var dbConfig = require(__dirname + '/../config/config.json').database;
var logger = require('../utils/logger')('sql.log');
var db = {};

var sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  ...dbConfig,
  benchmark: true,
  logging: (sql, ms) => logger.write(`${ms} ms: ${sql}\n`)
});

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
