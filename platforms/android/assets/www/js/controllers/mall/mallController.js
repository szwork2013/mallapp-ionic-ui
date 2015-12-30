vmall.controller('mallController', function($rootScope,$scope,utilityService,dataService,$location) {
    dataService.setScreenTitle('Mall Name');
    utilityService.showSubHeader();
    utilityService.showTabs();

    //$location.path('/shopList');
    console.log('mallController');
});

