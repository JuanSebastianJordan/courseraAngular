(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
  $scope.list="";
  $scope.message="";
  $scope.color="";
  $scope.borderColor="";
  //console.log($scope.list);

  $scope.displayMessage= function (){
    var numWords= checkIfTooMuch($scope.list);
    if(numWords<=3 && numWords!=0){
      $scope.message="Enjoy!";
      $scope.color="green";
      $scope.borderColor={
        "border-color":"green"
      }
    }
    else if(numWords>3)
    {
      $scope.message="Too much!";
      $scope.color="green";
      $scope.borderColor={
        "border-color":"green"
      }
    }
    else
    {
      $scope.message="Please enter data first";
      $scope.color="red";
      $scope.borderColor={
        "border-color":"red"
      }
    }
  };

   function checkIfTooMuch(string){
    var num;
    if(string==="")
    {
      num=0;
    }
    else{
      
      var list= string.split(",");
      console.log(list);
      num= list.length;
      for(var i =0;i<list.length;i++)
      {
        var act = list[i];
        
        if(act===""||act===" ")
        {
          num--;
        }
        console.log(num);
      }
    }
    return num;

  }


   
}

})();
