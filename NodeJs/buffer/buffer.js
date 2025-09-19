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
// console.log(BufLength);



//Read Buffer 
readBuffer  = new Buffer(26);
for (let i = 0; i <= 26; i++) {
    readBuffer[i] = i + 65 ;
}

// console.log(readBuffer);
// console.log(readBuffer.toString());
// console.log(readBuffer.toString('ascii',4,10));
// console.log(readBuffer.toString('ascii',0,10));
//console.log(readBuffer.toString('utf-8',4,10));
// console.log(readBuffer.toJSON(readBuffer));



//Concate buffer
let con1 = new Buffer("Vishal");
let con2 = new Buffer("Boudhh");

const con3 = Buffer.concat([con1,con2]);
// console.log(con3);
// console.log(con3.toString());

