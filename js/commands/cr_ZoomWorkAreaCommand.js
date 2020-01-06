angular.module('cr_Customify')
    .factory('cr_ZoomWorkAreaCommand', ['cr_UtilsManager', 'cr_DrawFactory', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_ZoomWorkAreaCommand = function (fromZoom, toZoom) {
            var self = this;

            self.name = 'cr_ZoomWorkAreaCommand';

            self.undoable = true;

            /**
             * Execute command
             */
            self.execute = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'execute'], self.name);

                cr_DrawFactory.fabric.setZoom(toZoom);
            };

            /**
             * Undo command
             */
            self.undo = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'undo'], self.name);

                cr_DrawFactory.fabric.setZoom(fromZoom);
            };

            return self;
        };

        return cr_ZoomWorkAreaCommand;
    }]);