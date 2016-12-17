var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	reponse.writeHead(200, {'Content-Type': 'application/json'})
	response.end({'status' : 'live'});
});

app.post('/test', function(request, response){
	console.dir(request.body);
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.end({'test' : true});
});