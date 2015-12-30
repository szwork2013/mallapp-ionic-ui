vmall.controller('shopListController', function($rootScope,$scope,$location) {
    $scope.shops = [
        {'shopName':'Shop 1'},
        {'shopName':'Shop 2'},
        {'shopName':'Shop 3'},
        {'shopName':'Shop 4'},
        {'shopName':'Shop 5'},
        {'shopName':'Shop 6'},
        {'shopName':'Shop 7'},
        {'shopName':'Shop 8'},
        {'shopName':'Shop 9'},
        {'shopName':'Shop 10'},
        {'shopName':'Shop 11'},
        {'shopName':'Shop 12'},
        {'shopName':'Shop 13'},
        {'shopName':'Shop 14'},
        {'shopName':'Shop 15'}
    ];
    $scope.redirectToShop = function(){
        $location.path('/shop');
    }
});

