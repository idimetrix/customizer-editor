angular.module('cr_Customify')
    .factory('cr_ContentFactory', ['$rootScope', function ($rootScope) {
        var self = this;

        self.data = '';

        return self;
    }]);