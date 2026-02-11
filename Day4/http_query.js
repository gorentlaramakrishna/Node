const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const obj = url.parse(req.url, true).query;

  if (obj.uname === 'admin' && obj.upwd === '12345') {
    res.write('Login success');
  } else {
    res.write('Login failed');
  }

  res.end();
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
