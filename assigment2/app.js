var app = angular.module('personalApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'components/home.html'
    })
    .when('/about', {
      templateUrl: 'components/about.html'
    })
    .when('/education', {
      templateUrl: 'components/education.html'
    })
    .when('/family', {
      templateUrl: 'components/family.html'
    })
    .when('/hobbies', {
      templateUrl: 'components/hobbies.html'
    })
    .when('/contributions', {
      templateUrl: 'components/contributions.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
