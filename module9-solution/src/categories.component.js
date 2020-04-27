(function() {
"use strict";

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController)
.component('categories', {
  template: 'templates/categories.template.html',
   bindings: {
    categories: '<'
  }
});


CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var $ctrl = this;
  $ctrl.categories = categories;
}


})();
