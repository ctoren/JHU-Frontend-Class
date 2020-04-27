(function() {
"use strict";

angular.module('MenuApp')
.controller('ItemsController', ItemsController)
.component('categories', {
  template: 'templates/items.template.html',
   bindings: {
    items: '<'
  }
});

