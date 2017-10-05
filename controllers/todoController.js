var Todos = require('./../models/ToDoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    app.get('/todos/:username', function(req, res) {

        Todos.find({username: req.params.username}, function(err, results) {
            if (err) {
                throw err;
            }
            res.send(results);
        });

    });

    app.post('/todos', function(req, res) {
        var todo = Todos({
            username: 'ankitjain',
            todo: 'Hello World',
            isDone: false,
            hasAttachment: false
        });

        todo.save(function(err, results) {
            if (err)
                throw err
            console.log(results);
            res.send(results);
        });
    });

    app.put('/todos/:username', function(req, res) {
        Todos.update({username: req.params.username},
            {
                todo: req.query.todo,
                isDone:req.query.isDone,
                hasAttachment:req.query.hasAttachment
            }, function (err, result) {
                if (err) {
                    throw err;
                }
                console.log(result);
                res.send(result);
            }
        );
    });

    app.get('/todos/:username', function(req, res) {
        Todos.remove({username: req.params.username}, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send(result);
        });
    });

}
