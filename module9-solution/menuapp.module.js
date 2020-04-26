(function () {
 'use strict';

angular.module('MenuApp',['ui.router', data]);
.config(RoutesConfig);

RoutesConfig.$inject = ['$urlRouterProvider'];
function RoutesConfig($urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

}


})();
