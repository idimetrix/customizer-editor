(function () {
    var cr_InfoDialog = function ($scope, $modalInstance, parameters) {
        var self = this;

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';

        self.message = [];
        self.errors = [];
        self.loading = false;

        self.ok = function () {
            $modalInstance.close();
        };

        self.cancel = function () {
            $modalInstance.dismiss();
        };

        return self;
    };

    // ---

    cr_InfoDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters'
    ];

    angular.module('cr_Customify').controller('cr_InfoDialog', cr_InfoDialog);
})();
