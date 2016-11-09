/**
 * Created by  User: nicorama
 * Date: 20/10/2014 ; Time: 15:01
 */
angular.module("fora").directive("users", function () {

    return {
        templateUrl: "javascripts/templates/users.tpl.html",
        restrict: 'E',
        controller: function ($scope, $element, $attrs, userService) {

        },
        scope: {
            admin: '='
        },

        compile: function () {
            return {
                pre: function preLink(scope, element, attrs, controller) {

                },
                post: function postLink(scope, iElement, iAttrs, controller) {

                }
            }
        }
    }

})
