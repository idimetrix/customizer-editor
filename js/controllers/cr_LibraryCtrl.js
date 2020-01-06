(function () {
    var cr_LibraryCtrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager, cr_DataFactory, cr_DialogsManager) {

        // ---

        $scope.products_favorite_library = cr_DataFactory.products_favorite_library;

        // Dialogs

        $scope.Confirm_library = function (id) {
            cr_DialogsManager.create(cr_DialogsManager.type.CONFIRM_LIBRARY, {
                'title': 'Save or close',
                'description': 'Do you want to download a new template, save the old?'
            }).then(function (args) {
                $scope.SaveAndContinue(id)
            }, function (args) {
                $scope.DontSaveAndOpen(id);
            });
        };

        // ---

        $scope.SaveAndContinue = function (id) {
            console.log('Save And Continue. id-' + id);
        };

        $scope.DontSaveAndOpen = function (id) {
            console.log('Don\'t save and continue. id-' + id);
        }
    };

    // ---

    cr_LibraryCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager',
        'cr_DataFactory',
        'cr_DialogsManager'
    ];

    angular.module('cr_Customify').controller('cr_LibraryCtrl', cr_LibraryCtrl);
})();

