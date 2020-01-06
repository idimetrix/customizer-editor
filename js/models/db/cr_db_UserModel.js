angular.module('cr_Customify').factory('cr_db_UserModel', ['cr_BaseModel', function (cr_BaseModel) {
    return function (data) {
        var model = {
            id: '',
            name: '',
            email: '',
            role: '',
            user_key: '',
            remember_token: '',
            created_at: '',
            updated_at: ''
        };

        model = angular.extend(new cr_BaseModel(), model, data || {});
        model.clone = function () {
            return angular.copy(model);
        };

        return model;
    };
}]);