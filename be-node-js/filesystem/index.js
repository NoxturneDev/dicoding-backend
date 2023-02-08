const fs = require('fs');

function readFileCallback(error, data) {
  if(error){
    console.log('failed to read file');
    return;
  }

  console.log(data);
}

fs.readFile('./data.txt', 'UTF-8', readFileCallback);

// synchronous
fs.readFileSync('./data.txt', 'utf-8');

