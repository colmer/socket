const Koa = require('koa');
const app = new Koa();

const fs = require('fs');
const path = require('path');

const config = require('config');

const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middlewares.forEach(function(middleware) {
  app.use(require('./middlewares/' + middleware));
});

module.exports = app;