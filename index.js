
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose.connect('mongodb://local-dev:supersecret@10.0.0.22:27017/test').then(
	() => { console.log('Connected to database') },
	err => { console.log(`Error occurred connecting to database: ${err}`) }
);

app.get('/', (req, res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
