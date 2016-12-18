import express = require('express');
import bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.all('/', function(request, response){
	response.json({
		'status' : 'up',
	});
});

app.post('/echo', function(request, response){
	response.json(request.body);
});

app.listen(app.get('port'), function() {
  console.log('App running on port', app.get('port'));
});