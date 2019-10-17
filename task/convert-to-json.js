const fs = require('fs');
const path = require('path');
const replace = require('replace-in-file');

const target = path.resolve('test/colors.css');
const dest = path.resolve('test/colors.json');

// convert colors.css to colors.json
// 1. strip comments syntax.
replace({
  files: target,
  from: [/(\/\*!).*/gm, /(\/\*)|(\*\/)/g],
  to: '',
})
.then(changedFiles => {
  console.log('Modified files:', changedFiles.join(', '));

  // 2. rename to colors.json
  fs.rename(target, dest, (err) => {
    if (err) throw err;
    console.log('Renamed complete');
  });
})
.catch(error => {
  console.error('Error occurred:', error);
});
