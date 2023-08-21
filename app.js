const http = require('http');
const server = http.createServer((req, res) => {
  const name = process.env.MY_ENV_NAME || 'world' ;	
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('<h1>hello $(name)</h1>');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
