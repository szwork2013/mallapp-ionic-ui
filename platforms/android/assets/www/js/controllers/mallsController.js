vmall.controller('mallsController', function($rootScope,$scope,dataService,utilityService,$location) {
    dataService.setScreenTitle('Malls');
    utilityService.showSubHeader();
    utilityService.showTabs();


    $scope.malls = [
        {
            'mallName':'Arrowhead Towne Center',
            'tagline':'Wonderful Mall',
            'shops':'41',
            'image':'placeholder2.jpg'
        },
        {
            'mallName':'Biltmore Fashion Park',
            'tagline':'Wonderful Mall',
            'shops':'54',
            'image':'placeholder2.jpg'
        },
        {
            'mallName':'Christown Spectrum Mall',
            'tagline':'Wonderful Mall',
            'shops':'31',
            'image':'placeholder2.jpg'
        },
        {
            'mallName':'Estrella Falls',
            'tagline':'Wonderful Mall',
            'shops':'104',
            'image':'placeholder2.jpg'
        },
        {
            'mallName':'Foothills Mall',
            'tagline':'Wonderful Mall',
            'shops':'9',
            'image':'placeholder2.jpg'
        },
        {
            'mallName':'Central Mall',
            'tagline':'Wonderful Mall',
            'shops':'21',
            'image':'placeholder2.jpg'
        },
        {
            'mallName':'Indian Mall',
            'tagline':'Wonderful Mall',
            'shops':'47',
            'image':'placeholder2.jpg'
        },
        {
            'mallName':'Chapel Hills Mall',
            'tagline':'Wonderful Mall',
            'shops':'13',
            'image':'placeholder2.jpg'
        },
        {
            'mallName':'Cherry Creek Shopping Center',
            'tagline':'Wonderful Mall',
            'shops':'78',
            'image':'placeholder2.jpg'
        }

    ];

    $scope.redirectToMall = function(){
        $location.path('/mall');
    };

});


