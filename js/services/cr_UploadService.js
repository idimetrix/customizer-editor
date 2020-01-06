angular.module('cr_Customify').service('cr_UploadService',
    ['$http', '$q', 'cr_URLManager', 'cr_BaseService', 'FileUploader',
        function ($http, $q, cr_URLManager, cr_BaseService, FileUploader) {
            var self = this;

            // ---

            /**
             *
             * @param uploader
             * @param url
             * @returns {promise|qFactory.Deferred.promise}
             */
            self.upload = function (uploader, url) {
                var deffered = $q.defer();

                cr_BaseService.file(uploader, url).then(function (datas) {

                    deffered.notify({datas: datas});
                    deffered.resolve({datas: datas});
                }, function (datas) {
                    deffered.notify({datas: datas});
                    deffered.resolve({datas: datas});
                });

                return deffered.promise;
            }

            /**
             *
             * @param uploader
             * @returns {*|Object|HttpPromise}
             */
            self.uploadImage = function (uploader) {
                return self.upload(uploader, cr_URLManager['uploadpic']);
            }


            // ---

            return self;
        }]);