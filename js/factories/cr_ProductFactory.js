angular.module('cr_Customify')
    .factory('cr_ProductFactory', ['$rootScope', function ($rootScope) {
        var self = this;

        self.data = '';

        return self;
    }]);