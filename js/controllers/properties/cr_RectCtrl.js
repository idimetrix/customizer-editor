(function () {
    var cr_RectCtrl = function ($rootScope, $scope, $timeout, $element, $safeApply, cr_Enums, cr_CommandsManager, cr_UtilsManager, cr_EventsManager, cr_DrawFactory) {


        var color_text_watcher;
        var opacity_watcher;
        var angle_watcher;
        var x_text_watcher;
        var y_text_watcher;
        var height_text_watcher;
        var width_text_watcher;
        var visible_text_watcher;
        var fillRule_text_watcher;

        $scope.currentTarget = null;
        $scope.currentObject = null;
        $scope.cloneObject = null;

        function attachWatchers() {
            detachWatchers();

            // Font

            fillRule_text_watcher = $scope.$watch('fillRule', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.fillRule = value;
                $scope.currentTarget.set('fillRule', value);
                $scope.currentTarget.setCoords();
            });

            color_text_watcher = $scope.$watch('color_text', function () {
                $scope.currentObject.fill = $scope.color_text;
                $scope.currentTarget.set('fill', $scope.color_text);
            });

            opacity_watcher = $scope.$watch('opacity', function (value) {
                value = parseFloat(value);

                console.log('opacity', value);

                $scope.currentObject.opacity = value;
                $scope.currentTarget.set('opacity', value);
            });

            angle_watcher = $scope.$watch('angle', function (value) {
                value = parseFloat(value);

                $scope.currentObject.angle = value;
                $scope.currentTarget.setAngle(value);
                $scope.currentTarget.setCoords();
            });

            // x, y, width, height

            x_text_watcher = $scope.$watch('x_text', function (value) {
                value = parseFloat(value);

                $scope.currentObject.left = value;
                $scope.currentTarget.set('left', value);
                $scope.currentTarget.setCoords();
            });

            y_text_watcher = $scope.$watch('y_text', function (value) {
                value = parseFloat(value);

                $scope.currentObject.top = value;
                $scope.currentTarget.set('top', value);
                $scope.currentTarget.setCoords();
            });

            width_text_watcher = $scope.$watch('width_text', function (value) {
                value = parseFloat(value);

                $scope.currentObject.width = value;
                $scope.currentTarget.set('width', value);
                $scope.currentTarget.setCoords();
            });

            height_text_watcher = $scope.$watch('height_text', function (value) {
                value = parseFloat(value);

                $scope.currentObject.height = value;
                $scope.currentTarget.set('height', value);
                $scope.currentTarget.setCoords();
            });

            visible_text_watcher = $scope.$watch('visible', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.visible = value;
                $scope.currentTarget.set('visible', value);
                $scope.currentTarget.setCoords();
            });

        }

        function detachWatchers() {
            color_text_watcher && color_text_watcher();
            opacity_watcher && opacity_watcher();
            angle_watcher && angle_watcher();
            x_text_watcher && x_text_watcher();
            y_text_watcher && y_text_watcher();
            height_text_watcher && height_text_watcher();
            width_text_watcher && width_text_watcher();
            visible_text_watcher && visible_text_watcher();
            fillRule_text_watcher && fillRule_text_watcher();
        }

        function fill(obj) {
            //Font

            $scope.fillRule = obj.fillRule;
            $scope.color_text = obj.fill;

            // Options
            $scope.opacity = obj.opacity;
            $scope.angle = obj.angle;

            //Position
            $scope.x_text = obj.left;
            $scope.y_text = obj.top;
            $scope.height_text = obj.height;
            $scope.width_text = obj.width;

            //

            $scope.visible = obj.visible;
        }

        cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).on(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize, function (save) {
            var target = cr_DrawFactory.selected;

            if ($scope.currentTarget && $scope.currentTarget != target) {
                if ($scope.diffSize() > 0) {
                    cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectManipulationCommand($scope.currentTarget, $scope.cloneObject, $scope.currentObject));
                }

                $scope.currentTarget = null;
                $scope.currentObject = null;
                $scope.cloneObject = null;

                detachWatchers();

                return;
            }

            if (target && $scope.types.indexOf(target.type) == -1) {
                if (save && $scope.diffSize() > 0) {
                    cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectManipulationCommand($scope.currentTarget, $scope.cloneObject, $scope.currentObject));
                }

                var object = target.toObject();

                $scope.currentTarget = target;
                $scope.currentObject = angular.copy(object);
                $scope.cloneObject = angular.copy(object);

                console.log('$scope.cloneObject', $scope.cloneObject);

                fill($scope.cloneObject);

                attachWatchers();

                return;
            } else {
                detachWatchers();
            }
        });

        $scope.types = [];

        // ---

        $scope.diff = function () {
            return cr_UtilsManager.cr_ObjectUtils.diff($scope.cloneObject, $scope.currentObject);
        };

        $scope.diffSize = function () {
            return cr_UtilsManager.cr_ObjectUtils.size($scope.diff());
        };

        $scope.fillColorSettings = {
            position: 'bottom right',
            opacity: false
        };

        $scope.opacityTextSettings = {
            step: 0.01,
            value: 1,
            min: 0,
            max: 1
        };

        $scope.angleTextSettings = {
            step: 1,
            value: 0,
            min: 0,
            max: 360
        };


        //Font


        // Fill
        $scope.fillRule = 'nonzero'; //No Fill or Solid Color
        $scope.color_text = '#c95a00';

        //Position

        $scope.x_text = 0;
        $scope.y_text = -5;
        $scope.height_text = 24;
        $scope.width_text = 12;

        //Button

        $scope.disabled_button_back = false;
        $scope.disabled_button_forward = false;
        $scope.disabled_button_remove = false;

        // Options
        $scope.opacity = 1;
        $scope.angle = 0;




        $scope.align_button_click = function (event) {
            if (!jQuery(event.currentTarget).hasClass('disabled')) {
                console.log("Don't blocked");
            }
        };

        $scope.style_button_click = function () {
            if (jQuery(event.currentTarget).hasClass('active')) {
                console.log('deactivate');
            } else {
                console.log('activate');
            }
            if (!jQuery(event.currentTarget).hasClass('disabled')) {
                console.log("Don't blocked");
            } else {

            }
        };

        $scope.back = function (event) {
            if (!jQuery(event.currentTarget).hasClass('disabled')) {
                cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectSendToBackCommand($scope.currentTarget));
            }
        };

        $scope.forward = function (event) {
            if (!jQuery(event.currentTarget).hasClass('disabled')) {
                cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectBringToFrontCommand($scope.currentTarget));
            }
        };

        $scope.remove = function (event) {
            if (!jQuery(event.currentTarget).hasClass('disabled')) {
                cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectRemoveCommand($scope.currentTarget));
            }
        };

        $scope.apply = function (event) {
            if ($scope.currentTarget) {
                if ($scope.diffSize() > 0) {
                    console.log('cr_ObjectManipulationCommand 3');

                    cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectManipulationCommand($scope.currentTarget, $scope.cloneObject, $scope.currentObject));

                    $scope.cloneObject = angular.copy($scope.currentObject);

                    fill($scope.cloneObject);
                }
            }
        };

        $scope.restore = function (event) {
            if ($scope.currentTarget) {
                if ($scope.diffSize() > 0) {
                    $scope.currentTarget.set($scope.cloneObject);

                    fill($scope.cloneObject);
                }
            }
        };
    };

    // ---

    cr_RectCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        '$safeApply',
        'cr_Enums',
        'cr_CommandsManager',
        'cr_UtilsManager',
        'cr_EventsManager',
        'cr_DrawFactory'
    ];

    angular.module('cr_Customify').controller('cr_RectCtrl', cr_RectCtrl);
})();

