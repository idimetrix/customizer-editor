angular.module('cr_Customify')
    .factory('cr_BaseCommand', ['cr_UtilsManager', function (cr_UtilsManager) {

        var cr_BaseCommand = function () {
            var self = this;

            self.name = 'cr_BaseCommand';

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

        return cr_BaseCommand;
    }]);