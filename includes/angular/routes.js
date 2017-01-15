var baseURL = "";

angular.module('nwsfs').config(['$routeProvider', function($routeProvider) {
	$routeProvider
    .when(  '/' + baseURL, {
      // redirect to the main index
      templateUrl: 'templates',
      controller: function ($scope) {
      	
      },
      controllerAs: 'vickiController'
    })
    .when('/about', {
    	templateUrl: '/' + baseURL + 'templates/about.html'
    })  
    .when('/contact', {
		templateUrl: '/' + baseURL + 'templates/contact.html'
    })     
    .when('/member', {
    	templateUrl: '/' + baseURL + 'templates/member.html'
    })
    .when('/events', {
		templateUrl: '/' + baseURL + 'templates/events.html'
    })
	.when('/calendar', {
    	templateUrl: '/' + baseURL + 'templates/calendar.html'
    })
	.when('/news', {
    	templateUrl: '/' + baseURL + 'templates/news.html'
    })  
	.when('/currentmfr', {
    	templateUrl: '/' + baseURL + 'templates/currentMFR.html'
    })        
   .otherwise({ redirectTo: '/' + baseURL });
}]);