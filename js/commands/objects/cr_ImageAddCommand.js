angular.module('cr_Customify')
    .factory('cr_ImageAddCommand', ['cr_UtilsManager', 'cr_DrawFactory', function (cr_UtilsManager, cr_DrawFactory) {

        function loaded() {
            cr_DrawFactory.fabric.renderAll();
        }

        var cr_ImageAddCommand = function (url, x, y, styles) {
            var self = this;

            self.name = 'cr_ImageAddCommand';

            self.undoable = true;

            self.item = new fabric.cr_Image(url, jQuery.extend({}, styles, {}));
            self.item.on('image:loaded', function () {
                self.item.set({
                    left: x,
                    top: y
                });

                loaded();
            });

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

        return cr_ImageAddCommand;
    }]);