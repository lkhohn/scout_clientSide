
angular.module('app')
  	.controller('MainController', ['$scope', '$http', 'Password', MainController]);

     function MainController ($scope, $http, Password) {

      var vm = this;

      // this.regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
      //
  	  // $scope.$watch('user.password', function(pass) {
  		// 	$scope.passwordStrength = Password.getStrength(pass);
  		// 	if($scope.isPasswordWeak()) {
  		// 		$scope.form.password.$setValidity('strength', false);
  		// 	} else {
  		// 		$scope.form.password.$setValidity('strength', true);
  		// 	}
  		// });
      //
  		// $scope.isPasswordWeak = function() {
  		// 	return $scope.passwordStrength < 40;
  		// };
  		// $scope.isPasswordOk = function() {
  		// 	return $scope.passwordStrength >= 40 && $scope.passwordStrength <= 70;
  		// };
  		// $scope.isPasswordStrong = function() {
  		// 	return $scope.passwordStrength > 70;
  		// };
  		// $scope.isInputValid = function(input) {
  		// 	return input.$dirty && input.$valid;
  		// };
  		// $scope.isInputInvalid = function(input) {
  		// 	return input.$dirty && input.$invalid;
  		// };
  	}


    angular.module('app').controller('ScoutListController', ['$routeParams', '$location', 'ScoutService', ScoutListController]);
    // angular.module('app').controller('ScoutDetailsController', ['$routeParams', 'ScoutService', ScoutDetailsController]);
    angular.module('app').controller('NewScoutController', ['ScoutService', NewScoutController]);
    // angular.module('app').controller('UserController', ['$http', '$window', userController]);

    function ScoutListController($routeParams, $location, ScoutService) {
      var vm = this;
      console.log('scout controller ')
      vm.title = "Scout";
      ScoutService.getScout.then(function(scoutData) {
        vm.scoutList = scoutData.data;
      }, function(err) {
        console.log(err);
      });


      vm.deleteScout = function(id) {
        ScoutService.deleteScout(id).then(function() {
          console.log('Deleted!');
        }, function(err) {
          console.log(err);
        });

      };
      // vm.editBookRoute = $location.path('/edit');
      vm.editScout = function(id) {
        var editObj = {
          scoutName: 'Dry cleaning'
        };
        ScoutService.editScout(id, editObj).then(function(data) {
          console.log(data.data[0].id);
          console.log(editObj);
          var orgId = data.data[0].id;
        }, function(err) {
          console.log('ERROR: ' + err);
        });
      };
    }

    function ScoutDetailsController($routeParams, ScoutService) {
      var vm = this;
      var id = parseInt($routeParams.scoutID);
      ScoutService.getScoutDetails(id).then(function(data) {
        vm.details = data.data[0];
        // console.log(data);
      }, function(err) {
        console.log('ERROR: ' + err);
      });
    }

    function NewScoutController(ScoutService) {
      var vm = this;

      vm.submitScout = function () {
        var scoutObj = {
          item: vm.itemInput
        };

        ScoutService.postNewScout(scoutObj).then(function(data) {
          console.log(data);
        }, function(err) {
          console.log('ERROR: ' + err);
        });
      };
    }

    function userController($http, $window) {
      var vm = this;
      // vm.user = {
      //   username: 'john.doe',
      //   password: 'foobar'
      // };
      vm.message = '';
      vm.submit = function() {
        console.log(vm.user);
        $http
          .post('http://localhost:3000/auth/', vm.user)
          .success(function(data, status, headers, config) {
            $window.sessionStorage.token = data.token;
            vm.message = 'Welcome!';
          })
          .error(function(data, status, headers, config) {
            //Erase token if the user fails to login
            delete $window.sessionStorage.token;
            vm.message = 'Error: Invalid username or password';
          });
      };

      vm.restrictedList = function() {
        $http
          .get('http://localhost:3000/api/restricted/')
          .success(function(data, status, headers, config) {
            console.log(data.name);
          });
      };
    }
