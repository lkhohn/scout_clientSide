angular.module('app')
.controller('MainController', ['$scope', '$http', 'navBar', MainController]);

function MainController($scope, $http, navBar){
  var vm = this;
  vm.title='test';
}
