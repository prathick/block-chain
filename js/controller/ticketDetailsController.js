/*



*/


var ticketDetailsController = pulseapp.controller('ticketDetailsController', function ($scope,$rootScope,ngProgressFactory,$mdDialog,item,$mdToast,BlockChainData) { 
$scope.eventDetails= item.event;
$scope.eventId=item.id;
$scope.ticketOwner=item.owner;
$scope.ticketPrice=item.price;

$scope.cancel=function(){

   $mdDialog.cancel();
  
}
});