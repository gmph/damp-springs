var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response){
	console.dir(request.body);
	reponse.writeHead(200, {'Content-Type' : 'application/json'});
	response.json({
		'online' : true
	});
});

app.post('/test', function(request, response){
	console.dir(request.body);
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.json({
		'test' : true
	});
});