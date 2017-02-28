// Dependencies

var fs = require("fs");
// The url library allows us to parse parts of the request url.
var url = require("url");

var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Lets start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

// We need a function which handles requests and send response
function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {
    case "/":
      displayHome(urlParts.pathname, req, res);
      break;
    case "/foods":
      displayFoods(urlParts.pathname, req, res);
      break;
    case "/movies":
      displayMovies(urlParts.pathname, req, res);
      break;
    case "/frameworks":
      displayFrameworks(urlParts.pathname, req, res);
      break;
    default:
      display404(urlParts.pathname, req, res);
  }
};

// When we visit the "http://localhost:8080/" path, this function is run.
function displayHome(url, req, res) {
 fs.readFile("favs.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

// When we visit the "http://localhost:8080/foods" path, this function is run.
function displayFoods(url, req, res) {
   fs.readFile("foods.html", function(err, data) {
   
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
 
};

function displayMovies(url, req, res) {
   fs.readFile("movies.html", function(err, data) {
    
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
 
};

function displayFrameworks(url, req, res) {
   fs.readFile("favs.html", function(err, data) {
    var myHTML = "<html>";
    myHTML += "<body><li>Bootstrap</li>";
    myHTML += "<li>Materialize</li>";
    myHTML += "<li>You get it.</li>"
    myHTML += "</body></html>";
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data + myHTML);
  });
 
};

// When we visit any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}