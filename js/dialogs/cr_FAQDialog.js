(function () {
    var cr_FAQDialog = function ($scope, $modalInstance, parameters, cr_DataFactory) {
        var self = this;

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';

        $scope.FAQ = cr_DataFactory.FAQ;

        self.message = [];
        self.errors = [];
        self.loading = false;

        self.ok = function () {
            $modalInstance.close();
        };

        self.cancel = function () {
            $modalInstance.dismiss();
        };

        setTimeout(function () {
            $("#FAQ-menu").metisMenu();
        }, 100);

        return self;
    };

    // ---

    cr_FAQDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_DataFactory'
    ];

    angular.module('cr_Customify').controller('cr_FAQDialog', cr_FAQDialog);
})();
