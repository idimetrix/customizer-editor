angular.module('cr_Customify')
    .factory('cr_ObjectUtils', [function () {
        var self = this;

        self.diff = function (a, b) {
            var r = {};

            if (a && b) {
                _.each(a, function (v, k) {
                    if (_.isEqual(b[k], v)) return;
                    r[k] = _.isObject(v) ? self.diff(v, b[k]) : v;
                });
            }

            return r;
        };

        self.size = function (obj) {
            var size = 0, key;

            if (obj) {
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) size++;
                }
            }

            return size;
        };

        return self;
    }]);