var ToDos = require('./Models/ToDoModel');

module.exports = function(app) {

    app.get('/api', function(req, res) {
        var seedData = [
            {
                username: 'ankitjain',
                todo: 'Hello world',
                isDone: false,
                hasAttachment: false
            }
        ];

        var todo = new ToDos(seedData);
        todo.save(function(err, result){
            console.log(result);
            res.send(result);
        });
    });

}
