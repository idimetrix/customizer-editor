angular.module('cr_Customify')
    .factory('cr_TriangleAddCommand', ['cr_UtilsManager', 'cr_DrawFactory', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_TriangleAddCommand = function (x, y, width, height, styles) {
            var self = this;

            self.name = 'cr_TriangleAddCommand';

            self.undoable = true;

            self.item = new fabric.Triangle(jQuery.extend({}, styles, {
                width: width,
                height: height
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

        return cr_TriangleAddCommand;
    }]);