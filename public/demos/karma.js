/**
 * Created by  User: nicorama
 * Date: 02/11/2014 ; Time: 20:43
 */
angular.module("demo", [])
    .controller("AppCtrl", function($scope){

        $scope.data="Some data";

    })
    .directive("comment", function(){

        return {
            template: "<div class='comment'>{{content}}</div>",
            restrict: 'E',
            scope:{
                content:'@'
            },
            link: function postLink(scope, element, attrs) {
                //No binding here
                element.append("<div class='comment'>"+attrs.content+"</div>");
            }
        }
    })
