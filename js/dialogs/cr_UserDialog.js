(function () {
    var cr_UserDialog = function ($scope, $modalInstance, parameters) {
        var self = this;

        // ---

        console.log('parameters', parameters);

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';

        self.message = [];
        self.errors = [];
        self.loading = false;

        self.ok = function () {
            $modalInstance.close({
                test1: 'ok1',
                test2: 'ok2',
                test3: 'ok3'
            });
        };

        self.cancel = function () {
            $modalInstance.dismiss({
                test1: 'cancel1',
                test2: 'cancel2',
                test3: 'cancel3'
            });
        };

        return self;
    };

    // ---

    cr_UserDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters'
    ];

    angular.module('cr_Customify').controller('cr_UserDialog', cr_UserDialog);
})();
