(function () {
    var cr_LockMeCtrl = function ($scope, $translate, $localStorage, $window) {
        var ctrl = this;

        return ctrl;
    };

    // ---

    cr_LockMeCtrl.$inject = [
        '$scope',
        '$translate',
        '$localStorage',
        '$window'
    ];

    angular.module('cr_Customify').controller('cr_LockMeCtrl', cr_LockMeCtrl);
})();
