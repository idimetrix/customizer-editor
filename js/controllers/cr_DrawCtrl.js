(function () {
    var cr_DrawCtrl = function ($rootScope, $scope, $timeout, $element, $safeApply, cr_URLManager, cr_UtilsManager, cr_DrawFactory, cr_CommandsManager, cr_KeysManager, cr_EventsManager, cr_SnapManager, cr_ModelsManager, cr_Enums, cr_ClipboardFactory) {
        var layout_workarea_center = $element.parent('.layout-workarea-center');

        cr_DrawFactory.canvas = $element.find('.canvas');
        cr_DrawFactory.fabric = new fabric.CanvasEx(cr_DrawFactory.canvas[0], {
            controlsAboveOverlay: true,
            selection: false
        });
        //cr_DrawFactory.fabric.clipTo = function (ctx) {
        //ctx.arc(400, 400, 200, 0, Math.PI*2, true);
        //};
        //cr_DrawFactory.fabric.selection = false;
        cr_DrawFactory.fabric.setWidth(layout_workarea_center.width());
        cr_DrawFactory.fabric.setHeight(layout_workarea_center.height());
        cr_DrawFactory.fabric.renderAll();

        fabric.Object.prototype.transparentCorners = false;
        fabric.Object.prototype.borderColor = '#41C0EF';
        fabric.Object.prototype.cornerColor = '#41C0EF';
        fabric.Object.prototype.cornerSize = 10;
        fabric.Object.prototype.transparentCorners = false;

        fabric.Object.prototype.resizeToScale = function () {
            switch (this.type) {
                case "circle":
                    this.radius *= this.scaleX;
                    this.scaleX = 1;
                    this.scaleY = 1;
                    break;
                case "ellipse":
                    this.rx *= this.scaleX;
                    this.ry *= this.scaleY;
                    this.width = this.rx * 2;
                    this.height = this.ry * 2;
                    this.scaleX = 1;
                    this.scaleY = 1;
                    break;
                case "polygon":
                case "polyline":
                    var points = this.get('points');
                    for (var i = 0; i < points.length; i++) {
                        var p = points[i];
                        p.x *= this.scaleX
                        p.y *= this.scaleY;
                    }
                    this.scaleX = 1;
                    this.scaleY = 1;
                    this.width = this.getBoundingBox().width;
                    this.height = this.getBoundingBox().height;
                    break;
                case "triangle":
                case "line":
                case "rect":
                    this.width *= this.scaleX;
                    this.height *= this.scaleY;
                    this.scaleX = 1;
                    this.scaleY = 1;
                default:
                    break;
            }
        };

        fabric.Object.prototype.getBoundingBox = function () {
            var minX = null;
            var minY = null;
            var maxX = null;
            var maxY = null;
            switch (this.type) {
                case "polygon":
                case "polyline":
                    var points = this.get('points');

                    for (var i = 0; i < points.length; i++) {
                        if (typeof (minX) == undefined) {
                            minX = points[i].x;
                        } else if (points[i].x < minX) {
                            minX = points[i].x;
                        }
                        if (typeof (minY) == undefined) {
                            minY = points[i].y;
                        } else if (points[i].y < minY) {
                            minY = points[i].y;
                        }
                        if (typeof (maxX) == undefined) {
                            maxX = points[i].x;
                        } else if (points[i].x > maxX) {
                            maxX = points[i].x;
                        }
                        if (typeof (maxY) == undefined) {
                            maxY = points[i].y;
                        } else if (points[i].y > maxY) {
                            maxY = points[i].y;
                        }
                    }
                    break;
                default:
                    minX = this.left;
                    minY = this.top;
                    maxX = this.left + this.width;
                    maxY = this.top + this.height;
            }
            return {
                topLeft: new fabric.Point(minX, minY),
                bottomRight: new fabric.Point(maxX, maxY),
                width: maxX - minX,
                height: maxY - minY
            }
        };

        fabric.Object.prototype._drawControl = function (control, ctx, methodName, left, top) {
            if (!this.isControlVisible(control)) {
                return;
            }

            var size = this.cornerSize;

            this.transparentCorners || ctx.clearRect(left, top, size, size);

            ctx[methodName](left, top, size, size);
        };

        fabric.Canvas.prototype._getActionFromCorner = function (target, corner) {
            var action = 'drag';
            if (corner) {
                action = (corner === 'ml' || corner === 'mr')
                    ? 'scaleX'
                    : (corner === 'mt' || corner === 'mb')
                    ? 'scaleY'
                    : corner === 'mtr'
                    ? 'rotate'
                    : 'scale'; // scaleXscaleY
            }
            return action;
        };

        fabric.Canvas.prototype._performTransformAction = function (e, transform, pointer) {
            var x = pointer.x,
                y = pointer.y,
                target = transform.target,
                action = transform.action;

            if (action === 'rotate') {
                this._rotateObject(x, y);
                this._fire('rotating', target, e);
            }
            else if (action === 'scale') {
                this._onScale(e, transform, x, y);
                this._fire('scaling', target, e);
            }
            else if (action === 'scaleX') {
                this._scaleObject(x, y, 'x');
                this._fire('scaling', target, e);
            }
            else if (action === 'scaleY') {
                this._scaleObject(x, y, 'y');
                this._fire('scaling', target, e);
            } else if (action === 'scaleXscaleY') {
                this._scaleObject(x, y, 'x');
                this._scaleObject(x, y, 'y');
                this._fire('scaling', target, e);
            } else {
                this._translateObject(x, y);
                this._fire('moving', target, e);
                this.setCursor(this.moveCursor);
            }
        };

        // ---

        var beforeSelectedObject = null;
        var modifiedSelectedObject = null;
        var afterSelectedObject = null;

        // ---

        function checkLoaded(object) {
            switch (object.type) {
                case cr_Enums.OBJECT_TYPE.CR_IMAGE:
                    if (object.loaded) {
                        cr_DrawFactory.fabric.fire('image:loaded', {
                            target: object
                        });
                    } else {
                        object.on('image:loaded', function () {
                            cr_DrawFactory.fabric.fire('image:loaded', {
                                target: object
                            });
                        });
                    }

                    break;
                case cr_Enums.OBJECT_TYPE.CR_SVG:
                    if (object.loaded) {
                        cr_DrawFactory.fabric.fire('svg:loaded', {
                            target: object
                        });
                    } else {
                        object.on('svg:loaded', function () {
                            cr_DrawFactory.fabric.fire('svg:loaded', {
                                target: object
                            });
                        });
                    }

                    break;
            }
        }

        // ---

        cr_DrawFactory.fabric.on({
            'text:changed': function (event) {

            },
            'object:modified': function (event) {
                event.target.setCoords();

                cr_DrawFactory.fabric.renderAll();
                cr_DrawFactory.fabric.calcOffset();

                if (cr_DrawFactory.selected == event.target) {
                    $safeApply(function () {
                        modifiedSelectedObject = angular.copy(cr_DrawFactory.selected.toObject());

                        cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize, true);

                        var diff = cr_UtilsManager.cr_ObjectUtils.diff(modifiedSelectedObject, beforeSelectedObject);
                        var count = cr_UtilsManager.cr_ObjectUtils.size(diff);

                        if (count) {
                            cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectManipulationCommand(cr_DrawFactory.selected, {
                                angle: beforeSelectedObject.angle,
                                flipX: beforeSelectedObject.flipX,
                                flipY: beforeSelectedObject.flipY,
                                scaleX: beforeSelectedObject.scaleX,
                                scaleY: beforeSelectedObject.scaleY,
                                width: beforeSelectedObject.width,
                                height: beforeSelectedObject.height,
                                left: beforeSelectedObject.left,
                                top: beforeSelectedObject.top
                            }, {
                                angle: modifiedSelectedObject.angle,
                                flipX: modifiedSelectedObject.flipX,
                                flipY: modifiedSelectedObject.flipY,
                                scaleX: modifiedSelectedObject.scaleX,
                                scaleY: modifiedSelectedObject.scaleY,
                                width: modifiedSelectedObject.width,
                                height: modifiedSelectedObject.height,
                                left: modifiedSelectedObject.left,
                                top: modifiedSelectedObject.top
                            }));

                            $safeApply(function () {
                                cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize);
                            });
                        }

                        beforeSelectedObject = angular.copy(cr_DrawFactory.selected.toObject());
                    });
                }
            },
            'object:selected': function (event) {
                console.log('!!! selected', event);

                cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectSelectionCommand(cr_DrawFactory.selected, true)); // pushAndExecute
            },
            'before:selection:cleared': function (event) {
                console.log('!!! deselected');

                cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectSelectionCommand(cr_DrawFactory.selected, false));
            },
            'object:selected:custom': function () {
                console.log('!!! selected custom');

                cr_DrawFactory.selected = cr_DrawFactory.fabric.getActiveObject();

                beforeSelectedObject = angular.copy(cr_DrawFactory.selected.toObject());

                $safeApply(function () {
                    cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize);
                });
            },
            'before:selection:cleared:custom': function () {
                console.log('!!! deselected custom');

                if (cr_DrawFactory.selected) {
                    afterSelectedObject = angular.copy(cr_DrawFactory.selected.toObject());

                    switch (cr_DrawFactory.selected.type) {
                        case cr_Enums.OBJECT_TYPE.ITEXT:
                            if (beforeSelectedObject.text != afterSelectedObject.text) {
                                cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectManipulationCommand(cr_DrawFactory.selected, beforeSelectedObject, afterSelectedObject));
                            }

                            break;
                    }
                }

                $safeApply(function () {
                    cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize);
                });

                cr_DrawFactory.selected = null;

                beforeSelectedObject = null;
                modifiedSelectedObject = null;
                afterSelectedObject = null;
            },

            'object:moving': function (event) {
                cr_SnapManager.calculate(event.target);
            },
            'object:scaling': function () {

            },
            'object:rotating': function () {

            },
            'selection:cleared': function () {

            },
            'selection:created': function () {

            },
            'context': function () {
                //console.log('context', arguments);
            },
            'mouse:up': function (event) {
                cr_SnapManager.stop(event.target);
            },
            'mouse:down': function (event) {
                if (event.e.ctrlKey) {
                    if (cr_DrawFactory.selected) {
                        var item = cr_DrawFactory.selected.clone();

                        cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_MacroCommand([
                            new cr_CommandsManager.cr_ObjectAddCommand(item),
                            new cr_CommandsManager.cr_ObjectExchangeCommand(item, cr_DrawFactory.selected)
                        ]));
                    }
                } else if (event.e.ctrlKey) {

                }
            },
            'mouse:move': function (event) {

            },
            'mouse:click': function () {
                //console.log('mouse:click', arguments);
            },
            'mouse:dblclick': function () {
                //console.log('mouse:dblclick', arguments);

                //cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_GroupObjectsCommand(cr_DrawFactory.fabric._objects.slice()));
            },
            'after:render': function () {

            },
            'path:created': function () {

            },
            'image:loaded': function (event) {
                //this.centreTo(0, 0);
                this.renderAll();
            },
            'svg:loaded': function (event) {
                //this.centreTo(0, 0);
                this.renderAll();
            },
            'object:added': function (event) {
                switch (event.target.type) {
                    case cr_Enums.OBJECT_TYPE.CR_IMAGE:
                    case cr_Enums.OBJECT_TYPE.CR_SVG:
                        checkLoaded(event.target);

                        break;

                    case cr_Enums.OBJECT_TYPE.GROUP:
                        event.target._objects.forEach(function (object) {
                            checkLoaded(object);
                        });
                        break;
                }
            },
            'object:removed': function (event) {
                var self = this;

                switch (event.target.type) {
                    case cr_Enums.OBJECT_TYPE.CR_IMAGE:

                        break;
                    case cr_Enums.OBJECT_TYPE.CR_SVG:
                        break;
                }
            },
            'object:mouse:up': function (event) {
                //console.log('object:mouse:up', arguments);
            },
            'object:mouse:down': function (event) {
                cr_SnapManager.start(event.target);
                //console.log('object:mouse:down', arguments);
            },
            'object:mouse:move': function (event) {

            },
            'object:mouse:wheel': function () {
                //console.log('object:mouse:wheel', arguments);
            },
            'object:click': function () {
                //console.log('object:mouse:click', arguments);
            },
            'object:dblclick': function () {
                //console.log('object:mouse:dblclick', arguments);
            },
            'object:context': function () {
                //console.log('object:context', arguments);
            },

            'stage:modified': function (e) {
                if (e.fromZoom != e.toZoom || e.fromLeft != e.toLeft || e.fromTop != e.toTop) {
                    cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_MacroCommand([
                        new cr_CommandsManager.cr_ZoomWorkAreaCommand(e.fromZoom, e.toZoom),
                        new cr_CommandsManager.cr_MoveWorkAreaCommand(e.fromLeft, e.toLeft, e.fromTop, e.toTop),
                    ]));
                }
            },
            'stage:moving': function () {

            },
            'stage:scaling': function () {

            },
            'stage:rotating': function () {

            }
        });

        // ---

        $scope.$on('resize', function () {
            //cr_DrawFactory.fabric.centreTo(0, 0);
        });

        // ---

        function copy_Handler() {
            cr_ClipboardFactory.object = cr_DrawFactory.selected ? cr_DrawFactory.selected.toObject() : null;
        }

        function paste_Handler() {
            if (cr_ClipboardFactory.object) {
                cr_ClipboardFactory.object.left += 10;
                cr_ClipboardFactory.object.top += 10;

                var item = cr_ModelsManager.createFromObject(cr_ClipboardFactory.object);

                cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_MacroCommand([
                    new cr_CommandsManager.cr_ObjectSelectionCommand(cr_DrawFactory.selected, false),
                    new cr_CommandsManager.cr_ObjectAddCommand(item),
                    new cr_CommandsManager.cr_ObjectSelectionCommand(item, true)
                ]));

                cr_DrawFactory.selected = item;
            }
        }

        function cut_Handler() {
            cr_ClipboardFactory.object = cr_DrawFactory.selected ? cr_DrawFactory.selected.toObject() : null;

            if (cr_DrawFactory.selected) {
                cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_MacroCommand([
                    new cr_CommandsManager.cr_ObjectSelectionCommand(cr_DrawFactory.selected, false),
                    new cr_CommandsManager.cr_ObjectRemoveCommand(cr_DrawFactory.selected)
                ]));

                cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize, true);
            }
        }

        function del_Handler() {
            if (cr_DrawFactory.selected) {
                cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_MacroCommand([
                    new cr_CommandsManager.cr_ObjectSelectionCommand(cr_DrawFactory.selected, false),
                    new cr_CommandsManager.cr_ObjectRemoveCommand(cr_DrawFactory.selected)
                ]));

                cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize, true);
            }
        }

        function objectKey_Callback(event, hotkey) {
            if (cr_DrawFactory.selected) {
                var oldObject = angular.copy(cr_DrawFactory.selected.toObject());
                var newObject = angular.copy(oldObject);

                switch (hotkey.combo[0]) {
                    case 'left':
                        newObject.left -= 1;
                        break;
                    case 'right':
                        newObject.left += 1;
                        break;
                    case 'up':
                        newObject.top -= 1;
                        break;
                    case 'down':
                        newObject.top += 1;
                        break;
                    case 'ctrl+left':
                        cr_DrawFactory.selected.setAngle((newObject.angle - 1) % 360);

                        newObject = angular.copy(cr_DrawFactory.selected.toObject());
                        break;
                    case 'ctrl+right':
                        cr_DrawFactory.selected.setAngle((newObject.angle + 1) % 360);

                        newObject = angular.copy(cr_DrawFactory.selected.toObject());
                        break;
                    case 'shift+left':
                        newObject.angle = (newObject.angle - 1) % 360;
                        break;
                    case 'shift+right':
                        newObject.angle = (newObject.angle + 1) % 360;
                        break;
                }

                $safeApply(function () {
                    cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ObjectManipulationCommand(cr_DrawFactory.selected, oldObject, newObject));

                    cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize);
                });
            }
        }

        function keys_Callback(event, hotkey) {
            switch (hotkey.combo[0]) {
                case 'ctrl+c':
                    copy_Handler();
                    break;
                case 'ctrl+x':
                    cut_Handler();
                    break;
                case 'del':
                    del_Handler();
                    break;
                case 'ctrl+v':
                    paste_Handler();
                    break;
                case 'ctrl+z':
                    cr_CommandsManager.undo();

                    //console.log('undo cr_CommandsManager.iterator', cr_CommandsManager.iterator);
                    break;

                case 'ctrl+shift+z':
                    cr_CommandsManager.redo();

                    //console.log('redo cr_CommandsManager.iterator', cr_CommandsManager.iterator);
                    break;
            }
        }

        cr_KeysManager.add('left', objectKey_Callback);
        cr_KeysManager.add('right', objectKey_Callback);
        cr_KeysManager.add('up', objectKey_Callback);
        cr_KeysManager.add('down', objectKey_Callback);
        cr_KeysManager.add('ctrl+left', objectKey_Callback);
        cr_KeysManager.add('ctrl+right', objectKey_Callback);
        cr_KeysManager.add('shift+left', objectKey_Callback);
        cr_KeysManager.add('shift+right', objectKey_Callback);

        cr_KeysManager.add('ctrl+c', keys_Callback);
        cr_KeysManager.add('ctrl+x', keys_Callback);
        cr_KeysManager.add('ctrl+v', keys_Callback);
        cr_KeysManager.add('del', keys_Callback);

        cr_KeysManager.add('ctrl+z', keys_Callback);
        cr_KeysManager.add('ctrl+shift+z', keys_Callback);

        cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.OBJECTS.name).on(cr_Enums.EVENTS_STORAGES.OBJECTS.events.copy, copy_Handler);
        cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.OBJECTS.name).on(cr_Enums.EVENTS_STORAGES.OBJECTS.events.paste, paste_Handler);
        cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.OBJECTS.name).on(cr_Enums.EVENTS_STORAGES.OBJECTS.events.cut, cut_Handler);
        cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.OBJECTS.name).on(cr_Enums.EVENTS_STORAGES.OBJECTS.events.del, del_Handler);

        // ---

        $scope.dropCallback = function (event, object) {
            var item = object.draggable.scope().item;

            if (item) {
                var pointer = cr_DrawFactory.fabric.getPointer(event);

                cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ImageAddCommand(item.url, pointer.x - (event.offsetX + 1) / cr_DrawFactory.fabric.getZoom(), pointer.y - (event.offsetY + 1) / cr_DrawFactory.fabric.getZoom(), {
                    width: object.draggable.width() / cr_DrawFactory.fabric.getZoom(),
                    height: object.draggable.height() / cr_DrawFactory.fabric.getZoom()
                }));
            }
        };

        $scope.overCallback = function (event, object) {

        };

        $scope.outCallback = function (event, object) {

        };

        // ---

        cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_TextboxAddCommand('IDCreator', 260, 90, {
            fontFamily: 'Ubuntu',
            fill: '#707070',
            fontWeight: '600',
            centeredRotation: true,
            lockUniScaling: true,
            lockScalingFlip: true,
            width: 200
        }));

        cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ImageAddCommand(cr_URLManager.application + '/img/template1/bg.png', 0, 0, {
            scaleX: 0.5,
            scaleY: 0.5,
            hasControls: false
        }));

        cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ImageAddCommand(cr_URLManager.application + '/img/template1/logo.png', 70, 50, {
            scaleX: 0.55,
            scaleY: 0.55
        }));

        cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_TextAddCommand('IDCreator', 260, 90, {
            fontFamily: 'Ubuntu',
            fill: '#707070',
            fontWeight: '600',
            centeredRotation: true,
            lockUniScaling: true,
            lockScalingFlip: true
        }));

        cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_TextAddCommand('Custom photo ID Cards and Badges', 260, 135, {
            fontFamily: 'Ubuntu',
            fill: '#dc1f10',
            fontWeight: '400',
            fontSize: 14
        }));

        cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_TextAddCommand("1418 N. Scottsdale Rd\nSuite 102 Scottsdale\nZIP Code: AZ 85257\nPhone: 1-855-625-3437\nFax: 1-855-625-3437", 260, 230, {
            fontFamily: 'Ubuntu',
            fill: '#707070',
            fontWeight: '400',
            fontSize: 12
        }));

        cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_TextAddCommand("IDCREATOR.COM", 48, 273, {
            fontFamily: 'Ubuntu',
            fill: '#707070',
            fontWeight: 'bold',
            fontSize: 18,
            styles: {
                0: {
                    0: {fill: '#F0DD02'},
                    1: {fill: '#F0DD02'},
                    2: {fill: '#F0DD02'},
                    3: {fill: '#ffffff'},
                    4: {fill: '#ffffff'},
                    5: {fill: '#ffffff'},
                    6: {fill: '#B70D00'},
                    7: {fill: '#B70D00'},
                    8: {fill: '#B70D00'},
                    9: {fill: '#474747'},
                    10: {fill: '#474747'},
                    11: {fill: '#474747'},
                    12: {fill: '#474747'}
                }
            }
        }));
        cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_QRCodeAddCommand('http://idcreator.com/', 4, 450, 220, {
            scaleX: 0.7,
            scaleY: 0.7
        }));


        //var p = new fabric.cr_Polygon([{x: 100, y: 100}, {x: 300, y: 200}], {});

        //cr_DrawFactory.fabric.add(p);

        /*
         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ImageAddCommand(cr_URLManager.application + '/img/rectangle.png', 200, 100, {
         crop: true,
         width: 200,
         height: 100
         }));
         */

        //cr_DrawFactory.fabric.forEachObject(function(obj) {
        //obj.set('active', true);
        //});

        //cr_DrawFactory.fabric.moveTo(200, 55);
        /*
         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_TextAddCommand('idcreator', 200, 100));
         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_CircleAddCommand(300, 100, 25));
         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_GraphicTextAddCommand('idcreator', 400, 100));
         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_ImageAddCommand(cr_URLManager.application + '/img/45247.png', 500, 100));

         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_LineAddCommand([
         {x: 0, y: 42},
         {x: 155, y: 0},
         {x: 155, y: 243},
         {x: 10, y: 256}
         ], 600, 100));
         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_QRCodeAddCommand('idcreator', 10, 700, 0));
         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_BarCodeAddCommand('idcreator', 'CODE128', 2, 100, 0, 0));

         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_OvalAddCommand(200, 400, 25, 15));
         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_PolygonAddCommand([
         {x: 0, y: 42},
         {x: 155, y: 0},
         {x: 155, y: 243},
         {x: 0, y: 256}
         {x: 0, y: 256}
         ], 300, 400));
         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_RectAddCommand(400, 400, 100, 100));
         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_SVGAddCommand(cr_URLManager.application + '/img/svg/christmas_mhl17.svg', 500, 400));
         cr_CommandsManager.pushAndExecute(new cr_CommandsManager.cr_TriangleAddCommand(600, 400));
         */

        /*
         var current_fps = 60, frames = 0, startTime = Date.now(), prevTime = startTime, fps, time;
         var msg = new fabric.Text('FPS: 0/' + current_fps, {
         fontFamily: 'Arial',
         fontSize: 12,
         fill: 'red',
         fontWeight: 'bold',
         left: 10,
         top: 10,
         selectable: false
         });

         cr_DrawFactory.fabric.add(msg);
         */

        function draw(timestamp) {
            requestAnimationFrame(draw);

            /*
             var time = Date.now();
             frames++;

             if (time > prevTime + 1000) {
             fps = Math.round(( frames * 1000 ) / ( time - prevTime ));
             prevTime = time;
             frames = 0;

             msg.setText("FPS: " + fps + "/" + current_fps);
             }
             */

            cr_DrawFactory.fabric.renderAll(true);
        }

        requestAnimationFrame(draw);
    };

    // ---

    cr_DrawCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        '$safeApply',
        'cr_URLManager',
        'cr_UtilsManager',
        'cr_DrawFactory',
        'cr_CommandsManager',
        'cr_KeysManager',
        'cr_EventsManager',
        'cr_SnapManager',
        'cr_ModelsManager',
        'cr_Enums',
        'cr_ClipboardFactory'
    ];

    angular.module('cr_Customify').controller('cr_DrawCtrl', cr_DrawCtrl);
})();

