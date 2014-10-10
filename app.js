var testApp = angular.module('testApp', []);
testApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/login', {templateUrl: 'views/login/Login.html', controller: 'LoginCtrl'}).
        when('/list', {templateUrl: 'views/data/list.html', controller: 'MainScreenCtrl'}).
        otherwise({redirectTo: '/login'});
}]);