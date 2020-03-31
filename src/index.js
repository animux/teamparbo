'use strict';

const Express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const http = require('http');
const morgan = require('morgan');
const { warning, success, alert, error } = require('coders-logger');

let PORT = process.env.PORT || 80;

const app = Express();

app.use('/static', Express.static('./dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (request, response) => {
	response.send(fs.readFileSync('./dist/index.html').toString());
	return response.end();
});

let server = http.createServer(app).listen(PORT, () => success('Listening on port 80'));