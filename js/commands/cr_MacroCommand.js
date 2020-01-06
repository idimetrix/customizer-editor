angular.module('cr_Customify')
    .factory('cr_MacroCommand', ['cr_UtilsManager', function (cr_UtilsManager) {

        var cr_MacroCommand = function (commands) {
            var self = this;

            self.name = 'cr_MacroCommand';

            self.undoable = true;

            /**
             * Execute command
             */
            self.execute = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'execute'], self.name);

                jQuery.each(commands || [], function (index, command) {
                    self.undoable = self.undoable && command.undoable;

                    command.execute();
                });
            };

            /**
             * Undo command
             */
            self.undo = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'undo'], self.name);

                jQuery.each((commands || []).slice().reverse(), function (index, command) {
                    command.undo();
                });
            };

            return self;
        };

        return cr_MacroCommand;
    }]);