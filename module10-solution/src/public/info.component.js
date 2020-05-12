(function() {
"use strict";

angular.module('public')
.controller('InfoController', InfoController)
.component('info', {
  template: 'templates/info.html',
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
