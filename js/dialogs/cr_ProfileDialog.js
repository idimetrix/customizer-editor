(function () {
    var cr_ProfileDialog = function ($scope, $modalInstance, parameters) {
        var self = this;

        console.log(1)
        $.getJSON("settings.json", function (data) {
            self.settings = data;
            console.log(self.settings)
        });


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

    cr_ProfileDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters'
    ];

    angular.module('cr_Customify').controller('cr_ProfileDialog', cr_ProfileDialog);
})();
