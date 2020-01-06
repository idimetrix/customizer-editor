angular.module('cr_Customify').factory('cr_db_ProductModel', ['cr_BaseModel', function (cr_BaseModel) {
    return function (data) {
        var model = {
            id: '',
            name: '',
            user_id: '',
            user_key: '',
            description: '',
            template: '',
            created_at: '',
            updated_at: '',
            active: ''
        };

        model = angular.extend(new cr_BaseModel(), model, data || {});
        model.clone = function () {
            return angular.copy(model);
        };

        return model;
    };
}]);