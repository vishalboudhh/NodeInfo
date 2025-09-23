// import fs from 'fs'
// let textData = '';

// let readData = fs.createReadStream('input.txt',
//     {
//         encoding:"utf-8",
//         highWaterMark: 10
//     });

// readData.on('data',(chunk)=>{
//     // console.log(chunk);
//     textData += chunk
// });

// readData.on('end',(chunk)=>{
//     console.log(textData);
// })

// readData.on('error',(err)=>{
//     console.log(err.message);
// })



// import fs from 'fs';

// let WriteTextData = 'vishal meshram vishal meshram vishal meshram vishal meshram vishal meshram vishal meshram vishal meshram vishal meshram vishal meshram vishal meshram';

// // Create a write stream
// let WriteData = fs.createWriteStream('output.txt', {
//     encoding: "utf-8",
//     highWaterMark: 10
// });

// // Write data
// WriteData.write(WriteTextData);

// // End the stream
// WriteData.end();

// // Event listeners
// WriteData.on('finish', () => {
//     console.log("Data written successfully");
// });

// WriteData.on('error', (err) => {
//     console.log("Error:", err.message);
// });
