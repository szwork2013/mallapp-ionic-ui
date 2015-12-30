vmall.controller('countryController', function($rootScope,$scope,dataService,$location,utilityService) {

    dataService.setScreenTitle('Country');
    utilityService.hideSubHeader();
    utilityService.showTabs();

    var countrys = [
        {
            'countryName':'Pakistan',
            'tagline':'Wonderful Pakistan',
            'malls':'34',
            'image':'placeholder.png'
        },
        {
            'countryName':'India',
            'tagline':'Wonderful Country',
            'malls':'13',
            'image':'placeholder.png'
        },
        {
            'countryName':'Singapore',
            'tagline':'Wonderful Singapore',
            'malls':'4',
            'image':'placeholder.png'
        },
        {
            'countryName':'Afghanistan',
            'tagline':'Wonderful Afghanistan',
            'malls':'7',
            'image':'placeholder.png'
        },
        {
            'countryName':'Bangladesh',
            'tagline':'Wonderful Bangladesh',
            'malls':'78',
            'image':'placeholder.png'
        },
        {
            'countryName':'Oman',
            'tagline':'Wonderful Oman',
            'malls':'165',
            'image':'placeholder.png'
        }
    ];

    $scope.countrys = countrys;
    $scope.redirectToCity = function(url){
        console.log(url);
        $location.path('/city');
    }

});

