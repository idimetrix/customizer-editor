angular.module('cr_Customify')
    .factory('cr_NumberUtils', [function () {
        var self = this;

        self.random = function (min, max, fractional) {
            return fractional ? Math.random() * (max - min) + min : Math.floor(Math.random() * (max - min + 1)) + min;
        };

        self.limit = function (value, min, max) {
            return Math.max(min, Math.min(value, max));
        };

        self.round = function (value, decimals) {
            return Number((value).toFixed(decimals));
        };


        return self;
    }]);