angular.module('cr_Customify')
    .factory('cr_DrawFactory', ['cr_Enums', function (cr_Enums) {
        var self = this;

        self.canvas = null;
        self.fabric = null;
        self.selected = null;

        return self;
    }]);