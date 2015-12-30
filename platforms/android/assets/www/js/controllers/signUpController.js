vmall.controller('signUpController', function($rootScope,$scope,dataService,utilityService) {
    dataService.setScreenTitle('User Registration');
    utilityService.hideSubHeader();
    utilityService.hideTabs();
    $scope.SignUp = function(user){
        var validationNotUndefined = user != undefined;
        if(validationNotUndefined) {
            console.log('Sign Up Successfully');
            console.log(user);
        }else{
            console.log("Invalid or Empty Data Field");
        }
    }
});

