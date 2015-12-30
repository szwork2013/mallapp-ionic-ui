vmall.service('dataService',function($rootScope){

    //$rootScope.showFooter = true;

    var _setScreenTitle = function(title){
        $rootScope.screenTitle = title;
    };
//    var _hideFooter = function(){
//        $rootScope.showFooter = false;
//    };
//    var _showFooter = function(){
//        $rootScope.showFooter = true;
//    };

    return{
        'setScreenTitle':_setScreenTitle
//        'hideFooter':_hideFooter,
//        'showFooter':_showFooter
    }
});