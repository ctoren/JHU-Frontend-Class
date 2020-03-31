(function ()){
  "use strict";

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('angularDollars', dollarsFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService', 'dollarsFilter'];

function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.buys = ShoppingListCheckOffService.getItems();

  list1.removeItem = function(itemIndex) {
    var bought = ShoppingListCheckOffService.buyItem(itemIndex);
    ShoppingListCheckOffService.boughtItem(bought.name, bought.quantity, bought.price);
  };

  list1.getPrice = function(itemIndex) {
    var bought = ShoppingListCheckOffService.getItem(itemIndex,"groceries");
  };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService){
    var list2 = this;
    list2.buys = ShoppingListCheckOffService.getNewItems();

    list2.getPrice = function(itemIndex) {
      var bought = ShoppingListCheckOffService.buyItem(itemIndex, "groceries");
      return ShoppingListCheckOffService.getPrice(bought.price, bought.quantity);
    };
  }

  ShoppingListCheckOffService.$inject = ['dollarsFilter'];

  function dollarsFilter() {
    return function (price, quant) {
      while(price =! 0 && quant =! 0){
        var total = price * quant;
        return '$$$' + total.toFixed(2);
      }
    };
  }

function ShoppingListCheckOffService(dollarsFilter){
  var service = this,
      groceries = { isEmpty: false, items: [{name: "eggs", quantity: 3, price: 3}, {name: "bread", quantity: 2, price: 3.50}, {name: "milk", quantity: 1, price: 2}, {name: "cookies", quantity: 10, price: 1}, {name: "chicken", quantity: 2, price, 6.50}]}, list2 = { items: [], isEmpty: true};

      service.boughtItem = function(name, quantity, price) {
        var item = { name: name, quantity: quantity, price: price};
        list2.items.push(item);
        if(list2.items.length > 0){
          list2.isEmpty = false;
        }
      };

     service.buyItem = function(itemIndex) {
      var item = groceries.items[itemIndex];
      groceries.items.splice(itemIndex, 1);
      if(groceries.items.length = 0) {
        groceries.isEmpty = true;
      }
      return item;
    };

    service.getItem = function(itemIndex, buys){
      var item;
      if(buys === "groceries") {
        item = groceries.items[itemIndex];
      } else {
        item = list2.items[itemIndex];
      }
      return item;
    }

    service.getPrice = function(price, quant) {
      return dollarsFilter(price, quant);
    };

    service.getItems = function() {
      return groceries;
    };

    service.getNewItems = function() {
      reutrn list2;
    };
}
}());
