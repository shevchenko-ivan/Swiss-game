$(document).ready(function () {

  var change_img_time = 3000,
      transition_speed = 600;

  var listItems = $("#slider").children('li'),
      dotItems = $('#dots').children('li'),
      listLen = listItems.length,
      current,
      changeTimeout;

  function moveTo(newIndex) {

    var i = newIndex;

    if (newIndex == 'prev') {
        i = (current > 0) ? (current - 1) : (listLen - 1);
    }

    if (newIndex == 'next') {
        i = (current < listLen - 1) ? (current + 1) : 0;
    }


    listItems.fadeOut(transition_speed)
             .eq(i).fadeIn(transition_speed);

    current = i;

    //resets time interval if user clicks on slider dot; then begin automated slider
    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time);
  };



  //initialize slider on load
  moveTo('next');
});


      const inputs = document.querySelectorAll('input');

      inputs.forEach(el => {
        el.addEventListener('blur', e => {
          if(e.target.value) {
            e.target.classList.add('dirty');
          } else {
            e.target.classList.remove('dirty');
          }
        })
      })


//charts
// <!-- https://www.jqueryscript.net/chart-graph/easy-pie-chart.html -->
var app = angular.module('app', ['easypiechart']);
      app.controller('chart-red', ['$scope', function ($scope) {
        $scope.percent = 53;
        $scope.anotherPercent = 54;
        $scope.anotherOptions = {
          animate:{
            duration:0,
            enabled:false
          },
          size:'45',
          barColor:'#E30613',
          scaleColor:false,
          lineWidth:6,
          lineCap:'round'
        };
      }]);
      app.controller('chart-yellow', ['$scope', function ($scope) {
        $scope.percent = 53;
        $scope.anotherPercent = 54;
        $scope.anotherOptions = {
          animate:{
            duration:0,
            enabled:false
          },
          size:'45',
          barColor:'#F58726',
          scaleColor:false,
          lineWidth:6,
          lineCap:'round'
        };
      }]);
      app.controller('chart-green', ['$scope', function ($scope) {
        $scope.percent = 53;
        $scope.anotherPercent = 54;
        $scope.anotherOptions = {
          animate:{
            duration:0,
            enabled:false
          },
          size:'45',
          barColor:'#009640',
          scaleColor:false,
          lineWidth:6,
          lineCap:'round'
        };
      }]);
      app.controller('chart-blue', ['$scope', function ($scope) {
        $scope.percent = 53;
        $scope.anotherPercent = 54;
        $scope.anotherOptions = {
          animate:{
            duration:0,
            enabled:false
          },
          size:'45',
          barColor:'#004DE3',
          scaleColor:false,
          lineWidth:6,
          lineCap:'round'
        };
      }]);
      app.controller('chart-grey', ['$scope', function ($scope) {
        $scope.percent = 53;
        $scope.anotherPercent = 54;
        $scope.anotherOptions = {
          animate:{
            duration:0,
            enabled:false
          },
          size:'45',
          barColor:'#C8C8C8',
          scaleColor:false,
          lineWidth:6,
          lineCap:'round'
        };
      }]);

// Show-input-in-tooltip
function showInpt(){
  if (true) {

  }
  document.getElementById("inpt").style.visibility = "visible";
}
