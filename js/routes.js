app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/currentScouts.html',
    controller: 'ScoutListController as SCL'
  })
  .when('/scout/:scoutID', {
    templateUrl: 'views/scoutDetails.html',
    controller: 'ScoutDetailsController as SDC'
  })
  .when('/new', {
    templateUrl: 'views/addScout.html',
    controller: 'NewScoutController as NSC'
  })
  .when('/edit', {
    templateUrl: 'views/editScout.html',
    controller: 'EditScoutController as ESC'
  });
});
