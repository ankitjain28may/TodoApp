var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var handlebars = require('express-handlebars');
require('dotenv').config();

var dbConfig = require('./config/dbConfig');
var Todos = require('./models/ToDoModel');
var todoController = require('./controllers/todoController');
// var setup = require('./Seed');

var app = express();

// Mongoose Database Connection
mongoose.connect(dbConfig.dbConnectionString(), { useMongoClient: true });

// Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Static Files
app.use('/public', express.static(__dirname + '/public'));

// Seeding Dummy Data
// setup(app);
todoController(app);

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server is running at http://localhost:'+port);
});
