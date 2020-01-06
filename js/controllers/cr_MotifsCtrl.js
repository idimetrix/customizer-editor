(function () {
    var cr_MotifsCtrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager, cr_DataFactory, cr_RequestService, cr_ModelsManager) {


        // ---

        $scope.key = 'testkey';

        $scope.type_1 = cr_DataFactory.type_1;
        $scope.type_2 = cr_DataFactory.type_2;
        $scope.type_3 = cr_DataFactory.type_3;
        $scope.type_4 = cr_DataFactory.type_4;

        $scope.prints = {
            data: [],
            title: 'Big image1',
            width: 71,
            prints_types: []
        };

        $scope.items = [];
        $scope.canLoad = true;

        // ---

        $scope.disabled_button_1 = false;
        $scope.disabled_button_2 = true;
        $scope.disabled_button_3 = true;
        $scope.disabled_button_4 = true;


        $scope.active_button_1 = true;
        $scope.active_button_2 = false;
        $scope.active_button_3 = false;
        $scope.active_button_4 = false;

        // ---

        $scope.getCategories = function () {
            cr_RequestService.categories($scope.key).then(function (data) {
                if (typeof data == 'string') {
                    alert(data);
                } else {

                    if (data.OK == true) {
                        data.categories.forEach(function (element) {
                            $scope.prints.prints_types.push({text: element.name, category_id: element.category_id})
                        })
                    }
                }
            }, function (data) {
                //alert(data);
            }).then(function () {
                $scope.getAllPics();
            });
        };

        $scope.getCategories();


        $scope.getPics = function (category, categoryName) {
            cr_RequestService.pics($scope.key, category).then(function (data) {
                console.log(data)
                if (typeof data == 'string') {
                    alert(data);
                } else {
                    if (data.OK == true) {
                        data.data.forEach(function (element) {
                            $scope.prints.data.push({url: cr_URLManager.dev + element.url, category: categoryName})
                        })
                    }

                }
            }, function (data) {
                //alert(data);
            }).then(function () {
                $scope.local_prints = [];
                $scope.count_items = 0;
                for (var i = 1; i <= 20; i++) {
                    $scope.local_prints.push($scope.prints.data[i]);
                    $scope.count_items++;
                }
                $scope.maxItems = ($scope.prints.data).length - 1;
            });
        };

        $scope.addItems = function () {
            if ($scope.local_prints != undefined) {
                var value = ($scope.local_prints.length) + 1;
                //console.log($scope.prints.data)
                if ($scope.local_prints.length >= $scope.maxItems) {
                    $scope.canLoad = false;
                    return;
                }
                for (var i = value; i < value + 10; i++) {
                    //console.log($scope.local_prints)
                    $scope.local_prints.push($scope.prints.data[i]);

                    if ($scope.local_prints.length >= $scope.maxItems) {
                        $scope.canLoad = false;
                        return;
                    }
                }
            }
        };

        $scope.reset = function () {
            $scope.items = [];
            $scope.canLoad = true;
            $scope.addItems();
        };

        $scope.reset();

        $scope.getAllPics = function () {
            $scope.prints.prints_types.forEach(function (element) {
                $scope.getPics(element.category_id, element.text);
            })
        };

        var AlertCenterContent = function (wrap_container, width_element, item_element, wrap_el) {
            setTimeout(function () {
                var width_rightsidebar = wrap_container.not('.scroll-content').width();

                var width_item = width_element;
                var index = width_rightsidebar / width_item;
                index = (Math.floor(index) - 0);

                if ((index * width_item) < width_rightsidebar) {
                    var width_el;
                    width_el = width_rightsidebar / index;
                    item_element.css({'width': width_el, 'height': width_el});
                }
            }, 400);
        };

        $scope.changeCategory = function (value) {

            var arr = [
                {
                    data: $scope.type_1,
                    title: 'Big image1',
                    width: 71,
                    prints_types: [
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Top Designs',
                            type: 'PrintType1'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Animals',
                            type: 'PrintType2'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Bachelor',
                            type: 'PrintType3'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Beer and Partying',
                            type: 'PrintType4'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Cities',
                            type: 'PrintType5'
                        })
                    ]
                },
                {
                    data: $scope.type_2,
                    title: 'Big image2',
                    width: 71,
                    prints_types: [
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Top Designs',
                            type: 'PrintType1'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Animals',
                            type: 'PrintType2'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Bachelor',
                            type: 'PrintType3'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Beer and Partying',
                            type: 'PrintType4'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Cities',
                            type: 'PrintType5'
                        })
                    ]
                },
                {
                    data: $scope.type_3,
                    title: 'Big image3',
                    width: 71,
                    prints_types: [
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Top Designs',
                            type: 'PrintType1'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Animals',
                            type: 'PrintType2'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Bachelor',
                            type: 'PrintType3'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Beer and Partying',
                            type: 'PrintType4'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Cities',
                            type: 'PrintType5'
                        })
                    ]
                },
                {
                    data: $scope.type_4,
                    title: 'Big image4',
                    width: 71,
                    prints_types: [
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Top Designs',
                            type: 'PrintType1'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Animals',
                            type: 'PrintType2'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Bachelor',
                            type: 'PrintType3'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Beer and Partying',
                            type: 'PrintType4'
                        }),
                        new cr_ModelsManager.cr_TypesPrint({
                            text: 'Cities',
                            type: 'PrintType5'
                        })
                    ]
                }];

            //if (value == 1) {
            //    $scope.prints = arr[0];
            //}
            //if (value == 2) {
            //    $scope.prints = arr[1];
            //}
            //if (value == 3) {
            //    $scope.prints = arr[2];
            //}
            //if (value == 4) {
            //    $scope.prints = arr[3];
            //}
            $timeout(function () {
                AlertCenterContent(jQuery('.motifs_scroll-content'), $scope.prints.width, jQuery('.motifs_content-item'), jQuery('.motifs_wrap-content'));
            }, 0)

        };

    };

    // ---

    cr_MotifsCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager',
        'cr_DataFactory',
        'cr_RequestService',
        'cr_ModelsManager'
    ];

    angular.module('cr_Customify').controller('cr_MotifsCtrl', cr_MotifsCtrl);
})();

