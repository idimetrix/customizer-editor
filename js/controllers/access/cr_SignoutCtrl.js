(function () {
    var cr_SignoutCtrl = function ($scope, $translate, $localStorage, $window, cr_ScreenLockerFactory) {
        var ctrl = this;

        ctrl.signout = function () {
            cr_ScreenLockerFactory.lock();

            /*
             cr_RequestService.signout().then(function (data) {
             AuthFactory.user.fill(null);
             AuthFactory.logged = false;

             cr_ScreenLockerFactory.unlock();

             $state.go('access.signin');
             }, function () {
             cr_ScreenLockerFactory.unlock();
             });
             */
        };

        return ctrl;
    };

    // ---

    cr_SignoutCtrl.$inject = [
        '$scope',
        '$translate',
        '$localStorage',
        '$window',
        'cr_ScreenLockerFactory'
    ];

    angular.module('cr_Customify').controller('cr_SignoutCtrl', cr_SignoutCtrl);
})();
