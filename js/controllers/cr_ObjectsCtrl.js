(function () {
    var cr_ObjectsCtrl = function ($rootScope, $scope, $timeout, $element, $safeApply, cr_URLManager, cr_UtilsManager, cr_DataFactory, cr_CommandsManager, cr_AnimationManager, cr_Enums, cr_DrawFactory) {

        $scope.basic_objects = cr_DataFactory.basic_objects;

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


    };

    // ---

    cr_ObjectsCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        '$safeApply',
        'cr_URLManager',
        'cr_UtilsManager',
        'cr_DataFactory',
        'cr_CommandsManager',
        'cr_AnimationManager',
        'cr_Enums',
        'cr_DrawFactory'
    ];

    angular.module('cr_Customify').controller('cr_ObjectsCtrl', cr_ObjectsCtrl);
})();

