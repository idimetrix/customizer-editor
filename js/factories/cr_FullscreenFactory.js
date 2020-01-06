angular.module('cr_Customify')
    .factory('cr_FullscreenFactory', [function () {
        var self = this;

        self.fullscreen = false;

        return self;
    }]);