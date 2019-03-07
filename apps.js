// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if(request.url === '/images/cat/cat1.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat/cat1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/images/cat/cat2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/images/cat/cat3.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat/cat3.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/images/cat/cat4.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat/cat4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/images/car/car1.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car/car1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/images/car/car2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }else if(request.url === '/images/car/car3.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car/car3.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/cars/new') {
        fs.readFile('./views/form.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('The url requested is not available!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
