angular.module('cr_Customify')
    .factory('cr_ExportWorkAreaAsPNGCommand', ['cr_UtilsManager', function (cr_UtilsManager) {

        var cr_ExportWorkAreaAsPNGCommand = function () {
            var self = this;

            self.name = 'cr_ExportWorkAreaAsPNGCommand';

            self.undoable = true;

            /**
             * Execute command
             */
            self.execute = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'execute'], self.name);

                // TODO
            };

            /**
             * Undo command
             */
            self.undo = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'undo'], self.name);

                // TODO
            };

            return self;
        };

        return cr_ExportWorkAreaAsPNGCommand;
    }]);