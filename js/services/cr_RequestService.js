angular.module('cr_Customify').service('cr_RequestService', ['$http', '$q', 'cr_URLManager', 'cr_BaseService', 'cr_db_CategoryModel', 'cr_db_FontpicModel', 'cr_db_PicModel', 'cr_db_PictagModel', 'cr_db_ProductModel', 'cr_db_UploadpicModel', 'cr_db_TemplateModel', 'cr_db_UserModel', function ($http, $q, cr_URLManager, cr_BaseService, cr_db_CategoryModel, cr_db_FontpicModel, cr_db_PicModel, cr_db_PictagModel, cr_db_ProductModel, cr_db_UploadpicModel, cr_db_TemplateModel, cr_db_UserModel) {
    var self = this;

    // ---

    self.login = function ($key, $email, $password) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['login'], {
            key: $key,
            email: $email,
            password: $password
        }).then(function (data) {
            deffered.notify(data);

            var user = new cr_db_UserModel();
            user.id = data.data.id;
            user.name = data.data.name;
            user.email = data.data.email;
            user.user_key = data.data.user_key;
            user.role = data.data.role;
            user.remember_token = data.data.remember_token;
            user.created_at = data.data.created_at;
            user.updated_at = data.data.updated_at;

            data.user = user;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.logout = function () {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['logout'], {}).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.join = function ($key, $name, $email, $password) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['join'], {
            key: $key,
            name: $name,
            email: $email,
            password: $password
        }).then(function (data) {
            deffered.notify(data);

            if (data.OK == true) {
                var user = new cr_db_UserModel();
                user.id = data.data.id;
                user.name = data.data.name;
                user.email = data.data.email;
                user.user_key = data.data.user_key;
                user.role = data.data.role;
                user.remember_token = data.data.remember_token;
                user.created_at = data.data.created_at;
                user.updated_at = data.data.updated_at;

                data.user = user;
            }

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.editrole = function ($key, $id, $role) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['editrole'], {
            key: $key,
            id: $id,
            role: $role
        }).then(function (data) {
            deffered.notify(data);

            var user = new cr_db_UserModel();
            user.id = data.data.id;
            user.name = data.data.name;
            user.email = data.data.email;
            user.user_key = data.data.user_key;
            user.role = data.data.role;
            user.remember_token = data.data.remember_token;
            user.created_at = data.data.created_at;
            user.updated_at = data.data.updated_at;

            data.user = user;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.edituser = function ($key, $id, $param, $value) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['edituser'], {
            key: $key,
            id: $id,
            param: $param,
            value: $value
        }).then(function (data) {
            deffered.notify(data);

            var user = new cr_db_UserModel();
            user.id = data.data.id;
            user.name = data.data.name;
            user.email = data.data.email;
            user.user_key = data.data.user_key;
            user.role = data.data.role;
            user.remember_token = data.data.remember_token;
            user.created_at = data.data.created_at;
            user.updated_at = data.data.updated_at;

            data.user = user;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.ban = function ($key, $id, $active) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['ban'], {
            key: $key,
            id: $id,
            active: $active
        }).then(function (data) {
            deffered.notify(data);

            var user = new cr_db_UserModel();
            user.id = data.data.id;
            user.name = data.data.name;
            user.email = data.data.email;
            user.user_key = data.data.user_key;
            user.role = data.data.role;
            user.remember_token = data.data.remember_token;
            user.created_at = data.data.created_at;
            user.updated_at = data.data.updated_at;

            data.user = user;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }


    self.allusers = function ($key, $user, $search, $start, $length) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['allusers'], {
            key: $key,
            user: $user,
            search: $search,
            start: $start,
            length: $length
        }).then(function (data) {
            deffered.notify(data);

            var users = [];

            data.aaData.forEach(function (element, index, array) {
                var user = new cr_db_UserModel();
                user.id = element.id;
                user.name = element.name;
                user.email = element.email;
                user.user_key = element.user_key;
                user.role = element.role;
                user.remember_token = element.remember_token;
                user.created_at = element.created_at;
                user.updated_at = element.updated_at;

                users.push(user);
            });
            data.users = users;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    //---

    self.userpics = function ($key, $user_key, $offset, $limit) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['userpics'], {
            key: $key,
            user: $user_key,
            offset: $offset,
            limit: $limit
        }).then(function (data) {
            deffered.notify(data);

            var userpics = [];

            data.data.forEach(function (element, index, array) {
                var userpic = new cr_db_UploadpicModel();

                userpic.id = element.id;
                userpic.name = element.name;
                userpic.user_id = element.user_id;
                userpic.user_key = element.user_key;
                userpic.width = element.width;
                userpic.height = element.height;
                userpic.url = element.url;
                userpic.type = element.type;
                userpic.created_at = element.created_at;
                userpic.updated_at = element.updated_at;

                userpics.push(userpic);
            });
            data.userpics = userpics;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.pics = function ($key, $category) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['pics'], {
            key: $key,
            category: $category
        }).then(function (data) {
            deffered.notify(data);

            data.pics = [];
            if (data.OK == true) {
                data.data.forEach(function (element, index, array) {
                    var pic = new cr_db_PicModel();

                    pic.id = element.id;
                    pic.name = element.name;
                    pic.width = element.width;
                    pic.height = element.height;
                    pic.url = element.url;
                    pic.type = element.type;
                    pic.created_at = element.created_at;
                    pic.updated_at = element.updated_at;

                    data.pics.push(pic);
                });
            }


            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.categories = function ($key) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['categories'], {
            key: $key
        }).then(function (data) {
            deffered.notify(data);

            data.categories = [];
            if (data.OK == true) {
                data.data.forEach(function (element, index, array) {
                    var category = new cr_db_CategoryModel();

                    category.id = element.id;
                    category.category_id = element.category_id;
                    category.name = element.name;
                    category.created_at = element.created_at;
                    category.updated_at = element.updated_at;

                    data.categories.push(category);
                });
            }

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.allproducts = function ($key, $offset, $limit, $user_id) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['allproducts'], {
            key: $key,
            offset: $offset,
            limit: $limit,
            user_id: $user_id
        }).then(function (data) {
            deffered.notify(data);

            data.products = [];

            data.data.forEach(function (element, index, array) {
                var product = new cr_db_ProductModel();

                product.id = element.id;
                product.name = element.name;
                product.user_id = element.user_id;
                product.user_key = element.user_key;
                product.description = element.description;
                product.template = element.template;
                product.cover = element.cover;
                product.created_at = element.created_at;
                product.updated_at = element.updated_at;

                data.products.push(product);
            });

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.products = function ($key, $user_key) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['products'], {
            key: $key,
            user: $user_key
        }).then(function (data) {
            deffered.notify(data);

            data.products = [];

            data.data.forEach(function (element, index, array) {
                var product = new cr_db_ProductModel();

                product.id = element.id;
                product.name = element.name;
                product.user_id = element.user_id;
                product.user_key = element.user_key;
                product.description = element.description;
                product.template = element.template;
                product.cover = element.cover;
                product.created_at = element.created_at;
                product.updated_at = element.updated_at;

                data.products.push(product);
            });

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.product = function ($key, $id) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['product'], {
            key: $key,
            id: $id
        }).then(function (data) {
            deffered.notify(data);

            var product = new cr_db_ProductModel();

            product.id = data.data.id;
            product.name = data.data.name;
            product.user_id = data.data.user_id;
            product.user_key = data.data.user_key;
            product.description = data.data.description;
            product.template = data.data.template;
            product.cover = data.data.cover;
            product.created_at = data.data.created_at;
            product.updated_at = data.data.updated_at;

            data.product = product;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.addcategory = function ($key, $name) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['addcategory'], {
            key: $key,
            name: $name
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.addsubcategory = function ($key, $name, $category_id) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['addsubcategory'], {
            key: $key,
            name: $name,
            category_id: $category_id
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.addproduct = function ($key, $user_key, $name, $description, $data) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['addproduct'], {
            key: $key,
            user_key: $user_key,
            name: $name,
            description: $description,
            data: $data
        }).then(function (data) {
            deffered.notify(data);

            var product = new cr_db_ProductModel();

            product.id = data.data.id;
            product.name = data.data.name;
            product.user_id = data.data.user_id;
            product.user_key = data.data.user_key;
            product.description = data.data.description;
            product.template = data.data.template;
            product.cover = data.data.cover;
            product.created_at = data.data.created_at;
            product.updated_at = data.data.updated_at;

            data.product = product;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.editproduct = function ($key, $user_key, $id, $data) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['editproduct'], {
            key: $key,
            user_key: $user_key,
            id: $id,
            data: $data
        }).then(function (data) {
            deffered.notify(data);

            var product = new cr_db_ProductModel();

            product.id = data.data.id;
            product.name = data.data.name;
            product.user_id = data.data.user_id;
            product.user_key = data.data.user_key;
            product.description = data.data.description;
            product.template = data.data.template;
            product.cover = data.data.cover;
            product.created_at = data.data.created_at;
            product.updated_at = data.data.updated_at;

            data.product = product;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.deleteproduct = function ($key, $user_key, $id, $active) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['deleteproduct'], {
            key: $key,
            user_key: $user_key,
            id: $id,
            active: $active
        }).then(function (data) {
            deffered.notify(data);

            var product = new cr_db_ProductModel();

            product.id = data.data.id;
            product.name = data.data.name;
            product.user_id = data.data.user_id;
            product.user_key = data.data.user_key;
            product.description = data.data.description;
            product.template = data.data.template;
            product.cover = data.data.cover;
            product.created_at = data.data.created_at;
            product.updated_at = data.data.updated_at;

            data.product = product;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.setpiccategory = function ($key, $pic_id, $category_id, $position) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['setpiccategory'], {
            key: $key,
            pic_id: $pic_id,
            category_id: $category_id,
            position: $position
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.deletepiccategory = function ($key, $category_id) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['deletepiccategory'], {
            key: $key,
            id: $category_id
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.categoryorder = function ($key, $positions) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['categoryorder'], {
            key: $key,
            positions: JSON.stringify($positions)
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.maketext = function ($key, $font, $align, $words) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['maketext'], {
            key: $key,
            font: $font,
            data: self.base64_encode(JSON.stringify({align: $align, words: $words}))
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }


    /**
     *
     * @param $name
     * @param $url
     * @param $type
     * @param $letters
     * @param $letterspacing
     * @param $linespacing
     * @param $data
     * {
    "A":{"x":0,"y":0, "w":98, "h":107, "f":"A.png"},
    "B":{"x":0,"y":0, "w":98, "h":107, "f":"B.png"},
    "C":{"x":0,"y":0, "w":98, "h":107, "f":"C.png"},
    "D":{"x":0,"y":0, "w":90, "h":106, "f":"D.png"},
    "E":{"x":0,"y":0, "w":82, "h":106, "f":"E.png"},
    "F":{"x":0,"y":0, "w":82, "h":110, "f":"F.png"}
    }
     *
     * @returns {*}
     */
    self.addfont = function ($key, $name, $url, $type, $letters, $letterspacing, $linespacing, $data) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['addfont'], {
            key: $key,
            name: $name,
            url: $url,
            type: $type,
            letters: $letters,
            letterspacing: $letterspacing,
            linespacing: $linespacing,
            data: JSON.stringify($data)
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.editfont = function ($key, $name, $url, $type, $letters, $letterspacing, $linespacing, $data) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['editfont'], {
            key: $key,
            name: $name,
            url: $url,
            type: $type,
            letters: $letters,
            letterspacing: $letterspacing,
            linespacing: $linespacing,
            data: JSON.stringify($data)
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.getfonts = function ($key) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['getfonts'], {
            key: $key
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.maketext = function ($key, $font, $align, $words) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['maketext'], {
            key: $key,
            font: $font,
            data: self.base64_encode(JSON.stringify({align: $align, words: $words}))
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    /**
     * TEMPLATES
     */

    self.templates = function ($key, $category) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['templates'], {
            key: $key,
            category: $category
        }).then(function (data) {
            deffered.notify(data);

            data.templates = [];

            data.data.forEach(function (element, index, array) {
                var template = new cr_db_TemplateModel();

                template.id = element.id;
                template.name = element.name;
                template.description = element.description;
                template.category = element.category;
                template.template = element.template;
                template.cover = element.cover;
                template.created_at = element.created_at;
                template.updated_at = element.updated_at;

                data.templates.push(template);
            });

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.templatecategories = function ($key) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['templatecategories'], {
            key: $key
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.template = function ($key, $id) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['template'], {
            key: $key,
            id: $id
        }).then(function (data) {
            deffered.notify(data);

            var template = new cr_db_TemplateModel();

            template.id = data.data.id;
            template.name = data.data.name;
            template.description = data.data.description;
            template.category = data.data.category;
            template.template = data.data.template;
            template.created_at = data.data.created_at;
            template.updated_at = data.data.updated_at;

            data.template = template;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.addtemplate = function ($key, $user_key, $name, $description, $category, $data) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['addtemplate'], {
            key: $key,
            user_key: $user_key,
            name: $name,
            description: $description,
            category: $category,
            template: $data
        }).then(function (data) {
            deffered.notify(data);

            var template = new cr_db_TemplateModel();

            template.id = data.data.id;
            template.name = data.data.name;
            template.description = data.data.description;
            template.category = data.data.category;
            template.template = data.data.template;
            template.created_at = data.data.created_at;
            template.updated_at = data.data.updated_at;

            data.template = template;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.edittemplate = function ($key, $user_key, $id, $data) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['edittemplate'], {
            key: $key,
            user_key: $user_key,
            id: $id,
            template: $data
        }).then(function (data) {
            deffered.notify(data);

            var template = new cr_db_TemplateModel();

            template.id = data.data.id;
            template.name = data.data.name;
            template.description = data.data.description;
            template.category = data.data.category;
            template.template = data.data.template;
            template.created_at = data.data.created_at;
            template.updated_at = data.data.updated_at;

            data.template = template;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.deletetemplate = function ($key, $user_key, $id, $active) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['deletetemplate'], {
            key: $key,
            user_key: $user_key,
            id: $id,
            active: $active
        }).then(function (data) {
            deffered.notify(data);

            var template = new cr_db_TemplateModel();

            template.id = data.data.id;
            template.name = data.data.name;
            template.description = data.data.description;
            template.category = data.data.category;
            template.template = data.data.template;
            template.created_at = data.data.created_at;
            template.updated_at = data.data.updated_at;

            data.template = template;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.settemplatecategory = function ($key, $user_key, $id, $category) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['settemplatecategory'], {
            key: $key,
            user_key: $user_key,
            id: $id,
            category: $category
        }).then(function (data) {
            deffered.notify(data);

            var template = new cr_db_TemplateModel();

            template.id = data.data.id;
            template.name = data.data.name;
            template.description = data.data.description;
            template.category = data.data.category;
            template.template = data.data.template;
            template.created_at = data.data.created_at;
            template.updated_at = data.data.updated_at;

            data.template = template;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    /**
     * LIBRARYTEMPLATES
     */

    self.librarytemplates = function ($key, $category) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['librarytemplates'], {
            key: $key,
            category: $category
        }).then(function (data) {
            deffered.notify(data);

            data.librarytemplates = [];

            data.data.forEach(function (element, index, array) {
                var librarytemplate = new cr_db_TemplateModel();

                librarytemplate.id = element.id;
                librarytemplate.name = element.name;
                librarytemplate.description = element.description;
                librarytemplate.category = element.category;
                librarytemplate.template = element.template;
                librarytemplate.cover = element.cover;
                librarytemplate.created_at = element.created_at;
                librarytemplate.updated_at = element.updated_at;

                data.librarytemplates.push(librarytemplate);
            });

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.librarytemplatecategories = function ($key) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['librarytemplatecategories'], {
            key: $key
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.librarytemplate = function ($key, $id) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['librarytemplate'], {
            key: $key,
            id: $id
        }).then(function (data) {
            deffered.notify(data);

            var librarytemplate = new cr_db_TemplateModel();

            librarytemplate.id = data.data.id;
            librarytemplate.name = data.data.name;
            librarytemplate.description = data.data.description;
            librarytemplate.category = data.data.category;
            librarytemplate.template = data.data.template;
            librarytemplate.created_at = data.data.created_at;
            librarytemplate.updated_at = data.data.updated_at;

            data.librarytemplate = librarytemplate;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.addlibrarytemplate = function ($key, $user_key, $name, $description, $category, $data) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['addlibrarytemplate'], {
            key: $key,
            user_key: $user_key,
            name: $name,
            description: $description,
            category: $category,
            template: $data
        }).then(function (data) {
            deffered.notify(data);

            var librarytemplate = new cr_db_TemplateModel();

            librarytemplate.id = data.data.id;
            librarytemplate.name = data.data.name;
            librarytemplate.description = data.data.description;
            librarytemplate.category = data.data.category;
            librarytemplate.template = data.data.template;
            librarytemplate.created_at = data.data.created_at;
            librarytemplate.updated_at = data.data.updated_at;

            data.librarytemplate = librarytemplate;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.editlibrarytemplate = function ($key, $user_key, $id, $data) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['editlibrarytemplate'], {
            key: $key,
            user_key: $user_key,
            id: $id,
            template: $data
        }).then(function (data) {
            deffered.notify(data);

            var librarytemplate = new cr_db_TemplateModel();

            librarytemplate.id = data.data.id;
            librarytemplate.name = data.data.name;
            librarytemplate.description = data.data.description;
            librarytemplate.category = data.data.category;
            librarytemplate.template = data.data.template;
            librarytemplate.created_at = data.data.created_at;
            librarytemplate.updated_at = data.data.updated_at;

            data.librarytemplate = librarytemplate;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.deletelibrarytemplate = function ($key, $user_key, $id, $active) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['deletelibrarytemplate'], {
            key: $key,
            user_key: $user_key,
            id: $id,
            active: $active
        }).then(function (data) {
            deffered.notify(data);

            var librarytemplate = new cr_db_TemplateModel();

            librarytemplate.id = data.data.id;
            librarytemplate.name = data.data.name;
            librarytemplate.description = data.data.description;
            librarytemplate.category = data.data.category;
            librarytemplate.template = data.data.template;
            librarytemplate.created_at = data.data.created_at;
            librarytemplate.updated_at = data.data.updated_at;

            data.librarytemplate = librarytemplate;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.setlibrarytemplatecategory = function ($key, $user_key, $id, $category) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['setlibrarytemplatecategory'], {
            key: $key,
            user_key: $user_key,
            id: $id,
            category: $category
        }).then(function (data) {
            deffered.notify(data);

            var librarytemplate = new cr_db_TemplateModel();

            librarytemplate.id = data.data.id;
            librarytemplate.name = data.data.name;
            librarytemplate.description = data.data.description;
            librarytemplate.category = data.data.category;
            librarytemplate.template = data.data.template;
            librarytemplate.created_at = data.data.created_at;
            librarytemplate.updated_at = data.data.updated_at;

            data.librarytemplate = librarytemplate;

            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    /**
     * EMAILS
     */
    self.emails = function ($key, $active) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['emails'], {
            key: $key,
            active: $active
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.addemail = function ($key, $subject, $body, $repeat, $uids, $groups, $year, $month, $day, $hour, $minute, $daysofweek) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['addemail'], {
            key: $key,
            subject: $subject,
            body: $body,
            repeat: $repeat,
            uids: $uids,
            groups: $groups,
            year: $year,
            month: $month,
            day: $day,
            hour: $hour,
            minute: $minute,
            daysofweek: $daysofweek
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.editemail = function ($key, $id, $params, $send) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['editemail'], {
            key: $key,
            id: $id,
            params: $params,
            send: $send
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }



    /**
     * STATISTICS
     */

    self.getstats = function ($key, $group, $category, $action, $label, $user_id) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['getstats'], {
            key: $key,
            group: $group,
            category: $category,
            action: $action,
            label: $label,
            user_id: $user_id
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.setstats = function ($key, $group, $category, $action, $label, $user_id, $count) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['setstats'], {
            key: $key,
            group: $group,
            category: $category,
            action: $action,
            label: $label,
            user_id: $user_id,
            count: $count
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }


    self.upload = function ($uploader, $key, $user_key, $replace_id) {
        var deffered = $q.defer();
        if (typeof $replace_id == undefined) {
            $replace_id = 0;
        }
        cr_BaseService.file($uploader, cr_URLManager['uploadpic'], $key, $user_key, $replace_id
        ).then(function (data) {
                deffered.notify(data);

                // alert(JSON.stringify(data));

                var uploadpic = new cr_db_UploadpicModel();

                uploadpic.id = data[0].id;
                uploadpic.name = data[0].name;
                uploadpic.user_id = data[0].user_id;
                uploadpic.user_key = data[0].user_key;
                uploadpic.width = data[0].width;
                uploadpic.height = data[0].height;
                uploadpic.url = data[0].url;
                uploadpic.type = data[0].type;
                uploadpic.created_at = data[0].created_at;
                uploadpic.updated_at = data[0].updated_at;

                data.uploadpic = uploadpic;

                deffered.resolve(data);
            }, function (data) {
                deffered.notify(data);
                deffered.reject(data);
            });

        return deffered.promise;
    }

    self.uploadlibpic = function ($uploader, $key, $user_key, $replace_id) {
        var deffered = $q.defer();

        if (typeof $replace_id == undefined) {
            $replace_id = 0;
        }

        cr_BaseService.file($uploader, cr_URLManager['uploadlibpic'], $key, $user_key, $replace_id
        ).then(function (data) {
                deffered.notify(data);

                //alert(JSON.stringify(data));

                var uploadpic = new cr_db_PicModel();

                uploadpic.id = data[0].id;
                uploadpic.name = data[0].name;
                uploadpic.width = data[0].width;
                uploadpic.height = data[0].height;
                uploadpic.url = data[0].url;
                uploadpic.type = data[0].type;
                uploadpic.created_at = data[0].created_at;
                uploadpic.updated_at = data[0].updated_at;

                data.pic = uploadpic;

                deffered.resolve(data);
            }, function (data) {
                deffered.notify(data);
                deffered.reject(data);
            });

        return deffered.promise;
    }

    self.uploadfontpic = function ($uploader, $key, $user_key, $replace_id) {
        var deffered = $q.defer();

        if (typeof $replace_id == undefined) {
            $replace_id = 0;
        }

        cr_BaseService.file($uploader, cr_URLManager['uploadfontpic'], $key, $user_key, $replace_id
        ).then(function (data) {
                deffered.notify(data);

                //alert(JSON.stringify(data));
                deffered.resolve(data);
            }, function (data) {
                deffered.notify(data);
                deffered.reject(data);
            });

        return deffered.promise;
    }

    self.uploadavatar = function ($uploader, $key, $user_id) {
        var deffered = $q.defer();

        cr_BaseService.file($uploader, cr_URLManager['uploadavatar'], $key, $user_id, 0
        ).then(function (data) {
                deffered.notify(data);

                // alert(JSON.stringify(data));

                var uploadpic = new cr_db_PicModel();

                uploadpic.id = data[0].id;
                uploadpic.name = data[0].name;
                uploadpic.width = data[0].width;
                uploadpic.height = data[0].height;
                uploadpic.url = data[0].url;
                uploadpic.type = data[0].type;
                uploadpic.created_at = data[0].created_at;
                uploadpic.updated_at = data[0].updated_at;

                data.pic = uploadpic;

                deffered.resolve(data);
            }, function (data) {
                deffered.notify(data);
                deffered.reject(data);
            });

        return deffered.promise;
    }

    self.uploadcover = function ($uploader, $key, $kind, $replace_id) {
        var deffered = $q.defer();

        cr_BaseService.file($uploader, cr_URLManager['uploadcover'], $key, $kind, $replace_id
        ).then(function (data) {
                deffered.notify(data);

                // alert(JSON.stringify(data));

                deffered.resolve(data);
            }, function (data) {
                deffered.notify(data);
                deffered.reject(data);
            });

        return deffered.promise;
    }

    self.uploadrename = function ($key, $id, $name) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['uploadrename'], {
            key: $key,
            id: $id,
            picname: $name
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.uploaddelete = function ($key, $id, $active) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['uploaddelete'], {
            key: $key,
            id: $id,
            active: $active
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.uploadtomotifs = function ($key, $id, $category_id) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['uploadtomotifs'], {
            key: $key,
            id: $id,
            category_id: $category_id
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.motifrename = function ($key, $id, $name) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['motifrename'], {
            key: $key,
            id: $id,
            picname: $name
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.motifdelete = function ($key, $id, $active) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['motifdelete'], {
            key: $key,
            id: $id,
            active: $active
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.getsettings = function ($key) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['getsettings'], {
            key: $key
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    /**
     *
     * @param $key
     * @param $settings json
     * @param $kind custom | default
     * @returns {*}
     */
    self.setsettings = function ($key, $settings, $kind) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['setsettings'], {
            key: $key,
            settings: JSON.stringify($settings),
            kind: $kind
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.motifdelete = function ($key, $id, $active) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['motifdelete'], {
            key: $key,
            id: $id,
            active: $active
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.pay = function ($key, $number, $expire, $amount, $refid) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['pay'], {
            key: $key,
            number: $number,
            expire: $expire,
            amount: $amount,
            refid: $refid
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.demopay = function ($key) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['demopay'], {
            key: $key
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }


    /**
     * PAYPAL
     */
    self.paypalpay = function ($key, $items, $shipping, $tax, $subtotal, $amountcurrency, $amounttotal, $amountdetails, $description) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['paypalpay'], {
            key: $key,
            items: $items,
            shipping: $shipping,
            tax: $tax,
            subtotal: $subtotal,
            amountcurrency: $amountcurrency,
            amounttotal: $amounttotal,
            amountdetails: $amountdetails,
            description: $description
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.paypalpaycard = function ($key, $type, $number, $expiremonth, $expireyear, $cvv2, $firstname, $lastname, $items, $shipping, $tax, $subtotal, $amountcurrency, $amounttotal, $amountretails, $description) {
        var deffered = $q.defer();

        cr_BaseService.post(cr_URLManager['paypalpaycard'], {
            key: $key,
            type: $type,
            number: $number,
            expiremonth: $expiremonth,
            expireyear: $expireyear,
            cvv2: $cvv2,
            firstname: $firstname,
            lastname: $lastname,
            items: $items,
            shipping: $shipping,
            tax: $tax,
            subtotal: $subtotal,
            amountcurrency: $amountcurrency,
            amounttotal: $amounttotal,
            amountdetails: $amountretails,
            description: $description
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }


    self.user = function ($key, $user_key) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['user'], {
            key: $key,
            user_key: $user_key
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.cart = function ($key, $user_key) {
        var deffered = $q.defer();
        cr_BaseService.get(cr_URLManager['cart'], {
            key: $key,
            user_key: $user_key
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }

    self.editcart = function ($key, $user_key, $data) {
        var deffered = $q.defer();
        cr_BaseService.post(cr_URLManager['editcart'], {
            key: $key,
            user_key: $user_key,
            data: $data
        }).then(function (data) {
            deffered.notify(data);
            deffered.resolve(data);
        }, function (data) {
            deffered.notify(data);
            deffered.reject(data);
        });

        return deffered.promise;
    }


    //TODO nove this to utils
    self.base64_encode = function (data) {	// Encodes data with MIME base64
        //
        // +   original by: Tyler Akins (http://rumkin.com)
        // +   improved by: Bayron Guevara

        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, enc = '';

        do { // pack three octets into four hexets
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);

            bits = o1 << 16 | o2 << 8 | o3;

            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;

            // use hexets to index into b64, and append result to encoded string
            enc += b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);

        switch (data.length % 3) {
            case 1:
                enc = enc.slice(0, -2) + '==';
                break;
            case 2:
                enc = enc.slice(0, -1) + '=';
                break;
        }

        return enc;
    }

    // ---

    return self;
}]);