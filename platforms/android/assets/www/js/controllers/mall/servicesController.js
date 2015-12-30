vmall.controller('servicesController', function($rootScope,$scope,$ionicPopup,$timeout) {
    console.log('Services Controller');

    $scope.services = [
        {
            'serviceName':'Service 1',
            'moreInformation':'Information Detail',
            'location':'Location',
            'floor':'1st Floor'
        },
        {
            'serviceName':'Service 2',
            'moreInformation':'Information Detail',
            'location':'Location',
            'floor':'3rd Floor'
        },
        {
            'serviceName':'Service 3',
            'moreInformation':'Information Detail',
            'location':'Location',
            'floor':'2nd Floor'
        },
        {
            'serviceName':'Service 4',
            'moreInformation':'Information Detail',
            'location':'Location',
            'floor':'Ground Floor'
        },
        {
            'serviceName':'Service 5',
            'moreInformation':'Information Detail',
            'location':'Location',
            'floor':'1st Floor'
        },
        {
            'serviceName':'Service 6',
            'moreInformation':'Information Detail',
            'location':'Location',
            'floor':'2nd Floor'
        },
        {
            'serviceName':'Service 7',
            'moreInformation':'Information Detail',
            'location':'Location',
            'floor':'1st Floor'
        },
        {
            'serviceName':'Service 8',
            'moreInformation':'Information Detail',
            'location':'Location',
            'floor':'Ground Floor'
        },
        {
            'serviceName':'Service 9',
            'moreInformation':'Information Detail',
            'location':'Location',
            'floor':'2nd Floor'
        },
        {
            'serviceName':'Service 10',
            'moreInformation':'Information Detail',
            'location':'Location',
            'floor':'4th Floor'
        }
    ];

    $scope.showAlert = function(info) {
        var alertPopup = $ionicPopup.alert({
//            title: 'Don\'t eat that!',
            template: info
        });
//        alertPopup.then(function(res) {
//            console.log('Thank you for not eating my delicious ice cream cone');
//        });
    };

});

