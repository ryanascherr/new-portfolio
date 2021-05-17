const http = require('http');

const PORT = 3001;

const handleRequest = (request, response) => {
    response.end(`It works! Path Hit: ${request.url}`)
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });  