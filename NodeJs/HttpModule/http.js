const http = require('http')

// console.log(http);

http.createServer((req,res)=>{
        res.write('Hello http module');
        res.end();
}).listen(1000)