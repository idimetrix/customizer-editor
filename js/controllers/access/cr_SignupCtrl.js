(function () {
    var cr_SignupCtrl = function ($scope, $translate, $localStorage, $window, cr_RequestService, $state) {
        var ctrl = this;

        ctrl.user = {
            login: '',
            email: '',
            password: '',
            key: 'testkey'
        };

        ctrl.useDescription = true;
        ctrl.useSignin = true;

        ctrl.authSuccess = [];
        ctrl.authError = [];

        ctrl.signup = function () {

            ctrl.authSuccess = [];
            ctrl.authError = [];


             cr_RequestService.join(ctrl.user.key, ctrl.user.login, ctrl.user.email, ctrl.user.password).then(function (data) {

                 cr_RequestService.login(ctrl.user.key, ctrl.user.email, ctrl.user.password).then(function (data) {
                     console.log('!!! signin success');
                     if (1) {
                         console.log(data);
                         $state.go('app.home');
                     } else {

                     }
                 }, function (data) {
                     console.log('!!! signin error');
                 });
             });

        }

        return ctrl;
    };

    // ---

    cr_SignupCtrl.$inject = [
        '$scope',
        '$translate',
        '$localStorage',
        '$window',
        'cr_RequestService',
        '$state'
    ];

    angular.module('cr_Customify').controller('cr_SignupCtrl', cr_SignupCtrl);
})();
