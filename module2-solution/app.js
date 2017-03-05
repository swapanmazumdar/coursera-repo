(function () {
'use strict';

var toBuyItems = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Popcorn",
    quantity: "2"
  }
];

var itemsBought = [];
var allItemsBought = false;

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];

function ToBuyController($scope, ShoppingListCheckOffService) {
  var list = this;

  $scope.toBuyItems = toBuyItems;

  $scope.boughtItem = function (itemIndex, itemName, quantity) {
    ShoppingListCheckOffService.removeItem(itemIndex);
    ShoppingListCheckOffService.addItem(itemName, quantity);
    $scope.allItemsBought = ShoppingListCheckOffService.checkIfAllItemsBought();
  };

}

function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.itemsBought = itemsBought;
}

function ShoppingListCheckOffService() {
  var service = this;

  service.removeItem = function (itemIndex) {
    toBuyItems.splice(itemIndex, 1);
  };

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsBought.push(item);
  };

  service.checkIfAllItemsBought = function () {
      var result = false;
      if(toBuyItems.length == 0) {
        result = true;
      } else {
        result = false;
      }
      return result;
  };

}

})();
