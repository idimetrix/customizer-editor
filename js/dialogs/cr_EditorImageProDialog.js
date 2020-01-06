(function () {
    var cr_EditorImageProDialog = function ($scope, $modalInstance, parameters, cr_URLManager, $timeout, cr_UtilsManager, cr_EventsManager, cr_DrawFactory, cr_RequestService) {

        var self = this;
        self.init = function () {
            var elem = jQuery('.' + $modalInstance.modalClass);
            console.log(elem)
        };

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';
        self.modal_image = parameters.image || '';
        self.modal_id = parameters.id || '';

        self.message = [];
        self.errors = [];
        self.loading = false;

        self.demo_items = [
            {url: '/editor/img/demo_irems_editor/1.png', class: 'brightnessbtn', text: "Brightness"},
            {url: '/editor/img/demo_irems_editor/2.png', class: 'noisebtn', text: "Noise"},
            {url: '/editor/img/demo_irems_editor/3.png', class: 'sepiabtn', text: "Sepia"},
            {url: '/editor/img/demo_irems_editor/4.png', class: 'contrastbtn', text: "Contrast"},
            {url: '/editor/img/demo_irems_editor/5.png', class: 'colorbtn', text: "Colorize"},
            {url: '/editor/img/demo_irems_editor/6.png', class: 'vintagebtn', text: "Vintage"},
            {url: '/editor/img/demo_irems_editor/7.png', class: 'lomobtn', text: "Lomo"},
            {url: '/editor/img/demo_irems_editor/8.png', class: 'embossbtn', text: "Emboss"},
            {url: '/editor/img/demo_irems_editor/9.png', class: 'tiltshiftbtn', text: "Tilt Shift"},
            {url: '/editor/img/demo_irems_editor/10.png', class: 'radialblurbtn', text: "Radial Blur"},
            {url: '/editor/img/demo_irems_editor/11.png', class: 'posterizebtn', text: "Posterize"},
            {url: '/editor/img/demo_irems_editor/12.png', class: 'claritybtn', text: "Clarity"},
            {url: '/editor/img/demo_irems_editor/13.png', class: 'orangepeelbtn', text: "Orange Peel"},
            {url: '/editor/img/demo_irems_editor/14.png', class: 'sincitybtn', text: "Sin City"},
            {url: '/editor/img/demo_irems_editor/15.png', class: 'sunrisebtn', text: "Sun Rise"},
            {url: '/editor/img/demo_irems_editor/16.png', class: 'crossprocessbtn', text: "Cross Process"},
            {url: '/editor/img/demo_irems_editor/17.png', class: 'hazydaysbtn', text: "Hazy"},
            {url: '/editor/img/demo_irems_editor/18.png', class: 'lovebtn', text: "Love"},
            {url: '/editor/img/demo_irems_editor/19.png', class: 'grungybtn', text: "Grungy"},
            {url: '/editor/img/demo_irems_editor/20.png', class: 'jarquesbtn', text: "Jarques"},
            {url: '/editor/img/demo_irems_editor/21.png', class: 'pinholebtn', text: "Pin Hole"},
            {url: '/editor/img/demo_irems_editor/22.png', class: 'oldbootbtn', text: "Old Boot"},
            {url: '/editor/img/demo_irems_editor/23.png', class: 'glowingsunbtn', text: "Glow Sun"},
            {url: '/editor/img/demo_irems_editor/24.png', class: 'hdrbtn', text: "HDR Effect"},
            {url: '/editor/img/demo_irems_editor/25.png', class: 'oldpaperbtn', text: "Old Paper"},
            {url: '/editor/img/demo_irems_editor/26.png', class: 'pleasantbtn', text: "Pleasant"}
        ];

        self.ok = function () {
            $modalInstance.close();
        };

        self.cancel = function () {
            $modalInstance.dismiss();
        };

        self.activate = function (tab, allClass) {
            jQuery('.' + allClass).removeClass('active');
            jQuery('.' + tab).addClass('active');
        };

        $timeout(function () {

            var elem = jQuery('.' + $modalInstance.modalClass);

            var $body = elem.find('body');
            var $image = elem.find('#image124');
            var $actions = elem.find('.docs-actions');

            var options = {
                preview: '.img-preview'
            };

            $image.on({
                'build.cropper': function (e) {
                    console.log(e.type);
                },
                'built.cropper': function (e) {
                    console.log(e.type);
                },
                'cropstart.cropper': function (e) {
                    console.log(e.type, e.action);
                },
                'cropmove.cropper': function (e) {
                    console.log(e.type, e.action);
                },
                'cropend.cropper': function (e) {
                    console.log(e.type, e.action);
                },
                'crop.cropper': function (e) {
                    console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
                },
                'zoom.cropper': function (e) {
                    console.log(e.type, e.ratio);
                }
            }).cropper(options);

            // Buttons
            if (!$.isFunction(document.createElement('canvas').getContext)) {
                elem.find('button[data-method="getCroppedCanvas"]').prop('disabled', true);
            }

            if (typeof document.createElement('cropper').style.transition === 'undefined') {
                elem.find('button[data-method="rotate"]').prop('disabled', true);
                elem.find('button[data-method="scale"]').prop('disabled', true);
            }

            // Options
            $actions.on('change', ':checkbox', function () {
                var $this = elem.find(this);
                var cropBoxData;
                var canvasData;

                if (!$image.data('cropper')) {
                    return;
                }

                options[$this.val()] = $this.prop('checked');

                cropBoxData = $image.cropper('getCropBoxData');
                canvasData = $image.cropper('getCanvasData');
                options.built = function () {
                    $image.cropper('setCropBoxData', cropBoxData);
                    $image.cropper('setCanvasData', canvasData);
                };

                $image.cropper('destroy').cropper(options);
            });

            // Methods
            $actions.on('click', '[data-method]', function () {
                var $this = elem.find(this);
                var data = $this.data();
                var $target;
                var result;

                self.saveEditorImage = function () {
                    cr_RequestService.uploadlibpic('testkey', 'test_user', self.modal_id, {url: 1}).then(function (data) {

                        console.log('!!! uploadlibpic', data);

                        if (typeof data == 'string') {
                            //alert(data);
                        } else {

                        }
                    }, function (data) {
                        console.log('!!! cr_RequestService error', data);

                        ////alert(data);
                    });
                    self.ok();
                };

                if ($this.prop('disabled') || $this.hasClass('disabled')) {
                    return;
                }

                if ($image.data('cropper') && data.method) {
                    data = $.extend({}, data); // Clone a new one

                    if (typeof data.target !== 'undefined') {
                        $target = $(data.target);

                        if (typeof data.option === 'undefined') {
                            try {
                                data.option = JSON.parse($target.val());
                            } catch (e) {
                                console.log(e.message);
                            }
                        }
                    }
                    console.log(data.method, data.option, data.secondOption)
                    result = $image.cropper(data.method, data.option, data.secondOption);


                    if (data.flip === 'horizontal') {
                        elem.find(this).data('option', -data.option);
                    }

                    if (data.flip === 'vertical') {
                        elem.find(this).data('secondOption', -data.secondOption);
                    }

                    if (data.method === 'getCroppedCanvas' && result) {
                        elem.find('#getCroppedCanvasModal').modal().find('.modal-body').html(result);
                    }

                    if ($.isPlainObject(result) && $target) {
                        try {
                            $target.val(JSON.stringify(result));
                        } catch (e) {
                            console.log(e.message);
                        }
                    }

                }
            });

            $actions.on('change', '#rotate', function () {

                var $this = elem.find(this);
                var data = $this.data();
                var result;
                data.option = JSON.parse('{"rotate":' + elem.find("#rotate").val() + '}');
                console.log('setData', data.option, data.secondOption)
                result = $image.cropper('setData', data.option, data.secondOption);

            });


            // ---

            var canvas = document.getElementById('canvas_editor');
            var ctx = canvas.getContext('2d');

            var img = new Image();
            img.crossOrigin = '';
            img.src = self.modal_image;

            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
            };


            var $reset = elem.find('.resetbtn');
            var $brightness = elem.find('.brightnessbtn');
            var $noise = elem.find('.noisebtn');
            var $sepia = elem.find('.sepiabtn');
            var $contrast = elem.find('.contrastbtn');
            var $color = elem.find('.colorbtn');

            var $vintage = elem.find('.vintagebtn');
            var $lomo = elem.find('.lomobtn');
            var $emboss = elem.find('.embossbtn');
            var $tiltshift = elem.find('.tiltshiftbtn');
            var $radialblur = elem.find('.radialblurbtn');
            var $edgeenhance = elem.find('.edgeenhancebtn');

            var $posterize = elem.find('.posterizebtn');
            var $clarity = elem.find('.claritybtn');
            var $orangepeel = elem.find('.orangepeelbtn');
            var $sincity = elem.find('.sincitybtn');
            var $sunrise = elem.find('.sunrisebtn');
            var $crossprocess = elem.find('.crossprocessbtn');

            var $hazydays = elem.find('.hazydaysbtn');
            var $love = elem.find('.lovebtn');
            var $grungy = elem.find('.grungybtn');
            var $jarques = elem.find('.jarquesbtn');
            var $pinhole = elem.find('.pinholebtn');
            var $oldboot = elem.find('.oldbootbtn');
            var $glowingsun = elem.find('.glowingsunbtn');

            var $hdr = elem.find('.hdrbtn');
            var $oldpaper = elem.find('.oldpaperbtn');
            var $pleasant = elem.find('.pleasantbtn');

            var $save = elem.find('.savebtn');

            // ---

            self.hueSettings = {
                step: 1,
                value: 0,
                min: 0,
                max: 300
            };

            self.contrastSettings = {
                step: 1,
                value: 0,
                min: -20,
                max: 20
            };

            self.vibranceSettings = {
                step: 1,
                value: 0,
                min: 0,
                max: 400
            };

            self.sepiaSettings = {
                step: 1,
                value: 0,
                min: 0,
                max: 100
            };

            self.rotateSettings = {
                step: 1,
                value: 360,
                min: 0,
                max: 360
            };


            self.hue = 0;
            self.contrast = 0;
            self.vibrance = 0;
            self.sepia = 0;
            self.rotate = 0;

            // ---

            //elem.find('.cropper-container').css({'opacity': 0});
            elem.find('#canvas_editor').hide();
            elem.find('#image').hide();


            self.update = function () {
                $timeout(function () {
                    var jpegUrl = canvas.toDataURL("image/png");
                    elem.find('#image124').attr('src', jpegUrl);
                    elem.find('.cropper-canvas > img').attr('src', jpegUrl);
                    elem.find('.cropper-view-box > img').attr('src', jpegUrl);
                }, 300);
                //$canvas.cropper('replace', $canvas[0].toDataURL("image/png"));
                //$('.cropper-canvas img').attr('src', $canvas[0].toDataURL("image/png"));
            };

            // ---

            //elem.find('input[type=range]').change(applyFilters);
            //$scope.$watch('ctrl.hue', function () {
            //    applyFilters();
            //});
            //
            //$scope.$watch('ctrl.contrast', function () {
            //    applyFilters();
            //});
            //
            //$scope.$watch('ctrl.vibrance', function () {
            //    applyFilters();
            //});
            //
            //$scope.$watch('ctrl.sepia', function () {
            //    applyFilters();
            //});
            //
            //function applyFilters() {
            //    Caman('#canvas_editor', img, function() {
            //        this.revert(false);
            //        this.hue(self.hue).contrast(self.contrast).vibrance(self.vibrance).sepia(self.sepia).render();
            //    });
            //}

            $('input[type=range]').change(applyFilters);

            function applyFilters() {
                var hue = parseInt($('#hue').val());
                var cntrst = parseInt($('#contrast').val());
                var vibr = parseInt($('#vibrance').val());
                var sep = parseInt($('#sepia').val());

                Caman('#canvas_editor', img, function () {
                    this.revert(false);
                    this.hue(hue).contrast(cntrst).vibrance(vibr).sepia(sep).render();
                });
                self.update();
            }

            Caman.Filter.register("oldpaper", function () {
                this.pinhole();
                this.noise(10);
                this.orangePeel();
                this.render();
            });

            Caman.Filter.register("pleasant", function () {
                this.colorize(60, 105, 218, 10);
                this.contrast(10);
                this.sunrise();
                this.hazyDays();
                this.render();
            });

            $reset.on('click', function (e) {
                $('input[type=range]').val(0);
                Caman('#canvas_editor', img, function () {
                    this.revert(false);
                    this.render();
                });
            });

            $scope.reset_img = function () {
                $('input[type=range]').val(0);
                Caman('#canvas_editor', img, function () {
                    this.revert(false);
                    this.render();
                });

            }


            $brightness.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.brightness(30).render();
                });
                self.update();
            });

            $noise.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.noise(10).render();
                });
                self.update();
            });

            $contrast.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.contrast(10).render();
                });
                self.update();
            });

            $sepia.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.sepia(20).render();
                });
                self.update();
            });

            $color.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.colorize(60, 105, 218, 10).render();
                });
                self.update();
            });

            $vintage.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.vintage().render();
                });
                self.update();
            });

            $lomo.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.lomo().render();
                });
                self.update();
            });

            $emboss.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.emboss().render();
                });
                self.update();
            });

            $tiltshift.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.tiltShift({
                        angle: 90,
                        focusWidth: 600
                    }).render();
                });
                self.update();
            });

            $radialblur.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.radialBlur().render();
                });
                self.update();
            });

            $edgeenhance.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.edgeEnhance().render();
                });
                self.update();
            });

            $posterize.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.posterize(8, 8).render();
                });
                self.update();
            });

            $clarity.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.clarity().render();
                });
                self.update();
            });

            $orangepeel.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.orangePeel().render();
                });
                self.update();
            });

            $sincity.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.sinCity().render();
                });
                self.update();
            });

            $sunrise.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.sunrise().render();
                });
                self.update();
            });

            $crossprocess.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.crossProcess().render();
                });
                self.update();
            });

            $love.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.love().render();
                });
                self.update();
            });

            $grungy.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.grungy().render();
                });
                self.update();
            });

            $jarques.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.jarques().render();
                });
                self.update();
            });

            $pinhole.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.pinhole().render();
                });
                self.update();
            });

            $oldboot.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.oldBoot().render();
                });
                self.update();
            });

            $glowingsun.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.glowingSun().render();
                });
                self.update();
            });

            $hazydays.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.hazyDays().render();
                });
                self.update();
            });


            $hdr.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.contrast(10);
                    this.contrast(10);
                    this.jarques();
                    this.render();
                });
                self.update();
            });


            $oldpaper.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.oldpaper();
                    this.render();
                });
                self.update();
            });

            $pleasant.on('click', function (e) {
                $scope.reset_img();
                Caman('#canvas_editor', img, function () {
                    this.pleasant();
                    this.render();
                });
                self.update();
            });


            $save.on('click', function (e) {
                Caman('#canvas_editor', img, function () {
                    this.render(function () {
                        this.save('png');
                    });
                });
            });
        }, 500);

        return self;
    };

    // ---

    cr_EditorImageProDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_URLManager',
        '$timeout',
        'cr_UtilsManager',
        'cr_EventsManager',
        'cr_DrawFactory',
        'cr_RequestService'

    ];

    angular.module('cr_Customify').controller('cr_EditorImageProDialog', cr_EditorImageProDialog);
})();
