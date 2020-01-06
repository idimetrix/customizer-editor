angular.module('cr_Customify')
    .factory('cr_LogUtils', [function () {
        var self = this;

        self.log = function (tags) {
            var args = Array.prototype.slice.call(arguments);

            tags = tags && tags.length ? tags : ['debug'];

            args[0] = tags.join(', ') + ' >';

            console.log.apply(console, args);
        };

        return self;
    }]);