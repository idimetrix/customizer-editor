angular.module('cr_Customify')
    .factory('cr_ArrayUtils', [function () {
        var self = this;

        /**
         *
         * @param arr
         * @returns {*}
         */
        self.shuffle = function (arr) {
            var i = arr.length, j, temp;
            if (i == 0) return arr;
            while (--i) {
                j = Math.floor(Math.random() * ( i + 1 ));
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

            return arr;
        };

        /**
         *
         * @param arr
         * @param item
         * @returns {*}
         */
        self.remove = function (arr, item) {
            for (var i = arr.length; i--;) {
                if (arr[i] === item) {
                    arr.splice(i, 1);
                }
            }

            return arr;
        };

        /**
         *
         * @param arr
         * @param index
         * @param item
         * @returns {*}
         */
        self.insert = function (arr, index, item) {
            arr.splice(index, 0, item);

            return arr;
        };

        return self;
    }]);