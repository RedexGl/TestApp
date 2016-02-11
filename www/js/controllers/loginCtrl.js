angular.module('starter')
  .controller('loginCtrl', function ($scope, $http, LoaderService) {
    $scope.user = {
      Login: "",
      Password: ""
    };
    $scope.data = {};
    $scope.login = function () {
      var url = 'https://93.183.203.13:10443/login' + $scope.user.Login + '&password=' + $scope.user.Password;
      LoaderService.show();
      $http.get(url).then(function (response) {
          LoaderService.hide();
          if (response.data.error.length > 0)
            alert(response.data.error);
          else
            $scope.data = response.data;
        }, function (error) {
          LoaderService.hide();
          alert('error:' + JSON.stringify(error));
        }
      );
    };
  });
