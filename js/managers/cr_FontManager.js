angular.module('cr_Customify')
    .factory('cr_FontManager', ['$rootScope', '$http', '$timeout', function ($rootScope, $http, $timeout) {
        var self = this;

        self.fonts = null;

        $http.get('fonts.json').success(function (response) {
            console.log('response', response);

            self.fonts = response.items;
        });

        return self;
    }]);