angular.module('cr_Customify')
    .factory('cr_ObjectAddCommand', ['cr_UtilsManager', 'cr_DrawFactory', 'cr_Enums', 'cr_ObjectSelectionCommand', function (cr_UtilsManager, cr_DrawFactory, cr_Enums, cr_ObjectSelectionCommand) {

        var cr_ObjectAddCommand = function (item, styles) {
            var self = this;

            self.name = 'cr_ObjectAddCommand';

            self.undoable = true;

            /**
             * Execute command
             */
            self.execute = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'execute'], self.name);

                item.set(styles || {});

                cr_DrawFactory.fabric.add(item);
            };

            /**
             * Undo command
             */
            self.undo = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'undo'], self.name);

                cr_DrawFactory.fabric.remove(item);
            };

            return self;
        };

        return cr_ObjectAddCommand;
    }]);