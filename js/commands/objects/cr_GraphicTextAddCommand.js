angular.module('cr_Customify')
    .factory('cr_GraphicTextAddCommand', ['cr_UtilsManager', 'cr_DrawFactory', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_GraphicTextAddCommand = function (text, x, y, styles) {
            var self = this;

            self.name = 'cr_GraphicTextAddCommand';

            self.undoable = true;

            self.item = new fabric.IText(text, jQuery.extend({}, styles, {}));

            self.item.set({
                left: x,
                top: y
            });

            /**
             * Execute command
             */
            self.execute = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'execute'], self.name);

                cr_DrawFactory.fabric.add(self.item);
            };

            /**
             * Undo command
             */
            self.undo = function () {
                cr_UtilsManager.cr_LogUtils.log(['command', 'undo'], self.name);

                cr_DrawFactory.fabric.remove(self.item);
            };

            return self;
        };

        return cr_GraphicTextAddCommand;
    }]);