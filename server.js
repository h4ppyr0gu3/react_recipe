const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
  app.use(bodyParser.json());
  app.use(cors());

// retrieve a list of recipes 
app.get('/index', (req, res) => {
	let data = fs.readFileSync('recipes.json');
	res.json(JSON.parse(data));
})

// fetch recipe
app.get('/edit/:key', (req, res) => {
const key = req.params.key;
var data = JSON.parse(fs.readFileSync('recipes.json'));
var response = {[key]: data[key]}
res.json(JSON.stringify(response));
})

app.post('/edit/:key', (req, res) => {
	var key = req.params.key
	var write = {};
	var data = JSON.parse(fs.readFileSync('recipes.json'));
	for (var k in data) {
		if ( k === key) {
			continue;
		} else {
			write[k] = data[k];
		}
	}
	for ( var i in req.body ) {
		write[i] = req.body[i]
	}
	fs.writeFileSync('recipes.json', JSON.stringify(write), 'utf-8');
})

app.post('/add_recipe', (req, res) => {
	var write = {};
	var data = JSON.parse(fs.readFileSync('recipes.json'));
	for (var key in data) {
		write[key] = data[key];
	}
	var obj = req.body;
	for (var key in obj) {
		write[key] = obj[key];
	}
	fs.writeFileSync('recipes.json', JSON.stringify(write), 'utf-8');
})

// delete recipe
app.delete('/destroy/:key', (req, res) => {
const key = req.params.key;
var data = JSON.parse(fs.readFileSync('recipes.json'));
var recipes = {};
for (var k in data) {
	if ( k == key) {
		continue;
	} else {
		recipes[k] = data[k];
	}
}
fs.writeFileSync('recipes.json', JSON.stringify(recipes), 'utf-8');
})

app.listen(3001);
console.log('server listening on port :3001');