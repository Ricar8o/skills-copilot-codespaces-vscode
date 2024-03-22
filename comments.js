// Create web server
// Create a web server that listens to requests on port 3000. The server should respond with the following:
// A header with status code 200 and content type application/json.
// A JSON string with the following data:
// {
//   "comments": [
//     { "id": 1, "author": "author1", "comment": "This is the first comment" },
//     { "id": 2, "author": "author2", "comment": "This is the second comment" }
//   ]
// }

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    comments: [
      { id: 1, author: 'author1', comment: 'This is the first comment' },
      { id: 2, author: 'author2', comment: 'This is the second comment' }
    ]
  }));
});

server.listen(3000);
console.log('Server is listening on port 3000');