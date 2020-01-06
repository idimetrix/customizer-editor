(function (fabric) {
    fabric = fabric || {};

    fabric.CanvasManager = function (el, options) {
        var canvas = new fabric.Canvas(el, options);

        var canvasLeft = null;
        var canvasTop = null;
        var position = null;

        var oldSelection = canvas.selection;

        canvas.dragging = false;

        canvas.useInside = false;
        canvas.usePan = true;
        canvas.useZoom = true;
        canvas.useObjects = true;

        canvas.zoomStep = 0.05;
        canvas.minObjectZoom = 0.1;
        canvas.maxObjectZoom = 10;

        canvas.moveTo = function (x, y) {
            canvas.viewportTransform[4] = x;
            canvas.viewportTransform[5] = y;

            canvas.forEachObject(function (obj) {
                obj.setCoords();
            });

            canvas.renderAll();
        };

        jQuery(document).on('mousedown', function (event) {

        });

        jQuery(document).on('mouseup', function (event) {
            canvasLeft = null;
            canvasTop = null;
            position = null;

            canvas.selection = oldSelection;
        });

        jQuery(document).on('mousemove', function (event) {
            if (canvas.usePan && position) {
                var l = canvasLeft + event.clientX - position[0];
                var t = canvasTop + event.clientY - position[1];

                canvas.moveTo(l, t);
            }
        });

        jQuery(canvas.wrapperEl).on('mousewheel', function (event) {
            if (canvas.useZoom) {
                var target = canvas.findTarget(event);
                var pos = canvas.getPointer(event);

                var delta = canvas.zoomStep * (event.deltaY > 0 ? 1 : -1);

                if (canvas.useObjects && target && target.active) {
                    if (target.scaleX + delta >= canvas.minObjectZoom && target.scaleX + delta <= canvas.maxObjectZoom) {
                        var oldScaleX = target.scaleX;

                        target.scaleX += delta;

                        var xPercent = ((pos.x - target.left) / target.width);
                        var left = pos.x - (xPercent * (target.width * target.scaleX / oldScaleX));
                        target.left = left;
                    }

                    if (target.scaleY + delta >= canvas.minObjectZoom && target.scaleY + delta <= canvas.maxObjectZoom) {
                        var oldScaleY = target.scaleY;

                        target.scaleY += delta;

                        var yPercent = ((pos.y - target.top) / target.height);
                        var top = pos.y - (yPercent * (target.height * target.scaleY / oldScaleY));
                        target.top = top;
                    }

                    target.setCoords();
                    canvas.renderAll();
                } else {
                    if (canvas.getZoom() + delta >= canvas.minObjectZoom && canvas.getZoom() + delta <= canvas.maxObjectZoom) {
                        var zoomPoint = new fabric.Point(event.pageX - jQuery(canvas.wrapperEl).offset().left, event.pageY - jQuery(canvas.wrapperEl).offset().top);

                        canvas.zoomToPoint(zoomPoint, canvas.getZoom() + delta);

                        canvas.renderAll();
                    }
                }
            }
        });

        canvas.on('mouse:down', function (event) {
            if (canvas.usePan && ((event.target && !event.target.active) || !event.target) && !event.e.altKey && !event.e.ctrlKey) {
                oldSelection = canvas.selection;

                canvas.selection = false;

                canvasLeft = canvas.viewportTransform[4] || 0;
                canvasTop = canvas.viewportTransform[5] || 0;
                position = [event.e.clientX, event.e.clientY];
            }
        });

        canvas.on('mouse:up', function (event) {

        });

        canvas.on('mouse:move', function (event) {

        });

        canvas.on('object:moving', function (e) {
            var obj = e.target;

            obj.setCoords();

            var boundingRect = obj.getBoundingRect();

            if (canvas.useInside) {
                var max_pad_left_over_width = boundingRect.width;
                var max_pad_left_over_height = boundingRect.height;

                var max_top_pos = -(obj.getHeight() - max_pad_left_over_height);
                var max_bottom_pos = obj.canvas.height - max_pad_left_over_height;
                var max_left_pos = -(obj.getWidth() - max_pad_left_over_width);
                var max_right_pos = obj.canvas.width - max_pad_left_over_width;

                if (boundingRect.top < max_top_pos) {
                    obj.setTop(max_top_pos);
                }

                if (boundingRect.left < max_left_pos) {
                    obj.setLeft(max_left_pos);
                }

                if (boundingRect.top > max_bottom_pos) {
                    obj.setTop(max_bottom_pos);
                }

                if (boundingRect.left > max_right_pos) {
                    obj.setLeft(max_right_pos);
                }
            }
        });

        return canvas;
    };
})(fabric);