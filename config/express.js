var express = require('express');
//var home = require('../app/routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function () {
  var app = express();

  // variável de ambiente
  app.set('port',3000);

  // middleware
  app.use(express.static('./public'));
  app.set('view engine','ejs');
  app.set('views','./app/views');
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  /*
  * - Com o Express-Load tem que carregar os arquivos nessa ordem
  * models
  * controllers
  * routes
  * - O parâmetro cwd é adicionado para alterar o diretório padrão
  */

  load('model', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
