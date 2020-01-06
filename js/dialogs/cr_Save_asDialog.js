(function () {
    var cr_Save_asDialog = function ($scope, $modalInstance, parameters) {
        var self = this;

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';
        self.modal_value = parameters.value || '';

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

    cr_Save_asDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters'
    ];

    angular.module('cr_Customify').controller('cr_Save_asDialog', cr_Save_asDialog);
})();