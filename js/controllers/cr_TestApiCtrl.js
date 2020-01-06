(function () {
    var cr_TestApiCtrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager, cr_RequestService) {
        var self = this;

        $scope.login_test = function () {
            var key = 'testkey',
                email = jQuery('.name_login').val(),
                pass = jQuery('.pass_login').val();
            cr_RequestService.login(key, email, pass).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("Login data");
                    console.log(data);
                    jQuery('.data_login').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        };

        $scope.join_test = function () {
            var key = 'testkey',
                name = jQuery('.name_join').val(),
                email = jQuery('.email_join').val(),
                pass = jQuery('.pass_join').val();
            cr_RequestService.join(key, name, email, pass).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("Join data");
                    console.log(data);
                    jQuery('.data_join').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.logout_test = function () {
            cr_RequestService.join().then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("Logout data");
                    console.log(data);
                    jQuery('.data_logout').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.role_test = function () {
            var key = 'testkey',
                id = jQuery('.id_role').val(),
                role = jQuery('.role_role').val();
            cr_RequestService.editrole(key, id, role).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("Role data");
                    console.log(data);
                    jQuery('.data_role').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.edituser_test = function () {
            var key = 'testkey',
                id = jQuery('.id_edituser').val(),
                param = jQuery('.param_edituser').val(),
                value = jQuery('.value_edituser').val();
            cr_RequestService.edituser(key, id, param, value).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("edituser data");
                    console.log(data);
                    jQuery('.data_edituser').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.ban_test = function () {
            var key = 'testkey',
                id = jQuery('.id_ban').val(),
                active = jQuery('.active_ban').val();
            cr_RequestService.ban(key, id, active).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("ban data");
                    console.log(data);
                    jQuery('.data_ban').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.userpics_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_userpics').val(),
                offset = jQuery('.offset_userpics').val(),
                limit = jQuery('.limit_userpics').val();
            cr_RequestService.userpics(key, user_key, offset, limit).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("userpics data");
                    console.log(data);
                    jQuery('.data_userpics').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.pics_test = function () {
            var key = 'testkey',
                category = jQuery('.category_pics').val();
            cr_RequestService.pics(key, category).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("pics data");
                    console.log(data);
                    jQuery('.data_pics').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.categories_test = function () {
            var key = 'testkey';
            cr_RequestService.categories(key).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("categories data");
                    console.log(data);
                    jQuery('.data_categories').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.products_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_products').val();
            cr_RequestService.products(key, user_key).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("products data");
                    console.log(data);
                    jQuery('.data_products').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.product_test = function () {
            var key = 'testkey',
                id = jQuery('.id_product').val();
            cr_RequestService.product(key, id).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("product data");
                    console.log(data);
                    jQuery('.data_product').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.addcategory_test = function () {
            var key = 'testkey',
                name = jQuery('.name_addcategory').val();
            cr_RequestService.addcategory(key, name).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("addcategory data");
                    console.log(data);
                    jQuery('.data_addcategory').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.addsubcategory_test = function () {
            var key = 'testkey',
                name = jQuery('.name_addsubcategory').val(),
                category_id = jQuery('.category_id_addsubcategory').val();
            cr_RequestService.addsubcategory(key, name, category_id).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("addsubcategory data");
                    console.log(data);
                    jQuery('.data_addsubcategory').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.addproduct_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_addproduct').val(),
                name = jQuery('.name_addproduct').val(),
                description = jQuery('.description_addproduct').val(),
                data = jQuery('.data_addproduct').val();
            cr_RequestService.addproduct(key, user_key, name, description, data).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("addproduct data");
                    console.log(data);
                    jQuery('.data_addproduct').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.editproduct_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_editproduct').val(),
                id = jQuery('.id_editproduct').val(),
                data = jQuery('.data_editproduct').val();
            cr_RequestService.editproduct(key, user_key, id, data).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("editproduct data");
                    console.log(data);
                    jQuery('.data_editproduct').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.setpiccategory_test = function () {
            var key = 'testkey',
                pic_id = jQuery('.pic_id_setpiccategory').val(),
                category_id = jQuery('.category_id_setpiccategory').val(),
                position = jQuery('.position_setpiccategory').val();
            cr_RequestService.setpiccategory(key, pic_id, category_id, position).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("setpiccategory data");
                    console.log(data);
                    jQuery('.data_setpiccategory').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.maketext_test = function () {
            var key = 'testkey',
                font = jQuery('.font_maketext').val(),
                align = jQuery('.align_maketext').val(),
                words = jQuery('.words_maketext').val();
            cr_RequestService.maketext(key, font, align, words).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("maketext data");
                    console.log(data);
                    jQuery('.data_maketext').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.addfont_test = function () {
            var key = 'testkey',
                name = jQuery('.name_addfont').val(),
                url = jQuery('.url_addfont').val(),
                type = jQuery('.type_addfont').val(),
                letters = jQuery('.letters_addfont').val(),
                letterspacing = jQuery('.letterspacing_addfont').val(),
                linespacing = jQuery('.linespacing_addfont').val(),
                data = jQuery('.data_addfont').val();
            cr_RequestService.addfont(key, name, url, type, letters, letterspacing, linespacing, data).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("addfont data");
                    console.log(data);
                    jQuery('.data_addfont').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.editfont_test = function () {
            var key = 'testkey',
                name = jQuery('.name_editfont').val(),
                url = jQuery('.url_editfont').val(),
                type = jQuery('.type_editfont').val(),
                letters = jQuery('.letters_editfont').val(),
                letterspacing = jQuery('.letterspacing_editfont').val(),
                linespacing = jQuery('.linespacing_editfont').val(),
                data = jQuery('.data_editfont').val();
            cr_RequestService.editfont(key, name, url, type, letters, letterspacing, linespacing, data).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("editfont data");
                    console.log(data);
                    jQuery('.data_editfont').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.getfonts_test = function () {
            var key = 'testkey';
            cr_RequestService.getfonts(key).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("getfonts data");
                    console.log(data);
                    jQuery('.data_getfonts').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.templates_test = function () {
            var key = 'testkey',
                category = jQuery('.category_templates').val();
            cr_RequestService.templates(key, category).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("templates data");
                    console.log(data);
                    jQuery('.data_templates').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.templatecategories_test = function () {
            var key = 'testkey';
            cr_RequestService.templatecategories(key).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("templatecategories data");
                    console.log(data);
                    jQuery('.data_templatecategories').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.template_test = function () {
            var key = 'testkey',
                id = jQuery('.id_template').val();
            cr_RequestService.template(key, id).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("template data");
                    console.log(data);
                    jQuery('.data_template').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.addtemplate_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_addtemplate').val(),
                name = jQuery('.name_addtemplate').val(),
                description = jQuery('.description_addtemplate').val(),
                category = jQuery('.category_addtemplate').val(),
                data = jQuery('.data_addtemplate').val();
            cr_RequestService.addtemplate(key, user_key, name, description, category, data).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("addtemplate data");
                    console.log(data);
                    jQuery('.data_addtemplate').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.edittemplate_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_edittemplate').val(),
                id = jQuery('.id_edittemplate').val(),
                data = jQuery('.data_edittemplate').val();
            cr_RequestService.edittemplate(key, user_key, id, data).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("edittemplate data");
                    console.log(data);
                    jQuery('.data_edittemplate').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.settemplatecategory_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_settemplatecategory').val(),
                id = jQuery('.id_settemplatecategory').val(),
                category = jQuery('.category_settemplatecategory').val();
            cr_RequestService.settemplatecategory(key, user_key, id, category).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("settemplatecategory data");
                    console.log(data);
                    jQuery('.data_settemplatecategory').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.upload_test = function () {
            var key = 'testkey',
                uploader = jQuery('.uploader_upload').val(),
                user_key = jQuery('.user_key_upload').val(),
                replace_id = jQuery('.replace_id_upload').val();
            cr_RequestService.upload(uploader, key, user_key, replace_id).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("upload data");
                    console.log(data);
                    jQuery('.data_upload').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.uploadlibpic_test = function () {
            var key = 'testkey',
                uploader = jQuery('.uploader_uploadlibpic').val(),
                user_key = jQuery('.user_key_uploadlibpic').val(),
                replace_id = jQuery('.replace_id_uploadlibpic').val();
            cr_RequestService.uploadlibpic(uploader, key, user_key, replace_id).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("uploadlibpic data");
                    console.log(data);
                    jQuery('.data_uploadlibpic').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.uploadavatar_test = function () {
            var key = 'testkey',
                uploader = jQuery('.uploader_uploadavatar').val(),
                user_id = jQuery('.user_id_uploadavatar').val();
            cr_RequestService.uploadavatar(uploader, key, user_id).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("uploadavatar data");
                    console.log(data);
                    jQuery('.data_uploadavatar').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.uploadrename_test = function () {
            var key = 'testkey',
                id = jQuery('.id_uploadrename').val(),
                name = jQuery('.name_uploadrename').val();
            cr_RequestService.uploadrename(key, id, name).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("uploadrename data");
                    console.log(data);
                    jQuery('.data_uploadrename').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.uploaddelete_test = function () {
            var key = 'testkey',
                id = jQuery('.id_uploaddelete').val(),
                active = jQuery('.active_uploaddelete').val();
            cr_RequestService.uploaddelete(key, id, active).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("uploaddelete data");
                    console.log(data);
                    jQuery('.data_uploaddelete').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.uploadtomotifs_test = function () {
            var key = 'testkey',
                id = jQuery('.id_uploadtomotifs').val(),
                category_id = jQuery('.category_id_uploadtomotifs').val();
            cr_RequestService.uploadtomotifs(key, id, category_id).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("uploadtomotifs data");
                    console.log(data);
                    jQuery('.data_uploadtomotifs').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.motifrename_test = function () {
            var key = 'testkey',
                id = jQuery('.id_motifrename').val(),
                name = jQuery('.name_id_motifrename').val();
            cr_RequestService.motifrename(key, id, name).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("motifrename data");
                    console.log(data);
                    jQuery('.data_motifrename').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.motifdelete_test = function () {
            var key = 'testkey',
                id = jQuery('.id_motifdelete').val(),
                active = jQuery('.active_id_motifdelete').val();
            cr_RequestService.motifdelete(key, id, active).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("motifdelete data");
                    console.log(data);
                    jQuery('.data_motifdelete').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.getsettings_test = function () {
            var key = 'testkey';
            cr_RequestService.getsettings(key).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("getsettings data");
                    console.log(data);
                    jQuery('.data_getsettings').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.setsettings_test = function () {
            var key = 'testkey',
                settings = jQuery('.settings_setsettings').val();
            cr_RequestService.setsettings(key, settings).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("setsettings data");
                    console.log(data);
                    jQuery('.data_setsettings').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.pay_test = function () {
            var key = 'testkey',
                number = jQuery('.number_pay').val(),
                expire = jQuery('.expire_pay').val(),
                amount = jQuery('.amount_pay').val(),
                refid = jQuery('.refid_pay').val();
            cr_RequestService.pay(key, number, expire, amount, refid).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("pay data");
                    console.log(data);
                    jQuery('.data_pay').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.user_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_pay').val();
            cr_RequestService.user(key, user_key).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("user data");
                    console.log(data);
                    jQuery('.data_user').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.cart_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_cart').val();
            cr_RequestService.cart(key, user_key).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("cart data");
                    console.log(data);
                    jQuery('.data_cart').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.editcart_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_editcart').val(),
                data = jQuery('.data_editcart').val();
            cr_RequestService.editcart(key, user_key, data).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("editcart data");
                    console.log(data);
                    jQuery('.data_editcart').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.librarytemplates_test = function () {
            var key = 'testkey',
                category = jQuery('.category_librarytemplates').val();
            cr_RequestService.librarytemplates(key, category).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("librarytemplates data");
                    console.log(data);
                    jQuery('.data_librarytemplates').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.librarytemplatecategories_test = function () {
            var key = 'testkey';
            cr_RequestService.librarytemplatecategories(key).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("librarytemplatecategories data");
                    console.log(data);
                    jQuery('.data_librarytemplatecategories').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.librarytemplate_test = function () {
            var key = 'testkey',
                id = jQuery('.id_librarytemplate').val();
            cr_RequestService.librarytemplate(key, id).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("librarytemplate data");
                    console.log(data);
                    jQuery('.data_librarytemplate').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.addlibrarytemplate_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_addlibrarytemplate').val(),
                name = jQuery('.name_addlibrarytemplate').val(),
                description = jQuery('.description_addlibrarytemplate').val(),
                category = jQuery('.category_addlibrarytemplate').val(),
                data = jQuery('.data_addlibrarytemplate').val();
            cr_RequestService.addlibrarytemplate(key, user_key, name, description, category, data).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("addlibrarytemplate data");
                    console.log(data);
                    jQuery('.data_addlibrarytemplate').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.editlibrarytemplate_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_editlibrarytemplate').val(),
                id = jQuery('.id_editlibrarytemplate').val(),
                data = jQuery('.data_editlibrarytemplate').val();
            cr_RequestService.editlibrarytemplate(key, user_key, id, data).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("editlibrarytemplate data");
                    console.log(data);
                    jQuery('.data_editlibrarytemplate').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.setlibrarytemplatecategory_test = function () {
            var key = 'testkey',
                user_key = jQuery('.user_key_setlibrarytemplatecategory').val(),
                id = jQuery('.id_setlibrarytemplatecategory').val(),
                category = jQuery('.category_setlibrarytemplatecategory').val();
            cr_RequestService.setlibrarytemplatecategory(key, user_key, id, category).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("setlibrarytemplatecategory data");
                    console.log(data);
                    jQuery('.data_setlibrarytemplatecategory').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }
// Все что ниже в доках не описано!
        $scope.base64_encode_test = function () {//!!
            var data = jQuery('.data_base64_encode').val();
            cr_RequestService.base64_encode(data).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("base64_encode data");
                    console.log(data);
                    jQuery('.data_base64_encode').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.uploadfontpic_test = function () {//!!
            var key = 'testkey',
                uploader = jQuery('.uploader_uploadfontpic').val(),
                user_key = jQuery('.user_key_uploadfontpic').val(),
                replace_id = jQuery('.replace_id_uploadfontpic').val();
            cr_RequestService.uploadfontpic(uploader, key, user_key, replace_id).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("uploadfontpic data");
                    console.log(data);
                    jQuery('.data_uploadfontpic').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.demopay_test = function () {///!!
            var key = 'testkey';
            cr_RequestService.demopay(key).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("demopay data");
                    console.log(data);
                    jQuery('.data_demopay').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }


        $scope.deletepiccategory_test = function () {//!!
            var key = 'testkey',
                category_id = jQuery('.category_id_deletepiccategory').val();
            cr_RequestService.deletepiccategory(key, category_id).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("deletepiccategory data");
                    console.log(data);
                    jQuery('.data_deletepiccategory').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

        $scope.categoryorder_test = function () {//!!
            var key = 'testkey',
                positions = jQuery('.positions_id_categoryorder').val();
            cr_RequestService.categoryorder(key, positions).then(function (data) {

                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    console.log("categoryorder data");
                    console.log(data);
                    jQuery('.data_categoryorder').html(JSON.stringify(data))
                }
            }, function (data) {
                ////alert(data);
            });
        }

    };

    // ---

    cr_TestApiCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager',
        'cr_RequestService'
    ];

    angular.module('cr_Customify').controller('cr_TestApiCtrl', cr_TestApiCtrl);
})();

