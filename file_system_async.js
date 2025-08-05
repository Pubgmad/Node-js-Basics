const path =require('path');
const fspromises = require('fs').promises;

//Reading a file asynchronously using Node.js with promises for reducing callback hell
//Using async/await for better readability
const fileops=async () => {
    try {
        const data = await fspromises.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8')
        console.log(data)
        //Writing a file asynchronously
        await fspromises.writeFile(path.join(__dirname, 'files', 'end.txt'), 'Morgan Stanly');
        console.log('File written successfully');
        //Append a file asynchronously
        await fspromises.appendFile(path.join(__dirname, 'files', 'end.txt'), '\n \n is in bangalore!');
        console.log('File appended successfully');  
        //Rename a file asynchronously
        await fspromises.rename(path.join(__dirname, 'files', 'end.txt'), path.join(__dirname, 'files', 'changed.txt'));
        console.log('File renamed successfully');  
        
        //Delete a file asynchronously
        await fspromises.unlink(path.join(__dirname, 'files', 'start.txt'));

    } catch (err) {
        console.error('Error reading file:', err);
    }

}

fileops();

//Exit on uncaught errors
process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err);
    process.exit(1); // Exit the process with a failure code
});