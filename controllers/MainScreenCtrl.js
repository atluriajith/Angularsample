testApp.controller('MainScreenCtrl', [ '$scope', function ($scope) {
    var empid = 1;
    $scope.employees = [
        { id: 0, 'name': 'test', 'address': 'hyd', 'dept': 'Developer' }
    ];

    $scope.saveRecord = function () {
        if (typeof $scope.newEmployee.name != 'undefined') {
            if ($scope.newEmployee.id == null) {
                $scope.newEmployee.id = empid++;
                $scope.employees.push($scope.newEmployee);
            } else {
                for (i in $scope.employees) {
                    if ($scope.employees[i].id == $scope.newEmployee.id) {
                        $scope.employees[i] = $scope.newEmployee;
                    }
                }
            }
        }
        $scope.newEmployee = {};
    }

    $scope.delete = function (id) {
        for (i in $scope.employees) {
            if ($scope.employees[i].id == id) {
                $scope.employees.splice(i, 1);
                $scope.newEmployee = {};
            }
        }
    }
    $scope.edit = function (id) {
        for (i in $scope.employees) {
            if ($scope.employees[i].id == id) {
                $scope.newEmployee = angular.copy($scope.employees[i]);
            }
        }
    }
}]);
