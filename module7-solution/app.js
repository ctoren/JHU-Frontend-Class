(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyController = this;

  //itemToBuy.itemName = "";
  //itemToBuy.itemQuantity = "";

  //itemToBuy.addItem = function () {
  //ShoppingListCheckOffService.addItem(itemToBuy.itemName, itemToBuy.itemQuantity);
  //}
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtController = this;

  alreadyBoughtController.items = ShoppingListCheckOffService.getItems();

  //alreadyBought.removeItem = function (itemIndex) {
    //ShoppingListCheckOffService.removeItem(itemIndex);
  };
//}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{name: "milk", quantity: 2}, {name: "eggs", quantity: 3}, {name: "bread", quantity: 3}, {name: "cookies", quantity: 10}, {name: "bananas", quantity: 5}];

  var alreadyBought = [];

  service.addItem = function (name, quantity) {
    var item = {
      name: name,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
    //push to alreadyBought
    alreadyBought.push(item);
  };

  service.getItems = function () {
    return items;
  };
  service.getAlreadyBought = function() {
    return alreadyBought;
  };
  }


})();
