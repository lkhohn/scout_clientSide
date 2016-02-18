angular.module('app')
.controller('MainController', ['$scope', '$http', MainController]);
function MainController ($scope, $http) {
  var vm = this;
}



angular.module('app')
.controller('NewScoutController', ['$scope', 'ScoutService', NewScoutController]);
function NewScoutController($scope, ScoutService) {
  var vm = this;
  vm.title="add scout title test";

  // vm.submitScout = function () {
  //   var scoutObj = {
  //     item: vm.itemInput
  //   };
  //   ScoutService.postNewScout(scoutObj).then(function(data) {
  //     console.log(data);
  //   }, function(err) {
  //     console.log('ERROR: ' + err);
  //   });
  // };
}


angular.module('app')
.controller('SignupController', ['$scope', 'Password', 'addUserService', SignupController]);
function SignupController($scope, Password, addUserService){
  var vm = this;
  this.regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

  $scope.$watch('user.password', function(pass) {
    // console.log(Password.getStrength(pass))
  	$scope.passwordStrength = Password.getStrength(pass);

  	if($scope.isPasswordWeak()) {
  		$scope.form.password.$setValidity('strength', false);
  	} else {
  		$scope.form.password.$setValidity('strength', true);
  	}
  });

  $scope.isPasswordWeak = function() {
  	return $scope.passwordStrength < 20;
  };
  $scope.isPasswordOk = function() {
  	return $scope.passwordStrength >= 20 && $scope.passwordStrength <= 50;
  };
  $scope.isPasswordStrong = function() {
  	return $scope.passwordStrength > 50;
  };
  $scope.isInputValid = function(input) {
  	return input.$dirty && input.$valid;
  };
  $scope.isInputInvalid = function(input) {
  	return input.$dirty && input.$invalid;
  };

  vm.signup = signup;

  function signup(user) {
    addUserService.addUser(user).then(function(response){
      console.log('new user created');
    });
  }
}


angular.module('app')
.controller('SigninController', ['$scope', 'signinService', SigninController]);
function SigninController($scope, signinService){
  var vm = this;
  vm.signin = signin;
  function signin(user){
    signinService.signin(user).then(function(response){
      console.log('user signed in!');
    });
  }
}
