(function () {
"use strict";

angular.module('public')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = ['$http'];
function MyInfoService($http) {
  var myService = this;

  myService.input = {};

  myService.infoSaved = function(firstName, lastName, email, phone, faveMenuNum, returnedItem){

    try{
      myService.input.firstName = firstName; myService.input.lastName = lastName; myService.input.email = email; myService.input.phoneNum = phone; myService.input.favMenuNum = faveMenuNum; myService.input.returnedItem = returnedItem;
      return myService.input;}
    catch(error){
        return null;
    }
  };

  service.getInfo = function(){

    if(myService.input){
      return myService.input;
    } else {
      return null; }
  };
}
})();
