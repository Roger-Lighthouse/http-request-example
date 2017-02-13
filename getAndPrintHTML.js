var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};

function getAndPrintHTML (requestOptions) {

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    var output="";
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      output+=data;
      console.log(output);
    });
    console.log(output);
    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTML(requestOptions);