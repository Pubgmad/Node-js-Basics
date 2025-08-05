//create a directory if it does not exist
const fs =require('fs');


if (!fs.existsSync('./newDir')) {
    console.log('Directory does not exist, creating now...');
    fs.mkdir('./newDir', (err) => {
        if (err) {
            console.error('Error creating directory:', err);
        }
        else {
            console.log('Directory created successfully!');
        }
});
    }
else {
    console.log('Directory already exists.');
}

//remove a directory

// if (fs.existsSync('./newDir')) {
//     console.log('Directory exists, deleting now...');
//     fs.rmdir('./newDir', (err) => {
//         if (err) {
//             console.error('Error deleting directory:', err);
//         }
//         else {
//             console.log('Directory deleted successfully!');
//         }
// });
//     }
// else {
//     console.log('Directory already doesnt  exists.');
// }