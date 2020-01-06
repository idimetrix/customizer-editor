angular.module('cr_Customify')
    .factory('cr_TextboxAddCommand', ['cr_UtilsManager', 'cr_DrawFactory', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_TextboxAddCommand = function (text, x, y, styles) {
            var self = this;

            self.name = 'cr_TextboxAddCommand';

            self.undoable = true;

            self.item = new fabric.Textbox(text, jQuery.extend({fill: '#000000'}, styles, {}));

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

        return cr_TextboxAddCommand;
    }]);