(function () {

    var cr_AppCtrl = function ($rootScope,
                               $scope,
                               $element,
                               $timeout,
                               cr_Enums,
                               cr_AppFactory,
                               cr_EditorFactory,
                               cr_DrawFactory,
                               cr_LayoutFactory,
                               cr_LanguageFactory,
                               cr_TreeFactory,
                               cr_ContentFactory,
                               cr_LoaderFactory,
                               cr_PreloaderFactory,
                               cr_FullscreenFactory,
                               cr_ScrollbarFactory,
                               cr_DrawerFactory,
                               cr_DialogsManager,
                               cr_ModelsManager,
                               cr_URLManager,
                               cr_CommandsManager,
                               cr_FontManager,
                               cr_StatesManager,
                               cr_DataFactory,
                               cr_PopoverFactory,
                               cr_ClipboardFactory,
                               cr_LoginFactory) {

        $rootScope.cr_Enums = cr_Enums;
        $rootScope.cr_AppFactory = cr_AppFactory;
        $rootScope.cr_EditorFactory = cr_EditorFactory;
        $rootScope.cr_DrawFactory = cr_DrawFactory;
        $rootScope.cr_LayoutFactory = cr_LayoutFactory;
        $rootScope.cr_LanguageFactory = cr_LanguageFactory;
        $rootScope.cr_TreeFactory = cr_TreeFactory;
        $rootScope.cr_ContentFactory = cr_ContentFactory;
        $rootScope.cr_LoaderFactory = cr_LoaderFactory;
        $rootScope.cr_PreloaderFactory = cr_PreloaderFactory;
        $rootScope.cr_FullscreenFactory = cr_FullscreenFactory;
        $rootScope.cr_ScrollbarFactory = cr_ScrollbarFactory;
        $rootScope.cr_DrawerFactory = cr_DrawerFactory;
        $rootScope.cr_CommandsManager = cr_CommandsManager;
        $rootScope.cr_FontManager = cr_FontManager;
        $rootScope.cr_StatesManager = cr_StatesManager;
        $rootScope.cr_ModelsManager = cr_ModelsManager;
        $rootScope.cr_DataFactory = cr_DataFactory;
        $rootScope.cr_PopoverFactory = cr_PopoverFactory;
        $rootScope.cr_ClipboardFactory = cr_ClipboardFactory;
        $rootScope.cr_LoginFactory = cr_LoginFactory;

        // ---

        cr_DialogsManager.registerDialog(cr_DialogsManager.type.CONFIRM, cr_URLManager.dialogs + '/tpl/dialogs/Confirm/confirm.html', 'cr_ConfirmDialog', 'max_sm');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.CONFIRM_LIBRARY, cr_URLManager.dialogs + '/tpl/dialogs/Confirm/confirm_library.html', 'cr_ConfirmLibraryDialog', 'max_sm');

        cr_DialogsManager.registerDialog(cr_DialogsManager.type.BASE, cr_URLManager.dialogs + '/tpl/dialogs/base.html', 'cr_BaseDialog');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.ALERT, cr_URLManager.dialogs + '/tpl/dialogs/alert.html', 'cr_AlertDialog');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.USER, cr_URLManager.dialogs + '/tpl/dialogs/user.html', 'cr_UserDialog');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.ADDBASKET, cr_URLManager.dialogs + '/tpl/dialogs/add_basket.html', 'cr_AddBasketDialog');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.DETAIL, cr_URLManager.dialogs + '/tpl/dialogs/detail.html', 'cr_DetailDialog');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.PRODUCT, cr_URLManager.dialogs + '/tpl/dialogs/products.html', 'cr_ProductsDialog', 'max_lg');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.SAVE, cr_URLManager.dialogs + '/tpl/dialogs/save.html', 'cr_SaveDialog', 'md');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.LOGIN, cr_URLManager.dialogs + '/tpl/dialogs/login.html', 'cr_LoginDialog', 'max_sm');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.RESTORATION, cr_URLManager.dialogs + '/tpl/dialogs/restoration.html', 'cr_RestorationDialog', 'md');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.RESTORE, cr_URLManager.dialogs + '/tpl/dialogs/restore.html', 'cr_RestoreDialog', 'md');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.SAVEAS, cr_URLManager.dialogs + '/tpl/dialogs/save_as.html', 'cr_Save_asDialog', 'md');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.IMPORT, cr_URLManager.dialogs + '/tpl/dialogs/import.html', 'cr_ImportDialog', 'max_lg');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.MMARKET, cr_URLManager.dialogs + '/tpl/dialogs/mini_market.html', 'cr_MMarketDialog', 'max_lg');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.JOIN, cr_URLManager.dialogs + '/tpl/dialogs/join.html', 'cr_JoinDialog', 'max_sm');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.FAQ, cr_URLManager.dialogs + '/tpl/dialogs/faq.html', 'cr_FAQDialog', 'md');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.INFO, cr_URLManager.dialogs + '/tpl/dialogs/info.html', 'cr_InfoDialog', 'lg');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.VIDEO, cr_URLManager.dialogs + '/tpl/dialogs/video.html', 'cr_VideoDialog', 'md');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.ABOUTUS, cr_URLManager.dialogs + '/tpl/dialogs/about_us.html', 'cr_AboutUsDialog', 'lg');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.CONTACTUS, cr_URLManager.dialogs + '/tpl/dialogs/contact_us.html', 'cr_ContactUsDialog', 'max_lg');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.PROFILE, cr_URLManager.dialogs + '/tpl/dialogs/profile.html', 'cr_ProfileDialog', 'lg');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.CREDIT, cr_URLManager.dialogs + '/tpl/dialogs/credit_card.html', 'cr_CreditCardDialog', 'md');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.BASKET, cr_URLManager.dialogs + '/tpl/dialogs/basket.html', 'cr_BasketDialog', 'lg');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.NOTIFICATION, cr_URLManager.dialogs + '/tpl/dialogs/notification.html', 'cr_NotificationDialog', 'lg');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.SETTINGS, cr_URLManager.dialogs + '/tpl/dialogs/settings.html', 'cr_SettingsDialog', 'md');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.LAYERS, cr_URLManager.dialogs + '/tpl/dialogs/layers.html', 'cr_LayersDialog', 'md');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.HISTORY, cr_URLManager.dialogs + '/tpl/dialogs/history.html', 'cr_HistoryDialog', 'md');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.TEST, cr_URLManager.dialogs + '/tpl/dialogs/text_api.html', 'cr_TestApiDialog', 'lg');
        cr_DialogsManager.registerDialog(cr_DialogsManager.type.IMAGEEDITORPRO, cr_URLManager.dialogs + '/tpl/dialogs/image_editor_pro.html', 'cr_EditorImageProDialog', 'md_lg');
        // ---

        $rootScope.$on("$includeContentLoaded", function (event) {

        });

        var firstState = null;

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            var butterbar = jQuery('.butterbar');

            if (firstState == null) {
                firstState = toState.name;
            }

            switch (toState.name) {
            }

        });

        // ---

        cr_PreloaderFactory.progress = 100;

        $timeout(function () {
            cr_PreloaderFactory.hide();
        }, 1000);

        /*
         $timeout(function () {
         cr_PreloaderFactory.progress = 30;

         $timeout(function () {
         cr_PreloaderFactory.progress = 70;

         $timeout(function () {
         cr_PreloaderFactory.progress = 100;

         $timeout(function () {
         cr_PreloaderFactory.hide();
         }, 500);
         }, 500);
         }, 500);
         }, 500);
         */
    };

    // ---

    cr_AppCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$element',
        '$timeout',
        'cr_Enums',
        'cr_AppFactory',
        'cr_EditorFactory',
        'cr_DrawFactory',
        'cr_LayoutFactory',
        'cr_LanguageFactory',
        'cr_TreeFactory',
        'cr_ContentFactory',
        'cr_LoaderFactory',
        'cr_PreloaderFactory',
        'cr_FullscreenFactory',
        'cr_ScrollbarFactory',
        'cr_DrawerFactory',
        'cr_DialogsManager',
        'cr_ModelsManager',
        'cr_URLManager',
        'cr_CommandsManager',
        'cr_FontManager',
        'cr_StatesManager',
        'cr_DataFactory',
        'cr_PopoverFactory',
        'cr_ClipboardFactory',
        'cr_LoginFactory'
    ];

    angular.module('cr_Customify').controller('cr_AppCtrl', cr_AppCtrl);
})();
