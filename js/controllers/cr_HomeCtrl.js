(function () {
    var cr_HomeCtrl = function ($rootScope, $scope, $timeout, $element, FileUploader, cr_Enums, cr_DrawFactory, cr_URLManager, cr_UtilsManager, cr_ModelsManager, cr_ImportExportManager, cr_CommandsManager, cr_DataFactory, cr_FullscreenFactory, cr_DialogsManager, cr_RequestService, cr_LoaderFactory, cr_LoginFactory) {
        $scope.init = function () {

        };

        // ---

        $scope.product = cr_DataFactory.product;
        $scope.allCountItem = cr_DataFactory.allCountItem;
        $scope.template = cr_DataFactory.template;

        // ---

        var layout_workarea_center = $element.find('.layout-workarea-center');

        // ---

        $scope.doFullscreen = function () {
            cr_FullscreenFactory.fullscreen = !cr_FullscreenFactory.fullscreen;
        };

        $scope.htmlVariable = '123';

        $scope.toolbar1 = [
            ['backgroundColor', 'fontColor', 'justifyLeft', 'justifyCenter', 'justifyRight']
        ];
        $scope.toolbar2 = [
            ['bold', 'italics', 'underline', 'strikeThrough']
        ];

        var d = null;

        var data_import = '{"objects":[{"type":"textbox","originX":"left","originY":"top","left":260,"top":90,"width":200,"height":52.43,"fill":"#707070","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"text":"IDCreator Inc.","fontSize":40,"fontWeight":"600","fontFamily":"Ubuntu","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","styles":{},"minWidth":20},{"type":"cr_image","originX":"left","originY":"top","left":583.5,"top":90.5,"width":81,"height":81,"fill":"#ffffff","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"rx":0,"ry":0,"url":"http://dev.customizerapp.com/uploads/lib/9d5657e2a4a44479523ae8824c49293d.png","crop":false,"offsetX":0,"offsetY":0,"maxWidth":"100%","maxHeight":"100%","imageWidth":"100%","imageHeight":"auto","imageScaleX":1,"imageScaleY":1,"cropVertical":"right","cropHorizontal":"bottom"}],"background":"","left":0,"top":0}';

        $scope.Export_Test = function () {
            d = cr_ImportExportManager.export();

            console.log(d);
        };

        $scope.Import_Test = function () {
            var data = cr_ImportExportManager.import(data_import);
            console.log(data);
        };

        $scope.invalidateDrawAreaSize = function () {
            if (!cr_DrawFactory.fabric || !cr_DrawFactory.canvas) {
                return;
            }

            var w = layout_workarea_center.width();
            var h = layout_workarea_center.height();

            cr_DrawFactory.fabric.setWidth(w);
            cr_DrawFactory.fabric.setHeight(h);

            $scope.$broadcast('resize', w, h);
        };

        // ---

        $scope.itemClone = function () {
            var element = jQuery(this);

            var clone = element.clone().width(element.width()).height(element.height());
            clone.find('img').css('width', '100%');
            clone.find('.zoom').remove();

            return clone;
        };

        $scope.imgLoadedEvents = {

            always: function (instance) {
                // Do stuff
            },

            done: function (instance) {
                angular.element(instance.elements[0]).addClass('loaded');
            },

            fail: function (instance) {
                // Do stuff
            }

        };

        // Dialogs

        $scope.add_basket = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.ADDBASKET, {
                'title': 'Choose size and amount',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Detail = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.DETAIL, {
                'title': '',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Products = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.PRODUCT, {
                'title': '',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Save = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.SAVE, {
                'title': '',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Confirm = function (title, description, ok, close, promiseFunc) {
            cr_DialogsManager.create(cr_DialogsManager.type.CONFIRM, {
                'title': title,
                'description': description
            }).then(function (args, promiseFunc) {
                console.log(ok, args);
                console.log(promiseFunc)
            }, function (args, promiseFunc) {
                console.log(promiseFunc);
                console.log(close, args);
            });
        };

        $scope.Login = function (promiseFunc) {
            cr_DialogsManager.create(cr_DialogsManager.type.LOGIN, {
                'title': 'Login',
                'description': ''
            }).then(function (args) {
                if (promiseFunc) {
                    promiseFunc();
                }
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Save_as = function (value) {
            cr_DialogsManager.create(cr_DialogsManager.type.SAVEAS, {
                'title': 'Save as',
                'description': '',
                'value': value
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Import = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.IMPORT, {
                'title': 'Import',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.MMarket = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.MMARKET, {
                'title': 'Mini market',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.FAQ = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.FAQ, {
                'title': 'FAQ',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Info = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.INFO, {
                'title': 'Info',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Video = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.VIDEO, {
                'title': 'Video',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.AboutUs = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.ABOUTUS, {
                'title': 'About us',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.ContactUs = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.CONTACTUS, {
                'title': 'Contact us',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Profile = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.PROFILE, {
                'title': 'Profile',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Basket = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.BASKET, {
                'title': 'Basket',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Notification = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.NOTIFICATION, {
                'title': 'Notification',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Settings = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.SETTINGS, {
                'title': 'Settings',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Layers = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.LAYERS, {
                'title': 'Layers',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.History = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.HISTORY, {
                'title': 'History',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.Test = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.TEST, {
                'title': 'Test Api',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        $scope.ImageEditorPro = function (image, id) {
            cr_DialogsManager.create(cr_DialogsManager.type.IMAGEEDITORPRO, {
                'title': 'Editor image',
                'description': '',
                'image': image,
                'id': id
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
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

        $scope.resizeItem = function () {
            $scope.invalidateBoxesSize();
        };

        $scope.detail_tab = function (tab, allClass) {
            jQuery('.' + allClass).removeClass('active');
            jQuery('.' + tab).addClass('active');
        };

        $scope.invalidateBoxesSize = function () {
            AlertCenterContent(jQuery('.library_scroll-content'), 111, jQuery('.library_content-item'), jQuery('.library_wrap-content'));
            AlertCenterContent(jQuery('.motifs_scroll-content'), 71, jQuery('.motifs_content-item'), jQuery('.motifs_wrap-content'));
            AlertCenterContent(jQuery('.text_scroll-content'), 71, jQuery('.text_scroll-content .item'), jQuery('.text_wrap-content'));
            AlertCenterContent(jQuery('.upload_scroll-content'), 110, jQuery('.upload_content-item.item'), jQuery('.upload_wrap-content'));
            AlertCenterContent(jQuery('.image_scroll-content'), 50, jQuery('.image_content-item'), jQuery('.image_wrap-content'));
        };

        setInterval(function () {
            $scope.invalidateBoxesSize();
        }, 1000);

        $scope.block = function (all) {
            var value = all == undefined ? false : true;
            if (value) {
                cr_LoaderFactory.loaderall = true;
            } else {
                cr_LoaderFactory.loader = true;
            }
        };

        $scope.unblock = function (all) {
            var value = all == undefined ? false : true;
            if (value) {
                cr_LoaderFactory.loaderall = false;
            } else {
                cr_LoaderFactory.loader = false;
            }
        };

        $scope.logout = function () {
            cr_RequestService.logout().then(function (data) {
                if (typeof data == 'string') {
                    //alert(data);
                } else {
                    cr_LoginFactory.login_status = false;
                }
            }, function (data) {
                ////alert(data);
            });
        };

        $scope.OpenCheck = function () {
            if (cr_LoginFactory.login_status) {
                $scope.Import();
            } else {
                $scope.Login($scope.Import);
            }
        };

        $scope.SaveCheck = function () {
            if (cr_LoginFactory.login_status) {
                //
            } else {
                $scope.Login();
            }
        };

        $scope.RemoveBasketItem = function (id) {

        };

        $scope.add_basketCheck = function () {
            if (cr_LoginFactory.login_status) {
                $scope.add_basket();
            } else {
                $scope.Login($scope.add_basket);
            }
        };

        $scope.CheckSaveAs = function (type) {
            if (type != undefined) {
                if (cr_LoginFactory.login_status) {
                    $scope.Save_as(type);
                } else {
                    $scope.Login($scope.Save_as);
                }
            } else {
                if (cr_LoginFactory.login_status) {
                    $scope.Save();
                } else {
                    $scope.Login($scope.Save);
                }
            }

        };

        $scope.show_size_info = function (el) {
            jQuery(el.currentTarget).find('.detail_item').css({'top': jQuery(el.currentTarget).position().top + 40});
        };

        $scope.toggleColorPanel = function () {
            jQuery('.center_color-list').toggle(200);
            jQuery('.center_thumbs').toggle(150);
        };

        $scope.colorPick = function (color) {
            jQuery('.center_color-selector .center_title').css({'background': color});
        };

        $scope.showMenuList = function (menuList) {
            jQuery('.' + menuList).toggle();
        };

        $scope.resize = function () {
            $scope.invalidateDrawAreaSize();
            $scope.invalidateBoxesSize();
        };

        $scope.headerPanelResize = function () {
            $scope.resize();
        };

        $scope.leftSidebarPanelResize = function () {
            $scope.resize();
        };

        $scope.rightSidebarPanelResize = function () {
            $scope.resize();
        };

        $scope.footerPanelResize = function () {
            $scope.resize();
        };

        $scope.centerPanelResize = function () {
            $scope.resize();
        };

        $scope.workareaHeaderPanelResize = function () {
            $scope.resize();
        };

        $scope.workareaLeftSidebarPanelResize = function () {
            $scope.resize();
        };

        $scope.workareaRightSidebarPanelResize = function () {
            $scope.resize();
        };

        $scope.workareaFooterPanelResize = function () {
            $scope.resize();
        };

        $scope.workareaCenterPanelResize = function () {
            $scope.resize();
        };
    };

    // ---

    cr_HomeCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'FileUploader',
        'cr_Enums',
        'cr_DrawFactory',
        'cr_URLManager',
        'cr_UtilsManager',
        'cr_ModelsManager',
        'cr_ImportExportManager',
        'cr_CommandsManager',
        'cr_DataFactory',
        'cr_FullscreenFactory',
        'cr_DialogsManager',
        'cr_RequestService',
        'cr_LoaderFactory',
        'cr_LoginFactory'
    ];

    angular.module('cr_Customify').controller('cr_HomeCtrl', cr_HomeCtrl);
})();

