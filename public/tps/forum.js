angular.module("forum", [])
    .controller("ForumController", function($scope, $http, userService)  {

        $scope.users = globals.users;

        $scope.topics = globals.topics;



        /*$scope.getComments = function(topics){

            return topics.comment;

        };*/




    })
    
    .factory("userService", function($q, $http, apiService){

        var users = null; // could be used as a cache

        var service = {

            getUsers : function(){
               
            },
            getAdmins : function(){
                return service.getUsers().then(function(users){
                    //filter, map, some, foreach
                    return users.filter(function(user){
                        return user.admin;
                    })
                })
            }
        };
        return service;
    }).factory("apiService", function(){

        var service ={
            root : "http://localhost:3000/api/"
        }
        return service;
    })


























