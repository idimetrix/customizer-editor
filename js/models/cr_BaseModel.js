angular.module('cr_Customify').factory('cr_BaseModel', [function () {
    return function (data) {
        var model = {};

        model = angular.extend(model, data || {});
        model.clone = function () {
            return angular.copy(model);
        }

        return model;
    };
}]);