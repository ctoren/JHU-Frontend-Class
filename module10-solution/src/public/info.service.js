(function () {
"use strict";

angular.module('public')
.service('InfoService', InfoService);


InfoService.$inject = ['$http'];
function InfoService($http) {
  var service = this;

  service.infoObject = {};

  service.saveInfo = function (firstName, lastName, email, phoneNum, favMenuNum, returnedItem) {

    try
    {
      service.infoObject.firstName = firstName;
      service.infoObject.lastName = lastName;
      service.infoObject.email = email;
      service.infoObject.phoneNum = phoneNum;
      service.infoObject.favMenuNum = favMenuNum;
      service.infoObject.returnedItem = returnedItem;

      return service.infoObject;
    }
    catch(error)
    {
        return null;
    }
   
  };

  service.getInfo = function () {

    if(service.infoObject)
    {
      return service.infoObject;
    }
    else
    {
      return null;
    }
   
  };

    
}
})();
