/**
 * Created by  User: nicorama
 * Date: 02/11/2014 ; Time: 20:43
 */
angular.module("super", [])
    .controller("SuperCtrl", function($scope){

        console.log("We are inside the standalone Controller")
        $scope.data="Some data";
        $scope.calculate = function(x, y){
            $scope.data = x+y;
        }

    })
    .directive("comment", function(){

        return {
            template: "<div class='comment'>{{content}}</div>",
            restrict: 'E',
            scope:{
                content:'@'
            },
            controller : function($scope){
                  console.log ("We are inside the 'super:comment' directive controller")
            },
            link: function postLink(scope, element, attrs) {
                //No binding here
               // element.append("<div class='comment'>"+attrs.content+"</div>");
            }
        }
    })
