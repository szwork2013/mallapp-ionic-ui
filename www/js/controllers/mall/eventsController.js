vmall.controller('eventsController', function($rootScope,$scope,$location) {
    $scope.events = [
        {
            'eventTitle':'Event 1',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            'eventTitle':'Event 2',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            'eventTitle':'Event 3',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            'eventTitle':'Event 4',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            'eventTitle':'Event 5',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            'eventTitle':'Event 6',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            'eventTitle':'Event 7',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            'eventTitle':'Event 8',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            'eventTitle':'Event 9',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            'eventTitle':'Event 10',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            'eventTitle':'Event 11',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            'eventTitle':'Event 12',
            'eventDetail':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        }
    ];

    $scope.redirectToEventDetail = function(event){
        $location.path('/eventDetail');
    }
});

