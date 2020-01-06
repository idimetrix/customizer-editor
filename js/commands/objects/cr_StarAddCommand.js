angular.module('cr_Customify')
    .factory('cr_StarAddCommand', ['cr_UtilsManager', 'cr_DrawFactory', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_StarAddCommand = function (x, y, numPoints, innerRadius, outerRadius, styles) {
            var self = this;

            self.name = 'cr_StarAddCommand';

            self.undoable = true;

            self.item = new fabric.cr_Star(jQuery.extend({}, styles, {
                numPoints: numPoints,
                innerRadius: innerRadius,
                outerRadius: outerRadius
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

        return cr_StarAddCommand;
    }]);