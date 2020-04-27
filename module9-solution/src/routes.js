(function() {
'use strict';

angular.module('MenuApp')
.config(route);

route.$inject = ['$state'];
function route ($state) {
$state
  .state('home', {
    url:'/',
    templateUrl: 'home.template.html'
    })
    .state('categories', {
     url: '/categories',
     templateUrl: 'categories.template.html,
     controller: 'CategoriesController',
     controllerAs: 'ctrl',
     resolve: {
     categories: ['MenuDataService', function(MenuDataService) {
     return MenuDataService.getCategories();
     }]
     }
     })
     .state('items', {
     url: '/items/{category}',
     templateUrl: 'items.template.html',
     controller: "ItemsController',
     controllerAs: 'itemsCtrl',
     resolve: {
     items: ['$statePms', 'MenuDataService', function($statePms, MenuDataService){
     return MenuDataService.getItemsForCategory($statePms.category);
     }]
     }
     });
     }
     })();
