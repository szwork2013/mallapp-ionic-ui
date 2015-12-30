vmall.service('utilityService',function($rootScope){

    var _hideTabs = function(){
        $rootScope.showTabs = false;
    };
    var _showTabs = function(){
        $rootScope.showTabs = true;
    };
    var _hideSubHeader = function(){
        $rootScope.showSubHeader = false;
    };
    var _showSubHeader = function(){
        $rootScope.showSubHeader = true;
    };

    return{
        'hideTabs':_hideTabs,
        'showTabs':_showTabs,
        'hideSubHeader':_hideSubHeader,
        'showSubHeader':_showSubHeader
    }
});
