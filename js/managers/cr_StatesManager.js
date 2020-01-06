angular.module('cr_Customify')
    .factory('cr_StatesManager', ['$rootScope', 'cr_Enums', function ($rootScope, cr_Enums) {
        var self = this;

        self.option = cr_Enums.OPTIONS_STATE.PROPERTIES;
        self.tab = cr_Enums.TABS_STATE.MOTIFS;

        return self;
    }]);