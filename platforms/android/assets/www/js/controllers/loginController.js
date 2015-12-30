vmall.controller('loginController', function($rootScope,$scope,$location,dataService,utilityService) {
    dataService.setScreenTitle('User Log In');
    utilityService.hideSubHeader();
    utilityService.hideTabs();
    $scope.login = function(user){

        var validationNotUndefined = user != undefined;

        if(validationNotUndefined){
            if(user.name ==  user.password){
                $location.path('country');
            }else{
                console.log("Invalid Username or password");
            }
        }else{
            console.log("Invalid or Empty Data Field");
        }

    }
});

