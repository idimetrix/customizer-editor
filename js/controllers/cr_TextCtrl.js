(function () {
    var cr_TextCtrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager, cr_DataFactory, cr_CommandsManager, cr_AnimationManager, cr_Enums, cr_DrawFactory) {

        // ---

        $scope.extra_fonts = cr_DataFactory.extra_fonts;
        $scope.tabs = [
            {tpl: 'tpl/layout-blocks/layout-rightsidebar/tabs/text-tabs/editable-text.html', active: true},
            {tpl: 'tpl/layout-blocks/layout-rightsidebar/tabs/text-tabs/graphic-font.html', active: false}
        ];

        $scope.disabled_button_editable = false;
        $scope.active_button_editable = true;

        $scope.disabled_button_graphic = false;
        $scope.active_button_graphic = false;

        // ---

        $scope.user_text = 'Text';
        $scope.current_font = 'Abel';
        $scope.size_font = 13;
        $scope.color_font = '#c95a00';

        $scope.disabled_button_left = true;
        $scope.disabled_button_center = true;
        $scope.disabled_button_right = false;
        $scope.disabled_button_justify = false;

        $scope.active_button_left = true;
        $scope.active_button_center = false;
        $scope.active_button_right = false;
        $scope.active_button_justify = false;


        $scope.disabled_button_bold = false;
        $scope.disabled_button_italic = false;
        $scope.disabled_button_underline = false;
        $scope.disabled_button_strikethrough = false;

        $scope.active_button_bold = false;
        $scope.active_button_italic = false;
        $scope.active_button_underline = false;
        $scope.active_button_strikethrough = false;

        // ---

        $scope.objectClick = function (type) {
            var command = null;

            switch (type) {
                // TEXT
                case cr_Enums.OBJECT_TYPE.TEXTBOX:
                    command = new cr_CommandsManager.cr_TextboxAddCommand('TEXT', 0, 0);
                    break;

                case cr_Enums.OBJECT_TYPE.ITEXT:
                    command = new cr_CommandsManager.cr_ITextAddCommand('TEXT', 0, 0);
                    break;

                case cr_Enums.OBJECT_TYPE.CR_CURVE_TEXT:
                    command = new cr_CommandsManager.cr_CurveTextAddCommand('TEXT', 50, 5, false, 0, 0);
                    break;

                case cr_Enums.OBJECT_TYPE.CR_BRIDGE_TEXT:
                    command = new cr_CommandsManager.cr_BridgeTextAddCommand('TEXT', 0, 0);
                    break;

                case cr_Enums.OBJECT_TYPE.CR_RICH_TEXT:
                    command = new cr_CommandsManager.cr_RichTextAddCommand('TEXT', 0, 0);
                    break;

                // GEOMETRY

                case cr_Enums.OBJECT_TYPE.CIRCLE:
                    command = new cr_CommandsManager.cr_CircleAddCommand(300, 100, 25);
                    break;

                case cr_Enums.OBJECT_TYPE.LINE:
                    command = new cr_CommandsManager.cr_LineAddCommand([
                        {x: 0, y: 0},
                        {x: 50, y: 0},
                        {x: 100, y: 0}
                    ], 0, 0);
                    break;

                case cr_Enums.OBJECT_TYPE.OVAL:
                    command = new cr_CommandsManager.cr_OvalAddCommand(0, 0, 25, 35);
                    break;

                case cr_Enums.OBJECT_TYPE.POLYGON:
                    command = new cr_CommandsManager.cr_PolygonAddCommand([
                        {x: 25, y: 0},
                        {x: 100, y: 0},
                        {x: 125, y: 100},
                        {x: 75, y: 100},
                        {x: 0, y: 100}
                    ], 0, 0);
                    break;

                case cr_Enums.OBJECT_TYPE.RECT:
                    command = new cr_CommandsManager.cr_RectAddCommand(0, 0, 50, 100);
                    break;


                case cr_Enums.OBJECT_TYPE.STAR:
                    command = new cr_CommandsManager.cr_StarAddCommand(0, 0, 5, 50, 100);
                    break;

                case cr_Enums.OBJECT_TYPE.TRIANGLE:
                    command = new cr_CommandsManager.cr_TriangleAddCommand(200, 300, 0, 0);
                    break;

                // QR / BAR

                case cr_Enums.OBJECT_TYPE.CR_QRCODE:
                    command = new cr_CommandsManager.cr_QRCodeAddCommand('http://idcreator.com/', 4, 450, 220, {
                        scaleX: 0.7,
                        scaleY: 0.7
                    });
                    break;

                case cr_Enums.OBJECT_TYPE.CR_BARCODE:
                    command = new cr_CommandsManager.cr_BarCodeAddCommand('TEXT', 'CODE128', 2, 100, 0, 0);
                    break;

                default:
                    break;

                // OTHER
            }

            if (command) {
                cr_CommandsManager.pushAndExecute(command);

                cr_AnimationManager.appearance(command.item, 300, function () {
                    cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectSelectionCommand(command.item, true));
                });

                $safeApply(function () {

                });
            }


            console.log('objectClick', type);
        };

        $scope.align_button_click = function (event) {
            if (!jQuery(event.currentTarget).hasClass('disabled')) {
                console.log("Don't blocked");
            } else {
                console.log("Blocked");
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

        $scope.createNewObject = function () {
            console.log('Create new object');
        };

        $scope.ExtraFontClick = function (id) {
            console.log('Extra Font Click. ID-' + id);
        };

        // ---

        $.getJSON("fonts.json", function (data) {
            $scope.fontsJSON = data;
            $scope.fonts = $scope.fontsJSON.items;
        });

        $timeout(function () {

            jQuery('.font_color_tab-text').minicolors({
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

            $("#effect-menu").metisMenu();

            $(".slider_1")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
            $(".slider_2")
                .slider({
                    value: 10,
                    min: 0,
                    max: 20
                })
                .slider("float");
            $(".slider_3")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
            $(".slider_4")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
            $(".slider_5")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
            $(".slider_6")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
            $(".slider_7")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
            $(".slider_8")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
            $(".slider_9")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
            $(".slider_10")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
            $(".slider_11")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
            $(".slider_12")
                .slider({
                    value: 10,
                    max: 20
                })
                .slider("float");
        }, 2000);

    };

    // ---

    cr_TextCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager',
        'cr_DataFactory',
        'cr_CommandsManager',
        'cr_AnimationManager',
        'cr_Enums',
        'cr_DrawFactory'
    ];

    angular.module('cr_Customify').controller('cr_TextCtrl', cr_TextCtrl);
})();

