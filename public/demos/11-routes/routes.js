angular.module("demo", ["ngRoute"])
    .config(function($routeProvider){

        $routeProvider.
            when('/users', {
                templateUrl: 'routes-users.html',
                controller: 'UserController'
            }).
            when('/topics', {
                templateUrl: 'routes-topics.html',
                controller: 'TopicController'
            }).
            otherwise({
                redirectTo: '/'
            })

    }) .controller("UserController", function($scope){

        $scope.name = "John"

    }).controller("TopicController", function($scope){
        alert("TopicController")
        $scope.title= "Star Wars"

    })