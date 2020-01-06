(function () {
    var cr_BarCodeCtrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager) {

        // Text
        $scope.text_barCode = '';

        // Fill
        $scope.fill_barCode = 'No Fill'; //No Fill or Solid Color
        $scope.color_barCode = '#c95a00';

        //Type
        $scope.type_barCode = 'Type 1'; // Type 1 ... Type 5

        //Border
        $scope.type_border_barCode = 'None'; //None Solid Dashed
        $scope.color_border_barCode = '#c95a00';
        $scope.border_size_barCode = 2;

        //Position
        $scope.x_barCode = 0;
        $scope.y_barCode = -5;
        $scope.height_barCode = 24;
        $scope.width_barCode = 12;

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

            jQuery('.color_barCode').minicolors({
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

            jQuery('.color_border_barCode').minicolors({
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

            $(".opacity_barCode")
                .slider({
                    value: 0.9,
                    min: 0,
                    max: 1
                })
                .slider("float");

            $(".position_barCode")
                .slider({
                    value: 0,
                    max: 360
                })
                .slider("float");

        }, 1000);
    };

    // ---

    cr_BarCodeCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager'
    ];

    angular.module('cr_Customify').controller('cr_BarCodeCtrl', cr_BarCodeCtrl);
})();

