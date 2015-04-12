var Metalsmith = require('metalsmith');
var generateFileStructure = require('./lib/generator-file-structure');

console.log(generateFileStructure);

Metalsmith(__dirname)
  //.use(generateFileStructure())
  .build(function(err) {
    if (err) throw err;
  });