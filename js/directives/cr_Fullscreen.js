angular.module('cr_Customify')
    .directive('crFullscreen', ['$safeApply', function ($safeApply) {
        return {
            restrict: 'AC',
            scope: {
                crFullscreen: '='
            },
            link: function ($scope, $element, $attr) {
                jQuery(document).bind('fscreenchange', function (event) {
                    $safeApply(function () {
                        $scope.uiFullscreen = jQuery.fullscreen.isFullScreen();
                    });
                });

                $scope.$watch('crFullscreen', function (newValue, oldValue) {
                    if (newValue) {
                        if (!jQuery.fullscreen.isFullScreen()) {
                            $element.fullscreen();
                        }

                    } else {
                        if (jQuery.fullscreen.isFullScreen()) {
                            jQuery.fullscreen.exit();
                        }
                    }

                    return newValue;
                });
            }
        };
    }]);