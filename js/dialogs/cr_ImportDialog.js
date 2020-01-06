(function () {
    var cr_ImportDialog = function ($scope, $modalInstance, parameters, cr_DataFactory, $timeout, cr_DialogsManager) {
        var self = this;

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';

        self.message = [];
        self.errors = [];
        self.loading = false;

        $scope.date_show = true;

        $scope.import = cr_DataFactory.import;

        $scope.import_data_list = [];

        $scope.import.forEach(function (element) {
            if ($scope.import_data_list.indexOf(element.date) == -1) {
                $scope.import_data_list.push(element.date);
            }
        });

        self.ok = function () {
            $modalInstance.close();
        };

        self.cancel = function () {
            $modalInstance.dismiss();
        };

        $scope.Confirm = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.CONFIRM, {
                'title': 'Save or close',
                'description': 'Do you want to download a new template, save the old?'
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        self.detail_tab = function (tab, allClass) {
            jQuery('.' + allClass).removeClass('active');
            jQuery('.' + tab).addClass('active');
        };

        self.showMenuList = function (menuList) {
            jQuery('.' + menuList).toggle();
        };

        $scope.local = {};

        $timeout(function () {
            if ($('.import_item')) {
                $('.import_item ').eq(0).addClass('active');
                $scope.local = $scope.import[0];
            }
        }, 10);

        self.ConfirmFunction = function () {
            var condition = true;
            if (condition) {
                $scope.Confirm();
            }
        };

        self.updateData = function (item) {
            $scope.local = item;
        };

        self.zoom_minus = function () {
            var wrap = jQuery('.products_scroll-content').width();
            var size = jQuery('.products_content-item').width();
            var index_minus = Math.round(wrap / size);
            if (index_minus != 8) {
                index_minus++;
                jQuery('.products_content-item').css({
                    'width': wrap / index_minus,
                    'height': wrap / index_minus
                });
            }
            jQuery('.plus').css({'opacity': '1'});
            index_minus == 8 ? jQuery('.minus').css({'opacity': '0.4'}) : '';
        };

        self.zoom_plus = function () {
            var wrap = jQuery('.products_scroll-content').width();
            var size = jQuery('.products_content-item').width();
            var index_plus = Math.round(wrap / size);
            if (index_plus != 4) {
                index_plus--;
                jQuery('.products_content-item').css({
                    'width': wrap / index_plus,
                    'height': wrap / index_plus
                });
            }
            jQuery('.minus').css({'opacity': '1'});
            index_plus == 4 ? jQuery('.plus').css({'opacity': '0.4'}) : '';
        };
        $scope.index = 0;
        self.indexFunc = function () {
            $scope.index++;
            console.log($scope.index)
        };

        return self;
    };

    // ---

    cr_ImportDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_DataFactory',
        '$timeout',
        'cr_DialogsManager'
    ];

    angular.module('cr_Customify').controller('cr_ImportDialog', cr_ImportDialog);
})();
