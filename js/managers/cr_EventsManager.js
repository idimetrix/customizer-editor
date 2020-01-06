angular.module('cr_Customify')
    .factory('cr_EventsManager', ['$rootScope', '$events', 'cr_Enums', function ($rootScope, $events, cr_Enums) {
        var self = this;

        self.manager = function (storage) {
            return $events.getEventManager(storage);
        };

        return self;
    }]);