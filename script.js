(function () {
    'use strict'

    angular.module('myFirstApp', [])

        .controller('myController', function ($scope) {
            $scope.food = "gh";
            $scope.result = "vvv";

            //  $scope.getFood = function () {
            //       var ret = calc();

            //   }

            $scope.buttonClick = function () {
                var array = $scope.food.split(',');
                var array2 = [];
                for (var i = 0; i < array.length; i++) {
                    while (array[i].search(' ') != -1) {

                        array[i] = array[i].replace("", '');
                    }
                    if (array[i] != "") {
                        array2[i] = array[i]
                    }
                }
                //  switch(array.length){
                if ($scope.food == 0) {
                    $scope.result = "Будь ласка уведіть дані!";
                    //        break;
                }
                else if (array2.length <= 3) {
                    $scope.result = "На здоров'я!";
                    //         break;
                }
                else if (array2.length > 3) {
                    $scope.result = "Це забагато!";
                    //       break;
                }
                //    }



            }

            $scope.mySplit = function (string, nb) {
                var array = string.split(',');
                return array[nb];
            }

            function calc(string) {
                //  var food=$scope.name;
                return string;
            }


        });
})();