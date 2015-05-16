var express = require('express');
var yahooFinance = require('yahoo-finance');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/now/:symb', function(request, response) {

	response.header("Access-Control-Allow-Origin", "*");
	yahooFinance.snapshot({
	  symbol: request.param('symb'),
	  period: 's'
	}, function (err, quotes) {
	  response.json({
	  	name: quotes.name,
	  	price: quotes.bid
	  })
	});
});

app.get('/hist/:symb', function(request, response) {

	response.header("Access-Control-Allow-Origin", "*");
	yahooFinance.historical({
	  symbol: request.param('symb'),
	  from: request.query.from,
	  to: request.query.to
	}, function (err, quotes) {
	  response.json(quotes)
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
