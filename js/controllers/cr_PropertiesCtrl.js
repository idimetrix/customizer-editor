(function () {
    var cr_PropertiesCtrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager) {
        $scope.test = 123;
    };

    // ---

    cr_PropertiesCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager'
    ];

    angular.module('cr_Customify').controller('cr_PropertiesCtrl', cr_PropertiesCtrl);
})();

