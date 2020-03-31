(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('filter', filter)


ToBuyController.$inject = ['ShoppingListCheckOffService', 'filter'];
function ToBuyController(ShoppingListCheckOffService) {

  var list1 = this;
	var groceries = ShoppingListCheckOffService;

	list1.buying = function(itemIndex){
		groceries.buying(itemIndex);
	}

	list1.toBuyItems = ShoppingListCheckOffService.getItemsList1();

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

	var list2 = this;
	var groceries = ShoppingListCheckOffService;

	list2.alreadyBought = ShoppingListCheckOffService.getItemsList2();

}

ShoppingListCheckOffService.$inject = [];
function ShoppingListCheckOffService() {

 	var service = this;
  	service.shoppingCheck = [{ name: "eggs", quantity: 6 , pricePerItem: 2}, { name: "bread", quantity: 2 , pricePerItem: 2}, { name: "yogurt", quantity: 4 , pricePerItem: 1.50}, { name: "cookies", quantity: 8 , pricePerItem: 1}, { name: "cheese", quantity: 1 , pricePerItem: 3}];
  	service.checkedOff = [];

  	service.buying = function(itemIndex){
		service.checkedOff.push(service.shoppingCheck[itemIndex]);
		service.removeItem(itemIndex)
	}

	service.removeItem = function (itemIndex) {
    	service.shoppingCheck.splice(itemIndex, 1);
  	};

    service.getItemsList1 = function () {
    	return service.shoppingCheck;
  	};

  	service.getItemsList2 = function () {
    	return service.checkedOff;
  	};

function filter(){
  return function (input){
    return "$$$" + input;
  }
}

}

})();
