angular.module('cr_Customify')
    .factory('cr_DialogsManager', ['$rootScope', '$modal', '$timeout', 'cr_UtilsManager', function ($rootScope, $modal, $timeout, cr_UtilsManager) {
        var self = this;

        // ---

        var dialogs = {};

        // ---

        self.type = {
            BASE: 'BASE',
            ALERT: 'ALERT',


            CONFIRM: 'CONFIRM',
            CONFIRM_LIBRARY: 'CONFIRM_LIBRARY',

            USER: 'USER',
            ADDBASKET: 'ADDBASKET',
            DETAIL: 'DETAIL',
            PRODUCT: 'PRODUCT',
            SAVE: 'SAVE',
            LOGIN: 'LOGIN',
            RESTORATION: 'RESTORATION',
            RESTORE: 'RESTORE',
            SAVEAS: 'SAVEAS',
            MMARKET: 'MMARKET',
            IMPORT: 'IMPORT',
            JOIN: 'JOIN',
            INFO: 'INFO',
            FAQ: 'FAQ',
            VIDEO: 'VIDEO',
            ABOUTUS: 'ABOUTUS',
            CONTACTUS: 'CONTACTUS',
            PROFILE: 'PROFILE',
            CREDIT: 'CREDIT',
            BASKET: 'BASKET',
            NOTIFICATION: 'NOTIFICATION',
            SETTINGS: 'SETTINGS',
            LAYERS: 'LAYERS',
            HISTORY: 'HISTORY',
            TEST: 'TEST',
            IMAGEEDITORPRO: 'IMAGEEDITORPRO'
        };

        // ---

        self.registerDialog = function (name, template, controller, size) {
            dialogs[name] = {
                template: template,
                controller: controller,
                size: size
            };
        };

        self.unregisterDialog = function (name) {
            delete dialogs[name];
        };

        self.create = function (name, parameters) {
            var dialog = dialogs[name];

            if (!dialog) {
                return null;
            }

            var modalClass = dialog.controller + '-class-' + cr_UtilsManager.cr_StringUtils.random(8);

            var modalInstance = $modal.open({
                templateUrl: dialog.template,
                controller: dialog.controller + ' as ctrl',
                windowClass: modalClass,
                size: dialog.size || 'lg', // '' 'sm' 'lg'
                resolve: {
                    parameters: function () {
                        return jQuery.extend({
                            title: '',
                            description: ''
                        }, parameters || {});
                    }
                }
            });

            modalInstance.modalClass = modalClass;

            modalInstance.result.then(function () {

            }, function () {

            });

            return modalInstance.result;
        };

        return self;
    }]);