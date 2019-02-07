
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

var config = require('./config.js');
var dbConfig = config['database'];
var mongooseUri = 'mongodb://' + dbConfig.host +':'+ dbConfig.port + '/' + dbConfig.dbName;
var mongooseOptions = {
	"user" : dbConfig['user'],
	"pass": dbConfig['pass'],
//	"dbName": dbConfig['dbName'],
	"useNewUrlParser": true
};

mongoose.connect(mongooseUri, mongooseOptions).then(
	() => { console.log('Connected to database') },
	err => { console.log(`Error occurred connecting to database: ${err}`) }
);

app.get('/', (req, res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
