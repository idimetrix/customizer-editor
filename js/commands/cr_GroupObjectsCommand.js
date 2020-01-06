angular.module('cr_Customify')
    .factory('cr_GroupObjectsCommand', ['cr_UtilsManager', 'cr_DrawFactory', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_GroupObjectsCommand = function (objects) {
            var self = this;

            self.name = 'cr_GroupObjectsCommand';

            self.undoable = true;

            self.item = null;

            /**
             * Execute command
             */
            self.execute = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'execute'], self.name);

                var cloneObjects = [];

                objects.forEach(function (object, index) {
                    cloneObjects.push(object.clone());
                });

                self.item = new fabric.Group(cloneObjects);
                cr_DrawFactory.fabric.add(self.item);

                objects.forEach(function (object) {
                    cr_DrawFactory.fabric.remove(object);
                });

            };

            /**
             * Undo command
             */
            self.undo = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'undo'], self.name);

                cr_DrawFactory.fabric.remove(self.item);

                objects.forEach(function (object) {
                    cr_DrawFactory.fabric.add(object);
                });
            };

            return self;
        };

        return cr_GroupObjectsCommand;
    }]);