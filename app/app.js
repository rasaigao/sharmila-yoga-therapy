'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.homeCtrl',
  'myApp.homeService',
  'myApp.blog',
  'myApp.blogCtrl',
  'myApp.blogService',
  'myApp.version',
  'myApp.contactCtrl',
  'myApp.contact'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
