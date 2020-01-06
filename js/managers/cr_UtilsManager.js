angular.module('cr_Customify')
    .factory('cr_UtilsManager', ['$rootScope', 'cr_ArrayUtils', 'cr_ColorUtils', 'cr_DataUtils', 'cr_DateUtils', 'cr_LogUtils', 'cr_NumberUtils', 'cr_ObjectUtils', 'cr_StringUtils', 'cr_CustomUtils', 'cr_GeometryUtils',
        function ($rootScope, cr_ArrayUtils, cr_ColorUtils, cr_DataUtils, cr_DateUtils, cr_LogUtils, cr_NumberUtils, cr_ObjectUtils, cr_StringUtils, cr_CustomUtils, cr_GeometryUtils) {
            var self = this;

            self.cr_ArrayUtils = cr_ArrayUtils;
            self.cr_ColorUtils = cr_ColorUtils;
            self.cr_DataUtils = cr_DataUtils;
            self.cr_DateUtils = cr_DateUtils;
            self.cr_LogUtils = cr_LogUtils;
            self.cr_NumberUtils = cr_NumberUtils;
            self.cr_ObjectUtils = cr_ObjectUtils;
            self.cr_StringUtils = cr_StringUtils;
            self.cr_CustomUtils = cr_CustomUtils;
            self.cr_GeometryUtils = cr_GeometryUtils;

            return self;
        }]);


