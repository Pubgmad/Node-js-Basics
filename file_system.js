const fs=require('fs');
const path=require('path');


//Reading a file asynchronously using Node.js
fs.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});


//Writing a file asynchronously
fs.writeFile(path.join(__dirname, 'files', 'end.txt'), 'Morgan Stanly', (err) => {
  if (err) throw err;
  console.log('File written successfully')
  //Append a file asyncronously
  fs.appendFile(path.join(__dirname, 'files', 'end.txt'), '\n \n is in bangalore!', (err) => {
    if (err) throw err;
    console.log('File appended successfully');

    fs.rename(path.join(__dirname, 'files', 'end.txt'),path.join(__dirname, 'files', 'changed.txt') , (err) => {
    if (err) throw err;
    console.log('File renamed successfully');
  });

  });
});

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1); // Exit the process with a failure code
});