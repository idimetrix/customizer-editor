(function () {
    var cr_BridgeCtrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager) {

        // Text
        $scope.text_Bridge = '';

        // Triangle
        $scope.Triangle_Bridge = true;

        //Position
        $scope.x_Bridge = 0;
        $scope.y_Bridge = -5;
        $scope.height_Bridge = 24;
        $scope.width_Bridge = 12;

        //Button

        $scope.disabled_button_back = false;
        $scope.disabled_button_forward = false;
        $scope.disabled_button_remove = false;

        // ---

        $scope.back = function (event) {
            if (!jQuery(event.currentTarget).hasClass('disabled')) {
                console.log("Don't blocked");
            } else {
                console.log("Blocked");
            }
        };

        $scope.forward = function (event) {
            if (!jQuery(event.currentTarget).hasClass('disabled')) {
                console.log("Don't blocked");
            } else {
                console.log("Blocked");
            }
        };

        $scope.remove = function (event) {
            if (!jQuery(event.currentTarget).hasClass('disabled')) {
                console.log("Don't blocked");
            } else {
                console.log("Blocked");
            }
        };

        setTimeout(function () {

            $(".curve_Bridge")
                .slider({
                    value: 10,
                    min: 0,
                    max: 20
                })
                .slider("float");

            $(".offsetY_Bridge")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
            $(".height_Bridge")
                .slider({
                    value: 10,
                    min: 0,
                    max: 20
                })
                .slider("float");

            $(".bottom_Bridge")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");

            $(".rotate_Bridge")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");


        }, 1000);
    };

    // ---

    cr_BridgeCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager'
    ];

    angular.module('cr_Customify').controller('cr_BridgeCtrl', cr_BridgeCtrl);
})();

