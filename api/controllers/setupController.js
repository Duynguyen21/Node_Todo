var Todos = require("./../models/todoModel");

module.exports = function(app) {
    app.get("/api/setupTodos", function(req, res) {
        var seedTodos = [{
                text: "Hoc Nodejs",
                isDone: false
            },
            {
                text: "Hoc Angularjs",
                isDone: false

            },
            {
                text: " Viet mot ung dung hoan chinh",
                isDone: false

            }
        ];

        Todos.create(seedTodos, function(err, results) {
            res.json(results);
        });
    });
}