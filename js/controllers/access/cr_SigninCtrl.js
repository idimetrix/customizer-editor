(function () {
    var cr_SigninCtrl = function ($scope, $translate, $localStorage, $window, cr_RequestService, $state, cr_LoginFactory) {
        var ctrl = this;

        ctrl.user = {
            login: '',
            password: '',
            rememberMe: true,
            key: 'testkey'
        };

        ctrl.useDescription = true;
        ctrl.useForgot = true;
        ctrl.useSignup = true;
        ctrl.useRememberMe = true;

        ctrl.authSuccess = [];
        ctrl.authError = [];

        ctrl.signin = function () {
            ctrl.authSuccess = [];
            ctrl.authError = [];

            cr_RequestService.login(ctrl.user.key, ctrl.user.login, ctrl.user.password).then(function (data) {
                console.log('!!! signin success');
                if (1) {
                    console.log(data);
                    cr_LoginFactory.user.name = data.data.name;
                    cr_LoginFactory.login_status = true;
                    $state.go('app.home');
                } else {

                }
            }, function (data) {
                console.log('!!! signin error');
            });
        };

        //$('#loginForm').bootstrapValidator({
        //    framework: 'bootstrap',
        //    icon: {
        //        valid: 'glyphicon glyphicon-ok',
        //        invalid: 'glyphicon glyphicon-remove',
        //        validating: 'glyphicon glyphicon-refresh'
        //    },
        //    fields: {
        //        username: {
        //            validators: {
        //                notEmpty: {
        //                    message: 'The username is required'
        //                },
        //                stringLength: {
        //                    min: 6,
        //                    max: 30,
        //                    message: 'The username must be more than 6 and less than 30 characters long'
        //                },
        //                regexp: {
        //                    regexp: /^[a-zA-Z0-9_\.]+$/,
        //                    message: 'The username can only consist of alphabetical, number, dot and underscore'
        //                }
        //            }
        //        },
        //        password: {
        //            validators: {
        //                notEmpty: {
        //                    message: 'The password is required'
        //                }
        //            }
        //        }
        //    }
        //});

        return ctrl;
    };

    // ---

    cr_SigninCtrl.$inject = [
        '$scope',
        '$translate',
        '$localStorage',
        '$window',
        'cr_RequestService',
        '$state',
        'cr_LoginFactory'
    ];

    angular.module('cr_Customify').controller('cr_SigninCtrl', cr_SigninCtrl);
})();
