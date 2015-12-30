// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var vmall = angular.module('starter', ['ionic','ui.router']);

vmall.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/main');
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'partials/main.html',
            controller:'mainController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller:'loginController'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'partials/signup.html',
            controller:'signUpController'
        })
        .state('country', {
            url: '/country',
            templateUrl: 'partials/country.html',
            controller:'countryController'
        })
        .state('city', {
            url: '/city',
            templateUrl: 'partials/city.html',
            controller:'cityController'
        })
        .state('suburb', {
            url: '/suburb',
            templateUrl: 'partials/suburb.html',
            controller:'suburbController'
        })
        .state('malls', {
            url: '/malls',
            templateUrl: 'partials/malls.html',
            controller:'mallsController'
        })
        .state('mall', {
            abstract:true,
            url: '/mall',
            templateUrl: 'partials/mall/mall.html',
            controller:'mallController'
        })
        .state('mall.shopList', {
            url: '',
            templateUrl: 'partials/mall/shopList.html',
            controller:'shopListController'
        })
        .state('mall.services', {
            url: '',
            templateUrl: 'partials/mall/services.html',
            controller:'servicesController'
        })
        .state('mall.events', {
            url: '',
            templateUrl: 'partials/mall/events.html',
            controller:'eventsController'
        })
        .state('eventDetail', {
            url: '/eventDetail',
            templateUrl: 'partials/mall/eventDetail.html',
            controller:'eventDetailController'
        })
        .state('mall.location', {
            url: '',
            templateUrl: 'partials/mall/location.html',
            controller:'locationController'
        })
        .state('mall.about', {
            url: '',
            templateUrl: 'partials/mall/about.html',
            controller:'aboutController'
        })
        .state('shop', {
            abstract:true,
            url: '/shop',
            templateUrl: 'partials/shop/shop.html',
            controller:'shopController'
        })
        .state('shop.about', {
            url: '',
            templateUrl: 'partials/shop/about.html',
            controller:'aboutController'
        })
        .state('shop.products', {
            url: '',
            templateUrl: 'partials/shop/products.html',
            controller:'productsController'
        })
        .state('shop.collection', {
            url: '',
            templateUrl: 'partials/shop/collection.html',
            controller:'collectionController'
        })
        .state('shop.promo', {
            url: '',
            templateUrl: 'partials/shop/promo.html',
            controller:'promoCollection'
        })
        .state('shop.location', {
            url: '',
            templateUrl: 'partials/shop/location.html',
            controller:'locationController'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'partials/profile/profile.html',
            controller:'profileController'
        })
        .state('favorites', {
            abstract:true,
            url: '/favorites',
            templateUrl: 'partials/favorites/favorites.html',
            controller:'favoritesController'
        })
        .state('favorites.malls', {
            url: '',
            templateUrl: 'partials/favorites/malls.html',
            controller:'favoriteMallsController'
        })
        .state('favorites.shops', {
            url: '',
            templateUrl: 'partials/favorites/shops.html',
            controller:'favoriteShopsController'
        })

});

vmall.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

