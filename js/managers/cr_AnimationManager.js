angular.module('cr_Customify')
    .factory('cr_AnimationManager', ['$rootScope', 'cr_Enums', 'cr_DrawFactory', function ($rootScope, cr_Enums, cr_DrawFactory) {
        var self = this;

        self.animate = function () {

        };

        self.appearance = function (item, duration, callback) {
            duration = duration || 300;

            console.log('appearance', cr_DrawFactory.fabric.getWidth(), item.getWidth(), cr_DrawFactory.fabric.left);

            item.set({
                opacity: 0,
                left: (cr_DrawFactory.fabric.getWidth() - item.getWidth()) / 2 - cr_DrawFactory.fabric.left
            });
            item.animate('opacity', 1, {
                duration: duration,
                easing: fabric.util.ease.easeOutQuad
            });
            item.animate('top', (cr_DrawFactory.fabric.getHeight() / 2) - (item.getHeight() / 2), {
                duration: duration,
                onComplete: function () {
                    item.setCoords();

                    cr_DrawFactory.fabric.renderAll();
                    cr_DrawFactory.fabric.calcOffset();

                    callback && callback();
                },
                easing: fabric.util.ease.easeOutQuad
            });
        };

        return self;
    }]);