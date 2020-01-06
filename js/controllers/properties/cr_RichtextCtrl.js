(function () {
    var cr_RichtextCtrl = function ($rootScope, $scope, $timeout, $element, $safeApply, cr_Enums, cr_CommandsManager, cr_UtilsManager, cr_EventsManager, cr_DrawFactory) {


        var type_text_watcher;
        var color_text_watcher;
        var size_text_watcher;
        var opacity_watcher;
        var angle_watcher;
        var x_text_watcher;
        var y_text_watcher;
        var height_text_watcher;
        var width_text_watcher;
        var visible_text_watcher;
        var decoration_text_watcher;
        var textAlign_text_watcher;
        var text_text_watcher;
        var flipX_text_watcher;
        var flipY_text_watcher;

        var backgroundColor_text_watcher;
        var fillRule_text_watcher;
        var fontFamily_text_watcher;
        var fontStyle_text_watcher;
        var fontWeight_text_watcher;
        var globalCompositeOperation_text_watcher;
        var lineHeight_text_watcher;
        var minWidth_text_watcher;
        var originX_text_watcher;
        var originY_text_watcher;
        var scaleX_text_watcher;
        var scaleY_text_watcher;
        var shadow_text_watcher;
        var stroke_text_watcher;
        var strokeDashArray_text_watcher;
        var strokeLineCap_text_watcher;
        var strokeLineJoin_text_watcher;
        var strokeMiterLimit_text_watcher;
        var strokeWidth_text_watcher;
        var textBackgroundColor_text_watcher;

        $scope.currentTarget = null;
        $scope.currentObject = null;
        $scope.cloneObject = null;

        function attachWatchers() {
            detachWatchers();

            // Font

            type_text_watcher = $scope.$watch('type_text', function () {

            });

            color_text_watcher = $scope.$watch('color_text', function () {
                $scope.currentObject.fill = $scope.color_text;
                $scope.currentTarget.set('fill', $scope.color_text);
            });

            size_text_watcher = $scope.$watch('size_text', function (value) {
                value = parseFloat(value);

                $scope.currentObject.fontSize = value;
                $scope.currentTarget.set('fontSize', value);
                $scope.currentTarget.setCoords();
            });

            // Options

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

            decoration_text_watcher = $scope.$watch('text_decoration', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.text_decoration = value;
                $scope.currentTarget.set('text_decoration', value);
                $scope.currentTarget.setCoords();
            });

            textAlign_text_watcher = $scope.$watch('textAlign', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.textAlign = value;
                $scope.currentTarget.set('textAlign', value);
                $scope.currentTarget.setCoords();
            });

            text_text_watcher = $scope.$watch('text', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.text = value;
                $scope.currentTarget.set('text', value);
                $scope.currentTarget.setCoords();
            });

            flipX_text_watcher = $scope.$watch('flipX', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipX = value;
                $scope.currentTarget.set('flipX', value);
                $scope.currentTarget.setCoords();
            });

            flipY_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });

            backgroundColor_text_watcher = $scope.$watch('backgroundColor', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.backgroundColor = value;
                $scope.currentTarget.set('backgroundColor', value);
                $scope.currentTarget.setCoords();
            });
            fillRule_text_watcher = $scope.$watch('fillRule', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.fillRule = value;
                $scope.currentTarget.set('fillRule', value);
                $scope.currentTarget.setCoords();
            });
            fontFamily_text_watcher = $scope.$watch('fontFamily', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.fontFamily = value;
                $scope.currentTarget.set('fontFamily', value);
                $scope.currentTarget.setCoords();
            });
            fontStyle_text_watcher = $scope.$watch('fontStyle', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.fontStyle = value;
                $scope.currentTarget.set('fontStyle', value);
                $scope.currentTarget.setCoords();
            });
            fontWeight_text_watcher = $scope.$watch('lineHeight', function (value) {
                //value = parseFloat(value);
                value = parseFloat(value);


                $scope.currentObject.lineHeight = value;
                $scope.currentTarget.set('lineHeight', value);
                $scope.currentTarget.setCoords();
            });
            globalCompositeOperation_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            lineHeight_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            minWidth_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            originX_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            originY_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            scaleX_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            scaleY_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            shadow_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            stroke_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            strokeDashArray_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            strokeLineCap_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            strokeLineJoin_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            strokeMiterLimit_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            strokeWidth_text_watcher = $scope.$watch('flipY', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.flipY = value;
                $scope.currentTarget.set('flipY', value);
                $scope.currentTarget.setCoords();
            });
            textBackgroundColor_text_watcher = $scope.$watch('textBackgroundColor', function (value) {
                //value = parseFloat(value);
                $scope.currentObject.textBackgroundColor = value;
                $scope.currentTarget.set('textBackgroundColor', value);
                $scope.currentTarget.setCoords();
            });
        }

        function detachWatchers() {
            type_text_watcher && type_text_watcher();
            color_text_watcher && color_text_watcher();
            size_text_watcher && size_text_watcher();
            opacity_watcher && opacity_watcher();
            angle_watcher && angle_watcher();
            x_text_watcher && x_text_watcher();
            y_text_watcher && y_text_watcher();
            height_text_watcher && height_text_watcher();
            width_text_watcher && width_text_watcher();
            visible_text_watcher && visible_text_watcher();
            decoration_text_watcher && decoration_text_watcher();
            textAlign_text_watcher && textAlign_text_watcher();
            text_text_watcher && text_text_watcher();
            flipX_text_watcher && flipX_text_watcher();
            flipY_text_watcher && flipY_text_watcher();

            backgroundColor_text_watcher && backgroundColor_text_watcher();
            fillRule_text_watcher && fillRule_text_watcher();
            fontFamily_text_watcher && fontFamily_text_watcher();
            fontStyle_text_watcher && fontStyle_text_watcher();
            fontWeight_text_watcher && fontWeight_text_watcher();
            globalCompositeOperation_text_watcher && globalCompositeOperation_text_watcher();
            lineHeight_text_watcher && lineHeight_text_watcher();
            minWidth_text_watcher && minWidth_text_watcher();
            originX_text_watcher && originX_text_watcher();
            originY_text_watcher && originY_text_watcher();
            scaleX_text_watcher && scaleX_text_watcher();
            scaleY_text_watcher && scaleY_text_watcher();
            shadow_text_watcher && shadow_text_watcher();
            stroke_text_watcher && stroke_text_watcher();
            strokeDashArray_text_watcher && strokeDashArray_text_watcher();
            strokeLineCap_text_watcher && strokeLineCap_text_watcher();
            strokeLineJoin_text_watcher && strokeLineJoin_text_watcher();
            strokeMiterLimit_text_watcher && strokeMiterLimit_text_watcher();
            strokeWidth_text_watcher && strokeWidth_text_watcher();
            textBackgroundColor_text_watcher && textBackgroundColor_text_watcher();
        }

        function fill(obj) {
            //Font
            $scope.color_text = obj.fill;
            $scope.size_text = obj.fontSize;

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
            $scope.text_decoration = obj.text_decoration;
            $scope.textAlign = obj.textAlign;
            $scope.text = obj.text;
            $scope.flipX = obj.flipX;
            $scope.flipY = obj.flipY;
            $scope.backgroundColor = obj.backgroundColor;
            $scope.textBackgroundColor = obj.textBackgroundColor;
            $scope.fillRule = obj.fillRule;
            $scope.fontFamily = obj.fontFamily;
            $scope.fontStyle = obj.fontStyle;
            $scope.fontWeight = obj.fontWeight;
            $scope.lineHeight = obj.lineHeight;


            $scope.stroke = obj.stroke;
            $scope.strokeDashArray = obj.strokeDashArray;
            $scope.strokeLineCap = obj.strokeLineCap;
            $scope.strokeLineJoin = obj.strokeLineJoin;
            $scope.strokeMiterLimit = obj.strokeMiterLimit;
            $scope.strokeWidth = obj.strokeWidth;
            $scope.shadow = obj.shadow;
            $scope.scaleX = obj.scaleX;
            $scope.scaleY = obj.scaleY;
            $scope.originX = obj.originX;
            $scope.originY = obj.originY;
            $scope.minWidth = obj.minWidth;
            $scope.globalCompositeOperation = obj.minWidth;
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


        $scope.fillColorSettings2 = {
            position: 'bottom left',
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

        $scope.lineHeightSettings = {
            step: 0.1,
            value: 1,
            min: 0,
            max: 2
        };


        //Position
        $scope.x_Richtex = 0;
        $scope.y_Richtex = -5;
        $scope.height_Richtex = 24;
        $scope.width_Richtex = 12;

        //Button

        $scope.disabled_button_back = false;
        $scope.disabled_button_forward = false;
        $scope.disabled_button_remove = false;



        //Font

        $scope.type_text = '';
        $scope.color_text = '#000000';
        $scope.size_text = 50;

        $scope.disabled_button_bold = false;
        $scope.disabled_button_italic = false;
        $scope.disabled_button_underline = false;
        $scope.disabled_button_strikethrough = false;

        $scope.active_button_bold = false;
        $scope.active_button_italic = false;
        $scope.active_button_underline = false;
        $scope.active_button_strikethrough = false;

        //Alignment

        $scope.disabled_button_left = false;
        $scope.disabled_button_center = false;
        $scope.disabled_button_right = false;
        $scope.disabled_button_justify = true;

        $scope.active_button_left = true;
        $scope.active_button_center = false;
        $scope.active_button_right = false;
        $scope.active_button_justify = false;

        //Position

        $scope.opacity = 1;
        $scope.angle = 0;

        $scope.x_text = 0;
        $scope.y_text = 0;
        $scope.height_text = 0;
        $scope.width_text = 0;

        //Button

        $scope.disabled_button_back = false;
        $scope.disabled_button_forward = false;
        $scope.disabled_button_remove = false;

        // ---

        //Flip

        $scope.disabled_button_FlipX = false;
        $scope.disabled_button_FlipY = false;

        $scope.active_button_FlipX = false;
        $scope.active_button_FlipY = false;

        $scope.flipX = false;
        $scope.flipY = false;

        $scope.visible = true;
        $scope.text_decoration = "";
        $scope.textAlign = "left";
        $scope.text = "TEXT";

        $scope.disabled_button_Nonzero = false;
        $scope.disabled_button_Evenodd = false;

        $scope.active_button_Nonzero = false;
        $scope.active_button_Evenodd = false;

        $scope.backgroundColor = '';
        $scope.textBackgroundColor = '';
        $scope.fillRule = '';
        $scope.fontFamily = 'Times New Roman';
        $scope.fontStyle = 'normal';
        $scope.fontWeight = 'normal';
        $scope.lineHeight = 1;




        $scope.globalCompositeOperation = '';
        $scope.minWidth = '';
        $scope.originX = '';
        $scope.originY = '';
        $scope.scaleX = '';
        $scope.scaleY = '';
        $scope.shadow = '';
        $scope.stroke = '';
        $scope.strokeDashArray = '';
        $scope.strokeLineCap = '';
        $scope.strokeLineJoin = '';
        $scope.strokeMiterLimit = '';
        $scope.strokeWidth = '';



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
        $scope.toggle_option = function() {
            $('.wrap_option_box').toggle();
            if($('.wrap_option_box').css('display')!='none'){
                $('.toggle_option').find('span').text('Hide advanced options');
            }else{
                $('.toggle_option').find('span').text('Show advanced options');
            }
        }

        // ---
    };

    // ---

    cr_RichtextCtrl.$inject = [
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

    angular.module('cr_Customify').controller('cr_RichtextCtrl', cr_RichtextCtrl);
})();

