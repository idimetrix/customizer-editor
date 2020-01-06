angular.module('cr_Customify').service('cr_BaseService', ['$http', '$q', '$log', function ($http, $q, $log) {
    var self = this;

    // ---

    var debug = false;

    // ---

    self.parse = function (data) {
        data = data || {};

        data = angular.extend({OK: false}, data);

        data.isSuccess = function () {
            return ((data.OK && data.OK == true) || (data.id));
        };

        data.isError = function () {
            return !data.isSuccess();
        };

        return data;
    };

    self.get = function (url, data) {
        var deffered = $q.defer();

        debug && console.log('BEFORE GET > ', data);

        $http.get(url, {
            params: data
        })
            .success(function (d) {
                var data = self.parse(d);

                debug && console.log('AFTER GET > ', data, d);

                deffered.notify(data);

                if (data.isSuccess()) {
                    deffered.resolve(data);
                } else {
                    deffered.reject(data);
                }
            })
            .error(function (d) {
                var data = self.parse(d);

                deffered.notify(data);

                deffered.reject(data);
            });

        return deffered.promise;
    }

    self.post = function (url, data1) {
        var deffered = $q.defer();

        debug && console.log('BEFORE POST > ', data1);

        $http.post(url, data1)
            .success(function (d) {
                var data = self.parse(d);

                debug && console.log('AFTER POST > ', data, d);

                if (data.isSuccess()) {
                    deffered.resolve(data);
                } else {
                    deffered.reject(data);
                }

                deffered.notify(data);
            })
            .error(function (d) {
                var data = self.parse(d);

                deffered.reject(data);

                deffered.notify(data);
            });

        return deffered.promise;
    }


    // ---

    /** Api for FileUploader - https://github.com/nervgh/angular-file-upload/wiki/Module-API
     *
     * @param uploader
     * @param url
     * @returns {promise|qFactory.Deferred.promise}
     */
    self.file = function (uploader, url, key, user_key, replace_id) {
        var datas = [];

        var deffered = $q.defer();

        uploader.url = url;

        uploader.filters.push({
            name: 'customFilter',
            fn: function (item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            $log.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function (fileItem) {
            $log.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function (addedFileItems) {
            $log.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function (item) {
            $log.info('onBeforeUploadItem', item);

            item.url = url;

            var formData = [
                {
                    key: key,
                    user_key: user_key,
                    replace_id: replace_id
                }
            ];
            Array.prototype.push.apply(item.formData, formData);
        };
        uploader.onProgressItem = function (fileItem, progress) {
            $log.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function (progress) {
            $log.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            $log.info('onSuccessItem', fileItem, response, status, headers);

            var data = self.parse(response);

            if (data.isSuccess()) {

            } else {

            }

            datas.push(data);
        };
        uploader.onErrorItem = function (fileItem, response, status, headers) {
            $log.info('onErrorItem', fileItem, response, status, headers);

            var data = self.parse(response);

            datas.push(data);
        };
        uploader.onCancelItem = function (fileItem, response, status, headers) {
            $log.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            $log.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function () {
            $log.info('onCompleteAll');

            var ok = false;

            for (var i = 0, count = datas.length; i < count; i++) {
                if (datas[i].isSuccess()) {
                    ok = true;
                    break;
                } else {

                }
            }

            uploader.clearQueue();

            deffered.notify(datas);

            if (ok) {
                deffered.resolve(datas);
            } else {
                deffered.reject(datas);
            }
        };

        uploader.uploadAll();

        // ---

        return deffered.promise;
    }

    // ---

    return self;
}]);