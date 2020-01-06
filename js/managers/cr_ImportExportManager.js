angular.module('cr_Customify')
    .factory('cr_ImportExportManager', ['$rootScope', 'cr_Enums', 'cr_ModelsManager', 'cr_DrawFactory', function ($rootScope, cr_Enums, cr_ModelsManager, cr_DrawFactory) {
        var self = this;

        self.import = function (data) {
            cr_DrawFactory.fabric.fromObject(JSON.parse(data));
        };

        self.export = function () {
            var export_data = [];
            var data = cr_DrawFactory.fabric.getObjects();
            data.forEach(function(element) {
                export_data.push(element.toObject());
            });
            return JSON.stringify(export_data);
        };

        return self;
    }]);