const fs = require('fs');

// STREAM
const readableStream = fs.createReadStream('./input.txt', {
  highWaterMark: 15,
});

const writeableStream = fs.createWriteStream('./output.txt');

readableStream.on('readable', () => {
  try {
    writeableStream.write(`${readableStream.read()} \n`)
  } catch (err) {
    console.error(err);
  }
})

readableStream.on('end', () => {
  console.log('finished reading and writing file');
});
