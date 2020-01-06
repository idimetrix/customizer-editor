angular.module('cr_Customify')
    .factory('cr_StringUtils', [function () {
        var self = this;

        self.random = function (count) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < count; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        };

        return self;
    }]);