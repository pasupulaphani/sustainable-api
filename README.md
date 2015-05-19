# yahoo finance made easy

Demo: https://sustainable-api.herokuapp.com/now/AAPL

#### get current price

*/now/:company_symbol*

	https://sustainable-api.herokuapp.com/now/AAPL
	
	{
	    name: "Apple Inc."
	    price: 128.78
	}


#### get hist prices

*hist/aapl?from=:from_date&to=:to_date*

	https://sustainable-api.herokuapp.com/hist/aapl?from=2012-01-01&to=2012-12-31

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

#### get latest news

*news/aapl*

	https://sustainable-api.herokuapp.com/news/aapl

	[
		{
			guid: "tag:finance.google.com,cluster:52778845259458"
			symbol: "NASDAQ:aapl"
			title: "What's Next for Apple Inc.'s iPad?"
			description: "What's Next for Apple Inc.'s iPad? Motley Fool - 18 hours ago Given that Apple's iPad sales have continued to plunge over the last several quarters, with the year-over-year revenue decline steepening to 29% in the company's most recent quarter, Apple's going to bring extremely compelling products to the table ... What has Led to the Comeback of Apple Inc.'s (NASDAQ:APPL) iPad? - WallStreet.org"
			summary: "What's Next for Apple Inc.'s iPad? Motley Fool - 18 hours ago Given that Apple's iPad sales have continued to plunge over the last several quarters, with the year-over-year revenue decline steepening to 29% in the company's most recent quarter, Apple's going to bring extremely compelling products to the table ... What has Led to the Comeback of Apple Inc.'s (NASDAQ:APPL) iPad? - WallStreet.org"
			date: "2015-05-18T18:56:15.000Z"
			link: "http://www.fool.com/investing/general/2015/05/18/whats-next-for-apple-incs-ipad.aspx"
		},
		{
			guid: "tag:finance.google.com,cluster:52778842532163"
			symbol: "NASDAQ:aapl"
			title: "Will Apple, Inc. Lose Out in the Internet of Things?"
			description: "Will Apple, Inc. Lose Out in the Internet of Things? Motley Fool - 17 hours ago Keep in mind that Apple is just weeks into this new market, which is expected to be worth nearly $33 billion by 2020, and the company is already showing itself as a market leader. That makes me question why anyone, especially so early in the IoT game ..."
			summary: "Will Apple, Inc. Lose Out in the Internet of Things? Motley Fool - 17 hours ago Keep in mind that Apple is just weeks into this new market, which is expected to be worth nearly $33 billion by 2020, and the company is already showing itself as a market leader. That makes me question why anyone, especially so early in the IoT game ..."
			date: "2015-05-18T20:03:10.000Z"
			link: "http://www.fool.com/investing/general/2015/05/18/will-apple-inc-lose-out-in-the-internet-of-things.aspx"
		}....
	]
