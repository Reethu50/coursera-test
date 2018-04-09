(function() {
  'use strict';
  angular.module('LunchChecker', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.foodItems = " ";
    $scope.message = " ";
    $scope.checkLunchItems = function(items) {
  //    $scope.foodItems = $scope.foodItems.trim();
  var count=0;
  var lunchArray=[];
  if(items.trim()!==' ' &&  items!==null && items!== undefined && items!= Infinity )
  {
    lunchArray=items.split(',');
    for(var item in lunchArray){
      if (lunchArray[item].trim().length > 0) {
        count+=1;
      }
    }
  }
  return count;
};
$scope.TooMuch=function(){
  var countup=$scope.checkLunchItems($scope.foodItems);
  var returnMessage='please enter data first';
  if(countup>0 && countup<=3){
    returnMessage='ENJOY!';}
  else if(countup>3){
    returnMessage='TOO MUCH!';}
  $scope.message=returnMessage;
}
}
})();
