(function () {
    var cr_LoginDialog = function ($scope, $modalInstance, parameters, cr_DialogsManager, cr_RequestService, cr_LoginFactory, $timeout) {
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

        self.Restoration = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.RESTORATION, {
                'title': 'Restoration',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        self.Join = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.JOIN, {
                'title': 'Join',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $timeout(function () {
            self.ValidInfo = jQuery(".login_form").bootstrapValidator({
                message: 'This value is not valid',
                fields: {
                    Password: {
                        validators: {
                            notEmpty: {
                                message: 'The field is required and cannot be empty'
                            }
                        }
                    },
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

        self.login = function () {
            var valid = true;

            jQuery('.login_form').data('bootstrapValidator').isValid();

            if (self.ValidInfo.data('bootstrapValidator').isValid()) {

                var key = 'testkey',
                    email = jQuery('.login_email').val(),
                    pass = jQuery('.login_password').val();

                cr_RequestService.login(key, email, pass).then(function (data) {

                    if (typeof data == 'string') {
                        //alert(data);
                    } else {

                        cr_LoginFactory.user.user_key = data.data.user_key;
                        // ---
                        cr_LoginFactory.user.name = data.data.name;
                        cr_LoginFactory.user.id = data.data.id;
                        cr_LoginFactory.login_status = true;
                        // ---

                        //cr_RequestService.user('testkey', cr_LoginFactory.user.user_key).then(function (data) {
                        //    console.log(data);
                        //    if (typeof data == 'string') {
                        //        //alert(data);
                        //    } else {
                        //        cr_LoginFactory.user.name = data.data.name;
                        //        cr_LoginFactory.user.id = data.data.id;
                        //        cr_LoginFactory.login_status = true;
                        //
                        //    }
                        //}, function (data) {
                        //    //alert(dataUser);
                        //
                        //});

                        cr_RequestService.cart('testkey', cr_LoginFactory.user.user_key).then(function (data) {
                            console.log(data);
                            if (typeof data == 'string') {
                                //alert(data);
                            } else {
                                var data_basket = JSON.parse(data.data.data);
                                cr_LoginFactory.user.basket.count = data_basket.length;
                                cr_LoginFactory.user.basket.items = data_basket;
                            }
                        }, function (data) {
                            //alert(data);

                        });
                        self.ok();
                    }
                }, function (data) {
                    ////alert(data);
                });

            } else {

            }
        };
        return self;
    };

    // ---

    cr_LoginDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_DialogsManager',
        'cr_RequestService',
        'cr_LoginFactory',
        '$timeout'
    ];

    angular.module('cr_Customify').controller('cr_LoginDialog', cr_LoginDialog);
})();
