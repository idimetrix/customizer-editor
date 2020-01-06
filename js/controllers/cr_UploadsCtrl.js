(function () {
    var cr_UploadsCtrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager, FileUploader, cr_RequestService, cr_ModelsManager) {

        // ---
        $scope.file_uploader = new FileUploader();
        $scope.upload_empty = true;
        $scope.LoadImages = [];
        $scope.listDate = [];
        $scope.listDate_clone = [];

        $scope.listDate_reverse = [];

        // ---

        $scope.file_uploader.onAfterAddingAll = function () {
            $scope.acceptSelect();
        };
        // ---

        $scope.acceptSelect = function () {
            console.log($scope.file_uploader);
            cr_RequestService.upload($scope.file_uploader, 'testkey', 'test_user').then(function (data) {

                console.log($scope.file_uploader, '!!! cr_RequestService', data);

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    data.forEach(function (element, index, array) {
                        $scope.LoadImages.push(new cr_ModelsManager.cr_LoadImages({
                            name: element.name,
                            url: /*'/' +*/ cr_URLManager.base + '/' + element.url,
                            type: 'PrintType2',
                            date: element.updated_at.split(" ")[0],
                            id: element.id
                        }));
                    });
                    $scope.file_uploader.onAfterAddingAll = function () {
                        $scope.acceptSelect();
                    };

                }
                $scope.LoadImages.forEach(function (element) {
                    if ($scope.listDate_clone.indexOf(element.date) == -1) {
                        $scope.listDate.push({date: element.date});
                        $scope.listDate_clone.push(element.date);
                        $scope.upload_empty = false;
                    }
                });


                setTimeout(function () {
                    $scope.invalidateBoxesSize();
                }, 100)
            }, function (data) {
                console.log('!!! cr_RequestService error', data);

                ////alert(data);
            });
        };

        cr_RequestService.userpics('testkey', 'test_user', 0, 20).then(function (data) {
            if (typeof data == 'string') {
                ////alert(data);
            } else {


                data.data.forEach(function (element, index, array) {
                    $scope.LoadImages.push(new cr_ModelsManager.cr_LoadImages({
                        name: element.name,
                        url: /*'/' +*/ cr_URLManager.base + '/' + element.url,
                        type: 'PrintType2',
                        date: element.updated_at.split(" ")[0],
                        id: element.id
                    }));
                });
            }

            $scope.LoadImages.forEach(function (element) {
                if ($scope.listDate_clone.indexOf(element.date) == -1) {
                    $scope.listDate.push({date: element.date});
                    $scope.listDate_clone.push(element.date);
                    $scope.upload_empty = false;
                }

            });
            console.log(data)
            setTimeout(function () {
                $scope.invalidateBoxesSize();
            }, 100)
        }, function (data) {
            //alert(data);
        });
    };

    // ---

    cr_UploadsCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager',
        'FileUploader',
        'cr_RequestService',
        'cr_ModelsManager'
    ];

    angular.module('cr_Customify').controller('cr_UploadsCtrl', cr_UploadsCtrl);
})();

