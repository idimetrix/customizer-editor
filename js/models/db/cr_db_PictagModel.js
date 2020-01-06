angular.module('cr_Customify').factory('cr_db_PictagModel', ['cr_BaseModel', function (cr_BaseModel) {
    return function (data) {
        var model = {
            id: '',
            category_id: '',
            pic_id: '',
            active: ''
        };

        model = angular.extend(new cr_BaseModel(), model, data || {});
        model.clone = function () {
            return angular.copy(model);
        };

        return model;
    };
}]);