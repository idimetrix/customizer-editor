angular.module('cr_Customify')
    .factory('cr_ObjectSelectionCommand', ['cr_UtilsManager', 'cr_DrawFactory', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_ObjectSelectionCommand = function (item, selection, event) {
            var self = this;

            self.name = 'cr_ObjectSelectionCommand';

            self.undoable = true;

            /**
             * Execute command
             */
            self.execute = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'execute'], self.name);

                if (selection) {
                    event ? cr_DrawFactory.fabric.setActiveObject(item) : cr_DrawFactory.fabric._setActiveObject(item);
                } else {
                    event ? cr_DrawFactory.fabric.discardActiveObject() : cr_DrawFactory.fabric._discardActiveObject();
                }

                //item.set('active', selection);
            };

            /**
             * Undo command
             */
            self.undo = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'undo'], self.name);

                if (selection) {
                    event ? cr_DrawFactory.fabric.discardActiveObject() : cr_DrawFactory.fabric._discardActiveObject();
                } else {
                    event ? cr_DrawFactory.fabric.setActiveObject(item) : cr_DrawFactory.fabric._setActiveObject(item);
                }

                //item.set('active', !selection);
            };

            return self;
        };

        return cr_ObjectSelectionCommand;
    }]);