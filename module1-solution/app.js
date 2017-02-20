(function () {
'use strict';

angular.module('myFirstModule1Assignment', [])
.controller('myFirstModuleController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.checkIfTooMuch = function () {

    if($scope.lunchMenu == null || $scope.lunchMenu == '') {
      $scope.message = "Please enter data first";
      return;
    }

    var menu = $scope.lunchMenu.split(',');
    console.log(menu);

    if(menu.length <= 3) {
      $scope.message = "Enjoy!";
    }
    else if(menu.length > 3) {
      $scope.message = "Too much!";
    }

  };

}

})();

// minified code
// !function(){"use strict";function e(e){e.checkIfTooMuch=function(){if(null==e.lunchMenu||""==e.lunchMenu)return void(e.message="Please enter data first");var n=e.lunchMenu.split(",");console.log(n),n.length<=3?e.message="Enjoy!":n.length>3&&(e.message="Too much!")}}angular.module("myFirstModule1Assignment",[]).controller("myFirstModuleController",e),e.$inject=["$scope"]}();
