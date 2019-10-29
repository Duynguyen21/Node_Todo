var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ['$scope', 'todo-service', function($scope, ServiceTodos) {

    $scope.appName = "Todo Dashboard!!!";

    $scope.formData = {};

    $scope.todos = [];

    // load data from api
    ServiceTodos.get().then(function(result) {
        $scope.todos = result.data;
    });

    $scope.createTodo = function() {
        var todo = {
            text: $scope.formData.text,
            isDone: false
        };

        $scope.todos.push(todo);
        $scope.formData.text = "";
    };

    $scope.updateTodo = function(todo) {
        console.log("updateTodo : ", todo);
    };

    $scope.deleteTodo = function(todo) {
        console.log("deleteTodo: ", todo);
    };

}]);