angular.module('cr_Customify')
    .factory('cr_KeysManager', ['$rootScope', 'hotkeys', function ($rootScope, hotkeys) {
        var self = this;

        self.add = function (keys, fn) {
            hotkeys.add({
                combo: keys,
                callback: fn
            });
        };

        return self;
    }]);