/**
 * Created by  User: nicorama
 * Date: 20/10/2014 ; Time: 13:58
 */
angular.module("fora").filter("admins", function(){

    return function (array, expression, comparator) {
        var result = [];
        angular.forEach(array, function (element) {

            if (element.admin){
                result.push(element);
            }
        });
        return result;
    }


})
