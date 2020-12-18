(function () {
    'use strict'
    angular.module('myFirstApp', [])
        .controller('myController', function ($scope) {
            $scope.food = "";
            $scope.result = "";
            $scope.buttonClick = function () {
                var array = $scope.food.split(',');
                for (var i = 0; i < array.length; i++) {
                    while (array[i].search(" ") != -1) {
                        array[i] =array[i].split(' ').join('');
                    }

                }
                      var array2=[];
                      for (var i = 0; i < array.length; i++) {
                        if (array[i]!= "") {
                            array2.push(array[i]);
                        }
                    }
                if ($scope.food == 0) {
                    $scope.result = "Будь ласка уведіть дані!";
                }
                else if (array2.length <= 3) {
                    $scope.result = "На здоров'я!";
                }
                else if (array2.length > 3) {
                   $scope.result = "Це забагато!!";
                }
            }
        });
})();