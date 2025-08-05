//Event emitter module



const fs =require('fs');
const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');

const fsPromises = fs.promises;
const path = require('path');

const logEvents = async (message) =>{
    const datetime=`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
    const logItem = `${datetime}\t${uuidv4()}\t${message}\n`;
    console.log(logItem);
    try{

        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }

        await fsPromises.appendFile(path.join(__dirname,'logs',"eventFile.txt"),logItem);

    }
    catch(error){
        console.error(error);
    }
}

module.exports = logEvents;