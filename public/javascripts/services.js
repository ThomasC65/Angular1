/**
 * Created by  User: nicorama
 * Date: 20/10/2014 ; Time: 14:07
 */
angular.module("fora")

    .factory("userService", function ($http, $q) {


        var service = {

            fetchUsers: function (byName) {
                if (byName === true) {
                    return  $http.get('/api/users/all');
                } else {
                    return  $http.get('/api/users');
                }

            },

            fetchAdmins: function (byName) {

                var query = null;
                if (byName === true) {
                    query = $http.get('/api/users/all');
                } else {
                    query = $http.get('/api/users');
                }

                return query.then(function (users) {
                    var admins = [];
                    for (var i = 0; i < users.length; i++) {
                        var currentUser = users[i];
                        if (currentUser.admin === true) {
                            admins.push(currentUser)
                        }
                    }
                });


            },

            order: function () {

            }

        }

        return service;

    })

