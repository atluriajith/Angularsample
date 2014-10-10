testApp.directive('employeeList', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'E',
        scope: {
            optData: "="
        },
        templateUrl: 'views/directive/emplist.html',
        controller: function ($scope) {
            $scope.edit = function (empId) {
                $scope.$parent.edit(empId);
            };
            $scope.delete = function (empId) {
                $scope.$parent.delete(empId);
            }
        }
    }
}]);

