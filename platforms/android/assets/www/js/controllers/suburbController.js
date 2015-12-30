vmall.controller('suburbController', function($rootScope,$scope,dataService,$location,utilityService) {
    dataService.setScreenTitle('Suburb Name');
    utilityService.hideSubHeader();
    utilityService.showTabs();

    $scope.suburbs = [
        {
            'suburbName':'Quetta',
            'malls':15
        },
        {
            'suburbName':'Sibi',
            'malls':37
        },
        {
            'suburbName':'Gwadar',
            'malls':56
        }
    ];

    $scope.redirectToMalls = function(url){
        $location.path('/malls');
    }
});



