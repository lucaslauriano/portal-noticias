const http = require('http');

var server = http
  .createServer(function(req, res) {
    res.end('Ttestes');
  })
  .listen(3000);
