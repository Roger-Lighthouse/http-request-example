var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};

function getAndPrintHTMLChunks (requestOptions) {

  https.get(requestOptions, function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length);
    console.log(data);
  });
  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

getAndPrintHTMLChunks (requestOptions);