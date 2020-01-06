angular.module('cr_Customify')
    .factory('cr_MoveWorkAreaCommand', ['cr_UtilsManager', 'cr_DrawFactory', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_MoveWorkAreaCommand = function (fromLeft, toLeft, fromTop, toTop) {
            var self = this;

            self.name = 'cr_MoveWorkAreaCommand';

            self.undoable = true;

            /**
             * Execute command
             */
            self.execute = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'execute'], self.name);

                cr_DrawFactory.fabric.positionTo(toLeft, toTop);
            };

            /**
             * Undo command
             */
            self.undo = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'undo'], self.name);

                cr_DrawFactory.fabric.positionTo(fromLeft, fromTop);
            };

            return self;
        };

        return cr_MoveWorkAreaCommand;
    }]);