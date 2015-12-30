vmall.controller('favoritesController', function($rootScope,$scope,dataService,utilityService) {

    dataService.setScreenTitle('Favorites');
    utilityService.hideSubHeader();
    utilityService.showTabs();

    console.log('Favorites Controller');
});


