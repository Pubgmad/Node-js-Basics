//console.log("hi")
//console.log(global)
const os = require('os');
//console.log(os.platform());
//console.log(os.type());
//console.log(os.version());

//console.log(__dirname);
//console.log(__filename);

const path = require('path');
console.log(path.dirname(__filename));


const maths = require('./maths');

console.log(maths.add(5, 3));
console.log(maths.subtract(5, 3));  
console.log(maths.multiply(5, 3));
console.log(maths.divide(5, 3));



