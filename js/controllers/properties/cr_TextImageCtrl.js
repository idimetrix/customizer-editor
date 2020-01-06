(function () {
    var cr_TextImageCtrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager, cr_DataFactory) {

        // Text
        $scope.fill_TextImage = '';

        //Fill
        $scope.images = cr_DataFactory.type_1

        //Fonts
        $.getJSON("fonts.json", function (data) {
            $scope.fontsJSON = data;
            $scope.fonts_text = $scope.fontsJSON.items;
        });

        //Position
        $scope.x_TextImage = 0;
        $scope.y_TextImage = -5;
        $scope.height_TextImage = 24;
        $scope.width_TextImage = 12;

        // ---

        setTimeout(function () {

            $(".opacity_TextImage")
                .slider({
                    value: 0.9,
                    min: 0,
                    max: 1
                })
                .slider("float");

            $(".rotate_TextImage")
                .slider({
                    value: 0,
                    max: 360
                })
                .slider("float");

        }, 1000);
    };

    // ---

    cr_TextImageCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager',
        'cr_DataFactory'
    ];

    angular.module('cr_Customify').controller('cr_TextImageCtrl', cr_TextImageCtrl);
})();

