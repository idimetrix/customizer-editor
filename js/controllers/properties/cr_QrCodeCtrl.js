(function () {
    var cr_QrCodeCtrl = function ($rootScope, $scope, $timeout, $element, $safeApply, cr_Enums, cr_CommandsManager, cr_UtilsManager, cr_EventsManager, cr_DrawFactory) {

        var text_qr_code_watcher;
        var fill_qr_code_watcher;
        var color_qr_code_watcher;
        var x_qr_code_watcher;
        var y_qr_code_watcher;
        var height_qr_code_watcher;
        var width_qr_code_watcher;
        var colorDark_watcher;
        var colorLight_watcher;
        var opacity_watcher;
        var angle_watcher;
        var visible_qr_code_watcher;
        var flipX_qr_code_watcher;
        var flipY_qr_code_watcher;

        $scope.currentTarget = null;
        $scope.currentObject = null;
        $scope.cloneObject = null;

        function attachWatchers() {
            detachWatchers();

            text_qr_code_watcher = $scope.$watch('text_qr_code', function (value) {
                $scope.currentObject.text_qr_code = value;
                    $scope.currentTarget.set('text', value);
                    $scope.currentTarget.setCoords();
            });

            fill_qr_code_watcher = $scope.$watch('fill_qr_code', function (value) {
                $scope.currentObject.fill_qr_code = value;
                $scope.currentTarget.set('fillRule', value);
                $scope.currentTarget.setCoords();
            });
            ////
            color_qr_code_watcher = $scope.$watch('color_qr_code', function (value) {
                $scope.currentObject.fill_qr_code = value;
                $scope.currentTarget.set('fill', value);
                $scope.currentTarget.setCoords();
            });

            visible_qr_code_watcher = $scope.$watch('visible_qr_code', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.visible = value;
                $scope.currentTarget.set('visible', value);
                $scope.currentTarget.setCoords();
            });

            x_qr_code_watcher = $scope.$watch('x_qr_code', function (value) {
                value = parseFloat(value);

                $scope.currentObject.x_qr_code = value;
                $scope.currentTarget.set('left', value);
                $scope.currentTarget.setCoords();
            });

            y_qr_code_watcher = $scope.$watch('y_qr_code', function (value) {
                value = parseFloat(value);

                $scope.currentObject.y_qr_code = value;
                $scope.currentTarget.set('top', value);
                $scope.currentTarget.setCoords();
            });

            height_qr_code_watcher = $scope.$watch('height_qr_code', function (value) {
                value = parseFloat(value);

                $scope.currentObject.height_qr_code = value;
                $scope.currentTarget.set('height', value);
                $scope.currentTarget.setCoords();
            });

            width_qr_code_watcher = $scope.$watch('width_qr_code', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.width_qr_code = value;
                $scope.currentTarget.set('width', value);
                $scope.currentTarget.setCoords();
            });
            colorDark_watcher = $scope.$watch('colorDark', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.colorDark = value;
                $scope.currentTarget.set('colorDark', value);
                $scope.currentTarget.setCoords();
            });

            colorLight_watcher = $scope.$watch('colorLight', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.colorLight = value;
                $scope.currentTarget.set('colorLight', value);
                $scope.currentTarget.setCoords();
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

            flipX_qr_code_watcher = $scope.$watch('flipX', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipX = value;
                $scope.currentTarget.set('flipX', value);
                $scope.currentTarget.setCoords();
            });

            flipY_qr_code_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });

        }

        function detachWatchers() {
            text_qr_code_watcher &&  text_qr_code_watcher();
            fill_qr_code_watcher &&  fill_qr_code_watcher();
            color_qr_code_watcher &&  color_qr_code_watcher();
            x_qr_code_watcher &&  x_qr_code_watcher();
            y_qr_code_watcher &&  y_qr_code_watcher();
            height_qr_code_watcher &&  height_qr_code_watcher();
            width_qr_code_watcher &&  width_qr_code_watcher();
            colorDark_watcher &&  colorDark_watcher();
            colorLight_watcher &&  colorLight_watcher();
            opacity_watcher &&  opacity_watcher();
            angle_watcher &&  angle_watcher();
            visible_qr_code_watcher && visible_qr_code_watcher();
            flipX_qr_code_watcher && flipX_qr_code_watcher();
            flipY_qr_code_watcher && flipY_qr_code_watcher();
        }

        function fill(obj) {

            // Text
            $scope.text_qr_code = obj.text;

            // Fill
            $scope.fill_qr_code = obj.fillRule; //No Fill or Solid Color
            $scope.color_qr_code = obj.fill;

            //Border
            //$scope.type_border_qr_code = 'None'; //None Solid Dashed
            //$scope.color_border_qr_code = '#c95a00';
            //$scope.border_size_qr_code = 2;

            //Position

            $scope.visible = obj.visible;
            $scope.x_qr_code = obj.left;
            $scope.y_qr_code = obj.top;
            $scope.height_qr_code = obj.height;
            $scope.width_qr_code = obj.width;

            $scope.flipX = obj.flipX;
            $scope.flipY = obj.flipY;

            $scope.opacity = obj.opacity;
            $scope.angle = obj.angle;

            // ---

            $scope.colorDark = obj.colorDark;
            $scope.colorDark = obj.colorDark;
            $scope.fillRule = obj.fillRule;
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
            if (target && $scope.types.indexOf(target.type)) {
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




        // Text
        $scope.text_qr_code = '';

        // Fill
        $scope.fill_qr_code = 'nonzero'; //No Fill or Solid Color
        $scope.color_qr_code = '#fff';

        //Border
        $scope.type_border_qr_code = 'None'; //None Solid Dashed
        $scope.color_border_qr_code = '#c95a00';
        $scope.border_size_qr_code = 2;

        //Position
        $scope.x_qr_code = 0;
        $scope.y_qr_code = -5;
        $scope.height_qr_code = 24;
        $scope.width_qr_code = 12;

        $scope.visible_qr_code = true;
        //Button

        $scope.disabled_button_back = false;
        $scope.disabled_button_forward = false;
        $scope.disabled_button_remove = false;

        // ---

        $scope.disabled_button_FlipX = false;
        $scope.disabled_button_FlipY = false;

        $scope.active_button_FlipX = false;
        $scope.active_button_FlipY = false;

        $scope.flipX = false;
        $scope.flipY = false;
        // ---

        $scope.colorDark = '#000000';
        $scope.colorLight = '#ffffff';
        $scope.fillRule = '';

        $scope.opacity = 1;
        $scope.angle = 0;

        // ---

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

            jQuery('.color_qr_code').minicolors({
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

            jQuery('.color_border_qr_code').minicolors({
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
        }, 1000);
        $scope.toggle_option = function() {
            $('.wrap_option_box').toggle();
            if($('.wrap_option_box').css('display')!='none'){
                $('.toggle_option').find('span').text('Hide advanced options');
            }else{
                $('.toggle_option').find('span').text('Show advanced options');
            }
        }
    };

    // ---

    cr_QrCodeCtrl.$inject = [
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

    angular.module('cr_Customify').controller('cr_QrCodeCtrl', cr_QrCodeCtrl);
})();

