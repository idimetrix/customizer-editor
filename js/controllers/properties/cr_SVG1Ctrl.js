(function () {
    var cr_SVG1Ctrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager) {

        // Fill
        $scope.fill_SVG1 = 'No Fill'; //No Fill or Solid Color
        $scope.color_SVG1 = '#c95a00';

        //Border
        $scope.type_border_SVG1 = 'None'; //None Solid Dashed
        $scope.color_border_SVG1 = '#c95a00';
        $scope.border_size_SVG1 = 2;

        //Position
        $scope.x_SVG1 = 0;
        $scope.y_SVG1 = -5;
        $scope.height_SVG1 = 24;
        $scope.width_SVG1 = 12;

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

            jQuery('.color_SVG1').minicolors({
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

            jQuery('.color_border_SVG1').minicolors({
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

            $(".opacity_SVG1")
                .slider({
                    value: 0.9,
                    min: 0,
                    max: 1
                })
                .slider("float");

            $(".rotate_SVG1")
                .slider({
                    value: 0,
                    max: 360
                })
                .slider("float");

        }, 1000);
    };

    // ---

    cr_SVG1Ctrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager'
    ];

    angular.module('cr_Customify').controller('cr_SVG1Ctrl', cr_SVG1Ctrl);
})();

