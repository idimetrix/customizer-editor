angular.module('cr_Customify')
    .factory('cr_Enums', ['$rootScope', function ($rootScope) {
        var self = this;

        self.Gender = {
            MALE: 'male',
            FEMALE: 'female',
            UNKNOWN: 'unknown'
        };

        self.Alignment = {
            LEFT: 'left',
            RIGHT: 'right',
            CENTER: 'center',
            CENTER: 'center'
        };

        self.OBJECT_TYPE = {
            TEXTBOX: 'textbox',
            ITEXT: 'i-text',
            CR_BARCODE: 'cr_barcode',
            CR_QRCODE: 'cr_qrcode',
            CR_IMAGE: 'cr_image',
            CR_SVG: 'cr_svg',
            GROUP: 'group',
            CR_SHAPE: 'cr_shape',
            CR_BRIDGE: 'cr_bridge',
            CR_CURVER: 'cr_curver',
            CR_CURVE_TEXT: 'cr_curve_text',
            CR_BRIDGE_TEXT: 'cr_bridge_text',
            CR_RICH_TEXT: 'cr_rich_text',
            CIRCLE: 'circle',
            LINE: 'polyline',
            OVAL: 'ellipse',
            POLYGON: 'polygon',
            RECT: 'rect',
            STAR: 'cr_star',
            TRIANGLE: 'triangle'
        };

        self.FIELD_TYPE = {
            NUMBER: 'number',
            COLOR: 'color',
            ENUM: 'enum',
            BOOLEAN: 'boolean',
            STRING: 'string',
            SHADOW: 'shadow',
            ARRAY_NUMBER: 'array_number'
        };

        self.OPTIONS_STATE = {
            LAYERS: 'layers',
            HISTORY: 'history',
            PROPERTIES: 'properties',
            EFFECTS: 'effects',
            INFO: 'info'
        };

        self.TABS_STATE = {
            MOTIFS: 'motifs',
            TEXT: 'text',
            OBJECTS: 'objects',
            UPLOAD: 'upload'
        };

        self.EVENTS_STORAGES = {
            OBJECTS: {
                name: 'EVENT_STORAGE_OBJECTS',
                events: {
                    copy: 'copy',
                    paste: 'paste',
                    cut: 'cut',
                    del: 'del'
                }
            },
            STAGE: {
                name: 'EVENT_STORAGE_STAGE',
                events: {}
            },
            PROPERTIES: {
                name: 'EVENT_STORAGE_PROPERTIES',
                events: {
                    initialize: 'initialize'
                }
            }
        };

        return self;
    }]);