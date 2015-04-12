var Metalsmith = require('metalsmith');

var generateFileStructure = require('./lib/generator-file-structure');
var settings = require('./settings');

Metalsmith(__dirname)
  .use(generateFileStructure(settings))
  .build(function(err) {
    if (err) throw err;
  });