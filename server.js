var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	http = require('http'),
	app = express(),
	api = require('./server/routes/api'),
	webSocketServer = require('./server/websocketserver');
// parsers

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'dist')));

app.use('/schoolapp',api);

app.get('*',( request , response ) => {
	console.log(`default route.....`)
	response.sendFile(path.join(__dirname,'dist/index.html'));
});

var port = process.env.PORT || 3000;
app.set('port',port);

var server = http.createServer(app);

server.listen(port,() => console.log(`server is running on port ${port}`));