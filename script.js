(function () {
    'use strict'
    angular.module('myFirstApp', [])
        .controller('myController', function ($scope) {
            $scope.food = "";
            $scope.result = "";
            $scope.buttonClick = function () {
                var array = $scope.food.split(',');
                var array2 = [];

                if ($scope.food == 0) {
                    $scope.result = "Будь ласка уведіть дані!";
                }
                else if (array2.length <= 3) {
                    $scope.result = "На здоров'я!";
                }
                else if (array2.length > 3) {
                    var filtered = array.filter(function (el) {
                        return el != null;
                      });
                      
                    $scope.result = filtered;
                }
            }
        });
})();