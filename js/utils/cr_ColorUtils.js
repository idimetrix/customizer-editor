angular.module('cr_Customify')
    .factory('cr_ColorUtils', [function () {
        var self = this;

        self.randomColor = function () {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };

        self.hex2rgba = function (hex, opacity) {
            opacity = opacity == undefined ? 1 : opacity;

            var hex = hex.replace('#', ''),
                r = parseInt(hex.substring(0, 2), 16),
                g = parseInt(hex.substring(2, 4), 16),
                b = parseInt(hex.substring(4, 6), 16);

            return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
        };

        self.rgba2hex = function (rgba) {
            var arr = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
            return (arr && arr.length === 4) ? "#" +
            ("0" + parseInt(arr[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(arr[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(arr[3], 10).toString(16)).slice(-2) : rgba;
        };

        return self;
    }]);