(function (global) {

    "use strict";

    var fabric = global.fabric || (global.fabric = {})
        , piBy2 = Math.PI * 2
        , extend = fabric.util.object.extend
        , toFixed = fabric.util.toFixed
        ;

    if (fabric.cr_Star) {
        fabric.warn('fabric.cr_Star is already defined.');
        return;
    }

    /**
     * @class Circle
     * @extends fabric.Object
     */
    fabric.cr_Star = fabric.util.createClass(fabric.Object, /** @scope fabric.cr_Star.prototype */ {

        /**
         * @property
         * @type String
         */
        type: 'cr_star',

        /**
         * Constructor
         * @method initialize
         * @param {Object} [options] Options object
         * @return {fabric.cr_Star} thisArg
         */
        initialize: function (options) {

            options = options || {};
            //if( options.outerRadius == options.innerRadius ) options.numPoints /= 2; // "Half" points to generate a regular polygon

            this.points = [];

            this.set('shadow', options.shadow || null);

            this.set('numPoints', options.numPoints || 0);
            this.set('innerRadius', options.innerRadius || 0);
            this.set('outerRadius', options.outerRadius || 0);
            this.set('radius', options.outerRadius || 0);
            this.callSuper('initialize', options);

            this._setPoints();

        },

        /**
         * Sets the coordinates of the points for the given parameters
         * @private
         * @method _setPoints
         */
        _setPoints: function (ctx, noTransform) {

            var points = this.points = [];
            points.push({'x': 0, 'y': 0 - this.outerRadius});

            //var minX = Number.MAX_VALUE;
            //var minY = Number.MAX_VALUE;

            //var maxX = Number.MIN_VALUE;
            //var maxY = Number.MIN_VALUE;

            for (var n = 1; n < this.numPoints * 2; n++) {
                var radius = n % 2 === 0 ? this.outerRadius : this.innerRadius
                    , angle = n * Math.PI / this.numPoints
                    , x = radius * Math.sin(angle)
                    , y = -radius * Math.cos(angle)
                    ;

                //minX = Math.min(minX, x);
                //maxX = Math.max(maxX, x);

                //minY = Math.min(minY, y);
                //maxY = Math.max(maxY, y);

                points.push({'x': x, 'y': y});
            }

            var diameter = this.get('radius') * 2;
            this.set('width', diameter).set('height', diameter);
        },

        /**
         * Returns object representation of an instance
         * @method toObject
         * @return {Object} object representation of an instance
         */
        toObject: function () {
            return extend(this.callSuper('toObject'), {
                numPoints: this.get('numPoints')
                , innerRadius: this.get('innerRadius')
                , outerRadius: this.get('outerRadius')
                , radius: this.get('radius')
                , points: this.points
            });
        },

        /**
         * Returns svg representation of an instance
         * @method toSVG
         * @return {string} svg representation of an instance
         */
        toSVG: function () {

            var points = []
                , p = null;
            for (var i = 0, len = this.points.length; i < len; i++) {
                p = this.points[i];
                points.push(toFixed(p.x, 2), ',', toFixed(p.y, 2), ' ');
            }

            return [
                '<polygon ',
                'points="', points.join(''), '" ',
                'style="', this.getSvgStyles(), '" ',
                'transform="', this.getSvgTransform(), '" ',
                '/>'
            ].join('');

        },

        /**
         * @private
         * @method _render
         * @param ctx {CanvasRenderingContext2D} context to render on
         */
        _render: function (ctx, noTransform) {

            var points = this.points
                , p = null
                ;

            // Uncomment for shadows support
            // this._applyShadow( ctx ); // Shadow

            ctx.beginPath();

            // multiply by currently set alpha (the one that was set by path group where this object is contained, for example)
            ctx.globalAlpha *= this.opacity;

            p = points[0];
            ctx.moveTo(p.x, p.y);
            for (var n = 1, l = points.length; n < l; n++) {
                p = points[n];
                ctx.lineTo(p.x, p.y);
            }
            ctx.closePath();

            ctx.fillOpacity = 1;

            this._renderFill(ctx);
            this._renderStroke(ctx);

        },

        /**
         * Returns horizontal radius of an object (according to how an object is scaled)
         * @method getRadiusX
         * @return {Number}
         */
        getRadiusX: function () {
            return this.get('radius') * this.get('scaleX');
        },

        /**
         * Returns vertical radius of an object (according to how an object is scaled)
         * @method getRadiusY
         * @return {Number}
         */
        getRadiusY: function () {
            return this.get('radius') * this.get('scaleY');
        },

        /**
         * Sets radius of an object (and updates width accordingly)
         * @method setRadius
         * @return {Number}
         */
        setRadius: function (value) {
            this.radius = value;
            this.outerRadius = value;
            this._setPoints();
        },

        /**
         * Sets inner radius of an object (and updates width accordingly)
         * @method setRadius
         * @return {Number}
         */
        setInnerRadius: function (value) {
            this.innerRadius = value;
            this._setPoints();
        },

        /**
         * Sets radius of an object (and updates width accordingly)
         * @method setRadius
         * @return {Number}
         */
        setOuterRadius: function (value) {
            this.outerRadius = value;
            this._setPoints();
        },

        /**
         * Sets number of points of the star object (and updates width accordingly)
         * @method setRadius
         * @return {Number}
         */
        setNumPoints: function (value) {
            this.numPoints = value;
            this._setPoints();
        },

        /**
         * Returns complexity of an instance
         * @method complexity
         * @return {Number} complexity of this instance
         */
        complexity: function () {
            return this.points.length;
        }
    });

    /**
     * Returns {@link fabric.Polygon} instance from an SVG element
     * Since SVG doesn't have a star primitive, we rely on polygons
     * @static
     * @method fabric.cr_Star.fromElement
     * @param element {SVGElement} element to parse
     * @param options {Object} options object
     * @return {Object} instance of fabric.Polygon
     */
    fabric.cr_Star.fromElement = function (element, options) {

        if (!element) return null;
        return fabric.Polygon.fromElement(element, options);

    };

    /**
     * Returns {@link fabric.cr_Star} instance from an object representation
     * @static
     * @method fabric.cr_Star.fromObject
     * @param {Object} object Object to create an instance from
     * @return {Object} Instance of fabric.cr_Star
     */
    fabric.cr_Star.fromObject = function (object) {
        return new fabric.cr_Star(object);
    };

})(typeof exports != 'undefined' ? exports : this);