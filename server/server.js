// simple static file server

var express = require('express'),
	path = require('path'),
	app = express();

var app = express(),
	mode = app.get('env') === 'development' ? 'dev' : 'dist',
	filePath = path.join(__dirname, '..', mode);

// exception, serve the components
app.use('/components', express.static(__dirname + '/../components'))
app.use('/test', express.static(__dirname + '/../test'))
app.use('/client', express.static(__dirname + '/../client'))
app.use(express.static(filePath));

app.listen(3000, function () {
	console.log('server up and running at port 3000');
})