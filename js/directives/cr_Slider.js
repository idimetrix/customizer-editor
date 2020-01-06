angular.module('cr_Customify')
    .directive('crSlider', ['$timeout', function ($timeout) {
        return {
            require: '?ngModel',
            restrict: 'A',
            priority: 1, //since we bind on an input element, we have to set a higher priority than angular-default input
            link: function (scope, element, attrs, ngModel) {
                var inititalized = false;

                //gets the settings object
                var getSettings = function () {
                    var config = angular.extend({}, {}, scope.$eval(attrs.crSlider));
                    return config;
                };

                var getFloatSettings = function () {
                    var config = angular.extend({}, {}, scope.$eval(attrs.crFloatSlider));
                    return config;
                };

                //what to do if the value changed
                ngModel.$render = function () {
                    //we are in digest or apply, and therefore call a timeout function
                    $timeout(function () {
                        var value = ngModel.$viewValue;
                        element.slider('value', value);
                    }, 0, false);
                };

                //init method
                var initSlider = function () {

                    if (!ngModel) {
                        return;
                    }
                    var settings = getSettings();
                    settings.slide = function (event, ui) {
                        scope.$apply(function () {
                            ngModel.$setViewValue(ui.value);
                        });
                    };

                    var floatSettings = getFloatSettings();

                    // If we don't destroy the old one it doesn't update properly when the config changes
                    element.slider("instance") && element.slider('destroy');

                    // Create the new slider widget
                    element.slider(settings).slider('float', floatSettings);

                    // are we inititalized yet ?
                    //needs to be wrapped in $timeout, to prevent $apply / $digest errors
                    //$scope.$apply will be called by $timeout, so we don't have to handle that case
                    if (!inititalized) {
                        $timeout(function () {
                            var value = ngModel.$viewValue;
                            element.slider('value', value);
                        }, 0);
                        inititalized = true;
                        return;
                    }
                };

                initSlider();
                //initital call

                // Watch for changes to the directives options and then call init method again
                scope.$watch(getSettings, initSlider, true);


            }
        };
    }]);