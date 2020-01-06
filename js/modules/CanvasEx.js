(function () {
    'use strict';

    var addListener = fabric.util.addListener;
    var removeListener = fabric.util.removeListener;

    fabric.Object.prototype.getZoomCompensatedBoundingRect = function () {
        var boundingRect = this.getBoundingRect();

        var zoom = this.canvas.getZoom();
        var viewportMatrix = this.canvas.viewportTransform;


        return {
            left: (boundingRect.left - viewportMatrix[4]) / zoom,
            top: (boundingRect.top - viewportMatrix[5]) / zoom,
            width: boundingRect.width / zoom,
            height: boundingRect.height / zoom
        };
    };

    fabric.Layout = fabric.util.createClass(fabric.Object, {
        name: null,

        _canvas: null,
        _objects: [],

        initialize: function (name, canvas, options) {
            var self = this;

            self.callSuper('initialize', options);

            self._canvas = canvas;

            self.set('name', name);
        },

        add: function (obj) {
            obj.layout = this;

            this._objects.push(obj);
        },

        remove: function (obj) {
            obj.layout = null;

            var i, count = this._objects.length, object = null;

            for (i = 0; i < count; i++) {
                if (obj = this._objects[i]) {
                    this._objects.splice(i, 1);

                    return obj;
                }
            }

            return null;
        },

        draw: function (ctx, activeGroup) {
            var i, length;

            for (i = 0, length = this._objects.length; i < length; ++i) {
                if (this._objects[i] && (!activeGroup || (activeGroup && !activeGroup.contains(this._objects[i])))) {
                    this._canvas && this._canvas._draw && this._canvas._draw(ctx, this._objects[i]);
                }
            }
        },

        toObject: function () {
            return fabric.util.object.extend(this.callSuper('toObject'), {
                name: this.get('name'),
                left: this.get('left'),
                top: this.get('top')
            });
        },

        fromObject: function (obj) {

        },
    });

    fabric.CanvasEx = fabric.util.createClass(fabric.Canvas, {
        tapholdThreshold: 2000,

        isInteractiveMode: true,

        canDrag: true,
        canZoom: true,

        zoomStep: 0.05,
        useObjectZoom: true,
        minObjectZoom: 0.1,
        maxObjectZoom: 10,

        /*
         cropBox: {
         x: 0,
         y: 0,
         width: 580,
         height: 340
         },

         boundingBox: {
         x: 0,
         y: 0,
         width: 580,
         height: 340
         },
         */

        layout: null,

        _layouts: [],

        _initializeLeft: null,
        _initializeTop: null,
        _initializePosition: null,

        initialize: function (el, options) {
            var self = this;

            options = options || {};

            self.callSuper('initialize', el, options);

            self.addLayout('main');

            self.set('left', options.left || 0);
            self.set('top', options.top || 0);

            self.on({
                'text:changed': function (event) {

                },
                'object:modified': function (event) {

                },
                'object:selected': function (event) {

                },
                'object:moving': function (event) {
                    event.target.setCoords();

                    var boundingRect = event.target.getZoomCompensatedBoundingRect();

                    if (self.boundingBox) {
                        var aspectRatio = event.target.width / event.target.height,
                            boundWidth = boundingRect.width,
                            boundHeight = boundingRect.height;

                        if (boundWidth > self.boundingBox.width) {
                            boundWidth = self.boundingBox.width;
                            event.target.setScaleX(boundingRect.width / event.target.width);
                            event.target.setScaleY(boundingRect.width / event.target.width);

                            event.target.setCoords();
                            boundingRect = event.target.getZoomCompensatedBoundingRect();

                            boundHeight = boundingRect.height;
                        }

                        if (boundHeight > self.boundingBox.height) {
                            boundHeight = self.boundingBox.height;
                            event.target.setScaleX(boundingRect.height / event.target.height);
                            event.target.setScaleY(boundingRect.height / event.target.height);

                            event.target.setCoords();
                            boundingRect = event.target.getZoomCompensatedBoundingRect();

                            boundWidth = boundingRect.width;
                        }

                        if (boundingRect.left < self.boundingBox.x)
                            event.target.setLeft(self.boundingBox.x);

                        if (boundingRect.left > (self.boundingBox.x + self.boundingBox.width - boundWidth))
                            event.target.setLeft(self.boundingBox.x + self.boundingBox.width - boundWidth);

                        if (boundingRect.top < self.boundingBox.y)
                            event.target.top = 0;

                        if (boundingRect.top > (self.boundingBox.y + self.boundingBox.height - boundHeight))
                            event.target.setTop(self.boundingBox.y + self.boundingBox.height - boundHeight);
                    }
                },
                'object:scaling': function (event) {

                },
                'object:rotating': function (event) {

                },
                'before:selection:cleared': function (event) {

                },
                'selection:cleared': function (event) {

                },
                'selection:created': function (event) {

                },
                'context': function (event) {

                },
                'mouse:up': function (event) {

                },
                'mouse:down': function (event) {

                },
                'mouse:move': function (event) {

                },
                'mouse:click': function (event) {

                },
                'mouse:dblclick': function (event) {

                },
                'after:render': function (event) {

                },
                'path:created': function (event) {

                },
                'image:loaded': function (event) {

                },
                'svg:loaded': function (event) {

                },
                'object:added': function (event) {

                },
                'object:removed': function (event) {

                },
                'object:mouse:up': function (event) {

                },
                'object:mouse:down': function (event) {

                },
                'object:mouse:move': function (event) {

                },
                'object:mouse:wheel': function (event) {

                },
                'object:click': function (event) {

                },
                'object:dblclick': function (event) {

                },
                'object:context': function (event) {

                },

                'stage:modified': function (event) {

                },
                'stage:moving': function (event) {

                },
                'stage:scaling': function (event) {

                },
                'stage:rotating': function (event) {

                }
            });

            //self.clipTo = function (ctx) {
            //ctx.rect(this.left + this.cropBox.x, this.top + this.cropBox.y, this.cropBox.width, this.cropBox.height);
            //}
        },

        _setActiveObject: function (object) {
            this.callSuper('_setActiveObject', object);

            this.fire('object:selected:custom', {});
        },

        _discardActiveObject: function () {
            this.callSuper('_discardActiveObject');

            this.fire('before:selection:cleared:custom', {});
        },

        toObject: function () {
            return fabric.util.object.extend(this.callSuper('toObject'), {
                left: this.get('left'),
                top: this.get('top')
            });
        },

        addLayout: function (name) {
            if (this.hasLayout(name)) {
                return this.getLayout(name);
            }

            this.layout = new fabric.Layout(name, this);

            this._layouts.push(this.layout);

            return this.layout;
        }
        ,

        setLayout: function (name) {
            var layout = this.layout;

            if (this.hasLayout(name)) {
                layout = this.getLayout(name);
            }

            this.layout = layout;

            return this.layout;
        }
        ,

        removeLayout: function (name) {
            var i, count = this._layouts.length, layout = null;

            if (count > 1) {
                for (i = 0; i < count; i++) {
                    layout = this._layouts[i];

                    if (layout.name == name) {
                        this._layouts.splice(i, 1);

                        return this.setLayout(this._layouts[0].name);
                    }
                }
            } else if (count > 0) {
                return this.layout;
            } else {

            }


            return null;
        }
        ,

        getLayout: function (name) {
            var i, count = this._layouts.length, layout = null;

            for (i = 0; i < count; i++) {
                layout = this._layouts[i];

                if (layout.name == name) {
                    return layout;
                }
            }

            return null;
        }
        ,

        hasLayout: function (name) {
            return this.getLayout(name) != null;
        }
        ,

        add: function (obj) {
            this.callSuper('add', obj);

            //this.layout.add(obj);
        }
        ,

        remove: function (obj) {
            this.callSuper('remove', obj);

            //obj.layout.remove(obj);
        }
        ,

        centreTo: function (x, y) {
            var minLeft = Number.MAX_VALUE;
            var minTop = Number.MAX_VALUE;

            var maxRight = Number.MIN_VALUE;
            var maxBottom = Number.MIN_VALUE;

            this.forEachObject(function (obj) {
                minLeft = Math.min(minLeft, obj.left);
                minTop = Math.min(minTop, obj.top);

                maxRight = Math.max(maxRight, obj.left + obj.width * obj.scaleX);
                maxBottom = Math.max(maxBottom, obj.top + obj.height * obj.scaleY);
            });

            var w = maxRight - minLeft;
            var h = maxBottom - minTop;

            this.positionTo((this.getWidth() - w) / 2 + x, (this.getHeight() - h) / 2 + y);
        }
        ,

        positionTo: function (x, y) {
            this.set({
                left: x,
                top: y
            });
        }
        ,

        removeListeners: function () {
            var self = this;
            self.callSuper('removeListeners');

            removeListener(self.upperCanvasEl, 'mousewheel', self._onMouseWheel);
            removeListener(self.upperCanvasEl, 'dblclick', self._onDoubleClick);
            removeListener(self.upperCanvasEl, 'click', self._onClick);
        }
        ,

        renderAll: function (render) {
            if (render) {
                this.callSuper('renderAll');
            }
        }
        ,

        _bindEvents: function () {
            var self = this;

            self.callSuper('_bindEvents');

            self._onMouseWheel = self._onMouseWheel.bind(self);
            self._onDoubleClick = self._onDoubleClick.bind(self);
            self._onClick = self._onClick.bind(self);
            self._onTapHold = self._onTapHold.bind(self);
        }
        ,

        _checkTarget: function (e, obj, pointer) {
            return this.callSuper('_checkTarget', e, obj, pointer);
        }
        ,

        _onMouseMove: function (e) {
            var self = this;

            self.callSuper('_onMouseMove', e);

            var target = self.findTarget(e);

            if (target && !self.isDrawingMode) {
                self.fire('object:mouse:move', {
                    target: target,
                    e: e
                });

                target.fire('mouse:move', {
                    e: e
                });
            }

            if (self._initializeLeft != null && self._initializeTop != null && self._initializePosition != null) {
                if (!self.isDrawingMode && self.isInteractiveMode) {
                    if (self.canDrag && ((target && !target.active) || !target) && !e.altKey && !e.ctrlKey) {
                        var l = self._initializeLeft + e.clientX - self._initializePosition[0];
                        var t = self._initializeTop + e.clientY - self._initializePosition[1];

                        self.positionTo(l, t);

                        self.fire('stage:moving', {
                            target: target,
                            e: e
                        });
                    }
                }
            }
        }
        ,

        _onMouseWheel: function (e) {
            var self = this;

            var target = self.findTarget(e);
            var pointer = self.getPointer(e);

            self.fire('mouse:wheel', {
                target: target,
                e: e
            });

            if (target && !self.isDrawingMode) {
                self.fire('object:mouse:wheel', {
                    target: target,
                    e: e
                });

                target.fire('mouse:wheel', {
                    e: e
                });
            }

            if (self.canZoom) {
                var delta = self.zoomStep * (e.deltaY > 0 ? -1 : 1);

                if (self.useObjectZoom && target && target.active) {
                    if (target.scaleX + delta >= self.minObjectZoom && target.scaleX + delta <= self.maxObjectZoom) {
                        var oldScaleX = target.scaleX;

                        target.scaleX += delta;

                        var xPercent = ((pointer.x - target.left) / target.width);
                        var left = pointer.x - (xPercent * (target.width * target.scaleX / oldScaleX));
                        target.left = left;
                    }

                    if (target.scaleY + delta >= self.minObjectZoom && target.scaleY + delta <= self.maxObjectZoom) {
                        var oldScaleY = target.scaleY;

                        target.scaleY += delta;

                        var yPercent = ((pointer.y - target.top) / target.height);
                        var top = pointer.y - (yPercent * (target.height * target.scaleY / oldScaleY));
                        target.top = top;
                    }

                    target.setCoords();
                    self.renderAll();

                    self.fire('object:modified', {
                        target: target,
                        e: e
                    });
                    target.fire('modified', {
                        e: e
                    });
                } else {
                    if (self.getZoom() + delta >= self.minObjectZoom && self.getZoom() + delta <= self.maxObjectZoom) {
                        var fromLeft = self.viewportTransform[4] || 0;
                        var fromTop = self.viewportTransform[5] || 0;

                        var fromZoom = self.getZoom();
                        var toZoom = self.getZoom() + delta;

                        var zoomPoint = new fabric.Point(e.pageX - jQuery(self.wrapperEl).offset().left, e.pageY - jQuery(self.wrapperEl).offset().top);

                        self.zoomToPoint(zoomPoint, toZoom);

                        self.renderAll();

                        var toLeft = this.viewportTransform[4] || 0;
                        var toTop = this.viewportTransform[5] || 0;

                        self.fire('stage:scaling', {
                            target: target,
                            e: e
                        });

                        self.fire('stage:modified', {
                            fromLeft: fromLeft,
                            fromTop: fromTop,
                            toLeft: toLeft,
                            toTop: toTop,
                            fromZoom: fromZoom,
                            toZoom: toZoom,
                            target: target,
                            e: e
                        });
                    }
                }
            }
        }
        ,

        _onDoubleClick: function (e) {
            var self = this;

            var target = self.findTarget(e);

            self.fire('mouse:dblclick', {
                target: target,
                e: e
            });

            if (target && !self.isDrawingMode) {
                self.fire('object:dblclick', {
                    target: target,
                    e: e
                });

                target.fire('dblclick', {
                    e: e
                });
            }
        }
        ,

        _onClick: function (e) {
            var self = this;

            var target = self.findTarget(e);

            self.fire('mouse:click', {
                target: target,
                e: e
            });

            if (target && !self.isDrawingMode) {
                self.fire('object:click', {
                    target: target,
                    e: e
                });

                target.fire('click', {
                    e: e
                });
            }
        }
        ,

        _onTapHold: function (e) {
            var self = this;

            var target = self.findTarget(e);
            self.fire('touch:taphold', {
                target: target,
                e: e
            });

            if (target && !self.isDrawingMode) {
                self.fire('object:taphold', {
                    target: target,
                    e: e
                });

                target.fire('taphold', {
                    e: e
                });
            }

            if (e.type === 'touchend' && self.touchStartTimer != null) {
                clearTimeout(self.touchStartTimer);
            }
        }
        ,

        _onMouseDown: function (e) {
            var self = this;

            self.callSuper('_onMouseDown', e);

            if (e.type === 'touchstart') {
                var touchStartTimer = setTimeout(function () {
                    self._onTapHold(e);
                    self.isLongTap = true;
                }, self.tapholdThreshold);

                self.touchStartTimer = touchStartTimer;

                return;
            }

            var target = this.findTarget(e);

            switch (e.which) {
                case 1:
                    if (target && !self.isDrawingMode) {
                        self.fire('object:mouse:down', {
                            target: target,
                            e: e
                        });

                        target.fire('mouse:down', {
                            e: e
                        });
                    }
                    break;

                case 3:
                    self.fire('context', {
                        target: target,
                        e: e
                    });
                    if (target && !self.isDrawingMode) {
                        self.fire('object:context', {
                            target: target,
                            e: e
                        });

                        target.fire('context', {
                            e: e
                        });
                    }
                    break;
            }

            if (!self.isDrawingMode && self.isInteractiveMode) {
                if (self.canDrag && ((target && !target.active) || !target) && !e.altKey && !e.ctrlKey && !e.shiftKey) {
                    self._initializeLeft = self.viewportTransform[4] || 0;
                    self._initializeTop = self.viewportTransform[5] || 0;
                    self._initializePosition = [e.clientX, e.clientY];
                }
            }
        }
        ,

        _onMouseUp: function (e) {
            var self = this;

            self.callSuper('_onMouseUp', e);

            var target = self.findTarget(e);

            if (target && !self.isDrawingMode) {
                self.fire('object:mouse:up', {
                    target: target,
                    e: e
                });

                target.fire('mouse:up', {
                    e: e
                });
            }

            if (e.type === 'touchend') {
                // Process tap hold.
                if (self.touchStartTimer != null) {
                    clearTimeout(self.touchStartTimer);
                }

                // Process long tap.
                if (self.isLongTap) {
                    self._onLongTapEnd(e);
                    self.isLongTap = false;
                }

                // Process double click
                var now = new Date().getTime();
                var lastTouch = self.lastTouch || now + 1;
                var delta = now - lastTouch;
                if (delta < 300 && delta > 0) {
                    self.lastTouch = null;
                    self._onDoubleTap(e);
                } else {
                    self.lastTouch = now;
                }
            }

            if (self._initializeLeft != null && self._initializeTop != null && self._initializePosition != null) {
                if (!self.isDrawingMode && self.isInteractiveMode) {
                    if (self.canDrag && ((target && !target.active) || !target) && !e.altKey && !e.ctrlKey) {
                        var l = self._initializeLeft + e.clientX - self._initializePosition[0] || 0;
                        var t = self._initializeTop + e.clientY - self._initializePosition[1] || 0;

                        self.positionTo(l, t);

                        self.fire('stage:modified', {
                            fromLeft: self._initializeLeft,
                            fromTop: self._initializeTop,
                            toLeft: l,
                            toTop: t,
                            fromZoom: self.getZoom(),
                            toZoom: self.getZoom(),
                            target: target,
                            e: e
                        });

                        //self.forEachObject(function (obj) {
                        //obj.setCoords();
                        //});
                    }
                }

                self._initializeLeft = null;
                self._initializeTop = null;
                self._initializePosition = null;
            }
        }
        ,

        _onDoubleTap: function (e) {
            var self = this;

            var target = self.findTarget(e);
            self.fire('touch:doubletap', {
                target: target,
                e: e
            });

            if (target && !self.isDrawingMode) {
                self.fire('object:touch:doubletap', {
                    target: target,
                    e: e
                });

                target.fire('touch:doubletap', {
                    e: e
                });
            }
        }
        ,

        _onLongTapEnd: function (e) {
            var self = this;

            var target = self.findTarget(e);
            self.fire('touch:longtapend', {
                target: target,
                e: e
            });

            if (target && !self.isDrawingMode) {
                self.fire('object:touch:longtapend', {
                    target: target,
                    e: e
                });

                target.fire('object:longtapend', {
                    e: e
                });
            }
        }
        ,

        _initEventListeners: function () {
            var self = this;

            self.callSuper('_initEventListeners');

            addListener(self.upperCanvasEl, 'mousewheel', self._onMouseWheel);
            addListener(self.upperCanvasEl, 'dblclick', self._onDoubleClick);
            addListener(self.upperCanvasEl, 'click', self._onClick);
        }
        ,

        _renderObjects: function (ctx, activeGroup) {
            var self = this;

            var i, length;

            // fast path
            if (!activeGroup || this.preserveObjectStacking) {
                for (i = 0, length = this._objects.length; i < length; ++i) {
                    this._draw(ctx, this._objects[i]);
                }

                /*
                 for (i = 0, length = this._layouts.length; i < length; ++i) {
                 this._layouts[i].draw(ctx);
                 }
                 */
            } else {
                for (i = 0, length = this._objects.length; i < length; ++i) {
                    this._draw(ctx, this._objects[i]);
                }

                /*
                 for (i = 0, length = this._layouts.length; i < length; ++i) {
                 this._layouts[i].draw(ctx, activeGroup);
                 }
                 */
            }
        }
        ,

        set: function (key, value) {
            if (typeof key === 'object') {
                this._setObject(key);
            }
            else {
                if (typeof value === 'function' && key !== 'clipTo') {
                    this._set(key, value(this.get(key)));
                }
                else {
                    this._set(key, value);
                }
            }
            return this;
        }

        ,

        _setObject: function (obj) {
            for (var prop in obj) {
                this._set(prop, obj[prop]);
            }
        }
        ,

        _set: function (key, value) {
            switch (key) {
                case 'left':
                    this.viewportTransform[4] = value

                    this.forEachObject(function (obj) {
                        obj.setCoords();
                    });

                    this.renderAll();
                    break;

                case 'top':
                    this.viewportTransform[5] = value;

                    this.forEachObject(function (obj) {
                        obj.setCoords();
                    });

                    this.renderAll();
                    break;
                default :
                    break;
            }

            this[key] = value;

            return this;
        }
        ,

        get: function (key) {
            return this._get(key);
        }

        ,

        _get: function (key) {
            return this[key];
        }
    });
})
();