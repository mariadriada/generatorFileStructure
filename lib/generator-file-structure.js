var Handlebars = require('handlebars');

function generateFileStructure(settings) {

  var template = Handlebars.compile('<h1>hola mundo para {{person}}</h1>');
  var compiled = template({ person: 'Mariaaaaaaaa jijijijijjij' });

  console.log(compiled);

  return function(files, metalsmith, done) {
    setImmediate(done);

    files['js/intro.js'] = {
      contents: compiled
    };

  }
}

module.exports = generateFileStructure;