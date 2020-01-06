(function () {
    var cr_SaveDialog = function ($scope, $modalInstance, parameters, cr_DataFactory, cr_DrawFactory) {
        var self = this;

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';

        self.message = [];
        self.errors = [];
        self.loading = false;

        // ---

        $scope.product = cr_DataFactory.product;

        // ---

        self.exportAsPDF = function () {
            var imgData = cr_DrawFactory.canvas[0].toDataURL("image/png", 1.0);
            var pdf = new jsPDF();

            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save('canvas.pdf');
        };
        self.exportAsJPG = function () {
            cr_DrawFactory.canvas[0].toBlob(function (blob) {
                saveAs(blob, 'canvas.jpg');
            });
        };
        self.exportAsPNG = function () {
            cr_DrawFactory.canvas[0].toBlob(function (blob) {
                saveAs(blob, 'canvas.png');
            });
        };


        self.ok = function () {
            $modalInstance.close();
        };

        self.cancel = function () {
            $modalInstance.dismiss();
        };

        return self;
    };

    // ---

    cr_SaveDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_DataFactory',
        'cr_DrawFactory'
    ];

    angular.module('cr_Customify').controller('cr_SaveDialog', cr_SaveDialog);
})();
