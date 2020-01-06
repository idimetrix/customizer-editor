angular.module('cr_Customify')
    .factory('cr_ObjectExchangeCommand', ['cr_UtilsManager', 'cr_DrawFactory', 'cr_UtilsManager', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_ObjectExchangeCommand = function (item1, item2) {
            var self = this;

            self.name = 'cr_ObjectExchangeCommand';

            self.undoable = true;

            var index1 = 0;
            var index2 = 0;

            /**
             * Execute command
             */
            self.execute = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'execute'], self.name);

                index1 = cr_DrawFactory.fabric._objects.indexOf(item1);
                index2 = cr_DrawFactory.fabric._objects.indexOf(item2);

                cr_UtilsManager.cr_ArrayUtils.remove(cr_DrawFactory.fabric._objects, item1);
                cr_UtilsManager.cr_ArrayUtils.insert(cr_DrawFactory.fabric._objects, index2, item1);

                cr_UtilsManager.cr_ArrayUtils.remove(cr_DrawFactory.fabric._objects, item2);
                cr_UtilsManager.cr_ArrayUtils.insert(cr_DrawFactory.fabric._objects, index1, item2);
            };

            /**
             * Undo command
             */
            self.undo = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'undo'], self.name);

                cr_UtilsManager.cr_ArrayUtils.remove(cr_DrawFactory.fabric._objects, item1);
                cr_UtilsManager.cr_ArrayUtils.insert(cr_DrawFactory.fabric._objects, index1, item1);

                cr_UtilsManager.cr_ArrayUtils.remove(cr_DrawFactory.fabric._objects, item2);
                cr_UtilsManager.cr_ArrayUtils.insert(cr_DrawFactory.fabric._objects, index2, item2);
            };

            return self;
        };

        return cr_ObjectExchangeCommand;
    }]);