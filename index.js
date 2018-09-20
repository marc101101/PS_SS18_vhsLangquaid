'use strict';

const fs = require('fs'),
    path = require('path'),
    http = require('http');

const express = require('express');
const cors = require('cors');

const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const colors = require('colors');
const compression = require('compression');


// process.env.PORT lets the port be set by Heroku
const serverPort = process.env.PORT || 8080;
const app = express();

// swaggerRouter configuration
const options = {
  swaggerUi: path.join(__dirname, '/server/swagger.json'),
  controllers: path.join(__dirname, './server/controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

//Frontend provided by backend service
app.use('/', express.static(path.join(__dirname, 'dist')));

app.use(cors(getCorsOptions()));
app.use(compression());

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const spec = fs.readFileSync(path.join(__dirname,'server/api/swagger.yaml'), 'utf8');

const swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());
});

module.exports = http.createServer(app).listen(serverPort, '0.0.0.0', function () {
  console.log('[REST] '.green + 'Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
  console.log('[REST] '.green + 'Swagger-ui is available on http://localhost:%d/docs', serverPort);
  console.log('[FRONTEND] '.green + 'UI is available on http://localhost:%d/', serverPort);
});

function getCorsOptions() {

  let corsAccessControlAllowOrigin = "*";
  let corsAccessControlAllowHeaders = "Authorization, Content-Type, Content-Length, Content-Disposition";
  let corsAccessControlAllowMethods = "GET, PUT, POST, DELETE, HEAD, OPTIONS";

  if (typeof process.env.corsAccessControlAllowOrigin !== 'undefined') {
    corsAccessControlAllowOrigin = process.env.corsAccessControlAllowOrigin;
  }

  if (typeof process.env.corsAccessControlAllowHeaders !== 'undefined') {
    corsAccessControlAllowHeaders = process.env.corsAccessControlAllowHeaders;
  }

  if (typeof process.env.corsAccessControlAllowMethods !== 'undefined') {
    corsAccessControlAllowMethods = process.env.corsAccessControlAllowMethods;
  }

  return {
    origin: corsAccessControlAllowOrigin,
    methods: corsAccessControlAllowMethods,
    allowedHeaders: corsAccessControlAllowHeaders,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
}
