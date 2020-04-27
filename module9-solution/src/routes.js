(function() {
'use strict';

angular.module('MenuApp')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.template.html',
      controller: 'CategoriesController',
      controllerAs: 'ctrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{category}',
      templateUrl: 'src/templates/items.template.html',
      controller: 'ItemsController',
      controllerAs: 'itemsCtrl',
      resolve: {
        items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      }
    });
}
})();
