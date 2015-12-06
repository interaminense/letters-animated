var app = angular.module('app',[]);

app.controller('myController', ['$scope', function($scope){

  $scope.animationStyle = false;

  $scope.animate = function(textToAnimate){

    var containerExibitionText = document.getElementsByClassName('container-exibition-text');
    $classOfInput = document.getElementsByClassName('class-of-input');

    angular.element(containerExibitionText).html("");

    for (var i = 0; i < textToAnimate.length; i++) {
      angular.element(containerExibitionText).append('<span>' + textToAnimate[i] + '</span>');
    }

    $scope.textToAnimate = undefined;
    angular.element($classOfInput)[0].classList.remove('is-dirty');

    for (var i = 0; i < textToAnimate.length; i++) {
      containerExibitionText[0].children[i].style.animationDelay = "0." + i + "s";
      if(i > 9){
        containerExibitionText[0].children[i].style.animationDelay = "1." + (i-10) + "s";
      }
      if(i > 19){
        containerExibitionText[0].children[i].style.animationDelay = "2." + (i-20) + "s";
      }
      if(i > 29){
        containerExibitionText[0].children[i].style.animationDelay = "3." + (i-30) + "s";
      }
    }

  };

}]);
