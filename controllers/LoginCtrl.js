testApp.controller('LoginCtrl', [ '$scope', '$location', 'AuthenticationService',
    function ($scope, $location, AuthenticationService) {
        $scope.title = 'Login View';

        $scope.usernameError = '';
        $scope.passwordError = '';
        $scope.username = '';
        $scope.password = '';

        $scope.onReset = function onReset() {
            console.log('onReset');
        }
        $scope.onLogin = function onLogin() {
            console.log('onLogin');
            var errorFound = false;
            if ($scope.username == '') {
                $scope.usernameError = 'You Must Enter a Username'
                errorFound = true;
            } else {
                $scope.usernameError = '';
            }

            if ($scope.password == '') {
                $scope.passwordError = 'You Must Enter a Password';
                errorFound = true;
            } else {
                $scope.passwordError = '';
            }
            if (errorFound == true) {
                return;
            }

            AuthenticationService.authenticate($scope.username, $scope.password, onLoginSuccess, onLoginError);

        }

        var onLoginError = function onLoginError(data, status, headers, config) {
            console.log('failure');
            console.log(data);
            alert(data);
        }

        var onLoginSuccess = function onLoginSuccess(data, status, headers, config) {
            if (data.error == 1) {
                alert("We could not log you in");
                return;
            }
            $scope.user = data.resultObject;
            $location.path("/list");
        }
        $scope.onReset = function onReset() {
            $scope.username = '';
            $scope.password = '';
        }
    }]);