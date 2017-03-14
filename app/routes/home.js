const controller = require('../controllers/home')();

module.exports = function (app) {
  app.set('/index', controller.index);
  app.set('/', controller.index);
}
