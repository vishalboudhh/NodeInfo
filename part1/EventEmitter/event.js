// EventEmitter is a core module
// EventEmitter is a class

let EventEmitter = require('events');
let Event = new EventEmitter();

// Event.on('getName',()=>{
//     console.log("Hello vishal");
// })
// Event.emit('getName')

// Event.once('getName',(data)=>{
//     console.log(`hello ${data.fname}`);
// })

// Event.addListener('getName',(data)=>{
//     console.log(`hello ${data.fname}`);
// })

Event.emit('getName',{fname :"vishal"})

