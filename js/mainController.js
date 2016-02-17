angular.module('app')
  	.controller('MainController', ['$scope', '$http', 'Password', MainController]);

     function MainController ($scope, $http, Password) {

      var vm = this;
      vm.signup = signup;

      function signup(){

      }


      this.regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;


  	  $scope.$watch('user.password', function(pass) {
  			$scope.passwordStrength = Password.getStrength(pass);
  			if($scope.isPasswordWeak()) {
  				$scope.form.password.$setValidity('strength', false);
  			} else {
  				$scope.form.password.$setValidity('strength', true);
  			}
  		});

  		$scope.isPasswordWeak = function() {
  			return $scope.passwordStrength < 40;
  		};
  		$scope.isPasswordOk = function() {
  			return $scope.passwordStrength >= 40 && $scope.passwordStrength <= 70;
  		};
  		$scope.isPasswordStrong = function() {
  			return $scope.passwordStrength > 70;
  		};
  		$scope.isInputValid = function(input) {
  			return input.$dirty && input.$valid;
  		};
  		$scope.isInputInvalid = function(input) {
  			return input.$dirty && input.$invalid;
  		};



      model.message = "";

      model.user = {
        username: "",
        password: "",
        confirmPassword: ""
      };

      model.submit = function(isValid) {
        console.log("h");
        if (isValid) {
          model.message = "Submitted " + model.user.username;
        } else {
          model.message = "There are still invalid fields below";
        }
      };



  	}
