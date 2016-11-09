/**
 * Goals : be able to test independently some features
 * Using Karma and Jasmine
 * - Understand how $x internal services work
 * - Create and test a filter (https://docs.angularjs.org/guide/unit-testing)
 */

describe ("testing a directive", function(){


    var $compile, $rootScope;


    //equivalent to angular.mock.module()
    // so angular.mock MUST be loaded by karma.conf.js
    beforeEach(module('super'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));


    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<comment content='Hello Karma'></comment>")($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("Hello");
    });


})

describe('SuperCtrl', function() {
    beforeEach(module('super'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.data', function() {
        it('must be declared at the start of the controller', function() {
            var $scope = {};
            var controller = $controller('SuperCtrl', { $scope: $scope });

            expect($scope.data).not.toBeUndefined();
            $scope.calculate(2,5)
            expect($scope.data).toBe(7);
        });
    });
});