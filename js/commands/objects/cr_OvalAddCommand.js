angular.module('cr_Customify')
    .factory('cr_OvalAddCommand', ['cr_UtilsManager', 'cr_DrawFactory', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_OvalAddCommand = function (x, y, rx, ry, styles) {
            var self = this;

            self.name = 'cr_OvalAddCommand';

            self.undoable = true;

            self.item = new fabric.Ellipse(jQuery.extend({}, styles, {
                rx: rx,
                ry: ry
            }));

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

        return cr_OvalAddCommand;
    }]);