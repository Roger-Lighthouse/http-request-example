var https=require('https');

function getHTML(options, callback){
   https.get(options, function (response) {
   response.setEncoding('utf8');
   var output="";
   response.on('data', function (data) {
     console.log('Chunk Received. Length:', data.length);
     output+=data;
     callback(data);
    });
    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

function printHTML(html){
  console.log(html);
}

module.exports.getHTML = getHTML;

