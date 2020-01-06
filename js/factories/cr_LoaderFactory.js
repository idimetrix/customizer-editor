angular.module('cr_Customify').factory('cr_LoaderFactory', ['$rootScope', '$log', function ($rootScope, $log) {
    return new function Loading() {
        var self = this;

        // ---

        var inUse = false;

        // ---

        self.progress = 0;

        // ---

        self.isLoading = function isLoading() {
            return inUse === true;
        };

        self.load = function load() {

        };

        self.unload = function unload() {

        };

        var stateContainer = [];

        self.loaderall = false;
        self.loader = false;

        //{
        //    add: function (service) {
        //        stateContainer.push(service);
        //        $rootScope.globalLoader = true;
        //        $log.log('Add service: ' + service);
        //    },
        //
        //    remove: function (service) {
        //        stateContainer = _.without(stateContainer, service);
        //        $log.log('Remove service: ' + service);
        //
        //        if (stateContainer.length === 0) {
        //            $rootScope.globalLoader = false;
        //            $log.log('StateContainer is empty.');
        //        }
        //
        //    },
        //
        //    getByName: function (service) {
        //        return _.include(stateContainer, service)
        //    },
        //
        //    clear: function () {
        //        stateContainer.length = 0;
        //        $log.log('StateContainer clear.');
        //        return true;
        //    }
        //}

        return self;
    };
}]);
