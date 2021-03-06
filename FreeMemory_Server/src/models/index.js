const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const DB_ENV = require('../../config/database.json');

const sequelize = new Sequelize(DB_ENV.mysql.database, DB_ENV.mysql.username, DB_ENV.mysql.password, {
  host: DB_ENV.mysql.host,
  dialect: 'mysql',
  logging: false,

  define: {
    timestamps: false,
  },
});

const models = {};

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const extName = path.extname(path.join(__dirname, file));
    const baseName = path.basename(path.join(__dirname, file), extName);
    const model = sequelize.import(path.join(__dirname, file));
    models[baseName] = model;
  });

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

sequelize.sync().then(() => {
  console.log('[Model] DB sync');
}).catch((err) => {
  console.log('[Model] DB sync error', err);
});

module.exports = models;
