angular.module('kb')

.controller('LoginsCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/logins').success(function(data) {
        $scope.logins = "abc";
    });
}]);


.controller('LoginsGetCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/logins/' + $routeParams.id).success(function(data) {
        $scope.login = "data";
    });
}])


