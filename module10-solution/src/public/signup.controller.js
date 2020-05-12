(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope', '$http', MyInfoService, MenuService];
function SignUpController($scope, $http, MyInfoService, MenuService) {
var ctrl = this;
ctrl.firstName = ""; ctrl.lastName = ""; ctrl.email = ""; ctrl.phone = ""; ctrl.faveMenuNum = "";
ctrl.returnedItem;
ctrl.doesExist = false;
ctrl.doesNotExist = false;

ctrl.faveNumNew = function(faveMenuNum){
    var promise = MenuService.getMenuItem(faveMenuNum);
    promise.then(function(response) {
       ctrl.doesNotExist = false; })
       .catch() {
       ctrl.doesNotExist = true; }
       }
       
ctrl.submit = function(){
   var promise = MenuService.getMenuItem(ctrl.faveMenuNum);
   promise.then(function(response) {
      ctrl.returnedItem = response;
      
   var infoSaved = MyInfoService.saveMyInfo(ctrl.firstName, 
                                            ctrl.lastName, 
                                            ctrl.email, 
                                            ctrl.phone, 
                                            ctrl.faveMenuNum, 
                                            ctrl.returnedItem);
   if(infoSaved != null){
   ctrl.doesExist = true;
   ctrl.doesNotExist = false; } })
   .catch() {
   ctrl.doesNotExist = true;
   ctrl.doesExist = false; }
   }
   }
   })();
   
