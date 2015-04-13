var Handlebars = require('handlebars');
var path = require('path');

function generateFileStructure(settings) {

  var templates = {},
    JS_TEMPLATE = 'TEMPLATE.js',
    CSS_TEMPLATE = 'TEMPLATE.css',
    rIsTemplate = /templates\//;

  return function(files, metalsmith, done) {
    setImmediate(done);

    /**
     * Generates a new set of files
     *
     * @param {string} file Name of the file
     * @param {string} pageSettings Page configuration
     */
    function generateSet(file, pageSettings) {
      console.log(file);

      files[file + '.html'] = {};
      files[file + '.html'].contents = Handlebars.compile(templates[pageSettings.template])({
        files: {
          js: path.join(settings.paths.jsFolder, file + '.js'),
          css: path.join(settings.paths.cssFolder, file + '.css')
        }
      });

      files[path.join(settings.paths.jsFolder, file + '.js') ] = {
        contents: templates[JS_TEMPLATE]
      };

      files[path.join(settings.paths.cssFolder, file + '.css') ] = {
        contents: templates[CSS_TEMPLATE]
      };
    }

    Object.keys(files).forEach(function(file) {
      if (file.match(rIsTemplate)) {
        templates[file.replace(rIsTemplate, '')] = files[file].contents.toString();
        delete files[file];
      }
    });

    // Generate files
    settings.content.forEach(function(page, index) {
      // TODO: Add zero leading
      var file = settings.paths.base + '_0' + (index + 1);

      if (!templates.hasOwnProperty(page.template)) {
        return false;
      }

      generateSet(file, page);

      if (page.hasOwnProperty('size')) {
        for (var i = 1; i < page.size + 1; i++) {
          // TODO: Add zero leading
          generateSet(file + '_0' + i, page);
        }
      }

    });

  }
}

module.exports = generateFileStructure;