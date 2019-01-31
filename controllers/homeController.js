(function (){
    var homeController =angular.module("SbuxModule").controller("homeController", ["$scope","$rootScope","$location",function ($scope,$rootScope,$location) {
   $scope.keyDesc="Contains data on Mobile devices that are uniquely identified by the Device ID and are tied to a specific GUID. Additional customer analysis can be performed based on the type of mobile device that a customer uses. App data is available for analysis as well.";
   $scope.gotoloc = function(){
       $location.path("/store");
   }
   $scope.gotocust = function(){
       $location.path("/customer");
   }
   $scope.gotoitems = function(){
       $location.path("/items");
   }
   $scope.gotohome = function(){
       $location.path("/home");
   }
   $rootScope.Clicked = false;
   $scope.user = "Rajan Padmanabhan";
   $scope.comment="";
   $rootScope.Comments=[];
   $scope.populateComments = function(){
       $rootScope.Comments=$rootScope.Comments.reverse();
       $rootScope.Comments.push($scope.comment);
      $('#comm').val('');
       $rootScope.Comments=$rootScope.Comments.reverse();
    //    console.log($rootScope.Comments);
   }
   $scope.displayTables = function(){
       $location.path("/tables");
   }
   $scope.changeIcon = function(){
    $rootScope.Clicked = !$rootScope.Clicked;
  }
  $scope.showDetails = function(){
       $location.path("/details");
  }

}])
})();


