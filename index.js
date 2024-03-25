const { argv } = require('node:process');
const fs = require('fs');

const a = 7;
const b = 8;
const c = a + b;
console.log("Hello World!", c);


// fs.writeFileSync('myfile.txt', 'Hey there!');
fs.appendFileSync("myfile.txt", "\r\nHey there!");