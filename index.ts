import express = require('express');
import bodyParser = require('body-parser');

let app = express();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.all('/', (request, response) => {
	response.json({
		'status' : 'up',
	});
});

app.post('/echo', (request, response) => {
	response.json(request.body);
});

app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));
});