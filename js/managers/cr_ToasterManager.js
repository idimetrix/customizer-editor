angular.module('cr_Customify')
    .factory('cr_ToasterManager', ['$rootScope', 'toaster', function ($rootScope, toaster) {
        var self = this;

        // ---

        self.type = {
            SUCCESS: 'success',
            ERROR: 'error',
            WARNING: 'warning',
            NOTE: 'note'
        };

        self.success = function (title, body) {
            self.pop(self.type.SUCCESS, title, body);
        };

        self.error = function (title, body) {
            self.pop(self.type.ERROR, title, body);
        };

        self.warning = function (title, body) {
            self.pop(self.type.WARNING, title, body);
        };

        self.note = function (title, body) {
            self.pop(self.type.NOTE, title, body);
        };

        self.pop = function (type, title, body) {
            toaster.pop({
                type: type,
                title: title,
                body: body,
                onHideCallback: function () {

                }
            });
        };

        self.clear = function () {
            toaster.clear.apply(toaster, arguments);
        };

        // ---

        return self;
    }]);