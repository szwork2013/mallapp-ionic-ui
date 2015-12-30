vmall.controller('mainController', function($rootScope,$scope,$location,dataService,utilityService) {

    dataService.setScreenTitle('Welcome to VMall');
    utilityService.hideSubHeader();
    utilityService.hideTabs();
    console.log("Main Controller");

    $scope.redirectToLogIn =function(){
        $location.path('login');
    };
    $scope.redirectToSignUp =function(){
        $location.path('signup');
    };
});

