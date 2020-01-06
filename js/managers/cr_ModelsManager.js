angular.module('cr_Customify')
    .factory('cr_ModelsManager', ['$rootScope',
        'cr_ExtraFontModel',
        'cr_PreviewModel',
        'cr_PrintItems',
        'cr_TypesPrint',
        'cr_LibraryItems',
        'cr_textFontItems',
        'cr_ListColor',
        'cr_LoadImages',
        'cr_SizeModel',
        'cr_ProductModel',
        'cr_MarketItems',
        'cr_ImportModel',
        'cr_DrawFactory',
        'cr_TemplateModel',
        function ($rootScope, cr_ExtraFontModel, cr_PreviewModel, cr_PrintItems, cr_TypesPrint, cr_LibraryItems, cr_textFontItems, cr_ListColor, cr_LoadImages, cr_SizeModel, cr_ProductModel, cr_MarketItems, cr_ImportModel, cr_DrawFactory, cr_TemplateModel) {
            var self = this;

            self.cr_ExtraFontModel = cr_ExtraFontModel;
            self.cr_PreviewModel = cr_PreviewModel;
            self.cr_PrintItems = cr_PrintItems;
            self.cr_TypesPrint = cr_TypesPrint;
            self.cr_LibraryItems = cr_LibraryItems;
            self.cr_textFontItems = cr_textFontItems;
            self.cr_ListColor = cr_ListColor;
            self.cr_LoadImages = cr_LoadImages;
            self.cr_SizeModel = cr_SizeModel;
            self.cr_ProductModel = cr_ProductModel;
            self.cr_MarketItems = cr_MarketItems;
            self.cr_ImportModel = cr_ImportModel;
            self.cr_TemplateModel = cr_TemplateModel;

            self.import = function (objects) {

            };

            self.export = function () {
                var data = cr_DrawFactory.fabric.toObject();

                return data.objects;
            };


            /**
             *
             * @param data
             * @param styles
             * @param execute
             * @returns {*}
             */
            self.createFromObject = function (data, styles, execute) {
                var obj = jQuery.extend({}, data, styles || {});

                var item = null;

                delete obj.type;

                switch (data.type) {
                    case cr_Enums.OBJECT_TYPE.ITEXT:
                        item = new fabric.IText(obj.text, obj);
                        break;
                    case cr_Enums.OBJECT_TYPE.CR_BARCODE:
                        item = new fabric.cr_BarCode(obj.text, obj);
                        break;
                    case cr_Enums.OBJECT_TYPE.CR_QRCODE:
                        item = new fabric.cr_QRCode(obj.text, obj);
                        break;
                    case cr_Enums.OBJECT_TYPE.CR_IMAGE:
                        item = new fabric.cr_Image(obj.url, obj);
                        break;
                    case cr_Enums.OBJECT_TYPE.CR_SVG:
                        item = new fabric.cr_SVG(obj.url, obj);
                        break;

                    default:
                        return null;
                        break;
                }

                item.set(styles);

                if (execute) {

                }

                return item;
            };

            /**
             *
             * @param type
             * @param styles
             * @param execute
             */
            self.createFromType = function (type, styles, execute) {
                var data = jQuery.extend({}, styles || {type: type});

                switch (type) {
                    case cr_Enums.OBJECT_TYPE.ITEXT:
                        data.text = 'TEST';
                        break;
                    case cr_Enums.OBJECT_TYPE.CR_BARCODE:

                        break;
                    case cr_Enums.OBJECT_TYPE.CR_QRCODE:

                        break;
                    case cr_Enums.OBJECT_TYPE.CR_IMAGE:

                        break;
                    case cr_Enums.OBJECT_TYPE.CR_SVG:

                        break;

                    default:
                        return null;
                        break;
                }

                return self.createFromObject(data, styles, execute);
            };

            return self;
        }]);


