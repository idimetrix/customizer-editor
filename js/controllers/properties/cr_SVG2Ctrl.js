(function () {
    var cr_SVG2Ctrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager) {

        // Text
        $scope.text_SVG1 = '';

        //Border
        $scope.type_border_SVG2 = 'None'; //None Solid Dashed
        $scope.color_border_SVG2 = '#c95a00';
        $scope.border_size_SVG2 = 2;

        //Position
        $scope.x_SVG2 = 0;
        $scope.y_SVG2 = -5;
        $scope.height_SVG2 = 24;
        $scope.width_SVG2 = 12;

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

            jQuery('.color_border_SVG2').minicolors({
                control: jQuery(this).attr('data-control') || 'hue',
                defaultValue: jQuery(this).attr('data-defaultValue') || '',
                inline: jQuery(this).attr('data-inline') === 'true',
                letterCase: jQuery(this).attr('data-letterCase') || 'lowercase',
                opacity: jQuery(this).attr('data-opacity') || true,
                position: jQuery(this).attr('data-position') || 'bottom right',
                change: function (hex, opacity) {
                    if (!hex) return;
                    if (opacity) hex += ', ' + opacity;
                    if (typeof console === 'object') {
                        console.log(hex);
                    }
                },
                theme: 'bootstrap'
            });

            $(".opacity_SVG2")
                .slider({
                    value: 0.9,
                    min: 0,
                    max: 1
                })
                .slider("float");

            $(".rotate_SVG2")
                .slider({
                    value: 0,
                    max: 360
                })
                .slider("float");

        }, 1000);
    };

    // ---

    cr_SVG2Ctrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager'
    ];

    angular.module('cr_Customify').controller('cr_SVG2Ctrl', cr_SVG2Ctrl);
})();

