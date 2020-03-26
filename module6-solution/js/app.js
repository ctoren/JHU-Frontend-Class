(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItems = " ";
  $scope.message = " ";
  $scope.color = " ";

  $scope.lunches = function () {

  var lunchArr = $scope.lunchItems.split(",");
  console.log(lunchArr);
  console.log(lunchArr.length);

  for(i=0; i<lunchArr.length; i++){     //count elements in array for empty items
    if(lunchArr[i] == " " || lunchArr[i] == ",") {
      console.log(lunchArr.trim())
    }
  }

    if(lunchArr.length == 0){
      $scope.message = "Please enter data first";
      $scope.color = "redFont"; //make font and border color red
    } else if(lunchArr.length <= 3) {
      $scope.message = "Enjoy!";
      $scope.color = "greenFont"; //make font and border color green
    } else if(lunchArr > 4) {
      $scope.message = "Too much!";
      $scope.color = "greenFont"; //make font and border color green
    }
  }  
}

})();
