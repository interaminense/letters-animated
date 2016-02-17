var app = angular.module('app',['ngSanitize']);

app.controller('mainCtrl', ['$scope', function($scope){

  $scope.animationStyle = false;
  $scope.showGenerate   = false;

  $scope.animate = function(textToAnimate){

    $scope.showGenerate = true;
    $scope.showCode     = false;

    $scope.stockText = textToAnimate;

    var containerExibitionText = document.getElementsByClassName('container-exibition-text');
    $classOfInput = document.getElementsByClassName('class-of-input');

    angular.element(containerExibitionText).html("");

    for (var i = 0; i < textToAnimate.length; i++) {
      angular.element(containerExibitionText).append('<div>' + textToAnimate[i] + '</div>');
    }

    $scope.textToAnimate = undefined;
    angular.element($classOfInput)[0].classList.remove('is-dirty');

    for (var i = 0; i < textToAnimate.length; i++) {
      if(i >= 0 && i <= 9)
      containerExibitionText[0].children[i].style.animationDelay = "0." + i + "s";
      if(i >= 10 && i <= 19)
        containerExibitionText[0].children[i].style.animationDelay = "1." + ( i - 10 ) + "s";
      if(i >= 20 && i <= 29)
        containerExibitionText[0].children[i].style.animationDelay = "2." + ( i - 20 ) + "s";
    }

  };

  $scope.generateCode = function(animationStyle){

    console.log(animationStyle);

    $scope.printHead = "";
    $scope.printCss  = "";
    $scope.printHtml = "";

    $scope.showCode = true;

    $scope.printHead += "&lt;head&gt;<br />  &lt;link rel='stylesheet' href='animations.css'&gt;<br />&lt;/head&gt;";

    $scope.printHtml += "&lt;div class='is-animate " + animationStyle + "'&gt;<br />";

    for (var i = 0; i < $scope.stockText.length; i++) {
      $scope.printHtml += "  &lt;div&gt;" + $scope.stockText[i] + "&lt;/div&gt;<br />";
    }

    $scope.printHtml += "&lt;/div&gt;";

    $scope.templates = {
      "templateDefault" : ".is-animate > div {<br />  animation-duration: 1s;<br />  animation-fill-mode: both;<br />  animation-iteration-count: infinite;<br />}<br /><br />",
      "templateStyle1"  : ".is-animate.style1 > div { animation-name: style1; }<br /><br />",
      "templateStyle2"  : ".is-animate.style2 > div { animation-name: style2; }<br /><br />",
      "templateStyle3"  : ".is-animate.style3 > div { animation-name: style3; }<br /><br />",
      "templateStyle4"  : ".is-animate.style4 > div { animation-name: style4; }<br /><br />",
    };

    $scope.printCss += "&lt;style type='text/css'&gt;<br /><br />";

    switch (animationStyle) {
      case "style1":
      $scope.printCss += $scope.templates.templateStyle1;
      break;
      case "style2":
      $scope.printCss += $scope.templates.templateStyle2;
      break;
      case "style3":
      $scope.printCss += $scope.templates.templateStyle3;
      break;
      case "style4":
      $scope.printCss += $scope.templates.templateStyle4;
      break;
    }

    $scope.printCss += $scope.templates.templateDefault;

    for (var i = 0; i < $scope.stockText.length; i++) {
      if(i >= 0 && i <= 9)
      $scope.printCss += ".is-animate > div:nth-child(" + ( i + 1 ) + ") { animation-delay: 0." + i + "s }<br />";
      if(i >= 10 && i <= 19)
        $scope.printCss += ".is-animate > div:nth-child(" + ( i + 1 ) + ") { animation-delay: 1." + ( i - 10 ) + "s }<br />";
      if(i >= 20 && i <= 29)
        $scope.printCss += ".is-animate > div:nth-child(" + ( i + 1 ) + ") { animation-delay: 2." + ( i - 20 ) + "s }<br />";
    }

    $scope.printCss += "<br />&lt;/style&gt;";

  };

}]);
