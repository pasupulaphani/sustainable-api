# yahoo finance made easy

Demo: https://yahoo-fin.herokuapp.com/now/AAPL

#### get current data

*/now/:company_symbol*

	http://localhost:5000/now/AAPL
	
	{
	    name: "Apple Inc."
	    price: 128.78
	}


#### get hist data

*hist/aapl?from=:from_date&to=:to_date*

	http://localhost:5000/hist/aapl?from=2012-01-01&to=2012-12-31

	[
		{
			date: "2012-01-03T00:00:00.000Z"
			open: 409.39996
			high: 412.5
			low: 409
			close: 411.22998
			volume: 75555200
			adjClose: 55.18312
			symbol: "aapl"
		},
		{
			date: "2012-01-04T00:00:00.000Z"
			open: 410
			high: 414.68002
			low: 409.28
			close: 413.44
			volume: 65005500
			adjClose: 55.47969
			symbol: "aapl"
		}....
	]
