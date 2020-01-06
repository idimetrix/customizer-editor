angular.module('cr_Customify')
    .factory('cr_ObjectManipulationCommand', ['cr_UtilsManager', function (cr_UtilsManager) {

        var cr_ObjectManipulationCommand = function (item, originalOptions, modifiedOptions) {
            var self = this;

            self.name = 'cr_ObjectManipulationCommand';

            self.undoable = true;

            /**
             * Execute command
             */
            self.execute = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'execute'], self.name);

                item.set(modifiedOptions);
                item.setCoords();
            };

            /**
             * Undo command
             */
            self.undo = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'undo'], self.name);

                item.set(originalOptions);
                item.setCoords();
            };

            return self;
        };

        return cr_ObjectManipulationCommand;
    }]);