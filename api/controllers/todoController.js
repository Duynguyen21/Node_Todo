var Todos = require("../models/todoModel");

function getTodos(res) {
    Todos.find(function(err, todos) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(todos);
        }
    });
}
module.exports = function(app) {
    // lay toan bo cac dau viec todos
    app.get("/api/todos", function(req, res) {
        getTodos(res);
    });
    app.get("api/todos/:id", function(req, res) {
        Todos.findById({ _id: req.params.id }, function(err, todo) {
            if (err) {
                throw err;
            } else {
                res.json(todo);
            }
        });
    });
    //create a todo

    app.post("/api/todo", function(req, res) {
        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        }
        Todos.create(todo, function(err, todo) {
            if (err) {
                throw err;
            } else {
                getTodos(res);
            }
        })
    })

    //update a todo
    app.put("/api/todo", function(req, res) {
        if (req.id) {
            return res.status(500).send("ID is required");
        } else {
            Todos.update({
                _id: req.body.id
            }, {
                text: req.body.text,
                isDone: req.body.isDone
            }, function(req, todo) {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    getTodos(res);

                }
            });
        }

    });
    app.delete("/api/todo/:id", function(req, res) {
        Todos.remove({
            _id: req.params.id,
        }, function(err, todo) {
            if (err) {
                return req.status(500).json(err);
            } else {
                getTodos(res);
            }
        });

    });
}