authenticationService = function authenticationService() {

    this.authenticate = function authenticate(username, password, resultFunction, failureFunction) {
        var resultObject;
        if ((username == 'me') && (password == 'me')) {
            resultObject = {"resultObject": {"role": 1, "username": "me", "userID": 1}, "error": 0};
        } else {
            resultObject = {"error": 1};
        }
        resultFunction(resultObject);
    }
};
testApp.factory('AuthenticationService', function () {
        return new authenticationService();
    }
);
