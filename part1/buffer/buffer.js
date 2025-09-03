// buffer creation

let buf = new Buffer.from("vishal")
let buf1 = new Buffer(10)
let buf2 = new Buffer([10,20,30])
let arr = new Array(10,20);


// console.log(buf);
// console.log(buf.toString());
// console.log(buf1);
// console.log(buf2);
// console.log(arr);


// Buffer Length
let BufLength = buf1.write("welcome")
console.log(BufLength);

