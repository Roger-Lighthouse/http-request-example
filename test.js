var hf=require("./http-functions");

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};


function printHTML(html){
  console.log('Here it is:'+html);
}

hf.getHTML(requestOptions, printHTML);


