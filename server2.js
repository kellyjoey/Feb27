// Here we require/import the HTTP module
var http = require("http");

// Here we define ports to listen to
var aPORT = 7000;
var bPORT = 7500;

// Here we create a generic function to handle requests and responses
function aRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("Hey, you look great.  And you're basically a rock star.");
  
};

function bRequest(request, response) {
	response.end("You're not looking so hot.  Maybe get back in bed.");
};

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var aServer = http.createServer(aRequest);


// Here we start our server so that it can begin listening to client requests.
aServer.listen(aPORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", aPORT);

});

var bServer = http.createServer(bRequest);

bServer.listen(bPORT, function(){
	console.log("Server listening on: http://localhost:%s", bPORT);
});
