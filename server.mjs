
//Reading a file asynchronously using Node.js
import { readFile } from 'node:fs';

readFile('./files/start.txt',"utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 

//exit on uncaught errors
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1); // Exit the process with a failure code
});

