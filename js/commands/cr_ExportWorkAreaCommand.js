angular.module('cr_Customify')
    .factory('cr_ExportWorkAreaCommand', ['cr_UtilsManager', function (cr_UtilsManager) {

        var cr_ExportWorkAreaCommand = function () {
            var self = this;

            self.name = 'cr_ExportWorkAreaCommand';

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

        return cr_ExportWorkAreaCommand;
    }]);