(function () {

    fabric.cr_Polygon = fabric.util.createClass(fabric.Rect, {
        type: 'cr_polygon',

        nodeRadius: 10,
        closed: false,
        points: [],

        initialize: function (points, options) {
            var self = this;

            points = points || [];
            options = options || {};

            self.callSuper('initialize', options);

            self.set('minPointsCount', options.minPointsCount || 0);
            self.set('maxPointsCount', options.maxPointsCount || Number.MAX_VALUE);

            self.set('points', points);

            self.invalidate();
        },
        /**
         *
         */
        invalidate: function () {
            var self = this,
                minX = Number.MAX_VALUE,
                minY = Number.MAX_VALUE,
                maxX = Number.MIN_VALUE,
                maxY = Number.MIN_VALUE;

            self.points.forEach(function (point, index) {
                minX = Math.min(minX, point.x);
                minY = Math.min(minY, point.y);

                maxX = Math.max(maxX, point.x);
                maxY = Math.max(maxY, point.y);
            });

            self.left = self.left + minX - self.nodeRadius;
            self.top = self.top + minY - self.nodeRadius;

            self.points.forEach(function (point, index) {
                point.x = point.x - minX + self.nodeRadius;
                point.y = point.y - minY + self.nodeRadius;
            });

            self.set({
                width: Math.max(0, maxX - minX + self.nodeRadius * 2),
                height: Math.max(0, maxY - minY + self.nodeRadius * 2)
            });

            self.setCoords();
        },
        clone: function () {
            return this.fromObject(this);
        },
        fromObject: function (object) {
            return new fabric.cr_Polygon(object.points, object.toObject());
        },
        toObject: function () {
            return fabric.util.object.extend(this.callSuper('toObject'), {
                minPointsCount: this.get('minPointsCount'),
                maxPointsCount: this.get('maxPointsCount'),
                points: this.get('points')
            });
        },

        _set: function (key, value) {
            this.callSuper('_set', key, value);

            switch (key) {
                default :
                    break;
            }
        },
        _render: function (ctx) {
            var self = this;

            self.callSuper('_render', ctx);

            if (self.points && self.points.length) {
                ctx.save();

                ctx.beginPath();

                self._draw(ctx);

                ctx.closePath();

                ctx.lineWidth = 10;
                ctx.strokeStyle = '#ff0000';
                ctx.stroke();

                ctx.restore();
            }
        },

        _draw: function (ctx) {
            var self = this;

            var i = 0, count = self.points.length, point;

            for (; i < count; i++) {
                point = self.points[i];

                i == 0 ? ctx.moveTo(point.x, point.y) : ctx.lineTo(point.x, point.y);
            }

            if (self.closed) {
                ctx.lineTo(self.points[0].x, self.points[0].y)
            }
        }
    });

})();