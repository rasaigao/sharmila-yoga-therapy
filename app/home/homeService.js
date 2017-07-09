angular.module('myApp.homeService', [])

.factory('homeContent', function(){
	return {
		getHeader: function(){
			return "Home";
		},
		getContent: function(){
			var content = "Put page content here. Whatever it may be"
			return content;
		}
	};
});