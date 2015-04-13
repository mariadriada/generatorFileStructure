var Handlebars = require('handlebars');

function generateFileStructure(settings) {

  var templates = {},
    JS_TEMPLATE = 'TEMPLATE.js',
    CSS_TEMPLATE = 'TEMPLATE.css',
    rIsTemplate = /templates\//;

  return function(files, metalsmith, done) {
    setImmediate(done);

    Object.keys(files).forEach(function(file) {
      if (file.match(rIsTemplate)) {
        templates[file.replace(rIsTemplate, '')] = {
          contents: files[file].contents.toString()
        };

        delete files[file];
      }
    });

    console.log(templates);


    // Generate files
    settings.content.forEach(function(page) {

    });

  }
}

module.exports = generateFileStructure;