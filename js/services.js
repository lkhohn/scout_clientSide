angular.module('app')
.service('ScoutService', ['$http', ScoutService]);

function ScoutService($http){

  return {
    getScout:function(){
      return $http.get('http://localhost:3000/');
    },
    getScoutDetails: function(id) {
      // console.log(id);
      return $http.get('http://localhost:3000/' + id);
    },
    postNewScout: function(scoutObj) {
      return $http.post('http://localhost:3000/new', scoutObj);
    },
    deleteScout: function(id) {
      return $http.delete('http://localhost:3000/' + id);
    },
    editScout: function(id, editObj) {
      return $http.put('http://localhost:3000/' + id, editObj);
    }
  };
}


angular.module('app')
.service('addUserService', ['$http', '$q', addUserService]);

function addUserService($http, $q){
  return {
    addUser: function(user){
      return $q(function(resolve, reject){
        $http.post('http://localhost:3000/signup', user)
        .then(function success(response){
          resolve(response);
        }, function error(response){
          console.error(response);
        });
      });
    }
  };
}

angular.module('app')
.service('signinService', ['$http', '$q', signinService]);
function signinService($http, $q){
  return {
    signin: function(user){
      return $q(function(resolve, reject){
        $http.post('http://localhost:3000/signin', user)
        .then(function success(response){
          resolve(response);
        }, function error(response){
          console.log('service errors');
          console.error(response);
        });
      });
    }
  };
}
