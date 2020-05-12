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


InfoController.$inject = ['info'];
function InfoController (info) {
  var ctrl = this;
  ctrl.info = info;
}

})();
