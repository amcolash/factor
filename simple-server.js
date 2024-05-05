// Based on: https://gist.github.com/ddallala/1402251

// Note the following code works for Node 0.4+

// To run: $ node simple_secure_server.js
// http://nodejs.org/#download

// based on: http://www.silassewell.com/blog/2010/06/03/node-js-https-ssl-server-example/
// based on: http://net.tutsplus.com/tutorials/javascript-ajax/learning-serverside-javascript-with-node-js/
// based on: http://nodejs.org/docs/v0.6.3/api/https.html#https.Server

var domainname = '127.0.0.1'; // array of domain names, in host file all have to point to 127.0.0.1
var port = 8000; // can be on any port, but 443 is the default when no port names specified in browsers

const fs = require('fs'),
  url = require('url'),
  path = require('path'),
  https = require('https');

/*
openssl genrsa -out privatekey.pem 1024
openssl req -new -key privatekey.pem -out certrequest.csr
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
*/
var options = {
  key: fs.readFileSync('.cert/privkey.pem').toString(),
  cert: fs.readFileSync('.cert/cert.pem').toString(),
};

// Request Handler
var handler = function (request, response) {
  console.log('=======================================================');
  console.log('Incoming request');

  var uri = url.parse(request.url).pathname;
  var filename = path.join(process.cwd(), uri);

  console.log('url: ' + request.url);
  console.log('uri: ' + uri);
  console.log('filename: ' + filename);

  fs.exists(filename, function (exists) {
    if (!exists) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('404 Not Found\n');
      response.end();

      console.log('Error: 404 Not Found');
      console.log('=======================================================');
      return;
    }

    fs.readFile(filename, 'binary', function (err, file) {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.write(err + '\n');
        response.end();
        return;
      }

      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.write(file, 'binary');
      response.end();
    });
    console.log('Success: Sent');
    console.log('=======================================================');
  });
};

// loading server
var server = https.createServer(options);
server.on('request', handler);
server.listen(port, domainname);

// Log to confirm server is running
console.log('Current Working Directory: ' + process.cwd());
console.log('Servers running at:');
console.log('\thttps://' + domainname + ':' + port + '/');
