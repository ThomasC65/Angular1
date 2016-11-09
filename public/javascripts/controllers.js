/**
 * Created by  User: nicorama
 * Date: 20/10/2014 ; Time: 13:05
 */


var app = angular.module("fora");

app.controller("UsersController", function (userService, $scope, $http) {

    /**
     * Needed for protractor tests. Don't delete this function
     */
   $scope.fetchUsers = function(){
       $http.get('/api/users/all').then(function(response){
           $scope.users = response.data;
       })
   }
})