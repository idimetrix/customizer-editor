angular.module('cr_Customify')
    .factory('cr_TreeFactory', ['$rootScope', function ($rootScope) {
        var self = this;

        self.data = [];

        return self;
    }]);