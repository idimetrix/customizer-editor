(function () {
    var cr_RestorationDialog = function ($scope, $modalInstance, parameters, cr_DialogsManager) {
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
        setTimeout(function () {
            self.restorationInfo = jQuery(".restorationForm").bootstrapValidator({
                message: 'This value is not valid',
                fields: {
                    Email: {
                        validators: {
                            notEmpty: {
                                message: 'The field is required and cannot be empty'
                            },
                            emailAddress: {
                                message: 'The input is not a valid email address'
                            }
                        }
                    }
                }
            });

        }, 1500);
        self.Restore = function () {
            self.restorationInfo.bootstrapValidator('validate');
            if (self.restorationInfo.data('bootstrapValidator').isValid()) {
                cr_DialogsManager.create(cr_DialogsManager.type.RESTORE, {
                    'title': 'Restore',
                    'description': ''
                }).then(function (args) {
                    console.log('ok', args);
                }, function (args) {
                    console.log('CLOSE', args);
                });
            }
        };

        return self;
    };

    // ---

    cr_RestorationDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_DialogsManager'
    ];

    angular.module('cr_Customify').controller('cr_RestorationDialog', cr_RestorationDialog);
})();
