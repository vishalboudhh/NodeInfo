const { log } = require('console');
const url = require('url')
// console.log(url);


const urlString = 'https://user:password@example.com:8080/api/v1/services?page=1&limit=10#section1';

let parsedUrl = url.parse(urlString,true);
console.log(parsedUrl);
console.log(parsedUrl.pathname);
 
