(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['$scope', '$http', 'InfoService', 'MenuService'];
function SignupController($scope, $http, InfoService, MenuService) {
  var ctrl = this;

  ctrl.firstName = "";
  ctrl.lastName = "";
  ctrl.email = "";
  ctrl.phoneNum = "";
  ctrl.favMenuNum = "";
  ctrl.returnedItem;
  ctrl.successfulSubmit = false;
  ctrl.doesNotExist = false;

  ctrl.favNumChanged = function(favMenuNum){

    var promise = MenuService.getMenuItem(favMenuNum);
    promise.then(function(response) {

      ctrl.doesNotExist = false;
    })
    .catch()
    {
        ctrl.doesNotExist = true;
    }
  }

  ctrl.submit = function(){

    var promise = MenuService.getMenuItem(ctrl.favMenuNum);
    promise.then(function(response) {

      ctrl.returnedItem = response;

      var saved = InfoService.saveInfo(ctrl.firstName, ctrl.lastName, ctrl.email, ctrl.phoneNum, ctrl.favMenuNum, ctrl.returnedItem);

      if(saved != null)
      {
        ctrl.successfulSubmit = true;
        ctrl.doesNotExist = false;
      }

    })
    .catch()
    {
        ctrl.doesNotExist = true;
        ctrl.successfulSubmit = false;
    }
  }
}

})();
