const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');

// jscs:disable
const banner = `/*! scss-palette v${pkg.version} | #{length($palette)} colors | ${pkg.homepage} | ${pkg.license} License */`;
// jscs:enable

const file = path.join(__dirname, './src/_palette.scss');

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;

  let result = data.replace(/\/\*!([\s\S]*?)\*\//, banner);
  fs.writeFile(file, result, 'utf8', (err) => {
    if (err) throw err;
    console.log(`Banner added to "${file}".`);
  });
});
