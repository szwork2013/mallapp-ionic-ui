vmall.controller('shopController', function($rootScope,$scope,dataService,utilityService) {
    dataService.setScreenTitle('Shop Name');
    utilityService.showSubHeader();
    utilityService.showTabs();
    console.log('shopController');
});

