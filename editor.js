$(document).ready(function () {
    var pgwBrowser = $.pgwBrowser();
    var browserName = pgwBrowser.browser.name;
    var browserVersion = pgwBrowser.browser.majorVersion;
    if (browserName == 'Safari' && browserVersion < 8) {
        webGL = false;
    }
    if (browserName == 'Internet Explorer') {
        webGL = false;
    }
    var cornerSizeValue = Math.round(8 / imgScale);
    if (cornerSizeValue > 10) {
        cornerSizeValue = 10;
    }
    if (imgScale < 0.5) {
        cornerSizeValue = 14;
    }
    $('.nano').nanoScroller({
        sliderMinHeight: 60,
        sliderMaxHeight: 200
    });
    window.addEventListener("focus", function (event) {
        $('.nano').nanoScroller({
            sliderMinHeight: 60,
            sliderMaxHeight: 200
        });
    }, false);
    $.fn.hasScrollBar = function () {
        return this.get(0).scrollHeight > this.height();
    }
    var mouseOver = false;
    $('.nano').mouseover(function () {
        if ($('.nano-content').hasScrollBar()) {
            mouseOver = true;
            $('.nano-pane').css("opacity", "0.99");
        }
    });
    $(".nano").on("update", function (event, values) {
        $('.nano-pane').css("opacity", "0.99");
    });
    $(".nano").mouseleave(function () {
        mouseOver = false;
        $('.nano-pane').css("opacity", "0");
    });
    $('.font-size').numeric();
    $.fn.image = function (src, f) {
        return this.each(function () {
            var i = new Image();
            i.src = src;
            i.onload = f;
            this.appendChild(i);
        });
    }

    function isScrolledIntoView(elem) {
        if ($(elem).length) {
            var $elem = $(elem);
            var $window = $(window);
            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
    }

    var loadingPhotos = false;
    var loadingGraphix = false;
    $('.nano-content').scroll(function () {
        if (loadingPhotos == false) {
            if ($('#c').hasClass('active') && $('#bg-images').hasClass('active')) {
                if (isScrolledIntoView('.load-more-photos')) {
                    loadingPhotos = true;
                    $('.load-more-photos .loader-icon').show();
                    var nextPage = $('.load-more-photos').data('next-page');
                    $.get(nextPage, function (data) {
                        $('.load-more-photos').remove();
                        $(data).appendTo(".bg-photos");
                        loadingPhotos = false;
                    });
                }
            }
        }
        if (loadingGraphix == false) {
            if ($('#b').hasClass('active') && $('#graphics-icons').hasClass('active')) {
                if (isScrolledIntoView('.load-more-graphics')) {
                    loadingGraphix = true;
                    $('.load-more-graphics .loader-icon').show();
                    var nextPage = $('.load-more-graphics').data('next-page');
                    $.get(nextPage, function (data) {
                        $('.load-more-graphics').remove();
                        $(data).appendTo('.graphic-grid');
                        loadingGraphix = false;
                    });
                }
            }
        }
    });
    $('.scroll-top').click(function (e) {
        e.preventDefault();
        $('.nano').nanoScroller({
            scroll: 'top'
        });
        $('.nano').nanoScroller({
            sliderMinHeight: 60,
            sliderMaxHeight: 200
        });
    });
    $('.btn[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("data-tab-header");
        $('.tab-header').removeClass('active');
        $('.tab-header[data-header="' + target + '"]').addClass('active');
        $('.nano').nanoScroller({
            scroll: 'top'
        });
        $('.nano').nanoScroller({
            sliderMinHeight: 60,
            sliderMaxHeight: 200
        });
    })
    $('.font-family').selectpicker({
        dropupAuto: false,
        size: 15
    });
    $('.shape-fill-type').selectpicker({
        dropupAuto: false
    });
    $('.shape-border-type').selectpicker({
        dropupAuto: false
    });
    $('.line-type').selectpicker({
        dropupAuto: false
    });
    if (fonts_loaded === false) {
        var pollTimer = window.setInterval(function () {
            if (fonts_loaded !== false) {
                window.clearInterval(pollTimer);
                loadCanvas();
            }
        }, 200);
    } else {
        loadCanvas();
    }

    function loadCanvas() {
        var canvas = new fabric.Canvas('snappacanvas', {
            controlsAboveOverlay: true,
            selection: false
        });
        var bgColorCanvas = document.getElementById("bgColor");
        var bgColorCtx = bgColorCanvas.getContext("2d");
        bgColorCtx.fillStyle = "#ffffff";
        bgColorCtx.fillRect(0, 0, canvas.width, canvas.height);
        var bgDarken = document.getElementById("bgDarken");
        var bgDarkenCtx = bgDarken.getContext("2d");
        var bgOverlay = document.getElementById("bgOverlay");
        var bgOverlayCtx = bgOverlay.getContext("2d");
        canvas.renderAll();
        canvas.calcOffset();

        function drawObjControls(target) {
            return false;
            if (typeof target === 'undefined') {
                var activeLayer = canvas.getActiveObject();
            } else {
                var activeLayer = target;
            }
            var layerType = activeLayer.get('type');
            $('.object-controls').remove();
            var objectAngle = activeLayer.getAngle();
            var topMost, leftMost;
            if (objectAngle >= 0 && objectAngle <= 90) {
                topMost = activeLayer.oCoords.tl.y;
                leftMost = activeLayer.oCoords.tl.x;
            } else if (objectAngle > 90 && objectAngle <= 180) {
            } else if (objectAngle > 180 && objectAngle <= 270) {
            } else if (objectAngle > 270) {
                topMost = (activeLayer.oCoords.tl.y + activeLayer.oCoords.tr.y) / 2;
                leftMost = (activeLayer.oCoords.tl.x + activeLayer.oCoords.bl.x) / 2;
            }
            var objectLeft = (leftMost - 0.5) * imgScale;
            var objectTop = (topMost - 0.5) * imgScale;
            var objectHeight = (activeLayer.oCoords.bl.y - activeLayer.oCoords.tl.y + 2) * imgScale;
            var objectWidth = (activeLayer.oCoords.tr.x - activeLayer.oCoords.tl.x + 2) * imgScale;
            var objectHeight = (activeLayer.height * activeLayer.scaleY * imgScale + 2);
            var objectWidth = (activeLayer.width * imgScale * activeLayer.scaleX + 2);
            var canvasLeft = $('.canvas-container').position().left;
            var canvasTop = $('.canvas-container').position().top;
            var canvasLeft = 0;
            var canvasTop = 0;
            var divLeft = objectLeft + canvasLeft;
            var divTop = objectTop + canvasTop;
            var elm = '<div class="object-controls" ' + 'style="pointer-events:none;transform:rotate(' + objectAngle + 'deg);width:' + objectWidth + 'px;height:' + objectHeight + 'px;left:' + divLeft + 'px;top:' + divTop + 'px;">' + '<span class="rotate-bar"></span>' + '<span class="resize-square tl"></span>' + '<span class="resize-square tr"></span>' + '<span class="resize-square bl"></span>' + '<span class="resize-square br"></span>' + '</div>';
            $(elm).appendTo('.canvas-container');
        }

        var dragging = false;
        $('body').on('mousedown', '.object-controls .br', function (e) {
            var activeLayer = canvas.getActiveObject();
            e.preventDefault();
            var xStart = e.pageX;
            var yStart = e.pageY;
            var ogW = activeLayer.width;
            var ogH = activeLayer.height;
            var ogXscale = activeLayer.scaleX;
            dragging = true;
            $(document).mousemove(function (e) {
                if (dragging === true) {
                }
            });
        });
        $(document).mouseup(function (e) {
            if (dragging) {
                $(document).unbind('mousemove');
                dragging = false;
            }
        });
        canvas.on('object:selected', function (ev) {
            var layerType = canvas.getActiveObject().get('type');
            var activeLayer = canvas.getActiveObject();
            $("html").keydown(function (e) {
                if ($.inArray(e.keyCode, [46, 8]) !== -1 && !$(e.target).is("input, textarea")) {
                    e.preventDefault();
                    if (canvas.getActiveObject()) {
                        canvas.getActiveObject().remove();
                    }
                }
            });
            if (layerType == 'i-text' || layerType == 'textbox') {
                var textLayerFont = activeLayer.getFontFamily();
                var textLayerFontSize = activeLayer.getFontSize();
                var textLayerWeight = activeLayer.getFontWeight();
                var textLayerStyle = activeLayer.getFontStyle();
                var textLayerDecoration = activeLayer.getTextDecoration();
                var textLayerAlign = activeLayer.getTextAlign();
                var textLayerColor = activeLayer.getFill();
                var textLayerOpacity = Math.round(activeLayer.getOpacity() * 100);
                $('.font-style .btn').removeClass('active');
                $('.text-align .btn').removeClass('active');
                $('.font-size-spinner input').val(textLayerFontSize);
                $('.font-family').selectpicker('val', textLayerFont);
                $('.bootstrap-select.font-family .dropdown-toggle').css('font-family', textLayerFont);
                $('.font-style .btn[data-font-style="bold"]').addClass('disabled');
                $('.font-style .btn[data-font-style="italic"]').addClass('disabled');
                if (textLayerWeight == 700) {
                    $('.font-style .btn[data-font-style="bold"]').addClass('active');
                    $('.font-style .btn[data-font-style="bold"]').removeClass('disabled');
                    if (custom_fonts[textLayerFont]['700italic'] === true) {
                        $('.font-style .btn[data-font-style="italic"]').removeClass('disabled');
                    }
                } else {
                    if (custom_fonts[textLayerFont]['700'] === true) {
                        $('.font-style .btn[data-font-style="bold"]').removeClass('disabled');
                    }
                }
                if (textLayerStyle == 'italic') {
                    $('.font-style .btn[data-font-style="italic"]').addClass('active');
                    $('.font-style .btn[data-font-style="italic"]').removeClass('disabled');
                    if (custom_fonts[textLayerFont]['700italic'] === true) {
                        $('.font-style .btn[data-font-style="bold"]').removeClass('disabled');
                    }
                } else {
                    if (custom_fonts[textLayerFont]['400italic'] === true) {
                        $('.font-style .btn[data-font-style="italic"]').removeClass('disabled');
                    }
                }
                if (textLayerDecoration == 'underline') {
                } else if (textLayerDecoration == 'line-through') {
                    $('.font-style .btn[data-font-style="underline"]').addClass('active');
                    $('.font-style .btn[data-font-style="strikethrough"]').addClass('active');
                }
                $('.font-colorpicker').minicolors('value', textLayerColor);
                $('.text-align .btn[data-text-align="' + textLayerAlign + '"]').addClass('active');
                $('#textOpacity').slider('setValue', textLayerOpacity);
                $(".text-opacity-value").text(textLayerOpacity);
                $('#main-tabs > .tab-pane').removeClass('active');
                $('#tab-titles .tab-header').removeClass('active');
                $('#tab-titles .tab-header*[data-header="tab-font-options"]').addClass('active');
                $('#object-options').addClass('active');
                $('.object-pane').hide();
                $('.object-pane.text-object').show();
            } else if (layerType == 'path-group' || layerType == 'image') {
                var graphicLayerColor = activeLayer.getFill();
                var graphicLayerOpacity = Math.round(activeLayer.getOpacity() * 100);
                $('#graphicOpacity').slider('setValue', graphicLayerOpacity);
                $('.graphic-opacity-value').text(graphicLayerOpacity);
                $('.object-pane .graphic-color-option').hide();
                if (layerType == 'path-group') {
                    if (activeLayer.isSameColor()) {
                        if (graphicLayerColor != '') {
                            $('.graphic-colorpicker').minicolors('value', graphicLayerColor);
                        }
                        $('.object-pane .graphic-color-option').show();
                    }
                }
                $('#main-tabs > .tab-pane').removeClass('active');
                $('#tab-titles .tab-header').removeClass('active');
                $('#tab-titles .tab-header*[data-header="tab-graphic-options"]').addClass('active');
                $('#object-options').addClass('active');
                $('.object-pane').hide();
                $('.object-pane.graphic-object').show();
            } else if (layerType == 'rect' || layerType == 'triangle' || layerType == 'circle' || layerType == 'polygon') {
                var shapeLayerColor = activeLayer.getFill();
                var shapeStrokeColor = activeLayer.getStroke();
                var shapeStrokeWidth = activeLayer.getStrokeWidth();
                var shapeBorderRadius = activeLayer.get('rx');
                var shapeStrokeDash = activeLayer.get('strokeDashArray');
                var shapeLayerOpacity = Math.round(activeLayer.getOpacity() * 100);
                if (shapeStrokeWidth == 1 && shapeStrokeColor == 'rgba(0,0,0,0.2)' && (shapeLayerColor == 'rgba(0,0,0,0)' || shapeLayerColor == 'transparent')) {
                    $('.shape-border-type').selectpicker('val', 'noborder');
                    $('.shape-fill-type').selectpicker('val', 'nofill');
                    $('.shape-border-colorpicker').attr('disabled', 'disabled');
                    $('.shape-border-size').attr('disabled', 'disabled');
                    $('.shape-border-spinner button').attr('disabled', 'disabled');
                    $('.shape-colorpicker').attr('disabled', 'disabled');
                    $('#shapeOpacity').slider('setValue', 100);
                    $('.shape-opacity-value').text(100);
                    $('#shapeOpacity').slider('disable');
                } else {
                    if (shapeLayerColor == 'rgba(0,0,0,0)' || shapeLayerColor == 'transparent') {
                        $('.shape-fill-type').selectpicker('val', 'nofill');
                        $('.shape-colorpicker').attr('disabled', 'disabled');
                    } else {
                        $('.shape-fill-type').selectpicker('val', 'solid');
                        $('.shape-colorpicker').removeAttr('disabled');
                    }
                    if (shapeLayerColor != 'rgba(0,0,0,0)' && shapeLayerColor != 'transparent') {
                        $('.shape-colorpicker').minicolors('value', shapeLayerColor);
                    }
                    if (shapeStrokeWidth == 0) {
                        $('.shape-border-type').selectpicker('val', 'noborder');
                        $('.shape-border-colorpicker').attr('disabled', 'disabled');
                        $('.shape-border-size').attr('disabled', 'disabled');
                        $('.shape-border-spinner button').attr('disabled', 'disabled');
                    } else if (shapeStrokeDash == null) {
                        $('.shape-border-type').selectpicker('val', 'solid');
                        $('.shape-border-colorpicker').removeAttr('disabled');
                        $('.shape-border-size').removeAttr('disabled');
                        $('.shape-border-spinner button').removeAttr('disabled');
                    } else {
                        $('.shape-border-type').selectpicker('val', 'dashed');
                        $('.shape-border-colorpicker').removeAttr('disabled');
                        $('.shape-border-size').removeAttr('disabled');
                        $('.shape-border-spinner button').removeAttr('disabled');
                    }
                    if (shapeStrokeWidth != 0) {
                        $('.shape-border-colorpicker').minicolors('value', shapeStrokeColor);
                    }
                    if (shapeStrokeWidth != 0) {
                        $('.shape-border-spinner input').val(shapeStrokeWidth);
                    } else {
                        $('.shape-border-spinner input').val(1);
                    }
                    $('#shapeOpacity').slider('enable');
                    $('#shapeOpacity').slider('setValue', shapeLayerOpacity);
                    $('.shape-opacity-value').text(shapeLayerOpacity);
                }
                if (layerType == 'rect') {
                    $('.border-radius-option').show();
                    $('.shape-radius-spinner input').val(shapeBorderRadius);
                } else {
                    $('.border-radius-option').hide();
                }
                $('#main-tabs > .tab-pane').removeClass('active');
                $('#tab-titles .tab-header').removeClass('active');
                $('#tab-titles .tab-header*[data-header="tab-shapes-options"]').addClass('active');
                $('#object-options').addClass('active');
                $('.object-pane').hide();
                $('.object-pane.shape-object').show();
            } else if (layerType == 'line') {
                var lineStrokeColor = activeLayer.getStroke();
                var lineStrokeWidth = activeLayer.getStrokeWidth();
                var lineStrokeDash = activeLayer.get('strokeDashArray');
                var lineLayerOpacity = Math.round(activeLayer.getOpacity() * 100);
                if (lineStrokeDash == null) {
                    $('.line-type').selectpicker('val', 'solid');
                } else {
                    $('.line-type').selectpicker('val', 'dashed');
                }
                $('.line-colorpicker').minicolors('value', lineStrokeColor);
                $('.line-size-spinner input').val(lineStrokeWidth);
                $('#lineOpacity').slider('setValue', lineLayerOpacity);
                $('.line-opacity-value').text(lineLayerOpacity);
                $('#main-tabs > .tab-pane').removeClass('active');
                $('#tab-titles .tab-header').removeClass('active');
                $('#tab-titles .tab-header*[data-header="tab-line-options"]').addClass('active');
                $('#object-options').addClass('active');
                $('.object-pane').hide();
                $('.object-pane.line-object').show();
            }
            $('.nano').nanoScroller({
                scroll: 'top'
            });
            $('.nano').nanoScroller({
                sliderMinHeight: 60,
                sliderMaxHeight: 200
            });
        });
        canvas.on('object:scaling', function (ev) {
            var layerType = canvas.getActiveObject().get('type');
            var activeLayer = canvas.getActiveObject();
            if (layerType == 'rect' || layerType == 'triangle' || layerType == 'line') {
                var w = activeLayer.width * activeLayer.scaleX;
                var h = activeLayer.height * activeLayer.scaleY;
                activeLayer.set({
                    'height': h,
                    'width': w,
                    'scaleX': 1,
                    'scaleY': 1
                });
            } else if (layerType == 'circle') {
                var w = activeLayer.getRadiusX() * activeLayer.scaleX;
                activeLayer.set({
                    'radius': w,
                    'scaleX': 1,
                    'scaleY': 1
                });
            } else if (layerType == 'polygon') {
                var w = activeLayer.width * activeLayer.scaleX;
                var h = activeLayer.height * activeLayer.scaleY;
                for (var j = 0; j < activeLayer.points.length; j++) {
                    activeLayer.points[j]['x'] = activeLayer.points[j]['x'] * (activeLayer.getScaleX());
                    activeLayer.points[j]['y'] = activeLayer.points[j]['y'] * (activeLayer.getScaleX());
                }
                activeLayer.set({
                    'height': h,
                    'width': w,
                    'scaleX': 1,
                    'scaleY': 1
                });
                activeLayer.setCoords();
                canvas.renderAll();
            }
            activeLayer.setCoords();
        });
        canvas.on('selection:cleared', function (ev) {
            $('.font-family.open .dropdown-toggle').dropdown('toggle');
            clearSelection();
        });
        $('.canvas-wrap').on('click', function (e) {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var textLayer = canvas.getActiveObject();
                if (layerType == 'i-text' || layerType == 'textbox') {
                    textLayer.exitEditing();
                }
            }
        });
        $('.upper-canvas').on('click', function (event) {
            event.stopPropagation();
        });

        function clearSelection() {
            $('.object-controls').remove();
            $('#main-tabs > .tab-pane').removeClass('active');
            $('#tab-titles .tab-header').removeClass('active');
            $('#tab-titles .tab-header*[data-header="tab-no-selection"]').addClass('active');
            $('#no-selection').addClass('active');
        }

        var iii = 1;
        canvas.on('object:rotating', function (ev) {
            if (iii > 1) {
                ev.target.setCoords();
            }
            var objAngle = parseInt(ev.target.angle);
            if ((objAngle >= 0 && objAngle <= 3) || objAngle >= 357) {
                ev.target.setAngle(0);
            } else if (objAngle >= 42 && objAngle <= 48) {
                ev.target.setAngle(45);
            } else if (objAngle >= 87 && objAngle <= 93) {
                ev.target.setAngle(90);
            } else if (objAngle >= 132 && objAngle <= 138) {
                ev.target.setAngle(135);
            } else if (objAngle >= 177 && objAngle <= 183) {
                ev.target.setAngle(180);
            } else if (objAngle >= 222 && objAngle <= 228) {
                ev.target.setAngle(225);
            } else if (objAngle >= 267 && objAngle <= 273) {
                ev.target.setAngle(270);
            } else if (objAngle >= 312 && objAngle <= 318) {
                ev.target.setAngle(315);
            }
            ev.target.setCoords();
            iii = iii + 1;
        });
        canvas.on('object:moving', function (ev) {
            if (iii > 1) {
                ev.target.setCoords();
            }
            var snapAction = false;
            var objWidth = ev.target.getBoundingRect().width;
            var objHeight = ev.target.getBoundingRect().height;
            var snapH = canvas.height / 2;
            var snapV = canvas.width / 2;
            var objCenterX = ev.target.getCenterPoint().x;
            var objCenterY = ev.target.getCenterPoint().y;
            var snapRange = 7;
            var objTop = ev.target.getBoundingRect().top;
            var objBottom = ev.target.getBoundingRect().top + objHeight;
            var objLeft = ev.target.getBoundingRect().left;
            var objRight = ev.target.getBoundingRect().left + objWidth;
            var objAngle = parseInt(ev.target.angle);
            if (objAngle >= 0 && objAngle <= 90) {
                var snapLeftAdjust = ev.target.oCoords.tl.x - ev.target.oCoords.bl.x;
                var snapLeft = ev.target.oCoords.bl.x + snapLeftAdjust;
                var snapTopAdjust = 0;
                var snapTop = ev.target.oCoords.tl.y;
            } else if (objAngle > 90 && objAngle <= 180) {
                var snapLeftAdjust = objWidth;
                var snapLeft = ev.target.oCoords.tl.x;
                var snapTopAdjust = ev.target.oCoords.tl.y - ev.target.oCoords.bl.y;
                var snapTop = ev.target.oCoords.tl.y;
            } else if (objAngle > 180 && objAngle <= 270) {
                var snapLeftAdjust = objWidth + (ev.target.oCoords.tl.x - ev.target.oCoords.bl.x);
                var snapLeft = ev.target.oCoords.tl.x;
                var snapTopAdjust = objHeight;
                var snapTop = ev.target.oCoords.tl.y;
            } else if (objAngle > 270) {
                var snapLeftAdjust = 0;
                var snapLeft = ev.target.oCoords.tl.x;
                var snapTopAdjust = objHeight + (ev.target.oCoords.tl.y - ev.target.oCoords.bl.y);
                var snapTop = ev.target.oCoords.tl.y;
            }
            var objects = canvas.getObjects('line');
            var allObjs = canvas.getObjects();
            var topSnaps = [
                [0, {
                    'xStart': 0,
                    'xEnd': canvas.width
                }]
            ];
            var bottomSnaps = [
                [canvas.height, {
                    'xStart': 0,
                    'xEnd': canvas.width
                }]
            ];
            var hMiddleSnaps = [
                [snapH, {
                    'xStart': 0,
                    'xEnd': canvas.width
                }]
            ];
            var leftSnaps = [
                [0, {
                    'yStart': 0,
                    'yEnd': canvas.height
                }]
            ];
            var rightSnaps = [
                [canvas.width, {
                    'yStart': 0,
                    'yEnd': canvas.height
                }]
            ];
            var vMiddleSnaps = [
                [snapV, {
                    'yStart': 0,
                    'yEnd': canvas.height
                }]
            ];
            for (var i = 0; i < objects.length; i++) {
                var checkSelectable = objects[i].get('selectable');
                if (checkSelectable == false) {
                    canvas.remove(objects[i]);
                }
            }
            for (var i = 0; i < allObjs.length; i++) {
                var checkActive = allObjs[i].get('active');
                if (checkActive == false) {
                    var xStart, xEnd, yStart, yEnd;
                    if (ev.target.getBoundingRect().left <= allObjs[i].getBoundingRect().left) {
                        xStart = ev.target.getBoundingRect().left;
                        xEnd = allObjs[i].getBoundingRect().left + allObjs[i].getBoundingRect().width;
                    } else {
                        xStart = allObjs[i].getBoundingRect().left;
                        xEnd = ev.target.getBoundingRect().left + ev.target.getBoundingRect().width;
                    }
                    topSnaps.push([allObjs[i].getBoundingRect().top, {
                        'xStart': xStart,
                        'xEnd': xEnd
                    }]);
                    topSnaps.push([allObjs[i].getBoundingRect().top + allObjs[i].getBoundingRect().height, {
                        'xStart': xStart,
                        'xEnd': xEnd
                    }]);
                    bottomSnaps.push([allObjs[i].getBoundingRect().top + allObjs[i].getBoundingRect().height, {
                        'xStart': xStart,
                        'xEnd': xEnd
                    }]);
                    bottomSnaps.push([allObjs[i].getBoundingRect().top, {
                        'xStart': xStart,
                        'xEnd': xEnd
                    }]);
                    hMiddleSnaps.push([allObjs[i].getCenterPoint().y, {
                        'xStart': xStart,
                        'xEnd': xEnd
                    }]);
                    if (ev.target.getBoundingRect().top <= allObjs[i].getBoundingRect().top) {
                        yStart = ev.target.getBoundingRect().top;
                        yEnd = allObjs[i].getBoundingRect().top + allObjs[i].getBoundingRect().height;
                    } else {
                        yStart = allObjs[i].getBoundingRect().top;
                        yEnd = ev.target.getBoundingRect().top + ev.target.getBoundingRect().height;
                    }
                    leftSnaps.push([allObjs[i].getBoundingRect().left, {
                        'yStart': yStart,
                        'yEnd': yEnd
                    }]);
                    leftSnaps.push([allObjs[i].getBoundingRect().left + allObjs[i].getBoundingRect().width, {
                        'yStart': yStart,
                        'yEnd': yEnd
                    }]);
                    rightSnaps.push([allObjs[i].getBoundingRect().left + allObjs[i].getBoundingRect().width, {
                        'yStart': yStart,
                        'yEnd': yEnd
                    }]);
                    rightSnaps.push([allObjs[i].getBoundingRect().left, {
                        'yStart': yStart,
                        'yEnd': yEnd
                    }]);
                    vMiddleSnaps.push([allObjs[i].getCenterPoint().x, {
                        'yStart': yStart,
                        'yEnd': yEnd
                    }]);
                }
            }
            for (var i = topSnaps.length - 1; i >= 0; i--) {
                if (topSnaps[i] != undefined) {
                    var topSnapCalc = Math.abs(ev.target.getBoundingRect().top - topSnaps[i][0]);
                    topSnapCalc = parseFloat(topSnapCalc).toFixed(2);
                    if (topSnapCalc <= snapRange) {
                        for (var i2 = topSnaps.length - 1; i2 >= 0; i2--) {
                            if (topSnaps[i2] != undefined) {
                                var topSnapCalc2 = Math.abs(ev.target.getBoundingRect().top - topSnaps[i2][0]);
                                topSnapCalc2 = parseFloat(topSnapCalc2).toFixed(2);
                                if (topSnapCalc2 <= snapRange && topSnapCalc2 != topSnapCalc) {
                                    if (topSnapCalc2 < topSnapCalc) {
                                        topSnaps.splice(i, 1);
                                    } else {
                                        topSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                        for (var i2 = hMiddleSnaps.length - 1; i2 >= 0; i2--) {
                            if (hMiddleSnaps[i2] != undefined) {
                                var hMidSnapCalc = Math.abs(ev.target.getCenterPoint().y - hMiddleSnaps[i2][0]);
                                hMidSnapCalc = parseFloat(hMidSnapCalc).toFixed(2);
                                if (hMidSnapCalc <= snapRange && hMidSnapCalc != topSnapCalc) {
                                    if (hMidSnapCalc < topSnapCalc) {
                                        topSnaps.splice(i, 1);
                                    } else {
                                        hMiddleSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                        for (var i2 = bottomSnaps.length - 1; i2 >= 0; i2--) {
                            if (bottomSnaps[i2] != undefined) {
                                var bottomSnapCalc = Math.abs(ev.target.getBoundingRect().top + ev.target.getBoundingRect().height - bottomSnaps[i2][0]);
                                bottomSnapCalc = parseFloat(bottomSnapCalc).toFixed(2);
                                if (bottomSnapCalc <= snapRange && bottomSnapCalc != topSnapCalc) {
                                    if (bottomSnapCalc < topSnapCalc) {
                                        topSnaps.splice(i, 1);
                                    } else {
                                        bottomSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (var i = hMiddleSnaps.length - 1; i >= 0; i--) {
                if (hMiddleSnaps[i] != undefined) {
                    var hMidSnapCalc = Math.abs(ev.target.getCenterPoint().y - hMiddleSnaps[i][0]);
                    hMidSnapCalc = parseFloat(hMidSnapCalc).toFixed(2);
                    if (hMidSnapCalc <= snapRange) {
                        for (var i2 = hMiddleSnaps.length - 1; i2 >= 0; i2--) {
                            if (hMiddleSnaps[i2] != undefined) {
                                var hMidSnapCalc2 = Math.abs(ev.target.getCenterPoint().y - hMiddleSnaps[i2][0]);
                                hMidSnapCalc2 = parseFloat(hMidSnapCalc2).toFixed(2);
                                if (hMidSnapCalc2 <= snapRange && hMidSnapCalc2 != hMidSnapCalc) {
                                    if (hMidSnapCalc2 < hMidSnapCalc) {
                                        hMiddleSnaps.splice(i, 1);
                                    } else {
                                        hMiddleSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                        for (var i2 = bottomSnaps.length - 1; i2 >= 0; i2--) {
                            if (bottomSnaps[i2] != undefined) {
                                var bottomSnapCalc = Math.abs(ev.target.getBoundingRect().top + ev.target.getBoundingRect().height - bottomSnaps[i2][0]);
                                bottomSnapCalc = parseFloat(bottomSnapCalc).toFixed(2);
                                if (bottomSnapCalc <= snapRange && bottomSnapCalc != hMidSnapCalc) {
                                    if (bottomSnapCalc < hMidSnapCalc) {
                                        hMiddleSnaps.splice(i, 1);
                                    } else {
                                        bottomSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (var i = bottomSnaps.length - 1; i >= 0; i--) {
                if (bottomSnaps[i] != undefined) {
                    var bottomSnapCalc = Math.abs(ev.target.getBoundingRect().top + ev.target.getBoundingRect().height - bottomSnaps[i][0]);
                    bottomSnapCalc = parseFloat(bottomSnapCalc).toFixed(2);
                    if (bottomSnapCalc <= snapRange) {
                        for (var i2 = bottomSnaps.length - 1; i2 >= 0; i2--) {
                            if (bottomSnaps[i2] != undefined) {
                                var bottomSnapCalc2 = Math.abs(ev.target.getBoundingRect().top + ev.target.getBoundingRect().height - bottomSnaps[i2][0]);
                                bottomSnapCalc2 = parseFloat(bottomSnapCalc2).toFixed(2);
                                if (bottomSnapCalc2 <= snapRange && bottomSnapCalc2 != bottomSnapCalc) {
                                    if (bottomSnapCalc2 < bottomSnapCalc) {
                                        bottomSnaps.splice(i, 1);
                                    } else {
                                        bottomSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (var i = leftSnaps.length - 1; i >= 0; i--) {
                if (leftSnaps[i] != undefined) {
                    var leftSnapCalc = Math.abs(ev.target.getBoundingRect().left - leftSnaps[i][0]);
                    leftSnapCalc = parseFloat(leftSnapCalc).toFixed(2);
                    if (leftSnapCalc <= snapRange) {
                        for (var i2 = leftSnaps.length - 1; i2 >= 0; i2--) {
                            if (leftSnaps[i2] != undefined) {
                                var leftSnapCalc2 = Math.abs(ev.target.getBoundingRect().left - leftSnaps[i][0]);
                                leftSnapCalc2 = parseFloat(leftSnapCalc2).toFixed(2);
                                if (leftSnapCalc2 <= snapRange && leftSnapCalc2 != leftSnapCalc) {
                                    if (leftSnapCalc2 < leftSnapCalc) {
                                        leftSnaps.splice(i, 1);
                                    } else {
                                        leftSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                        for (var i2 = vMiddleSnaps.length - 1; i2 >= 0; i2--) {
                            if (vMiddleSnaps[i2] != undefined) {
                                var vMidSnapCalc = Math.abs(ev.target.getCenterPoint().x - vMiddleSnaps[i2][0]);
                                vMidSnapCalc = parseFloat(vMidSnapCalc).toFixed(2);
                                if (vMidSnapCalc <= snapRange && vMidSnapCalc != leftSnapCalc) {
                                    if (vMidSnapCalc < leftSnapCalc) {
                                        leftSnaps.splice(i, 1);
                                    } else {
                                        vMiddleSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                        for (var i2 = rightSnaps.length - 1; i2 >= 0; i2--) {
                            if (rightSnaps[i2] != undefined) {
                                var rightSnapCalc = Math.abs(ev.target.getBoundingRect().left + ev.target.getBoundingRect().width - rightSnaps[i2][0]);
                                rightSnapCalc = parseFloat(rightSnapCalc).toFixed(2);
                                if (rightSnapCalc <= snapRange && rightSnapCalc != leftSnapCalc) {
                                    if (rightSnapCalc < leftSnapCalc) {
                                        leftSnaps.splice(i, 1);
                                    } else {
                                        rightSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (var i = vMiddleSnaps.length - 1; i >= 0; i--) {
                if (vMiddleSnaps[i] != undefined) {
                    var vMidSnapCalc = Math.abs(ev.target.getCenterPoint().x - vMiddleSnaps[i][0]);
                    vMidSnapCalc = parseFloat(vMidSnapCalc).toFixed(2);
                    if (vMidSnapCalc <= snapRange) {
                        for (var i2 = vMiddleSnaps.length - 1; i2 >= 0; i2--) {
                            if (vMiddleSnaps[i2] != undefined) {
                                var vMidSnapCalc2 = Math.abs(ev.target.getCenterPoint().x - vMiddleSnaps[i2][0]);
                                vMidSnapCalc2 = parseFloat(vMidSnapCalc2).toFixed(2);
                                if (vMidSnapCalc2 <= snapRange && vMidSnapCalc2 != vMidSnapCalc) {
                                    if (vMidSnapCalc2 < vMidSnapCalc) {
                                        vMiddleSnaps.splice(i, 1);
                                    } else {
                                        vMiddleSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                        for (var i2 = rightSnaps.length - 1; i2 >= 0; i2--) {
                            if (rightSnaps[i2] != undefined) {
                                var rightSnapCalc = Math.abs(ev.target.getBoundingRect().left + ev.target.getBoundingRect().width - rightSnaps[i2][0]);
                                rightSnapCalc = parseFloat(rightSnapCalc).toFixed(2);
                                if (rightSnapCalc <= snapRange && rightSnapCalc != vMidSnapCalc) {
                                    if (rightSnapCalc < vMidSnapCalc) {
                                        vMiddleSnaps.splice(i, 1);
                                    } else {
                                        rightSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (var i = rightSnaps.length - 1; i >= 0; i--) {
                if (rightSnaps[i] != undefined) {
                    var rightSnapCalc = Math.abs(ev.target.getBoundingRect().left + ev.target.getBoundingRect().width - rightSnaps[i][0]);
                    rightSnapCalc = parseFloat(rightSnapCalc).toFixed(2);
                    if (rightSnapCalc <= snapRange) {
                        for (var i2 = rightSnaps.length - 1; i2 >= 0; i2--) {
                            if (rightSnaps[i2] != undefined) {
                                var rightSnapCalc2 = Math.abs(ev.target.getBoundingRect().left + ev.target.getBoundingRect().width - rightSnaps[i2][0]);
                                rightSnapCalc2 = parseFloat(rightSnapCalc2).toFixed(2);
                                if (rightSnapCalc2 <= snapRange && rightSnapCalc2 != rightSnapCalc) {
                                    if (rightSnapCalc2 < rightSnapCalc) {
                                        rightSnaps.splice(i, 1);
                                    } else {
                                        rightSnaps.splice(i2, 1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (index = 0; index < hMiddleSnaps.length; index++) {
                var hMidSnapCalc = Math.abs(ev.target.getCenterPoint().y - hMiddleSnaps[index][0]);
                if (hMidSnapCalc <= snapRange) {
                    var hLine = new fabric.Line([hMiddleSnaps[index][1].xStart, hMiddleSnaps[index][0], hMiddleSnaps[index][1].xEnd, hMiddleSnaps[index][0]], {
                        stroke: 'rgba(255,255,255,0.6)',
                        selectable: false
                    });
                    var hLine2 = new fabric.Line([hMiddleSnaps[index][1].xStart, hMiddleSnaps[index][0], hMiddleSnaps[index][1].xEnd, hMiddleSnaps[index][0]], {
                        stroke: 'rgba(41,99,158,0.6)',
                        strokeDashArray: [5, 5],
                        selectable: false
                    });
                    var snapTop = hMiddleSnaps[index][0] - (objHeight / 2) + snapTopAdjust;
                    canvas.add(hLine);
                    hLine.moveTo(9998);
                    canvas.add(hLine2);
                    hLine2.moveTo(9999);
                }
            }
            for (index = 0; index < vMiddleSnaps.length; index++) {
                var vMidSnapCalc = Math.abs(ev.target.getCenterPoint().x - vMiddleSnaps[index][0]);
                if (vMidSnapCalc <= snapRange) {
                    var vLine = new fabric.Line([vMiddleSnaps[index][0], vMiddleSnaps[index][1].yStart, vMiddleSnaps[index][0], vMiddleSnaps[index][1].yEnd], {
                        stroke: 'rgba(255,255,255,0.6)',
                        selectable: false
                    });
                    var vLine2 = new fabric.Line([vMiddleSnaps[index][0], vMiddleSnaps[index][1].yStart, vMiddleSnaps[index][0], vMiddleSnaps[index][1].yEnd], {
                        stroke: 'rgba(41,99,158,0.6)',
                        strokeDashArray: [5, 5],
                        selectable: false
                    });
                    var snapLeft = vMiddleSnaps[index][0] - (objWidth / 2) + snapLeftAdjust;
                    canvas.add(vLine);
                    vLine.moveTo(9998);
                    canvas.add(vLine2);
                    vLine2.moveTo(9999);
                }
            }
            for (index = 0; index < topSnaps.length; index++) {
                var topSnapCalc = Math.abs(ev.target.getBoundingRect().top - topSnaps[index][0]);
                if (topSnapCalc <= snapRange) {
                    var hLine = new fabric.Line([topSnaps[index][1].xStart, topSnaps[index][0], topSnaps[index][1].xEnd, topSnaps[index][0]], {
                        stroke: 'rgba(255,255,255,0.6)',
                        selectable: false
                    });
                    var hLine2 = new fabric.Line([topSnaps[index][1].xStart, topSnaps[index][0], topSnaps[index][1].xEnd, topSnaps[index][0]], {
                        stroke: 'rgba(41,99,158,0.6)',
                        strokeDashArray: [5, 5],
                        selectable: false
                    });
                    var snapTop = topSnaps[index][0] + snapTopAdjust;
                    canvas.add(hLine);
                    hLine.moveTo(9998);
                    canvas.add(hLine2);
                    hLine2.moveTo(9999);
                }
            }
            for (index = 0; index < bottomSnaps.length; index++) {
                var bottomSnapCalc = Math.abs(ev.target.getBoundingRect().top + ev.target.getBoundingRect().height - bottomSnaps[index][0]);
                var lineAdj = 0;
                if (bottomSnapCalc <= snapRange) {
                    if (bottomSnaps[index][0] == canvas.height) {
                        lineAdj = 1;
                    }
                    var hLine = new fabric.Line([bottomSnaps[index][1].xStart, bottomSnaps[index][0] - lineAdj, bottomSnaps[index][1].xEnd, bottomSnaps[index][0] - lineAdj], {
                        stroke: 'rgba(255,255,255,0.6)',
                        selectable: false
                    });
                    var hLine2 = new fabric.Line([bottomSnaps[index][1].xStart, bottomSnaps[index][0] - lineAdj, bottomSnaps[index][1].xEnd, bottomSnaps[index][0] - lineAdj], {
                        stroke: 'rgba(41,99,158,0.6)',
                        strokeDashArray: [5, 5],
                        selectable: false
                    });
                    var snapTop = bottomSnaps[index][0] - ev.target.getBoundingRect().height + snapTopAdjust;
                    canvas.add(hLine);
                    hLine.moveTo(9998);
                    canvas.add(hLine2);
                    hLine2.moveTo(9999);
                }
            }
            for (index = 0; index < leftSnaps.length; index++) {
                var leftSnapCalc = Math.abs(ev.target.getBoundingRect().left - leftSnaps[index][0]);
                if (leftSnapCalc <= snapRange) {
                    var vLine = new fabric.Line([leftSnaps[index][0], leftSnaps[index][1].yStart, leftSnaps[index][0], leftSnaps[index][1].yEnd], {
                        stroke: 'rgba(255,255,255,0.6)',
                        selectable: false
                    });
                    var vLine2 = new fabric.Line([leftSnaps[index][0], leftSnaps[index][1].yStart, leftSnaps[index][0], leftSnaps[index][1].yEnd], {
                        stroke: 'rgba(41,99,158,0.6)',
                        strokeDashArray: [5, 5],
                        selectable: false
                    });
                    var snapLeft = leftSnaps[index][0] + snapLeftAdjust;
                    canvas.add(vLine);
                    vLine.moveTo(9998);
                    canvas.add(vLine2);
                    vLine2.moveTo(9999);
                }
            }
            for (index = 0; index < rightSnaps.length; index++) {
                var rightSnapCalc = Math.abs(ev.target.getBoundingRect().left + ev.target.getBoundingRect().width - rightSnaps[index][0]);
                var lineAdj = 0;
                if (rightSnapCalc <= snapRange) {
                    if (rightSnaps[index][0] == canvas.width) {
                        lineAdj = 1;
                    }
                    var vLine = new fabric.Line([rightSnaps[index][0] - lineAdj, rightSnaps[index][1].yStart, rightSnaps[index][0] - lineAdj, rightSnaps[index][1].yEnd], {
                        stroke: 'rgba(255,255,255,0.6)',
                        selectable: false
                    });
                    var vLine2 = new fabric.Line([rightSnaps[index][0] - lineAdj, rightSnaps[index][1].yStart, rightSnaps[index][0] - lineAdj, rightSnaps[index][1].yEnd], {
                        stroke: 'rgba(41,99,158,0.6)',
                        strokeDashArray: [5, 5],
                        selectable: false
                    });
                    var snapLeft = rightSnaps[index][0] - ev.target.getBoundingRect().width + snapLeftAdjust;
                    canvas.add(vLine);
                    vLine.moveTo(9998);
                    canvas.add(vLine2);
                    vLine2.moveTo(9999);
                }
            }
            ev.target.set({
                top: snapTop,
                left: snapLeft
            });
            ev.target.setCoords();
            iii = iii + 1;
        });
        canvas.on('object:modified', function (ev) {
            ev.target.setCoords();
            canvas.renderAll();
            canvas.calcOffset();
            iii = 1;
        });
        canvas.on('mouse:up', function (ev) {
            var objects = canvas.getObjects('line');
            for (var i = 0; i < objects.length; i++) {
                var checkSelectable = objects[i].get('selectable');
                if (checkSelectable == false) {
                    canvas.remove(objects[i]);
                }
            }
            canvas.renderAll();
        });
        $('#move-layer-back').on('click', function () {
            if (canvas.getActiveObject()) {
                var selectedLayer = canvas.getActiveObject();
                selectedLayer.sendBackwards();
                canvas.renderAll();
                canvas.calcOffset();
            }
        });
        $('#move-layer-forward').on('click', function () {
            if (canvas.getActiveObject()) {
                var selectedLayer = canvas.getActiveObject();
                selectedLayer.bringForward();
                canvas.renderAll();
                canvas.calcOffset();
            }
        });
        $('#delete-layer-btn').on('click', function () {
            if (canvas.getActiveObject()) {
                var selectedLayer = canvas.getActiveObject();
                selectedLayer.remove();
                canvas.deactivateAll().renderAll();
                clearSelection();
            }
        });
        var copiedObject;
        var copiedObjects = new Array();
        document.addEventListener("keydown", function (e) {
            if (e.keyCode == 67 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                if (canvas.getActiveObject() && !$(e.target).is("input, textarea")) {
                    if ((canvas.getActiveObject().type == 'textbox' && canvas.getActiveObject().isEditing == false) || canvas.getActiveObject().type != 'textbox') {
                        e.preventDefault();
                        for (i = 0; i < 1; i++) {
                            copyLayer();
                        }
                    }
                }
            }
        }, false);
        document.addEventListener("keydown", function (e) {
            if (e.keyCode == 86 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                if (canvas.getActiveObject() && !$(e.target).is("input, textarea")) {
                    if ((canvas.getActiveObject().type == 'textbox' && canvas.getActiveObject().isEditing == false) || canvas.getActiveObject().type != 'textbox') {
                        e.preventDefault();
                        for (i = 0; i < 1; i++) {
                            pasteLayer();
                        }
                    }
                }
            }
        }, false);

        function copyLayer() {
            if (canvas.getActiveGroup()) {
                for (var i in canvas.getActiveGroup().objects) {
                    var object = fabric.util.object.clone(canvas.getActiveGroup().objects[i]);
                    object.set("top", object.top + 15);
                    object.set("left", object.left + 15);
                    copiedObjects[i] = object;
                }
            } else if (canvas.getActiveObject()) {
                if (fabric.util.getKlass(canvas.getActiveObject().type).async) {
                    canvas.getActiveObject().clone(function (object) {
                        object.set({
                            borderOpacityWhenMoving: 0.5,
                            transparentCorners: true,
                            cornerSize: cornerSizeValue,
                            hasControls: 1,
                            hasRotatingPoint: 1,
                            centeredRotation: true,
                            lockUniScaling: true,
                            lockScalingFlip: true,
                            opacity: canvas.getActiveObject().getOpacity(),
                            top: object.top + 15,
                            left: object.left + 15
                        });
                        copiedObject = object;
                        copiedObjects = new Array();
                    });
                } else if (canvas.getActiveObject().type == 'textbox') {
                    var textObject = canvas.getActiveObject();
                    console.log(textObject.getTextDecoration());
                    var object = new fabric.Textbox(textObject.getText(), {
                        lineHeight: textObject.getLineHeight(),
                        fill: textObject.getFill(),
                        cursorColor: '#333333',
                        cursorDelay: 800,
                        cursorDuration: 300,
                        fontWeight: textObject.getFontWeight(),
                        fontSize: textObject.getFontSize(),
                        fontFamily: textObject.getFontFamily(),
                        fontStyle: textObject.getFontStyle(),
                        textDecoration: textObject.getTextDecoration(),
                        borderOpacityWhenMoving: 0.5,
                        transparentCorners: true,
                        cornerSize: cornerSizeValue,
                        hasControls: 1,
                        hasRotatingPoint: 1,
                        centeredRotation: true,
                        lockUniScaling: true,
                        lockScalingFlip: true,
                        opacity: canvas.getActiveObject().getOpacity(),
                        width: textObject.getWidth(),
                        textAlign: textObject.getTextAlign(),
                        top: textObject.top + 15,
                        left: textObject.left + 15
                    });
                    copiedObject = object;
                    copiedObjects = new Array();
                } else if (canvas.getActiveObject().type == 'polygon') {
                    var activeLayer = canvas.getActiveObject();
                    var pointsArray = [];
                    for (var j = 0; j < activeLayer.points.length; j++) {
                        var xx = activeLayer.points[j]['x'];
                        var yy = activeLayer.points[j]['y'];
                        pointsArray.push({
                            x: xx,
                            y: yy
                        });
                    }
                    var object = new fabric.Polygon(pointsArray, {
                        borderOpacityWhenMoving: 0.5,
                        transparentCorners: true,
                        cornerSize: cornerSizeValue,
                        hasControls: 1,
                        hasRotatingPoint: 1,
                        centeredRotation: true,
                        lockUniScaling: true,
                        lockScalingFlip: true,
                        opacity: activeLayer.getOpacity(),
                        top: activeLayer.top + 15,
                        left: activeLayer.left + 15,
                        fill: activeLayer.getFill(),
                        strokeWidth: activeLayer.getStrokeWidth(),
                        stroke: activeLayer.getStroke(),
                        strokeDashArray: activeLayer.get('strokeDashArray')
                    });
                    copiedObject = object;
                    copiedObjects = new Array();
                } else {
                    var object = fabric.util.object.clone(canvas.getActiveObject());
                    object.set("top", object.top + 15);
                    object.set("left", object.left + 15);
                    copiedObject = object;
                    copiedObjects = new Array();
                }
            }
        }

        function pasteLayer() {
            if (copiedObjects.length > 0) {
                for (var i in copiedObjects) {
                    canvas.add(copiedObjects[i]);
                    canvas.setActiveObject(copiedObjects[i]);
                }
            } else if (copiedObject) {
                canvas.add(copiedObject);
                canvas.setActiveObject(copiedObject);
            }
            canvas.renderAll();
        }

        $('#create-text-layer').on('click', function (event) {
            event.stopPropagation();
            $('#main-tabs > .tab-pane').removeClass('active');
            $('#tab-titles .tab-header').removeClass('active');
            $('#tab-titles .tab-header*[data-header="tab-font-options"]').addClass('active');
            $('#object-options').addClass('active');
            $('.object-pane.shape-object').hide();
            $('.object-pane.line-object').hide();
            $('.object-pane.graphic-object').hide();
            $('.object-pane.text-object').show();
            var text = new fabric.Textbox('Text', {
                lineHeight: 1,
                fill: '#454545',
                cursorColor: '#333333',
                cursorDelay: 800,
                cursorDuration: 300,
                fontWeight: '400',
                fontSize: 40,
                fontFamily: 'Open Sans',
                borderOpacityWhenMoving: 0.5,
                transparentCorners: true,
                cornerSize: cornerSizeValue,
                hasControls: 1,
                hasRotatingPoint: 1,
                centeredRotation: true,
                lockUniScaling: true,
                lockScalingFlip: true,
                opacity: 0,
                width: canvas.width / 3,
                textAlign: 'center'
            });
            canvas.add(text);
            text.centerH();
            text.animate('opacity', 1, {
                duration: 300,
                onChange: canvas.renderAll.bind(canvas),
                easing: fabric.util.ease.easeOutQuad
            });
            text.animate('top', (canvas.height / 2) - (text.getHeight() / 2), {
                duration: 300,
                onChange: canvas.renderAll.bind(canvas),
                onComplete: function () {
                    text.setCoords();
                    canvas.setActiveObject(text);
                    canvas.renderAll();
                    canvas.calcOffset();
                },
                easing: fabric.util.ease.easeOutQuad
            });
        });
        var selectedFontFam;
        var selectedFontWeight;
        var selectedFontStyle;
        var selectedFontLayer;
        var newFont;
        $(".font-family").change(function () {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var textLayer = canvas.getActiveObject();
                if (layerType == 'i-text' || layerType == 'textbox') {
                    textLayer.setFontFamily($(this).val());
                    textLayer.setFontWeight('400');
                    textLayer.setFontStyle('normal');
                    $('.font-style .btn[data-font-style="bold"]').removeClass('active');
                    $('.font-style .btn[data-font-style="bold"]').addClass('disabled');
                    $('.font-style .btn[data-font-style="italic"]').removeClass('active');
                    $('.font-style .btn[data-font-style="italic"]').addClass('disabled');
                    if (custom_fonts[$(this).val()]['700'] === true) {
                        $('.font-style .btn[data-font-style="bold"]').removeClass('disabled');
                    }
                    if (custom_fonts[$(this).val()]['400italic'] === true) {
                        $('.font-style .btn[data-font-style="italic"]').removeClass('disabled');
                    }
                    canvas.renderAll();
                    canvas.calcOffset();
                    $('.bootstrap-select.font-family .dropdown-toggle').css('font-family', $(this).val());
                }
            }
        });
        $('.font-family').on('show.bs.dropdown', function () {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var textLayer = canvas.getActiveObject();
                if (layerType == 'i-text' || layerType == 'textbox') {
                    selectedFontLayer = textLayer;
                    selectedFontFam = textLayer.getFontFamily();
                    selectedFontWeight = textLayer.getFontWeight();
                    selectedFontStyle = textLayer.getFontStyle();
                }
            }
        });
        $('.bootstrap-select.font-family li a').hover(function () {
            newFont = $(this).attr('data-normalized-text');
            newFont = $("<div/>").html(newFont).text();
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var textLayer = canvas.getActiveObject();
                if (layerType == 'i-text' || layerType == 'textbox') {
                    if (textLayer.getFontFamily() != newFont) {
                        textLayer.setFontFamily(newFont);
                        textLayer.setFontWeight('400');
                        textLayer.setFontStyle('normal');
                        canvas.renderAll();
                        canvas.calcOffset();
                    }
                }
            }
        });
        $('.font-family').on('hidden.bs.dropdown', function () {
            var checkFont = $('.font-family').val();
            if (newFont != checkFont) {
                selectedFontLayer.setFontFamily(checkFont);
                selectedFontLayer.setFontWeight(selectedFontWeight);
                selectedFontLayer.setFontStyle(selectedFontStyle);
                canvas.renderAll();
                canvas.calcOffset();
            }
            newFont = '';
        });

        function fontSizeChange(size) {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var textLayer = canvas.getActiveObject();
                if (layerType == 'i-text' || layerType == 'textbox') {
                    selectedFontFam = textLayer.setFontSize(size);
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
        }

        var timeoutId;
        var downTimer;
        $('.font-size-spinner .btn:first-of-type').mousedown(function () {
            if (parseInt($('.font-size-spinner input').val(), 10) < 999) {
                var newFontSize = parseInt($('.font-size-spinner input').val(), 10) + 1;
                $('.font-size-spinner input').val(newFontSize);
                fontSizeChange(newFontSize);
            }
            downTimer = setTimeout(function () {
                timeoutId = setInterval(function () {
                    if (parseInt($('.font-size-spinner input').val(), 10) < 999) {
                        var newFontSize = parseInt($('.font-size-spinner input').val(), 10) + 1;
                        $('.font-size-spinner input').val(newFontSize);
                        fontSizeChange(newFontSize);
                    }
                }, 100);
            }, 300);
            return false;
        }).bind('mouseup mouseleave', function () {
            clearTimeout(downTimer);
            clearInterval(timeoutId);
            return false;
        });
        $('.font-size-spinner .btn:last-of-type').mousedown(function () {
            if (parseInt($('.font-size-spinner input').val(), 10) > 1) {
                var newFontSize = parseInt($('.font-size-spinner input').val(), 10) - 1;
                $('.font-size-spinner input').val(newFontSize);
                fontSizeChange(newFontSize);
            }
            downTimer = setTimeout(function () {
                timeoutId = setInterval(function () {
                    if (parseInt($('.font-size-spinner input').val(), 10) > 1) {
                        var newFontSize = parseInt($('.font-size-spinner input').val(), 10) - 1;
                        $('.font-size-spinner input').val(newFontSize);
                        fontSizeChange(newFontSize);
                    }
                }, 100);
            }, 300);
            return false;
        }).bind('mouseup mouseleave', function () {
            clearTimeout(downTimer);
            clearTimeout(timeoutId);
            return false;
        });
        $('.font-size').change(function () {
            if (parseInt($('.font-size-spinner input').val(), 10) === 0) {
                $('.font-size-spinner input').val(1);
                fontSizeChange(1);
            } else {
                fontSizeChange(parseInt($('.font-size-spinner input').val(), 10));
            }
        });
        $('.font-style .btn').on('click', function () {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var textLayer = canvas.getActiveObject();
                if (layerType == 'i-text' || layerType == 'textbox') {
                    var fontAction = $(this).attr('data-font-style');
                    var fontFam = textLayer.getFontFamily();
                    var setFontWeight = textLayer.getFontWeight();
                    var setFontStyle = textLayer.getFontStyle();
                    if (fontAction == 'bold') {
                        if ($(this).hasClass('active')) {
                            $(this).removeClass('active');
                            setFontWeight = 400;
                        } else {
                            $(this).addClass('active');
                            setFontWeight = 700;
                        }
                    } else if (fontAction == 'italic') {
                        if ($(this).hasClass('active')) {
                            $(this).removeClass('active');
                            setFontStyle = 'normal';
                        } else {
                            $(this).addClass('active');
                            setFontStyle = 'italic';
                        }
                    } else if (fontAction == 'underline') {
                        if ($(this).hasClass('active')) {
                            $(this).removeClass('active');
                            textLayer.setTextDecoration('');
                        } else {
                            $(this).addClass('active');
                            $('.font-style .btn[data-font-style="strikethrough"]').removeClass('active');
                            textLayer.setTextDecoration('underline');
                        }
                    } else if (fontAction == 'strikethrough') {
                        if ($(this).hasClass('active')) {
                            $(this).removeClass('active');
                            textLayer.setTextDecoration('');
                        } else {
                            $(this).addClass('active');
                            $('.font-style .btn[data-font-style="underline"]').removeClass('active');
                            textLayer.setTextDecoration('line-through');
                        }
                    }
                    $('.font-style .btn[data-font-style="bold"]').removeClass('disabled');
                    $('.font-style .btn[data-font-style="italic"]').removeClass('disabled');
                    if (setFontWeight == 400) {
                        if (custom_fonts[fontFam]['400italic'] === false) {
                            $('.font-style .btn[data-font-style="italic"]').addClass('disabled');
                        }
                        if (custom_fonts[fontFam]['700'] === false) {
                            $('.font-style .btn[data-font-style="bold"]').addClass('disabled');
                        }
                    }
                    if (setFontWeight == 700) {
                        if (custom_fonts[fontFam]['700italic'] === false) {
                            $('.font-style .btn[data-font-style="italic"]').addClass('disabled');
                        }
                    }
                    if (setFontStyle == 'italic') {
                        if (custom_fonts[fontFam]['700italic'] === false) {
                            $('.font-style .btn[data-font-style="bold"]').addClass('disabled');
                        }
                    }
                    var checkFontLoad = new FontFaceObserver(fontFam, {
                        weight: setFontWeight,
                        style: setFontStyle
                    });
                    Promise.all([checkFontLoad.check()]).then(function () {
                        textLayer.setFontWeight(setFontWeight);
                        textLayer.setFontStyle(setFontStyle);
                        canvas.renderAll();
                        canvas.calcOffset();
                    });
                }
            }
        });
        $('.font-colorpicker').minicolors({
            defaultValue: '#454545',
            show: function () {
            },
            change: function (hex, rgb) {
                if (canvas.getActiveObject()) {
                    var layerType = canvas.getActiveObject().get('type');
                    var textLayer = canvas.getActiveObject();
                    if (layerType == 'i-text' || layerType == 'textbox') {
                        textLayer.setColor(hex);
                        canvas.renderAll();
                        canvas.calcOffset();
                    }
                }
            }
        });
        $('.text-align .btn').on('click', function () {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var textLayer = canvas.getActiveObject();
                if (layerType == 'i-text' || layerType == 'textbox') {
                    var fontAlign = $(this).attr('data-text-align');
                    $('.text-align .btn').removeClass('active');
                    if (!$(this).hasClass('active')) {
                        $(this).addClass('active');
                    }
                    textLayer.setTextAlign(fontAlign);
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
        });
        $('#textOpacity').slider({
            tooltip: 'hide'
        });
        $('#textOpacity').on('change', function (slideEvt) {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var textLayer = canvas.getActiveObject();
                if (layerType == 'i-text' || layerType == 'textbox') {
                    textLayer.setOpacity(slideEvt.value.newValue / 100);
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
            $(".text-opacity-value").text(slideEvt.value.newValue);
        });
        $('#graph-search').submit(function (event) {
            event.preventDefault();
            var searchVal = $.trim($('#graphic-search-terms').val());
            loadingGraphix = true;
            $('.load-more-graphics .loader-icon').show();
            $('.graphic-grid .svg-graphic').remove();
            $('.graphic-grid .no-more').remove();
            searchVal = searchVal.replace(/\s+/g, "+");
            $.get('/search-graphics/' + searchVal, function (data) {
                $('.load-more-graphics').remove();
                $(data).appendTo('.graphic-grid');
                loadingGraphix = false;
            });
            return false;
        });
        $('.graphic-grid').on('click', '.load-icon', function () {
            var svgURL = 'https://snappa-assets.s3.amazonaws.com/graphics/' + $(this).data('graphic') + '.svg';
            loadSVG(svgURL);
        });

        function loadSVG(url) {
            fabric.loadSVGFromURL(url, function (objects, options) {
                var singleColor = true;
                var objecti = 0;
                var objectDataArray = new Array();
                objects.forEach(function (data) {
                    if (singleColor == true) {
                        objectDataArray[objecti] = data['fill'];
                        if (objecti > 0) {
                            if (objectDataArray[objecti] != objectDataArray[objecti - 1]) {
                                singleColor = false;
                            }
                        }
                    }
                    objecti++;
                });
                var objectFill = '';
                if (singleColor == true) {
                    objectFill = objectDataArray[0]
                }
                var svgLayer = fabric.util.groupSVGElements(objects, options);
                if (canvas.height >= canvas.width) {
                    var cLength = canvas.width;
                    var oLength = svgLayer.width;
                } else {
                    var cLength = canvas.height;
                    var oLength = svgLayer.height;
                }
                var SVGscale = (cLength / oLength) / 5;
                svgLayer.set({
                    fill: objectFill,
                    borderOpacityWhenMoving: 0.5,
                    transparentCorners: true,
                    cornerSize: cornerSizeValue,
                    hasControls: 1,
                    hasRotatingPoint: 1,
                    centeredRotation: true,
                    lockUniScaling: true,
                    lockScalingFlip: true,
                    scaleY: SVGscale,
                    scaleX: SVGscale,
                    opacity: 0
                });
                canvas.add(svgLayer);
                svgLayer.centerH();
                svgLayer.animate('opacity', 1, {
                    duration: 300,
                    onChange: canvas.renderAll.bind(canvas),
                    easing: fabric.util.ease.easeOutQuad
                });
                svgLayer.animate('top', (canvas.height / 2) - (svgLayer.getHeight() / 2), {
                    duration: 300,
                    onChange: canvas.renderAll.bind(canvas),
                    onComplete: function () {
                        svgLayer.setCoords();
                        canvas.renderAll();
                        canvas.calcOffset();
                    },
                    easing: fabric.util.ease.easeOutQuad
                });
            });
        }

        $('.graphic-uploads').on('click', '.upload-thumb', function () {
            var graphicID = $(this).data('item');
            var graphicType = $(this).data('img-type');
            fabric.Image.fromURL('https://snappa-user-uploads.s3.amazonaws.com/' + graphicID + '.' + graphicType, function (oImg) {
                var SVGscale = 1;
                if (oImg.height > canvas.height || oImg.width > canvas.width) {
                    if (canvas.height >= canvas.width) {
                        var cLength = canvas.width;
                        var oLength = oImg.width;
                    } else {
                        var cLength = canvas.height;
                        var oLength = oImg.height;
                    }
                    var SVGscale = (cLength / oLength) * 0.8;
                }
                oImg.scale(1.0).set({
                    borderOpacityWhenMoving: 0.5,
                    transparentCorners: true,
                    cornerSize: cornerSizeValue,
                    hasControls: 1,
                    hasRotatingPoint: 1,
                    centeredRotation: true,
                    lockUniScaling: true,
                    lockScalingFlip: true,
                    scaleY: SVGscale,
                    scaleX: SVGscale,
                    opacity: 0
                });
                canvas.add(oImg);
                canvas.renderAll();
                oImg.centerH();
                oImg.animate('opacity', 1, {
                    duration: 300,
                    onChange: canvas.renderAll.bind(canvas),
                    easing: fabric.util.ease.easeOutQuad
                });
                oImg.animate('top', (canvas.height / 2) - (oImg.getHeight() / 2), {
                    duration: 300,
                    onChange: canvas.renderAll.bind(canvas),
                    onComplete: function () {
                        oImg.setCoords();
                        canvas.setActiveObject(oImg);
                        canvas.renderAll();
                        canvas.calcOffset();
                    },
                    easing: fabric.util.ease.easeOutQuad
                });
            }, {
                crossOrigin: 'anonymous'
            });
        });
        $('#graphicOpacity').slider({
            tooltip: 'hide'
        });
        $('#graphicOpacity').on('change', function (slideEvt) {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var graphicLayer = canvas.getActiveObject();
                if (layerType == 'path-group' || layerType == 'image') {
                    graphicLayer.setOpacity(slideEvt.value.newValue / 100);
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
            $(".graphic-opacity-value").text(slideEvt.value.newValue);
        });
        $('.graphic-colorpicker').minicolors({
            defaultValue: '#454545',
            show: function () {
            },
            change: function (hex, rgb) {
                if (canvas.getActiveObject()) {
                    var layerType = canvas.getActiveObject().get('type');
                    var graphicLayer = canvas.getActiveObject();
                    if (layerType == 'path-group' && graphicLayer.isSameColor()) {
                        graphicLayer.setColor(hex);
                        canvas.renderAll();
                        canvas.calcOffset();
                    }
                }
            }
        });
        $('.shape-fill-type').change(function () {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var shapeLayer = canvas.getActiveObject();
                if (layerType == 'rect' || layerType == 'triangle' || layerType == 'circle' || layerType == 'polygon') {
                    if ($(this).val() == 'nofill') {
                        $('.shape-colorpicker').attr('disabled', 'disabled');
                        shapeLayer.setFill('rgba(0,0,0,0)');
                        if (shapeLayer.getStrokeWidth() == 0) {
                            shapeLayer.setStroke('rgba(0,0,0,0.2)');
                            shapeLayer.set({
                                'strokeDashArray': null
                            });
                            shapeLayer.setStrokeWidth(1);
                            shapeLayer.setOpacity(1);
                            $('#shapeOpacity').slider('disable');
                        }
                    } else if ($(this).val() == 'solid') {
                        $('.shape-colorpicker').removeAttr('disabled');
                        shapeLayer.setFill($('.shape-colorpicker').minicolors('value'));
                        if (shapeLayer.getStroke == 'rgba(0,0,0,0.2)') {
                            shapeLayer.setStroke($('.shape-border-colorpicker').minicolors('value'));
                            shapeLayer.setStrokeWidth(0);
                        }
                        $('#shapeOpacity').slider('enable');
                    }
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
        });
        $('#shapeOpacity').slider({
            tooltip: 'hide'
        });
        $('#shapeOpacity').on('change', function (slideEvt) {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var graphicLayer = canvas.getActiveObject();
                if (layerType == 'rect' || layerType == 'triangle' || layerType == 'circle' || layerType == 'polygon') {
                    graphicLayer.setOpacity(slideEvt.value.newValue / 100);
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
            $(".shape-opacity-value").text(slideEvt.value.newValue);
        });
        $('.shape-colorpicker').minicolors({
            defaultValue: '#454545',
            show: function () {
            },
            change: function (hex, rgb) {
                if (canvas.getActiveObject()) {
                    var layerType = canvas.getActiveObject().get('type');
                    var shapeLayer = canvas.getActiveObject();
                    if (layerType == 'rect' || layerType == 'triangle' || layerType == 'circle' || layerType == 'polygon') {
                        shapeLayer.setFill(hex);
                        canvas.renderAll();
                        canvas.calcOffset();
                    }
                }
            }
        });
        $('.shape-border-type').change(function () {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var shapeLayer = canvas.getActiveObject();
                if (layerType == 'rect' || layerType == 'triangle' || layerType == 'circle' || layerType == 'polygon') {
                    if ($(this).val() == 'noborder') {
                        shapeLayer.setStrokeWidth(0);
                        $('.shape-border-colorpicker').attr('disabled', 'disabled');
                        $('.shape-border-size').attr('disabled', 'disabled');
                        $('.shape-border-spinner button').attr('disabled', 'disabled');
                        if (shapeLayer.getFill() == 'rgba(0,0,0,0)' || shapeLayer.getFill() == 'transparent') {
                            shapeLayer.set({
                                'strokeDashArray': null
                            });
                            shapeLayer.setStroke('rgba(0,0,0,0.2)');
                            shapeLayer.setStrokeWidth(1);
                            shapeLayer.setOpacity(1);
                            $('#shapeOpacity').slider('disable');
                        }
                    } else if ($(this).val() == 'solid') {
                        shapeLayer.setStrokeWidth(parseInt($('.shape-border-size').val()));
                        shapeLayer.setStroke($('.shape-border-colorpicker').minicolors('value'));
                        shapeLayer.set({
                            'strokeDashArray': null
                        });
                        $('.shape-border-colorpicker').removeAttr('disabled');
                        $('.shape-border-size').removeAttr('disabled');
                        $('.shape-border-spinner button').removeAttr('disabled');
                        $('#shapeOpacity').slider('enable');
                    } else if ($(this).val() == 'dashed') {
                        shapeLayer.setStrokeWidth(parseInt($('.shape-border-size').val()));
                        shapeLayer.setStroke($('.shape-border-colorpicker').minicolors('value'));
                        $('.shape-border-colorpicker').removeAttr('disabled');
                        $('.shape-border-size').removeAttr('disabled');
                        $('.shape-border-spinner button').removeAttr('disabled');
                        $('#shapeOpacity').slider('enable');
                        shapeLayer.set({
                            'strokeDashArray': [10, 10]
                        });
                    }
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
        });
        $('.shape-border-colorpicker').minicolors({
            defaultValue: '#454545',
            show: function () {
            },
            change: function (hex, rgb) {
                if (canvas.getActiveObject()) {
                    var layerType = canvas.getActiveObject().get('type');
                    var shapeLayer = canvas.getActiveObject();
                    if (layerType == 'rect' || layerType == 'triangle' || layerType == 'circle' || layerType == 'polygon') {
                        shapeLayer.setStroke(hex);
                        canvas.renderAll();
                        canvas.calcOffset();
                    }
                }
            }
        });

        function shapeBorderChange(size) {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var shapeLayer = canvas.getActiveObject();
                if (layerType == 'rect' || layerType == 'triangle' || layerType == 'circle' || layerType == 'polygon') {
                    shapeLayer.setStrokeWidth(size);
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
        }

        $('.shape-border-spinner .btn:first-of-type').mousedown(function () {
            if (parseInt($('.shape-border-spinner input').val(), 10) < 999) {
                var newShapeBorderSize = parseInt($('.shape-border-spinner input').val(), 10) + 1;
                $('.shape-border-spinner input').val(newShapeBorderSize);
                shapeBorderChange(newShapeBorderSize);
            }
            downTimer = setTimeout(function () {
                timeoutId = setInterval(function () {
                    if (parseInt($('.shape-border-spinner input').val(), 10) < 999) {
                        var newShapeBorderSize = parseInt($('.shape-border-spinner input').val(), 10) + 1;
                        $('.shape-border-spinner input').val(newShapeBorderSize);
                        shapeBorderChange(newShapeBorderSize);
                    }
                }, 100);
            }, 300);
            return false;
        }).bind('mouseup mouseleave', function () {
            clearTimeout(downTimer);
            clearInterval(timeoutId);
            return false;
        });
        $('.shape-border-spinner .btn:last-of-type').mousedown(function () {
            if (parseInt($('.shape-border-spinner input').val(), 10) > 1) {
                var newShapeBorderSize = parseInt($('.shape-border-spinner input').val(), 10) - 1;
                $('.shape-border-spinner input').val(newShapeBorderSize);
                shapeBorderChange(newShapeBorderSize);
            }
            downTimer = setTimeout(function () {
                timeoutId = setInterval(function () {
                    if (parseInt($('.shape-border-spinner input').val(), 10) > 1) {
                        var newShapeBorderSize = parseInt($('.shape-border-spinner input').val(), 10) - 1;
                        $('.shape-border-spinner input').val(newShapeBorderSize);
                        shapeBorderChange(newShapeBorderSize);
                    }
                }, 100);
            }, 300);
            return false;
        }).bind('mouseup mouseleave', function () {
            clearTimeout(downTimer);
            clearTimeout(timeoutId);
            return false;
        });
        $('.shape-border-size').change(function () {
            if (parseInt($('.shape-border-spinner input').val(), 10) === 0) {
                $('.shape-border-spinner input').val(1);
                shapeBorderChange(1);
            } else {
                shapeBorderChange(parseInt($('.shape-border-spinner input').val(), 10));
            }
        });

        function shapeBorderRadiusChange(size) {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var shapeLayer = canvas.getActiveObject();
                if (layerType == 'rect') {
                    shapeLayer.set({
                        'rx': size,
                        'ry': size
                    });
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
        }

        $('.shape-radius-spinner .btn:first-of-type').mousedown(function () {
            if (parseInt($('.shape-radius-spinner input').val(), 10) < 999) {
                var newShapeBorderRadius = parseInt($('.shape-radius-spinner input').val(), 10) + 1;
                $('.shape-radius-spinner input').val(newShapeBorderRadius);
                shapeBorderRadiusChange(newShapeBorderRadius);
            }
            downTimer = setTimeout(function () {
                timeoutId = setInterval(function () {
                    if (parseInt($('.shape-radius-spinner input').val(), 10) < 999) {
                        var newShapeBorderRadius = parseInt($('.shape-radius-spinner input').val(), 10) + 1;
                        $('.shape-radius-spinner input').val(newShapeBorderRadius);
                        shapeBorderRadiusChange(newShapeBorderRadius);
                    }
                }, 100);
            }, 300);
            return false;
        }).bind('mouseup mouseleave', function () {
            clearTimeout(downTimer);
            clearInterval(timeoutId);
            return false;
        });
        $('.shape-radius-spinner .btn:last-of-type').mousedown(function () {
            if (parseInt($('.shape-radius-spinner input').val(), 10) > 0) {
                var newShapeBorderRadius = parseInt($('.shape-radius-spinner input').val(), 10) - 1;
                $('.shape-radius-spinner input').val(newShapeBorderRadius);
                shapeBorderRadiusChange(newShapeBorderRadius);
            }
            downTimer = setTimeout(function () {
                timeoutId = setInterval(function () {
                    if (parseInt($('.shape-radius-spinner input').val(), 10) > 0) {
                        var newShapeBorderRadius = parseInt($('.shape-radius-spinner input').val(), 10) - 1;
                        $('.shape-radius-spinner input').val(newShapeBorderRadius);
                        shapeBorderRadiusChange(newShapeBorderRadius);
                    }
                }, 100);
            }, 300);
            return false;
        }).bind('mouseup mouseleave', function () {
            clearTimeout(downTimer);
            clearTimeout(timeoutId);
            return false;
        });
        $('.border-radius-size').change(function () {
            if (parseInt($('.shape-radius-spinner input').val(), 10) < 0) {
                $('.shape-radius-spinner input').val(0);
                shapeBorderRadiusChange(0);
            } else {
                shapeBorderRadiusChange(parseInt($('.shape-radius-spinner input').val(), 10));
            }
        });
        $('.line-type').change(function () {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var shapeLayer = canvas.getActiveObject();
                if (layerType == 'line') {
                    if ($(this).val() == 'solid') {
                        shapeLayer.set({
                            'strokeDashArray': null
                        });
                    } else if ($(this).val() == 'dashed') {
                        shapeLayer.set({
                            'strokeDashArray': [10, 10]
                        });
                    }
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
        });
        $('#lineOpacity').slider({
            tooltip: 'hide'
        });
        $('#lineOpacity').on('change', function (slideEvt) {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var graphicLayer = canvas.getActiveObject();
                if (layerType == 'line') {
                    graphicLayer.setOpacity(slideEvt.value.newValue / 100);
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
            $(".line-opacity-value").text(slideEvt.value.newValue);
        });
        $('.line-colorpicker').minicolors({
            defaultValue: '#454545',
            show: function () {
            },
            change: function (hex, rgb) {
                if (canvas.getActiveObject()) {
                    var layerType = canvas.getActiveObject().get('type');
                    var shapeLayer = canvas.getActiveObject();
                    if (layerType == 'line') {
                        shapeLayer.setStroke(hex);
                        canvas.renderAll();
                        canvas.calcOffset();
                    }
                }
            }
        });

        function lineSizeChange(size) {
            if (canvas.getActiveObject()) {
                var layerType = canvas.getActiveObject().get('type');
                var shapeLayer = canvas.getActiveObject();
                if (layerType == 'line') {
                    shapeLayer.setStrokeWidth(size);
                    canvas.renderAll();
                    canvas.calcOffset();
                }
            }
        }

        $('.line-size-spinner .btn:first-of-type').mousedown(function () {
            if (parseInt($('.line-size-spinner input').val(), 10) < 999) {
                var newLineSize = parseInt($('.line-size-spinner input').val(), 10) + 1;
                $('.line-size-spinner input').val(newLineSize);
                lineSizeChange(newLineSize);
            }
            downTimer = setTimeout(function () {
                timeoutId = setInterval(function () {
                    if (parseInt($('.line-size-spinner input').val(), 10) < 999) {
                        var newLineSize = parseInt($('.line-size-spinner input').val(), 10) + 1;
                        $('.line-size-spinner input').val(newLineSize);
                        lineSizeChange(newLineSize);
                    }
                }, 100);
            }, 300);
            return false;
        }).bind('mouseup mouseleave', function () {
            clearTimeout(downTimer);
            clearInterval(timeoutId);
            return false;
        });
        $('.line-size-spinner .btn:last-of-type').mousedown(function () {
            if (parseInt($('.line-size-spinner input').val(), 10) > 1) {
                var newLineSize = parseInt($('.line-size-spinner input').val(), 10) - 1;
                $('.line-size-spinner input').val(newLineSize);
                lineSizeChange(newLineSize);
            }
            downTimer = setTimeout(function () {
                timeoutId = setInterval(function () {
                    if (parseInt($('.line-size-spinner input').val(), 10) > 1) {
                        var newLineSize = parseInt($('.line-size-spinner input').val(), 10) - 1;
                        $('.line-size-spinner input').val(newLineSize);
                        lineSizeChange(newLineSize);
                    }
                }, 100);
            }, 300);
            return false;
        }).bind('mouseup mouseleave', function () {
            clearTimeout(downTimer);
            clearTimeout(timeoutId);
            return false;
        });
        $('.line-size').change(function () {
            if (parseInt($('.line-size-spinner input').val(), 10) === 0) {
                $('.line-size-spinner input').val(1);
                lineSizeChange(1);
            } else {
                lineSizeChange(parseInt($('.line-size-spinner input').val(), 10));
            }
        });

        function animateToCanvas(element) {
            element.centerH();
            element.animate('opacity', 1, {
                duration: 300,
                onChange: canvas.renderAll.bind(canvas),
                easing: fabric.util.ease.easeOutQuad
            });
            element.animate('top', (canvas.height / 2) - (element.getHeight() / 2), {
                duration: 300,
                onChange: canvas.renderAll.bind(canvas),
                onComplete: function () {
                    element.setCoords();
                    canvas.setActiveObject(element);
                    canvas.renderAll();
                    canvas.calcOffset();
                },
                easing: fabric.util.ease.easeOutQuad
            });
        }

        $('.add-shape').on('click', function (e) {
            var shapeType = $(this).attr('data-shape-type');
            var shapeOutline = $(this).attr('data-shape-outline');
            var shapeColor = '#454545';
            var shapeStroke = 0;
            var shapeStrokeColor = '#454545';
            if (shapeOutline == 1) {
                shapeStroke = 4;
                shapeColor = 'rgba(0,0,0,0)';
            }
            if (shapeType == 'square' || shapeType == 'square-rounded' || shapeType == 'rectangle' || shapeType == 'rectangle-rounded') {
                var borderRadius = 0;
                var rectHeight = 150;
                var rectWidth = 150;
                if (shapeType == 'square') {
                } else if (shapeType == 'square-rounded') {
                    borderRadius = 30;
                } else if (shapeType == 'rectangle') {
                    rectHeight = 105;
                    rectWidth = 200;
                } else if (shapeType == 'rectangle-rounded') {
                    borderRadius = 30
                    rectHeight = 105;
                    rectWidth = 200;
                }
                var shape = new fabric.Rect({
                    borderOpacityWhenMoving: 0.5,
                    transparentCorners: true,
                    cornerSize: cornerSizeValue,
                    hasControls: 1,
                    hasRotatingPoint: 1,
                    centeredRotation: true,
                    lockScalingFlip: true,
                    opacity: 0,
                    width: rectWidth,
                    height: rectHeight,
                    fill: shapeColor,
                    strokeWidth: shapeStroke,
                    stroke: shapeStrokeColor,
                    rx: borderRadius,
                    ry: borderRadius
                });
                canvas.add(shape);
                canvas.renderAll();
                animateToCanvas(shape);
            } else if (shapeType == 'circle') {
                var shape = new fabric.Circle({
                    borderOpacityWhenMoving: 0.5,
                    transparentCorners: true,
                    cornerSize: cornerSizeValue,
                    hasControls: 1,
                    hasRotatingPoint: 1,
                    centeredRotation: true,
                    lockUniScaling: true,
                    lockScalingFlip: true,
                    opacity: 0,
                    radius: 150,
                    fill: shapeColor,
                    strokeWidth: shapeStroke,
                    stroke: shapeStrokeColor
                });
                canvas.add(shape);
                canvas.renderAll();
                animateToCanvas(shape);
            } else if (shapeType == 'triangle') {
                var shape = new fabric.Triangle({
                    borderOpacityWhenMoving: 0.5,
                    transparentCorners: true,
                    cornerSize: cornerSizeValue,
                    hasControls: 1,
                    hasRotatingPoint: 1,
                    centeredRotation: true,
                    lockUniScaling: true,
                    lockScalingFlip: true,
                    opacity: 0,
                    width: 150,
                    height: 130,
                    fill: shapeColor,
                    strokeWidth: shapeStroke,
                    stroke: shapeStrokeColor
                });
                canvas.add(shape);
                canvas.renderAll();
                animateToCanvas(shape);
            } else if (shapeType == 'triangle-iso') {
                var points = rightTriangle(150);
                var shape = new fabric.Polygon(points, {
                    borderOpacityWhenMoving: 0.5,
                    transparentCorners: true,
                    cornerSize: cornerSizeValue,
                    hasControls: 1,
                    hasRotatingPoint: 1,
                    centeredRotation: true,
                    lockUniScaling: true,
                    lockScalingFlip: true,
                    opacity: 0,
                    fill: shapeColor,
                    strokeWidth: shapeStroke,
                    stroke: shapeStrokeColor
                });
                canvas.add(shape);
                canvas.renderAll();
                animateToCanvas(shape);
            } else if (shapeType == 'pentagon' || shapeType == 'hexagon' || shapeType == 'octagon' || shapeType == 'star') {
                if (shapeType == 'pentagon') {
                    var points = drawShape(5, 80, 80, 0);
                } else if (shapeType == 'hexagon') {
                    var points = drawShape(6, 80, 80, -Math.PI / 2);
                } else if (shapeType == 'octagon') {
                    var points = drawShape(8, 80, 80, -Math.PI / 8);
                } else if (shapeType == 'star') {
                    var points = drawShape(5, 80, 30, 0);
                }
                var shape = new fabric.Polygon(points, {
                    borderOpacityWhenMoving: 0.5,
                    transparentCorners: true,
                    cornerSize: cornerSizeValue,
                    hasControls: 1,
                    hasRotatingPoint: 1,
                    centeredRotation: true,
                    lockUniScaling: true,
                    lockScalingFlip: true,
                    opacity: 0,
                    fill: shapeColor,
                    strokeWidth: shapeStroke,
                    stroke: shapeStrokeColor
                });
                canvas.add(shape);
                canvas.renderAll();
                animateToCanvas(shape);
            } else if (shapeType == 'line') {
                var shape = new fabric.Line([0, 0, 200, 0], {
                    borderOpacityWhenMoving: 0.5,
                    transparentCorners: true,
                    cornerSize: cornerSizeValue,
                    hasControls: 1,
                    hasRotatingPoint: 1,
                    centeredRotation: true,
                    lockScalingFlip: true,
                    opacity: 0,
                    stroke: shapeStrokeColor,
                    strokeWidth: 6
                });
                canvas.add(shape);
                shape.setControlsVisibility({
                    bl: false,
                    tl: false,
                    tr: false,
                    br: false,
                    mt: false,
                    mb: false
                });
                canvas.renderAll();
                animateToCanvas(shape);
            }
        });

        function rightTriangle(size) {
            var points = 3;
            var alpha0 = 0;
            var pointsArray = [];
            pointsArray.push({
                x: 0,
                y: 0
            });
            pointsArray.push({
                x: 0,
                y: -size
            });
            pointsArray.push({
                x: size,
                y: 0
            });
            return (pointsArray);
        }

        function drawShape(points, radius1, radius2, alpha0) {
            var i, angle, radius;
            var pointsArray = [];
            if (radius2 !== radius1) {
                points = 2 * points;
            }
            for (i = 0; i <= points; i++) {
                angle = i * 2 * Math.PI / points - Math.PI / 2 + alpha0;
                radius = i % 2 === 0 ? radius1 : radius2;
                var xx = radius * Math.cos(angle);
                var yy = radius * Math.sin(angle);
                pointsArray.push({
                    x: xx,
                    y: yy
                });
            }
            return (pointsArray);
        }

        if (webGL === false) {
        } else {
            var bgPhoto = fx.canvas();
        }
        var bgLayer = false;
        var bgAction = true;
        var bgPhotoLoaded = false;
        var bgPhotoTexture = false;
        var bgPhotoSrc;
        var bgColor = '#ffffff';
        var flatBgPhoto = document.getElementById('flatBgPhoto');
        var flatBgPhotoCtx = flatBgPhoto.getContext('2d');
        $('.bgpicker').minicolors({
            defaultValue: '#ffffff',
            show: function () {
            },
            change: function (hex, rgb) {
                bgColor = hex;
                bgColorCtx.fillStyle = hex;
                bgColorCtx.fillRect(0, 0, canvas.width, canvas.height);
            }
        });
        $('#photo-search').submit(function (event) {
            event.preventDefault();
            var searchVal = $.trim($('#photo-search-terms').val());
            loadingPhotos = true;
            $('.load-more-photos .loader-icon').show();
            $('.bg-photos img.bg-thumb').remove();
            $('.bg-photos div.bg-thumb').remove();
            $('.bg-photos .no-more').remove();
            searchVal = searchVal.replace(/\s+/g, "+");
            $.get('/search-photos/' + searchVal, function (data) {
                $('.load-more-photos').remove();
                $(data).appendTo(".bg-photos");
                loadingPhotos = false;
            });
            return false;
        });

        function loadBG(imgID, imgSRC, imgType, source) {
            if (bgAction === true) {
                bgAction = false;
                if (bgPhotoTexture !== false) {
                    bgPhotoTexture.destroy();
                    bgPhotoTexture = false;
                }
                if (imgID != 0) {
                    $('.canvas-loader').show();
                    var bgW = Math.ceil((canvas.width * 1));
                    var bgH = Math.ceil((canvas.height * 1));
                    $('.loaded-bg').html('');
                    $('.loaded-bg').image('/load-bg/' + source + '/' + imgID + '/' + bgW + '/' + bgH + '/' + imgType, function () {
                        $('.loaded-bg img').css('max-width', '100%');
                        $('.loaded-bg img').attr('id', 'originalBG');
                        $('.loaded-bg img').attr('data-caman-hidpi-disabled', 'true');
                        if (webGL === false) {
                            Caman('.loaded-bg img', function () {
                                if (blurValue !== 0 || saturationValue !== 0 || hueValue !== 0 || brightnessValue !== 0 || contrastValue !== 0) {
                                    this.newLayer(function () {
                                        this.copyParent();
                                        if (brightnessValue != 0) {
                                            this.filter.brightness(brightnessValue * 100);
                                        }
                                        if (contrastValue != 0) {
                                            this.filter.contrast(contrastValue * 100);
                                        }
                                        if (saturationValue != 0) {
                                            this.filter.saturation(saturationValue * 100);
                                        }
                                        if (hueValue != 0) {
                                            hueValue = hueValue * 100;
                                            if (hueValue > 0) {
                                                this.filter.hue(hueValue / 2);
                                            } else {
                                                hueValue = Math.abs(hueValue);
                                                hueValue = 100 - hueValue + (hueValue / 2);
                                                this.filter.hue(hueValue);
                                            }
                                        }
                                        if (blurValue > 0) {
                                            this.filter.stackBlur(blurValue);
                                        }
                                    });
                                    this.render();
                                }
                                $('#bgPhoto').replaceWith($('#originalBG'));
                                $('.canvas-resizer').children('canvas').eq(1).attr('id', 'bgPhoto');
                                $('#bgPhoto').css({
                                    'position': 'absolute',
                                    'width': adjustedWidth + 'px',
                                    'height': adjustedHeight + 'px'
                                });
                                bgAction = true;
                                bgPhotoLoaded = true;
                                $('.bg-filter-disable').hide();
                                $('.canvas-loader').hide();
                                loadBG_loaded = true;
                            });
                        } else {
                            var image = document.getElementById('originalBG');
                            bgPhotoTexture = bgPhoto.texture(image);
                            if (blurValue !== 0 || saturationValue !== 0 || hueValue !== 0 || brightnessValue !== 0 || contrastValue !== 0) {
                                bgPhoto.draw(bgPhotoTexture).brightnessContrast(brightnessValue, contrastValue).hueSaturation(hueValue, saturationValue).triangleBlur(blurValue).update();
                            } else {
                                bgPhoto.draw(bgPhotoTexture).update();
                            }
                            var imageObj = new Image();
                            imageObj.onload = function () {
                                flatBgPhotoCtx.clearRect(0, 0, flatBgPhoto.width, flatBgPhoto.height);
                                flatBgPhotoCtx.save();
                                var yPos = 0;
                                if (browserName == 'Safari') {
                                    yPos = actualHeight * -1;
                                    flatBgPhotoCtx.scale(1, -1);
                                }
                                flatBgPhotoCtx.drawImage(imageObj, 0, yPos, actualWidth, actualHeight);
                                flatBgPhotoCtx.restore();
                                $('#bgPhoto').replaceWith(bgPhoto);
                                $('.canvas-resizer').children('canvas').eq(1).attr('id', 'bgPhoto');
                                $('#bgPhoto').css({
                                    'position': 'absolute',
                                    'width': adjustedWidth + 'px',
                                    'height': adjustedHeight + 'px'
                                });
                                bgAction = true;
                                bgPhotoLoaded = true;
                                $('.bg-filter-disable').hide();
                                $('.canvas-loader').hide();
                                loadBG_loaded = true;
                            };
                            if (browserName != 'Safari') {
                                imageObj.crossOrigin = 'Anonymous';
                            }
                            imageObj.src = bgPhoto.toDataURL();
                        }
                    });
                } else {
                    flatBgPhotoCtx.clearRect(0, 0, flatBgPhoto.width, flatBgPhoto.height);
                    if (bgPhotoLoaded === true) {
                        $('#bgPhoto').replaceWith('<canvas id="bgPhoto" style="position:absolute;"></canvas>');
                        bgPhotoLoaded = false;
                        saturationValue = 0;
                        hueValue = 0;
                        brightnessValue = 0;
                        contrastValue = 0;
                        blurValue = 0;
                        $('.bg-filter-disable').show();
                        $('.btn-filter .fa-check-circle').hide();
                        $('.preset-filters').find('[data-preset="reset"]').find('.fa-check-circle').show();
                        $("#darkenBG").slider('setValue', 0);
                        $("#saturationBG").slider('setValue', 0);
                        $("#hueBG").slider('setValue', 0);
                        $("#brightnessBG").slider('setValue', 0);
                        $("#contrastBG").slider('setValue', 0);
                        $("#blurBG").slider('setValue', 0);
                        $("#overlayBG").slider('setValue', 0);
                    }
                    bgAction = true;
                }
            }
        }

        var imgID = 0;
        var imgType;
        var imgSRC;
        var imgBucket;
        $('.bg-options').on('click', '.bg-thumb', function () {
            imgID = $(this).data('bg');
            imgType = 'jpg';
            imgSRC = $(this).attr('src');
            imgBucket = 'stock';
            loadBG(imgID, imgSRC, imgType, imgBucket);
        });
        $('.background-uploads').on('click', '.upload-thumb', function () {
            imgID = $(this).data('item');
            imgType = $(this).data('img-type');
            imgSRC = $(this).attr('src');
            imgBucket = 'uploads';
            loadBG(imgID, imgSRC, imgType, imgBucket);
        });
        var filterID = false;
        var darkenValue = 0;
        var filterLayer = false;

        function applyFilter(index, filter, bgax) {
            var obj = bgLayer;
            obj.filters[index] = filter;
            obj.applyFilters(canvas.renderAll.bind(canvas));
            if (bgax === true) {
                bgAction = true;
            }
        }

        function applyFilterValue(index, prop, value) {
            var obj = bgLayer;
            if (obj.filters[index]) {
                obj.filters[index][prop] = value;
                obj.applyFilters(canvas.renderAll.bind(canvas));
            }
            bgAction = true;
        }

        $("#darkenBG").slider({
            tooltip: 'hide'
        });
        $("#darkenBG").on("change", function (slideEvt) {
            darkenValue = slideEvt.value.newValue;
            $(".darken-value").text(darkenValue);
            bgDarkenCtx.clearRect(0, 0, canvas.width, canvas.height);
            bgDarkenCtx.globalAlpha = slideEvt.value.newValue / 100;
            bgDarkenCtx.fillStyle = "#000000";
            bgDarkenCtx.fillRect(0, 0, canvas.width, canvas.height);
        });
        $("#blurBG").slider({
            tooltip: 'hide'
        });
        $("#saturationBG").slider({
            tooltip: 'hide'
        });
        $("#hueBG").slider({
            tooltip: 'hide'
        });
        $("#brightnessBG").slider({
            tooltip: 'hide'
        });
        $("#contrastBG").slider({
            tooltip: 'hide'
        });
        $("#overlayBG").slider({
            tooltip: 'hide'
        });
        var overlayColor = '#146da8';
        var overlayOpacity = 0;
        $('.ovpicker').minicolors({
            defaultValue: '#146da8',
            show: function () {
            },
            change: function (hex, rgb) {
                overlayColor = hex
                bgOverlayCtx.clearRect(0, 0, canvas.width, canvas.height);
                bgOverlayCtx.globalAlpha = overlayOpacity;
                bgOverlayCtx.fillStyle = overlayColor;
                bgOverlayCtx.fillRect(0, 0, canvas.width, canvas.height);
            }
        });
        $("#overlayBG").on("change", function (slideEvt) {
            $(".opacity-value").text(slideEvt.value.newValue);
            overlayOpacity = slideEvt.value.newValue / 100;
            bgOverlayCtx.clearRect(0, 0, canvas.width, canvas.height);
            bgOverlayCtx.globalAlpha = overlayOpacity;
            bgOverlayCtx.fillStyle = overlayColor;
            bgOverlayCtx.fillRect(0, 0, canvas.width, canvas.height);
        });
        var timers = false;
        var saturationValue = 0;
        var hueValue = 0;
        var brightnessValue = 0;
        var contrastValue = 0;
        var blurValue = 0;

        function delayShowData(saturationV, hueV, brightnessV, contrastV, blurV) {
            clearTimeout(timers);
            timers = setTimeout(function () {
                if (webGL === false) {
                    Caman("#bgPhoto", function () {
                        this.revert(false);
                        this.newLayer(function () {
                            this.copyParent();
                            if (brightnessV != 0) {
                                this.filter.brightness(brightnessV * 100);
                            }
                            if (contrastV != 0) {
                                this.filter.contrast(contrastV * 100);
                            }
                            if (saturationValue != 0) {
                                this.filter.saturation(saturationValue * 100);
                            }
                            if (hueV != 0) {
                                hueV = hueV * 100;
                                if (hueV > 0) {
                                    this.filter.hue(hueV / 2);
                                } else {
                                    hueV = Math.abs(hueV);
                                    hueV = 100 - hueV + (hueV / 2);
                                    this.filter.hue(hueV);
                                }
                            }
                            if (blurV > 0) {
                                this.filter.stackBlur(blurV);
                            }
                        });
                        this.render();
                    });
                } else {
                    bgPhoto.draw(bgPhotoTexture).brightnessContrast(brightnessV, contrastV).hueSaturation(hueV, saturationV).triangleBlur(blurV).update();
                    var imageObj = new Image();
                    imageObj.onload = function () {
                        flatBgPhotoCtx.clearRect(0, 0, actualWidth, actualWidth);
                        flatBgPhotoCtx.save();
                        var yPos = 0;
                        if (browserName == 'Safari') {
                            yPos = actualHeight * -1;
                            flatBgPhotoCtx.scale(1, -1);
                        }
                        flatBgPhotoCtx.drawImage(imageObj, 0, yPos, actualWidth, actualHeight);
                        flatBgPhotoCtx.restore();
                    };
                    imageObj.src = bgPhoto.toDataURL();
                }
            }, 200);
        }

        $("#blurBG").on("change", function (slideEvt) {
            $(".blur-value").text(slideEvt.value.newValue);
            blurValue = slideEvt.value.newValue;
            if (bgPhotoLoaded === true) {
                delayShowData(saturationValue, hueValue, brightnessValue, contrastValue, blurValue);
            }
        });
        $("#saturationBG").on("change", function (slideEvt) {
            $(".saturation-value").text(slideEvt.value.newValue);
            saturationValue = slideEvt.value.newValue / 100;
            if (bgPhotoLoaded === true) {
                delayShowData(saturationValue, hueValue, brightnessValue, contrastValue, blurValue);
            }
        });
        $("#hueBG").on("change", function (slideEvt) {
            $(".hue-value").text(slideEvt.value.newValue);
            hueValue = slideEvt.value.newValue / 100;
            if (bgPhotoLoaded === true) {
                delayShowData(saturationValue, hueValue, brightnessValue, contrastValue, blurValue);
            }
        });
        $("#brightnessBG").on("change", function (slideEvt) {
            $(".brightness-value").text(slideEvt.value.newValue);
            brightnessValue = slideEvt.value.newValue / 100;
            if (bgPhotoLoaded === true) {
                delayShowData(saturationValue, hueValue, brightnessValue, contrastValue, blurValue);
            }
        });
        $("#contrastBG").on("change", function (slideEvt) {
            $(".contrast-value").text(slideEvt.value.newValue);
            contrastValue = slideEvt.value.newValue / 100;
            if (bgPhotoLoaded === true) {
                delayShowData(saturationValue, hueValue, brightnessValue, contrastValue, blurValue);
            }
        });
        if (wasSaved === 1) {
            bgColor = load_bgColor;
            $('.bgpicker').minicolors('value', bgColor);
            bgColorCtx.fillStyle = bgColor;
            bgColorCtx.fillRect(0, 0, canvas.width, canvas.height);
            saturationValue = load_saturationValue;
            hueValue = load_hueValue;
            brightnessValue = load_brightnessValue;
            contrastValue = load_contrastValue
            blurValue = load_blurValue;
            $("#saturationBG").slider('setValue', saturationValue * 100);
            $("#hueBG").slider('setValue', hueValue * 100);
            $("#brightnessBG").slider('setValue', brightnessValue * 100);
            $("#contrastBG").slider('setValue', contrastValue * 100);
            $("#blurBG").slider('setValue', blurValue);
            darkenValue = load_darkenValue;
            $("#darkenBG").slider('setValue', darkenValue);
            $(".darken-value").text(darkenValue);
            bgDarkenCtx.clearRect(0, 0, canvas.width, canvas.height);
            bgDarkenCtx.globalAlpha = darkenValue / 100;
            bgDarkenCtx.fillStyle = "#000000";
            bgDarkenCtx.fillRect(0, 0, canvas.width, canvas.height);
            overlayColor = load_overlayColor;
            overlayOpacity = load_overlayOpacity;
            $("#overlayBG").slider('setValue', load_overlayOpacity * 100);
            $('.ovpicker').minicolors('value', load_overlayColor);
            bgOverlayCtx.clearRect(0, 0, canvas.width, canvas.height);
            bgOverlayCtx.globalAlpha = overlayOpacity;
            bgOverlayCtx.fillStyle = overlayColor;
            bgOverlayCtx.fillRect(0, 0, canvas.width, canvas.height);
            if (load_imgID != 0) {
                imgID = load_imgID;
                imgType = load_imgType;
                imgSRC = load_imgSRC;
                imgBucket = load_imgBucket;
                loadBG(imgID, imgSRC, imgType, imgBucket);
            } else {
                loadBG_loaded = true;
            }

            function texboxFix(object) {
                var textObject = object;
                var textFix = new fabric.Textbox(textObject.getText(), {
                    lineHeight: textObject.getLineHeight(),
                    fill: textObject.getFill(),
                    cursorColor: '#333333',
                    cursorDelay: 800,
                    cursorDuration: 300,
                    fontWeight: textObject.getFontWeight(),
                    fontSize: textObject.getFontSize(),
                    fontFamily: textObject.getFontFamily(),
                    fontStyle: textObject.getFontStyle(),
                    textDecoration: textObject.getTextDecoration(),
                    borderOpacityWhenMoving: 0.5,
                    transparentCorners: true,
                    cornerSize: cornerSizeValue,
                    hasControls: 1,
                    hasRotatingPoint: 1,
                    centeredRotation: true,
                    lockUniScaling: true,
                    lockScalingFlip: true,
                    opacity: textObject.get('opacity'),
                    width: textObject.getWidth(),
                    textAlign: textObject.getTextAlign(),
                    top: textObject.top + 15,
                    left: textObject.left + 15
                });
                canvas.add(textFix);
                canvas.setActiveObject(textFix);
                canvas.deactivateAll();
                canvas.renderAll();
                clearSelection();
            }

            canvas.loadFromJSON(JSON.stringify(load_fabric), function () {
                canvas.renderAll.bind(canvas);
                var obj = canvas.getObjects();
                $.each(obj, function (i, val) {
                    canvas.setActiveObject(val);
                    canvas.discardActiveObject(val);
                });
                var index;
                for (index = obj.length - 1; index >= 0; --index) {
                    if (obj[index].get('type') == 'textbox') {
                        var textObject = obj[index];
                        var textFix = new fabric.Textbox(textObject.getText(), {
                            lineHeight: textObject.getLineHeight(),
                            fill: textObject.getFill(),
                            cursorColor: '#333333',
                            cursorDelay: 800,
                            cursorDuration: 300,
                            fontWeight: textObject.getFontWeight(),
                            fontSize: textObject.getFontSize(),
                            fontFamily: textObject.getFontFamily(),
                            fontStyle: textObject.getFontStyle(),
                            textDecoration: textObject.getTextDecoration(),
                            borderOpacityWhenMoving: 0.5,
                            transparentCorners: true,
                            cornerSize: cornerSizeValue,
                            hasControls: 1,
                            hasRotatingPoint: 1,
                            centeredRotation: true,
                            lockUniScaling: true,
                            lockScalingFlip: true,
                            opacity: textObject.get('opacity'),
                            width: textObject.getWidth(),
                            textAlign: textObject.getTextAlign(),
                            top: textObject.top,
                            left: textObject.left,
                            angle: textObject.getAngle()
                        });
                        canvas.add(textFix);
                        canvas.setActiveObject(textFix);
                        canvas.discardActiveObject(textFix);
                        canvas.remove(obj[index]);
                    }
                }
                canvas.deactivateAll();
                clearSelection();
            }, function (o, object) {
                var layerType = object.get('type');
                if (layerType == 'i-text' || layerType == 'textbox') {
                } else if (layerType == 'path-group' || layerType == 'image') {
                    object.set({
                        borderOpacityWhenMoving: 0.5,
                        transparentCorners: true,
                        cornerSize: cornerSizeValue,
                        hasControls: 1,
                        hasRotatingPoint: 1,
                        centeredRotation: true,
                        lockUniScaling: true,
                        lockScalingFlip: true
                    });
                }
            });
        }
        $('.upload-img').click(function () {
            $("#file_upload").trigger("click");
        });
        $('#file_upload').change(function () {
            $('.upload-img .upload-ready').hide();
            $('.upload-img .uploading').show();
            $('.upload-img').attr('disabled', 'disabled');
            uploadZIP();
        });

        function uploadZIP() {
            $("#pic_upload").submit();
            return false;
        }

        function resetFormElement(e) {
            e.wrap('<form>').closest('form').get(0).reset();
            e.unwrap();
        }

        $("form#pic_upload").submit(function () {
            var formData = new FormData($(this)[0]);
            $.ajax({
                url: '/upload-img',
                type: 'POST',
                data: formData,
                async: true,
                dataType: 'json',
                success: function (data) {
                    resetFormElement($('#file_upload'));
                    if (data.msg) {
                        $('.upload-error-msg').text(data.msg);
                        $('#uploadErrorModal').modal('show');
                        $('.upload-img .uploading').hide();
                        $('.upload-img .upload-ready').show();
                        $('.upload-img').removeAttr('disabled');
                    }
                    if (data.success) {
                        var url = 'https://snappa-user-uploads.s3.amazonaws.com/' + data.img_id + '-thumb.' + data.img_type;
                        var img = new Image();
                        img.onload = function () {
                            $('.uploaded-items').prepend("<img class='upload-thumb' data-item='" + data.img_id + "' data-img-type='" + data.img_type + "' src='https://snappa-user-uploads.s3.amazonaws.com/" + data.img_id + '-thumb.' + data.img_type + "'>");
                            $('.uploaded-items').show();
                            $('.upload-img .uploading').hide();
                            $('.upload-img .upload-ready').show();
                            $('.upload-img').removeAttr('disabled');
                        }
                        img.src = url;
                    }
                },
                cache: false,
                contentType: false,
                processData: false
            });
            return false;
        });
        var saving = true;

        function saveImage() {
            saving = false;
            $('#saving-overlay .load-text').text('Saving');
            $('#saving-overlay .loader').show();
            $('#saving-overlay .save-success').hide();
            $('#saving-overlay .save-error').hide();
            $('#saving-overlay').show();
            var exImg = exportImage();
            var exData = {
                'graphicID': graphicID,
                'imgID': imgID,
                'imgType': imgType,
                'imgSRC': imgSRC,
                'imgBucket': imgBucket,
                'blurValue': blurValue,
                'saturationValue': saturationValue,
                'hueValue': hueValue,
                'brightnessValue': brightnessValue,
                'contrastValue': contrastValue,
                'overlayColor': overlayColor,
                'overlayOpacity': overlayOpacity,
                'darkenValue': darkenValue,
                'bgColor': bgColor,
                'fabric': canvas,
                'exImg': exImg
            };
            exData = JSON.stringify(exData);
            $.ajax({
                type: 'POST',
                url: '/save-image',
                processData: false,
                contentType: 'application/json',
                data: exData,
                dataType: 'json',
                success: function (data) {
                    saving = true;
                    $('#saving-overlay .loader').hide();
                    if (data.success) {
                        $('#saving-overlay .save-success').show();
                        $('#saving-overlay .load-text').text('Saved');
                    } else {
                        $('#saving-overlay .save-error').show();
                        $('#saving-overlay .load-text').text(data.msg);
                    }
                    $('#saving-overlay').delay(600).fadeOut('slow');
                }
            });
        }

        $('#save-image').on('click', function () {
            if (saving == true) {
                saveImage();
            }
        });
        document.addEventListener("keydown", function (e) {
            if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                e.preventDefault();
                if (saving == true) {
                    saveImage();
                }
            }
        }, false);

        function exportImage() {
            canvas.deactivateAll().renderAll();
            var bgColorExport = document.getElementById('bgColor');
            if (webGL === false) {
                var bgPhotoExport = document.getElementById('bgPhoto');
            } else {
                var bgPhotoExport = document.getElementById('flatBgPhoto');
            }
            var bgOverlayExport = document.getElementById('bgOverlay');
            var bgDarkenExport = document.getElementById('bgDarken');
            var fabricLayersExport = document.getElementById('snappacanvas');
            var exportCanvas = document.getElementById('exportcanvas');
            var exportCtx = exportCanvas.getContext('2d');
            exportCtx.drawImage(bgColorExport, 0, 0, actualWidth, actualHeight);
            exportCtx.drawImage(bgPhotoExport, 0, 0, actualWidth, actualHeight);
            exportCtx.drawImage(bgOverlayExport, 0, 0, actualWidth, actualHeight);
            exportCtx.drawImage(bgDarkenExport, 0, 0, actualWidth, actualHeight);
            exportCtx.drawImage(fabricLayersExport, 0, 0, actualWidth, actualHeight);
            var exportImg = exportCanvas.toDataURL('image/png');
            var data = '{"data":"' + exportImg + '","imgid":"' + graphicID + '"}';
            return data;
        }

        $('#download-image').on('click', function () {
            $('.download-btns').hide();
            $('#downloadModal .preload').show();
            var exData = exportImage();
            $.ajax({
                type: 'POST',
                url: '/exportimage',
                processData: false,
                contentType: 'application/json',
                data: exData,
                dataType: 'json',
                success: function (data) {
                    if (data.success) {
                        $('#download-img-btn').attr('href', data.base_url + 'dl-img/' + data.success);
                        $('#downloadModal .preload').hide();
                        $('.download-btns').show();
                        window.location.href = data.base_url + 'dl-img/' + data.success;
                    } else {
                        return false;
                    }
                }
            });
        });
        $('#share-image').on('click', function () {
            $('#shareModal .share-btns').hide();
            $('#shareModal .preload').show();
            var exData = exportImage();
            $.ajax({
                type: 'POST',
                url: '/exportimage',
                processData: false,
                contentType: 'application/json',
                data: exData,
                dataType: 'json',
                success: function (data) {
                    if (data.success) {
                        var encoded = encodeURIComponent(data.img_url);
                        $('#share-with-buffer').attr('href', 'https://bufferapp.com/add?id=8227bcad8424d360&url=https%3A%2F%2Fsnappa.io&text=Made+with+Snappa&count=none&picture=' + encoded + '&placement=button&utm_source=https%3A%2F%2Fbuffer.com%2Fextras%2Fbutton&utm_medium=buffer_button&utm_campaign=buffer&source=button');
                        $('#shareModal .preload').hide();
                        $('#shareModal .share-btns').show();
                    } else {
                        return false;
                    }
                }
            });
        });
        $('#share-with-buffer').click(function (e) {
            var width = 850;
            var height = 600;
            window.open(this.href, 'newwindow', 'width=' + width + ', height=' + height + '');
            return false;
        });
    }
});
$(window).load(function () {
    if (load_imgID != 0 && loadBG_loaded === false) {
        var pollTimer = window.setInterval(function () {
            if (loadBG_loaded !== false) {
                window.clearInterval(pollTimer);
                $('#newImage .preloader .status').fadeOut();
                $('#newImage .preloader').delay(350).fadeOut('slow');
            }
        }, 200);
    } else {
        $('#newImage .preloader .status').fadeOut();
        $('#newImage .preloader').delay(350).fadeOut('slow');
    }
});
$(window).unload(function () {
});