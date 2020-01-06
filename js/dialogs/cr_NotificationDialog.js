(function () {
    var cr_NotificationDialog = function ($scope, $modalInstance, parameters, cr_LoginFactory) {
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

        self.detail_tab = function (tab, allClass) {
            jQuery('.' + allClass).removeClass('active');
            jQuery('.' + tab).addClass('active');
        };
        setTimeout(function () {
            $('.text_notification').text(cr_LoginFactory.user.notifications.items[0].text);
        }, 500);
        self.show_text = function (text) {
            $('.text_notification').text(text);
        };

        return self;
    };

    // ---

    cr_NotificationDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_LoginFactory'
    ];

    angular.module('cr_Customify').controller('cr_NotificationDialog', cr_NotificationDialog);
})();
