function generateFileStructure(settings) {

  console.log('jajajajjaj settings', settings);

  return function(files, metalsmith, done) {
    setImmediate(done);

    console.log('files', files);
    console.log('metalsmith', metalsmith);
  }
}

module.exports = generateFileStructure;