angular.module('myApp.homeCtrl', [])

.controller('homeCtrl', ['$scope', 'homeContent', function($scope, homeContent) {
	$scope.header = homeContent.getHeader();
	$scope.content = homeContent.getContent();
}]);