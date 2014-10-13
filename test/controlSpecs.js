describe('testApp', function () {
    var scope, controller;
    beforeEach(function () {
        module('testApp');
    });

    describe('LoginCtrl', function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('LoginCtrl', {
                '$scope': scope
            });
        }));
        it('sets the name', function () {
            expect(scope.title).toBe('Login View');
        });
    });
});