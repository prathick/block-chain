 var changepwd = pulseapp.controller('changepwd', function ($scope, $rootScope,BlockChainData,ngProgressFactory,$mdDialog,$mdToast) {
  
 
  $scope.save = function(){
    //($scope.oldpwd);
    if($scope.pwdchange == $scope.pwdconfirmChange && $scope.oldpwd != ''){

      if($rootScope.userStatus == 'Admin'){
      $scope.requestParam={oldPassword:$scope.oldpwd,newPassword:$scope.pwdchange}; 
      $scope.serviceType="eventmanager/changePassword";
      BlockChainData.putData($scope.requestParam,$scope.serviceType,$scope.OnSuccesschangePwd,$scope.OnFailurechangePwd); 

      }else{
          $scope.requestParam={oldPassword:$scope.oldpwd,newPassword:$scope.pwdchange}; 
      $scope.serviceType="user/changePassword";
        BlockChainData.putData($scope.requestParam,$scope.serviceType,$scope.OnSuccesschangePwd,$scope.OnFailurechangePwd); 
      }

      
    }else{
      alert("Passwrod Error! Please Try Again")
    }
  }

  $scope.showSimpleToast = function(text) {

    $mdToast.show(
      $mdToast.simple()
        .textContent(text)
        .position('top right')
        .hideDelay(3000)
    );
  };

  $scope.OnSuccesschangePwd = function(response){

showSimpleToast('PassWord Changed!');
  }

  $scope.OnFailurechangePwd = function(){

    showSimpleToast("Error Try Again");
  }

 
   


});