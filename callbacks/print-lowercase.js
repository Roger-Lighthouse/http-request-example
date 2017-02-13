var getHTML=require("../http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printHTML(html){
  console.log('Here it is:'+html.toLowerCase());
}

getHTML(requestOptions, printHTML);