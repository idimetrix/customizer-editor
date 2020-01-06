(function () {
    var cr_JoinDialog = function ($scope, $modalInstance, parameters, cr_DialogsManager, cr_RequestService) {
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

        self.Login = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.LOGIN, {
                'title': 'Login',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        setTimeout(function () {
            self.joinInfo = jQuery(".join_form").bootstrapValidator({
                message: 'This value is not valid',
                fields: {
                    PasswordJoin: {
                        validators: {
                            notEmpty: {
                                message: 'The field is required and cannot be empty'
                            }
                        }
                    },
                    password_confirmationJoin: {
                        validators: {
                            identical: {
                                field: 'password',
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    },
                    EmailJoin: {
                        validators: {
                            notEmpty: {
                                message: 'The field is required and cannot be empty'
                            },
                            emailAddress: {
                                message: 'The input is not a valid email address'
                            }
                        }
                    },
                    NameJoin: {
                        validators: {
                            notEmpty: {
                                message: 'The field is required and cannot be empty'
                            }
                        }
                    }
                }
            });

        }, 1500);

        self.join = function () {
            var valid = true;
            jQuery('.join_form').data('bootstrapValidator').isValid();
            console.log(self.joinInfo.data('bootstrapValidator').isValid())
            if (self.joinInfo.data('bootstrapValidator').isValid()) {
                var key = 'testkey',
                    name = jQuery('.join_name').val(),
                    email = jQuery('.join_email').val(),
                    pass = jQuery('.join_password').val();

                cr_RequestService.join(key, name, email, pass).then(function (data) {
                    if (typeof data == 'string') {
                        //alert(data);
                    } else {

                    }
                }, function (data) {
                    ////alert(data);
                });
                self.ok();
            } else {

            }

        };

        return self;
    };

    // ---

    cr_JoinDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_DialogsManager',
        'cr_RequestService'
    ];

    angular.module('cr_Customify').controller('cr_JoinDialog', cr_JoinDialog);
})();
