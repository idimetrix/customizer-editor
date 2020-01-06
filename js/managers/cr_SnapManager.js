angular.module('cr_Customify')
    .factory('cr_SnapManager', ['$rootScope', 'cr_Enums', 'cr_DrawFactory', function ($rootScope, cr_Enums, cr_DrawFactory) {
        var self = this;

        self.toleranceX = 10;
        self.toleranceY = 10;
        self.grid = 30;

        self.useGrid = false;
        self.useSnap = true;

        self.start = function (target) {

        };

        self.stop = function (target) {
            var objects = cr_DrawFactory.fabric.getObjects('cr_snap');
            for (var i = 0; i < objects.length; i++) {
                cr_DrawFactory.fabric.remove(objects[i]);
            }
            cr_DrawFactory.fabric.renderAll();
        };


        self.calculate = function (target) {
            if (self.useGrid) {

            }

            if (self.useGrid) {
                target.setCoords();

                target.set({
                    left: Math.round(target.left / self.grid) * self.grid,
                    top: Math.round(target.top / self.grid) * self.grid
                });
            }

            if (self.useSnap) {

                target.setCoords();

                var targetZoomCompensatedBoundingRect = target.getZoomCompensatedBoundingRect();
                var targetCenterPoint = target.getCenterPoint();

                var objWidth = targetZoomCompensatedBoundingRect.width;
                var objHeight = targetZoomCompensatedBoundingRect.height;

                var snapH = cr_DrawFactory.fabric.height / 2;
                var snapV = cr_DrawFactory.fabric.width / 2;

                var zoom = cr_DrawFactory.fabric.getZoom();

                var objCenterX = targetCenterPoint.x;
                var objCenterY = targetCenterPoint.y;

                var objTop = targetZoomCompensatedBoundingRect.top;
                var objBottom = objTop + objHeight;
                var objLeft = targetZoomCompensatedBoundingRect.left;
                var objRight = objLeft + objWidth;

                var objAngle = parseInt(target.angle);

                var snapLeftAdjust = 0;
                var snapLeft = 0;
                var snapTopAdjust = 0;
                var snapTop = 0;

                var index;
                var i;
                var j;

                target.setCoords();

                if (objAngle >= 0 && objAngle <= 90) {
                    snapLeftAdjust = target.oCoords.tl.x - target.oCoords.bl.x;
                    snapLeft = target.oCoords.bl.x + snapLeftAdjust;
                    snapTopAdjust = 0;
                    snapTop = target.oCoords.tl.y;
                } else if (objAngle > 90 && objAngle <= 180) {
                    snapLeftAdjust = objWidth;
                    snapLeft = target.oCoords.tl.x;
                    snapTopAdjust = target.oCoords.tl.y - target.oCoords.bl.y;
                    snapTop = target.oCoords.tl.y;
                } else if (objAngle > 180 && objAngle <= 270) {
                    snapLeftAdjust = objWidth + (target.oCoords.tl.x - target.oCoords.bl.x);
                    snapLeft = target.oCoords.tl.x;
                    snapTopAdjust = objHeight;
                    snapTop = target.oCoords.tl.y;
                } else if (objAngle > 270) {
                    snapLeftAdjust = 0;
                    snapLeft = target.oCoords.tl.x;
                    snapTopAdjust = objHeight + (target.oCoords.tl.y - target.oCoords.bl.y);
                    snapTop = target.oCoords.tl.y;
                }

                snapLeft -= cr_DrawFactory.fabric.left;
                snapTop -= cr_DrawFactory.fabric.top;

                snapLeft /= zoom;
                snapTop /= zoom;

                var objects = cr_DrawFactory.fabric.getObjects('cr_snap');
                var allObjects = cr_DrawFactory.fabric.getObjects();

                var topSnaps = [
                    [0, {
                        'xStart': 0,
                        'xEnd': cr_DrawFactory.fabric.width
                    }]
                ];
                var bottomSnaps = [
                    [cr_DrawFactory.fabric.height, {
                        'xStart': 0,
                        'xEnd': cr_DrawFactory.fabric.width
                    }]
                ];
                var hMiddleSnaps = [
                    [snapH, {
                        'xStart': 0,
                        'xEnd': cr_DrawFactory.fabric.width
                    }]
                ];
                var leftSnaps = [
                    [0, {
                        'yStart': 0,
                        'yEnd': cr_DrawFactory.fabric.height
                    }]
                ];
                var rightSnaps = [
                    [cr_DrawFactory.fabric.width, {
                        'yStart': 0,
                        'yEnd': cr_DrawFactory.fabric.height
                    }]
                ];
                var vMiddleSnaps = [
                    [snapV, {
                        'yStart': 0,
                        'yEnd': cr_DrawFactory.fabric.height
                    }]
                ];
                for (i = 0; i < objects.length; i++) {
                    cr_DrawFactory.fabric.remove(objects[i]);
                }
                for (i = 0; i < allObjects.length; i++) {
                    var checkActive = allObjects[i].get('active');

                    if (checkActive == false) {

                        var xStart, xEnd, yStart, yEnd;

                        var objZoomCompensatedBoundingRect = allObjects[i].getZoomCompensatedBoundingRect();
                        var objCenterPoint = allObjects[i].getCenterPoint();

                        if (objLeft <= objZoomCompensatedBoundingRect.left) {
                            xStart = objLeft;
                            xEnd = objZoomCompensatedBoundingRect.left + objZoomCompensatedBoundingRect.width;
                        } else {
                            xStart = objZoomCompensatedBoundingRect.left;
                            xEnd = objLeft + objWidth;
                        }

                        topSnaps.push([objZoomCompensatedBoundingRect.top, {
                            'xStart': xStart,
                            'xEnd': xEnd
                        }]);
                        topSnaps.push([objZoomCompensatedBoundingRect.top + objZoomCompensatedBoundingRect.height, {
                            'xStart': xStart,
                            'xEnd': xEnd
                        }]);
                        bottomSnaps.push([objZoomCompensatedBoundingRect.top + objZoomCompensatedBoundingRect.height, {
                            'xStart': xStart,
                            'xEnd': xEnd
                        }]);
                        bottomSnaps.push([objZoomCompensatedBoundingRect.top, {
                            'xStart': xStart,
                            'xEnd': xEnd
                        }]);
                        hMiddleSnaps.push([objCenterPoint.y, {
                            'xStart': xStart,
                            'xEnd': xEnd
                        }]);

                        if (objTop <= objZoomCompensatedBoundingRect.top) {
                            yStart = objTop;
                            yEnd = objZoomCompensatedBoundingRect.top + objZoomCompensatedBoundingRect.height;
                        } else {
                            yStart = objZoomCompensatedBoundingRect.top;
                            yEnd = objTop + objHeight;
                        }

                        leftSnaps.push([objZoomCompensatedBoundingRect.left, {
                            'yStart': yStart,
                            'yEnd': yEnd
                        }]);
                        leftSnaps.push([objZoomCompensatedBoundingRect.left + objZoomCompensatedBoundingRect.width, {
                            'yStart': yStart,
                            'yEnd': yEnd
                        }]);
                        rightSnaps.push([objZoomCompensatedBoundingRect.left + objZoomCompensatedBoundingRect.width, {
                            'yStart': yStart,
                            'yEnd': yEnd
                        }]);
                        rightSnaps.push([objZoomCompensatedBoundingRect.left, {
                            'yStart': yStart,
                            'yEnd': yEnd
                        }]);
                        vMiddleSnaps.push([objCenterPoint.x, {
                            'yStart': yStart,
                            'yEnd': yEnd
                        }]);
                    }
                }

                for (i = topSnaps.length - 1; i >= 0; i--) {
                    if (topSnaps[i] != undefined) {
                        var topSnapCalc = Math.abs(objTop - topSnaps[i][0]);
                        topSnapCalc = parseFloat(topSnapCalc).toFixed(2);
                        if (topSnapCalc <= self.toleranceY) {
                            for (j = topSnaps.length - 1; j >= 0; j--) {
                                if (topSnaps[j] != undefined) {
                                    var topSnapCalc2 = Math.abs(objTop - topSnaps[j][0]);
                                    topSnapCalc2 = parseFloat(topSnapCalc2).toFixed(2);
                                    if (topSnapCalc2 <= self.toleranceY && topSnapCalc2 != topSnapCalc) {
                                        if (topSnapCalc2 < topSnapCalc) {
                                            topSnaps.splice(i, 1);
                                        } else {
                                            topSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                            for (j = hMiddleSnaps.length - 1; j >= 0; j--) {
                                if (hMiddleSnaps[j] != undefined) {
                                    var hMidSnapCalc = Math.abs(target.getCenterPoint().y - hMiddleSnaps[j][0]);
                                    hMidSnapCalc = parseFloat(hMidSnapCalc).toFixed(2);
                                    if (hMidSnapCalc <= self.toleranceY && hMidSnapCalc != topSnapCalc) {
                                        if (hMidSnapCalc < topSnapCalc) {
                                            topSnaps.splice(i, 1);
                                        } else {
                                            hMiddleSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                            for (j = bottomSnaps.length - 1; j >= 0; j--) {
                                if (bottomSnaps[j] != undefined) {
                                    var bottomSnapCalc = Math.abs(objTop + objHeight - bottomSnaps[j][0]);
                                    bottomSnapCalc = parseFloat(bottomSnapCalc).toFixed(2);
                                    if (bottomSnapCalc <= self.toleranceY && bottomSnapCalc != topSnapCalc) {
                                        if (bottomSnapCalc < topSnapCalc) {
                                            topSnaps.splice(i, 1);
                                        } else {
                                            bottomSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                for (i = hMiddleSnaps.length - 1; i >= 0; i--) {
                    if (hMiddleSnaps[i] != undefined) {
                        var hMidSnapCalc = Math.abs(target.getCenterPoint().y - hMiddleSnaps[i][0]);
                        hMidSnapCalc = parseFloat(hMidSnapCalc).toFixed(2);
                        if (hMidSnapCalc <= self.toleranceY) {
                            for (j = hMiddleSnaps.length - 1; j >= 0; j--) {
                                if (hMiddleSnaps[j] != undefined) {
                                    var hMidSnapCalc2 = Math.abs(target.getCenterPoint().y - hMiddleSnaps[j][0]);
                                    hMidSnapCalc2 = parseFloat(hMidSnapCalc2).toFixed(2);
                                    if (hMidSnapCalc2 <= self.toleranceY && hMidSnapCalc2 != hMidSnapCalc) {
                                        if (hMidSnapCalc2 < hMidSnapCalc) {
                                            hMiddleSnaps.splice(i, 1);
                                        } else {
                                            hMiddleSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                            for (j = bottomSnaps.length - 1; j >= 0; j--) {
                                if (bottomSnaps[j] != undefined) {
                                    var bottomSnapCalc = Math.abs(objTop + objHeight - bottomSnaps[j][0]);
                                    bottomSnapCalc = parseFloat(bottomSnapCalc).toFixed(2);
                                    if (bottomSnapCalc <= self.toleranceY && bottomSnapCalc != hMidSnapCalc) {
                                        if (bottomSnapCalc < hMidSnapCalc) {
                                            hMiddleSnaps.splice(i, 1);
                                        } else {
                                            bottomSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                for (i = bottomSnaps.length - 1; i >= 0; i--) {
                    if (bottomSnaps[i] != undefined) {
                        var bottomSnapCalc = Math.abs(objTop + objHeight - bottomSnaps[i][0]);
                        bottomSnapCalc = parseFloat(bottomSnapCalc).toFixed(2);
                        if (bottomSnapCalc <= self.toleranceY) {
                            for (j = bottomSnaps.length - 1; j >= 0; j--) {
                                if (bottomSnaps[j] != undefined) {
                                    var bottomSnapCalc2 = Math.abs(objTop + objHeight - bottomSnaps[j][0]);
                                    bottomSnapCalc2 = parseFloat(bottomSnapCalc2).toFixed(2);
                                    if (bottomSnapCalc2 <= self.toleranceY && bottomSnapCalc2 != bottomSnapCalc) {
                                        if (bottomSnapCalc2 < bottomSnapCalc) {
                                            bottomSnaps.splice(i, 1);
                                        } else {
                                            bottomSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                for (i = leftSnaps.length - 1; i >= 0; i--) {
                    if (leftSnaps[i] != undefined) {
                        var leftSnapCalc = Math.abs(objLeft - leftSnaps[i][0]);
                        leftSnapCalc = parseFloat(leftSnapCalc).toFixed(2);
                        if (leftSnapCalc <= self.toleranceX) {
                            for (j = leftSnaps.length - 1; j >= 0; j--) {
                                if (leftSnaps[j] != undefined) {
                                    var leftSnapCalc2 = Math.abs(objLeft - leftSnaps[i][0]);
                                    leftSnapCalc2 = parseFloat(leftSnapCalc2).toFixed(2);
                                    if (leftSnapCalc2 <= self.toleranceX && leftSnapCalc2 != leftSnapCalc) {
                                        if (leftSnapCalc2 < leftSnapCalc) {
                                            leftSnaps.splice(i, 1);
                                        } else {
                                            leftSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                            for (j = vMiddleSnaps.length - 1; j >= 0; j--) {
                                if (vMiddleSnaps[j] != undefined) {
                                    var vMidSnapCalc = Math.abs(target.getCenterPoint().x - vMiddleSnaps[j][0]);
                                    vMidSnapCalc = parseFloat(vMidSnapCalc).toFixed(2);
                                    if (vMidSnapCalc <= self.toleranceX && vMidSnapCalc != leftSnapCalc) {
                                        if (vMidSnapCalc < leftSnapCalc) {
                                            leftSnaps.splice(i, 1);
                                        } else {
                                            vMiddleSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                            for (j = rightSnaps.length - 1; j >= 0; j--) {
                                if (rightSnaps[j] != undefined) {
                                    var rightSnapCalc = Math.abs(objLeft + objWidth - rightSnaps[j][0]);
                                    rightSnapCalc = parseFloat(rightSnapCalc).toFixed(2);
                                    if (rightSnapCalc <= self.toleranceX && rightSnapCalc != leftSnapCalc) {
                                        if (rightSnapCalc < leftSnapCalc) {
                                            leftSnaps.splice(i, 1);
                                        } else {
                                            rightSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                for (i = vMiddleSnaps.length - 1; i >= 0; i--) {
                    if (vMiddleSnaps[i] != undefined) {
                        var vMidSnapCalc = Math.abs(target.getCenterPoint().x - vMiddleSnaps[i][0]);
                        vMidSnapCalc = parseFloat(vMidSnapCalc).toFixed(2);
                        if (vMidSnapCalc <= self.toleranceX) {
                            for (j = vMiddleSnaps.length - 1; j >= 0; j--) {
                                if (vMiddleSnaps[j] != undefined) {
                                    var vMidSnapCalc2 = Math.abs(target.getCenterPoint().x - vMiddleSnaps[j][0]);
                                    vMidSnapCalc2 = parseFloat(vMidSnapCalc2).toFixed(2);
                                    if (vMidSnapCalc2 <= self.toleranceX && vMidSnapCalc2 != vMidSnapCalc) {
                                        if (vMidSnapCalc2 < vMidSnapCalc) {
                                            vMiddleSnaps.splice(i, 1);
                                        } else {
                                            vMiddleSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                            for (j = rightSnaps.length - 1; j >= 0; j--) {
                                if (rightSnaps[j] != undefined) {
                                    var rightSnapCalc = Math.abs(objLeft + objWidth - rightSnaps[j][0]);
                                    rightSnapCalc = parseFloat(rightSnapCalc).toFixed(2);
                                    if (rightSnapCalc <= self.toleranceX && rightSnapCalc != vMidSnapCalc) {
                                        if (rightSnapCalc < vMidSnapCalc) {
                                            vMiddleSnaps.splice(i, 1);
                                        } else {
                                            rightSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                for (i = rightSnaps.length - 1; i >= 0; i--) {
                    if (rightSnaps[i] != undefined) {
                        var rightSnapCalc = Math.abs(objLeft + objWidth - rightSnaps[i][0]);
                        rightSnapCalc = parseFloat(rightSnapCalc).toFixed(2);
                        if (rightSnapCalc <= self.toleranceX) {
                            for (j = rightSnaps.length - 1; j >= 0; j--) {
                                if (rightSnaps[j] != undefined) {
                                    var rightSnapCalc2 = Math.abs(objLeft + objWidth - rightSnaps[j][0]);
                                    rightSnapCalc2 = parseFloat(rightSnapCalc2).toFixed(2);
                                    if (rightSnapCalc2 <= self.toleranceX && rightSnapCalc2 != rightSnapCalc) {
                                        if (rightSnapCalc2 < rightSnapCalc) {
                                            rightSnaps.splice(i, 1);
                                        } else {
                                            rightSnaps.splice(j, 1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                for (index = 0; index < hMiddleSnaps.length; index++) {
                    var hMidSnapCalc = Math.abs(target.getCenterPoint().y - hMiddleSnaps[index][0]);
                    if (hMidSnapCalc <= self.toleranceX) {
                        var hLine = new fabric.cr_Snap([hMiddleSnaps[index][1].xStart, hMiddleSnaps[index][0], hMiddleSnaps[index][1].xEnd, hMiddleSnaps[index][0]], {
                            stroke: 'rgba(255,255,255,0.6)',
                            selectable: false
                        });
                        var hLine2 = new fabric.cr_Snap([hMiddleSnaps[index][1].xStart, hMiddleSnaps[index][0], hMiddleSnaps[index][1].xEnd, hMiddleSnaps[index][0]], {
                            stroke: 'rgba(41,99,158,0.6)',
                            strokeDashArray: [5, 5],
                            selectable: false
                        });

                        //console.log(hMiddleSnaps[index][1].xStart, hMiddleSnaps[index][0], hMiddleSnaps[index][1].xEnd, hMiddleSnaps[index][0], hMiddleSnaps[index][0] , (objHeight / 2) , snapTopAdjust);

                        var snapTop = hMiddleSnaps[index][0] - (objHeight / 2) + snapTopAdjust;

                        cr_DrawFactory.fabric.add(hLine);
                        hLine.moveTo(9998);
                        cr_DrawFactory.fabric.add(hLine2);
                        hLine2.moveTo(9999);
                    }
                }

                for (index = 0; index < vMiddleSnaps.length; index++) {
                    var vMidSnapCalc = Math.abs(target.getCenterPoint().x - vMiddleSnaps[index][0]);
                    if (vMidSnapCalc <= self.toleranceX) {
                        var vLine = new fabric.cr_Snap([vMiddleSnaps[index][0], vMiddleSnaps[index][1].yStart, vMiddleSnaps[index][0], vMiddleSnaps[index][1].yEnd], {
                            stroke: 'rgba(255,255,255,0.6)',
                            selectable: false
                        });
                        var vLine2 = new fabric.cr_Snap([vMiddleSnaps[index][0], vMiddleSnaps[index][1].yStart, vMiddleSnaps[index][0], vMiddleSnaps[index][1].yEnd], {
                            stroke: 'rgba(41,99,158,0.6)',
                            strokeDashArray: [5, 5],
                            selectable: false
                        });
                        var snapLeft = vMiddleSnaps[index][0] - (objWidth / 2) + snapLeftAdjust;
                        cr_DrawFactory.fabric.add(vLine);
                        vLine.moveTo(9998);
                        cr_DrawFactory.fabric.add(vLine2);
                        vLine2.moveTo(9999);
                    }
                }
                for (index = 0; index < topSnaps.length; index++) {
                    var topSnapCalc = Math.abs(objTop - topSnaps[index][0]);
                    if (topSnapCalc <= self.toleranceY) {
                        var hLine = new fabric.cr_Snap([topSnaps[index][1].xStart, topSnaps[index][0], topSnaps[index][1].xEnd, topSnaps[index][0]], {
                            stroke: 'rgba(255,255,255,0.6)',
                            selectable: false
                        });
                        var hLine2 = new fabric.cr_Snap([topSnaps[index][1].xStart, topSnaps[index][0], topSnaps[index][1].xEnd, topSnaps[index][0]], {
                            stroke: 'rgba(41,99,158,0.6)',
                            strokeDashArray: [5, 5],
                            selectable: false
                        });
                        var snapTop = topSnaps[index][0] + snapTopAdjust;
                        cr_DrawFactory.fabric.add(hLine);
                        hLine.moveTo(9998);
                        cr_DrawFactory.fabric.add(hLine2);
                        hLine2.moveTo(9999);
                    }
                }
                for (index = 0; index < bottomSnaps.length; index++) {
                    var bottomSnapCalc = Math.abs(objTop + objHeight - bottomSnaps[index][0]);
                    var lineAdj = 0;
                    if (bottomSnapCalc <= self.toleranceY) {
                        if (bottomSnaps[index][0] == cr_DrawFactory.fabric.height) {
                            lineAdj = 1;
                        }
                        var hLine = new fabric.cr_Snap([bottomSnaps[index][1].xStart, bottomSnaps[index][0] - lineAdj, bottomSnaps[index][1].xEnd, bottomSnaps[index][0] - lineAdj], {
                            stroke: 'rgba(255,255,255,0.6)',
                            selectable: false
                        });
                        var hLine2 = new fabric.cr_Snap([bottomSnaps[index][1].xStart, bottomSnaps[index][0] - lineAdj, bottomSnaps[index][1].xEnd, bottomSnaps[index][0] - lineAdj], {
                            stroke: 'rgba(41,99,158,0.6)',
                            strokeDashArray: [5, 5],
                            selectable: false
                        });
                        var snapTop = bottomSnaps[index][0] - objHeight + snapTopAdjust;
                        cr_DrawFactory.fabric.add(hLine);
                        hLine.moveTo(9998);
                        cr_DrawFactory.fabric.add(hLine2);
                        hLine2.moveTo(9999);
                    }
                }
                for (index = 0; index < leftSnaps.length; index++) {
                    var leftSnapCalc = Math.abs(objLeft - leftSnaps[index][0]);
                    if (leftSnapCalc <= self.toleranceX) {
                        var vLine = new fabric.cr_Snap([leftSnaps[index][0], leftSnaps[index][1].yStart, leftSnaps[index][0], leftSnaps[index][1].yEnd], {
                            stroke: 'rgba(255,255,255,0.6)',
                            selectable: false
                        });
                        var vLine2 = new fabric.cr_Snap([leftSnaps[index][0], leftSnaps[index][1].yStart, leftSnaps[index][0], leftSnaps[index][1].yEnd], {
                            stroke: 'rgba(41,99,158,0.6)',
                            strokeDashArray: [5, 5],
                            selectable: false
                        });
                        var snapLeft = leftSnaps[index][0] + snapLeftAdjust;
                        cr_DrawFactory.fabric.add(vLine);
                        vLine.moveTo(9998);
                        cr_DrawFactory.fabric.add(vLine2);
                        vLine2.moveTo(9999);
                    }
                }
                for (index = 0; index < rightSnaps.length; index++) {
                    var rightSnapCalc = Math.abs(objLeft + objWidth - rightSnaps[index][0]);
                    var lineAdj = 0;
                    if (rightSnapCalc <= self.toleranceX) {
                        if (rightSnaps[index][0] == cr_DrawFactory.fabric.width) {
                            lineAdj = 1;
                        }
                        var vLine = new fabric.cr_Snap([rightSnaps[index][0] - lineAdj, rightSnaps[index][1].yStart, rightSnaps[index][0] - lineAdj, rightSnaps[index][1].yEnd], {
                            stroke: 'rgba(255,255,255,0.6)',
                            selectable: false
                        });
                        var vLine2 = new fabric.cr_Snap([rightSnaps[index][0] - lineAdj, rightSnaps[index][1].yStart, rightSnaps[index][0] - lineAdj, rightSnaps[index][1].yEnd], {
                            stroke: 'rgba(41,99,158,0.6)',
                            strokeDashArray: [5, 5],
                            selectable: false
                        });

                        var snapLeft = rightSnaps[index][0] - objWidth + snapLeftAdjust;
                        cr_DrawFactory.fabric.add(vLine);
                        vLine.moveTo(9998);
                        cr_DrawFactory.fabric.add(vLine2);
                        vLine2.moveTo(9999);
                    }
                }

                target.set({
                    top: snapTop,
                    left: snapLeft
                });

            }

            target.setCoords();
        };

        return self;
    }]);