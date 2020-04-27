(function () {
'use strict';

angular.module('MenuApp', ['ui.router', 'data'])
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
}

})();
