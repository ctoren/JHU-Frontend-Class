(function() {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController)
.component('info', {
  template: 'templates/myInfo.html',
   bindings: {
    info: '<'
  }
});


MyInfoController.$inject = ['info'];
function MyInfoController (info) {
  var ctrl = this;
  ctrl.info = info;
}

})();
