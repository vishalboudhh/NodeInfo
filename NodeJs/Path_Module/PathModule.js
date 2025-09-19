const path = require('path')

// console.log(__dirname);
// console.log(__filename);

// 1.Dirname
let pa = path.dirname("A:/NodeJsInfo/part1/Path Module/PathModule.js")
// console.log(pa);

//2.Basename
let BaseName = path.basename("e:/NodeJsInfo/part1/Path Module/PathModule.js",".js");
// console.log(BaseName);

//3.extname(path):
let Extname = path.extname("e:/NodeJsInfo/part1/Path Module/PathModule.js");
// console.log(Extname);

//4.Parse
let Parse = path.parse("e:/NodeJsInfo/part1/Path Module/PathModule.js");
// console.log(Parse);
// console.log(Parse.dir);

//5 Join
let Join = path.join("e:","Name","File");
console.log(Join);

