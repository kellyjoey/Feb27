// Here we require/import the HTTP module
var http = require("http");

// Here we define ports to listen to
var aPORT = 7000;
var bPORT = 7500;

// Here we create a generic function to handle requests and responses
function aRequest(request, response) {
	goodPhrases = ["Superb.  Superb.", "Dude you rock", "You got this", "Hey, you look great.  And you're basically a rock star."];
  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end(goodPhrases[Math.floor(Math.random() * 4)]);  
};

function bRequest(request, response) {
	badPhrases = ["Get it together.", "C'mon", "Really?", "You're not looking so hot"];
	response.end(badPhrases[Math.floor(Math.random() * 4)]);
};

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var aServer = http.createServer(aRequest);
var bServer = http.createServer(bRequest);

// Here we start our server so that it can begin listening to client requests.
aServer.listen(aPORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", aPORT);
});



bServer.listen(bPORT, function(){
	console.log("Server listening on: http://localhost:%s", bPORT);
});
