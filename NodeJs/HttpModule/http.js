const http = require('http')
// console.log(http);

let PORT = 3000
http.createServer((req,res)=>{
    if (req.url === "/") {
        res.setHeader("Content-Type","text/html")
        res.write("<h1>Hello Vishal</h1>")
        res.end(); 
    }
    else if(req.url === "/about") {
        res.setHeader("Content-Type","text/html")
        res.write("<h1>About Vishal</h1>")
        res.end(); 
    }
    else if(req.url === "/code") {
        res.setHeader("Content-Type","text/html")
        res.write("<h1>Code Vishal</h1>")
        res.end(); 
    }
    else{
        res.setHeader("Content-Type","text/html")
        res.write("<h1>File dose not exist</h1>")
        res.end(); 
    }
    
       
}).listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})

