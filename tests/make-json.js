'use strict';

const replace = require('replace-in-file');
const fs = require('fs');

// convert colors.css to colors.json
// 1. strip comments syntax.
replace({
  files: 'tests/colors.css',
  from: [/(\/\*\!).*/gm, /(\/\*)|(\*\/)/g],
  to: ''
})
  .then(changedFiles => {
    console.log('Modified files:', changedFiles.join(', '));
    // 2. rename to colors.json
    fs.rename('tests/colors.css', 'tests/colors.json', (err) => {
      if (err) throw err;
      console.log('Renamed complete');
    });
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });;
