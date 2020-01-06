(function () {
    var cr_ConfirmLibraryDialog = function ($scope, $modalInstance, parameters) {
        var self = this;

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';
        self.modal_id = parameters.id || '';

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

    cr_ConfirmLibraryDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters'
    ];

    angular.module('cr_Customify').controller('cr_ConfirmLibraryDialog', cr_ConfirmLibraryDialog);
})();
