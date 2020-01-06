angular.module('cr_Customify')
    .factory('cr_LineAddCommand', ['cr_UtilsManager', 'cr_DrawFactory', function (cr_UtilsManager, cr_DrawFactory) {

        var cr_LineAddCommand = function (points, x, y, styles) {
            var self = this;

            self.name = 'cr_LineAddCommand';

            self.undoable = true;

            self.item = new fabric.Polyline(points, jQuery.extend({
                stroke: 'red',
                fill: 'rgba(0, 0, 0, 0)',
                strokeWidth: 2,
                strokeLineJoin: 'bevil'
            }, styles, {}));

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

        return cr_LineAddCommand;
    }]);