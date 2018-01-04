'use strict';

let SwaggerExpress = require('swagger-express-mw');
let SwaggerUi = require('swagger-tools/middleware/swagger-ui');
let app = require('express')();
module.exports = app; // for testing

// Setup DB connection
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airports');
mongoose.Promise = Promise;

let config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(SwaggerUi(swaggerExpress.runner.swagger));

  // install middleware
  swaggerExpress.register(app);

  let port = process.env.PORT || 10010;
  app.listen(port);
});