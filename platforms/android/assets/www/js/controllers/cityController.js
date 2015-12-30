vmall.controller('cityController', function($rootScope,$scope,dataService,$location,utilityService) {
    dataService.setScreenTitle('Country Name');
    utilityService.hideSubHeader();
    utilityService.showTabs();

    $scope.cities = [
        {
            'cityName':'Quetta',
            'malls':15
        },
        {
            'cityName':'Sibi',
            'malls':37
        },
        {
            'cityName':'Gwadar',
            'malls':56
        },
        {
            'cityName':'Zhob',
            'malls':25
        },
        {
            'cityName':'Lasbela',
            'malls':100
        },
        {
            'cityName':'Peshawar',
            'malls':4
        },
        {
            'cityName':'Mingora',
            'malls':21
        },
        {
            'cityName':'Swabi',
            'malls':1
        },
        {
            'cityName':'Nowshera',
            'malls':76
        },
        {
            'cityName':'Quetta',
            'malls':15
        },
        {
            'cityName':'Sibi',
            'malls':37
        },
        {
            'cityName':'Gwadar',
            'malls':56
        },
        {
            'cityName':'Zhob',
            'malls':25
        },
        {
            'cityName':'Lasbela',
            'malls':100
        },
        {
            'cityName':'Peshawar',
            'malls':4
        },
        {
            'cityName':'Mingora',
            'malls':21
        },
        {
            'cityName':'Swabi',
            'malls':1
        },
        {
            'cityName':'Nowshera',
            'malls':76
        }
    ];
    $scope.redirectToSuburbs = function(){
        $location.path('/suburb');
    }


});


