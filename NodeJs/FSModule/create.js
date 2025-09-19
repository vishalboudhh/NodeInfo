const fs = require('fs');
const path = require('path')
// console.log(fs);


// const fileName = 'Hello.txt'
// fs.writeFileSync(fileName,"I am vishal",'utf-8')

const fileName = 'new.txt'

let pathFile = path.join(__dirname,fileName)
fs.writeFileSync(pathFile,"new",'utf-8')
console.log('file is created');
