angular.module('myApp.blogCtrl', [])

.controller('blogCtrl', ['$scope', 'blogContent', function($scope, blogContent) {
	$scope.title = blogContent.getHeader();
	$scope.subheader = blogContent.getSubheader();
	$scope.blogs = blogContent.getBlogItems();
}]);