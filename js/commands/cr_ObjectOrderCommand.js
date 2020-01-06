angular.module('cr_Customify')
    .factory('cr_ObjectOrderCommand', ['cr_UtilsManager', 'cr_DrawFactory', 'cr_UtilsManager', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_ObjectOrderCommand = function (item, position) {
            var self = this;

            self.name = 'cr_ObjectOrderCommand';

            self.undoable = true;

            var index = 0;

            /**
             * Execute command
             */
            self.execute = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'execute'], self.name);

                index = cr_DrawFactory.fabric._objects.indexOf(item);

                cr_UtilsManager.cr_ArrayUtils.remove(cr_DrawFactory.fabric._objects, item);
                cr_UtilsManager.cr_ArrayUtils.insert(cr_DrawFactory.fabric._objects, position, item);
            };

            /**
             * Undo command
             */
            self.undo = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'undo'], self.name);

                cr_UtilsManager.cr_ArrayUtils.remove(cr_DrawFactory.fabric._objects, item);
                cr_UtilsManager.cr_ArrayUtils.insert(cr_DrawFactory.fabric._objects, index, item);
            };

            return self;
        };

        return cr_ObjectOrderCommand;
    }]);