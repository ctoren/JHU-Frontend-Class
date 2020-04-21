(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('path', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateURl: "found.html",
    scope: {
      items: '<',
      myTitle: '@title',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.searchTerm = "";
  list.foundItems = [];

  var service = MenuSearchService;

  list.checkMenu = function()
  {
    service.getMatchedMenuItems(list.searchTerm).then(function(result){
      list.foundItems = result;
    });
  };
  list.removeItem = function (itemIndex) {
    list.foundItems.splice(itemIndex, 1);
  };
  service.getItems = function () {
    return items;
  };
}

function MenuSearchService($http) {
   var service = this;
   service.getMatchedMenuItems = function(serarchTerm) {
     return $http.get(path).then(function(result) {
       var foundItems = [];

       var menuItems = result.data["menu_items"];

       for(var i = 0; i < items.length; i++) {
         if(items[i].description.includes(searchTerm))
         {
           foundItems.push(items[i]);
         }
       }
       return foundItems;
     });
   };
}
})();
