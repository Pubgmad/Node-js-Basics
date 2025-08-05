// console.log("This is the index.js file.");

// const {format} =require('date-fns');
// console.log(format(new Date(), 'yyyy-MM-dd'));

// const { v4: uuid } = require('uuid');
// console.log(uuid());


const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
  logEvents(msg);
});
myEmitter.emit('log', 'Log event emitted!');