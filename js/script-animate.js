var app = angular.module('app',['ngSanitize']);

app.controller('myController', ['$scope', function($scope){

  $scope.animationStyle = false;
  $scope.showGenerate   = false;

  $scope.animate = function(textToAnimate){

    $scope.showGenerate = true;
    $scope.showCode     = false;

    var containerExibitionText = document.getElementsByClassName('container-exibition-text');
    $classOfInput = document.getElementsByClassName('class-of-input');

    angular.element(containerExibitionText).html("");

    for (var i = 0; i < textToAnimate.length; i++) {
      angular.element(containerExibitionText).append('<span>' + textToAnimate[i] + '</span>');
    }

    $scope.textToAnimate = undefined;
    angular.element($classOfInput)[0].classList.remove('is-dirty');

    $scope.print = "";

    for (var i = 0; i < textToAnimate.length; i++) {
      containerExibitionText[0].children[i].style.animationDelay = "0." + i + "s";
      $scope.print += " .span:nth-child(" + ( i + 1 ) + ") { animation-delay: 0." + i + "s }";
      if(i > 9){
        containerExibitionText[0].children[i].style.animationDelay = "1." + ( i - 10 ) + "s";
        $scope.print += " .span:nth-child(" + ( i + 1 ) + ") { animation-delay: 0." + ( i - 10 ) + "s }";
      }
      if(i > 19){
        containerExibitionText[0].children[i].style.animationDelay = "2." + ( i - 20 ) + "s";
        $scope.print += " .span:nth-child(" + ( i + 1 ) + ") { animation-delay: 0." + ( i - 20 ) + "s }";
      }
      if(i > 29){
        containerExibitionText[0].children[i].style.animationDelay = "3." + ( i - 30 ) + "s";
        $scope.print += " .span:nth-child(" + ( i + 1 ) + ") { animation-delay: 0." + ( i - 30 ) + "s }";
      }
    }

  };

}]);
