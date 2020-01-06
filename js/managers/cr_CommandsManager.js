angular.module('cr_Customify')
    .factory('cr_CommandsManager', ['$rootScope', '$safeApply', 'cr_Enums', 'cr_DrawFactory', 'cr_EventsManager', 'cr_BaseCommand', 'cr_ClearWorkAreaCommand', 'cr_ExportWorkAreaAsJPGCommand', 'cr_ExportWorkAreaAsPDFCommand', 'cr_ExportWorkAreaAsPNGCommand', 'cr_ExportWorkAreaCommand', 'cr_ImportWorkAreaCommand', 'cr_MacroCommand', 'cr_ObjectAddCommand', 'cr_ObjectSelectionCommand', 'cr_ObjectManipulationCommand', 'cr_ObjectRemoveCommand', 'cr_MoveWorkAreaCommand', 'cr_ZoomWorkAreaCommand', 'cr_ObjectBringToFrontCommand', 'cr_ObjectSendToBackCommand', 'cr_ObjectExchangeCommand', 'cr_GroupObjectsCommand', 'cr_CircleAddCommand', 'cr_GraphicTextAddCommand', 'cr_ImageAddCommand', 'cr_LineAddCommand', 'cr_OvalAddCommand', 'cr_PolygonAddCommand', 'cr_RectAddCommand', 'cr_SVGAddCommand', 'cr_TextAddCommand', 'cr_RichTextAddCommand', 'cr_QRCodeAddCommand', 'cr_BarCodeAddCommand', 'cr_BridgeTextAddCommand', 'cr_CurveTextAddCommand', 'cr_ITextAddCommand', 'cr_StarAddCommand', 'cr_TextboxAddCommand', 'cr_TriangleAddCommand',
        function ($rootScope, $safeApply, cr_Enums, cr_DrawFactory, cr_EventsManager, cr_BaseCommand, cr_ClearWorkAreaCommand, cr_ExportWorkAreaAsJPGCommand, cr_ExportWorkAreaAsPDFCommand, cr_ExportWorkAreaAsPNGCommand, cr_ExportWorkAreaCommand, cr_ImportWorkAreaCommand, cr_MacroCommand, cr_ObjectAddCommand, cr_ObjectSelectionCommand, cr_ObjectManipulationCommand, cr_ObjectRemoveCommand, cr_MoveWorkAreaCommand, cr_ZoomWorkAreaCommand, cr_ObjectBringToFrontCommand, cr_ObjectSendToBackCommand, cr_ObjectExchangeCommand, cr_GroupObjectsCommand, cr_CircleAddCommand, cr_GraphicTextAddCommand, cr_ImageAddCommand, cr_LineAddCommand, cr_OvalAddCommand, cr_PolygonAddCommand, cr_RectAddCommand, cr_SVGAddCommand, cr_TextAddCommand, cr_RichTextAddCommand, cr_QRCodeAddCommand, cr_BarCodeAddCommand, cr_BridgeTextAddCommand, cr_CurveTextAddCommand, cr_ITextAddCommand, cr_StarAddCommand, cr_TextboxAddCommand, cr_TriangleAddCommand) {

            var self = this;

            // ---

            self.cr_BaseCommand = cr_BaseCommand;
            self.cr_ClearWorkAreaCommand = cr_ClearWorkAreaCommand;
            self.cr_ExportWorkAreaAsJPGCommand = cr_ExportWorkAreaAsJPGCommand;
            self.cr_ExportWorkAreaAsPDFCommand = cr_ExportWorkAreaAsPDFCommand;
            self.cr_ExportWorkAreaAsPNGCommand = cr_ExportWorkAreaAsPNGCommand;
            self.cr_ExportWorkAreaCommand = cr_ExportWorkAreaCommand;
            self.cr_ImportWorkAreaCommand = cr_ImportWorkAreaCommand;
            self.cr_MacroCommand = cr_MacroCommand;
            self.cr_ObjectAddCommand = cr_ObjectAddCommand;
            self.cr_ObjectSelectionCommand = cr_ObjectSelectionCommand;
            self.cr_ObjectManipulationCommand = cr_ObjectManipulationCommand;
            self.cr_ObjectRemoveCommand = cr_ObjectRemoveCommand;
            self.cr_MoveWorkAreaCommand = cr_MoveWorkAreaCommand;
            self.cr_ZoomWorkAreaCommand = cr_ZoomWorkAreaCommand;
            self.cr_ObjectBringToFrontCommand = cr_ObjectBringToFrontCommand;
            self.cr_ObjectSendToBackCommand = cr_ObjectSendToBackCommand;
            self.cr_ObjectExchangeCommand = cr_ObjectExchangeCommand;
            self.cr_GroupObjectsCommand = cr_GroupObjectsCommand;

            self.cr_CircleAddCommand = cr_CircleAddCommand;
            self.cr_GraphicTextAddCommand = cr_GraphicTextAddCommand;
            self.cr_ImageAddCommand = cr_ImageAddCommand;
            self.cr_LineAddCommand = cr_LineAddCommand;
            self.cr_OvalAddCommand = cr_OvalAddCommand;
            self.cr_PolygonAddCommand = cr_PolygonAddCommand;
            self.cr_RectAddCommand = cr_RectAddCommand;
            self.cr_SVGAddCommand = cr_SVGAddCommand;
            self.cr_TextAddCommand = cr_TextAddCommand;
            self.cr_RichTextAddCommand = cr_RichTextAddCommand;
            self.cr_QRCodeAddCommand = cr_QRCodeAddCommand;
            self.cr_BarCodeAddCommand = cr_BarCodeAddCommand;

            self.cr_BridgeTextAddCommand = cr_BridgeTextAddCommand;
            self.cr_CurveTextAddCommand = cr_CurveTextAddCommand;
            self.cr_ITextAddCommand = cr_ITextAddCommand;
            self.cr_StarAddCommand = cr_StarAddCommand;
            self.cr_TextboxAddCommand = cr_TextboxAddCommand;
            self.cr_TriangleAddCommand = cr_TriangleAddCommand;

            // ---

            self.commands = [];

            self.iterator = 0;

            // ---

            var canUndo = false;
            var canRedo = false;

            /**
             *
             */
            function checkRedoUndo() {
                canUndo = self.iterator !== 0;
                canRedo = self.iterator < self.commands.length;
            }

            self.canUndo = function () {
                return canUndo;
            };

            self.canRedo = function () {
                return canRedo;
            };

            /**
             *
             * @param command
             * @returns {*}
             */
            self.pushAndExecute = function (command) {
                $safeApply(function () {
                    command.execute();

                    var undoable = command.undoable;

                    if (undoable) {
                        if (self.iterator == self.commands.length) {
                            self.commands.push(command);
                        } else {
                            self.commands = self.commands.slice(0, self.iterator);
                            self.commands.push(command);
                        }
                        self.iterator = self.commands.length;
                    } else {
                        self.commands = [];
                    }

                    checkRedoUndo();

                    cr_DrawFactory.fabric.renderAll();

                    cr_DrawFactory.fabric.calcOffset();

                    cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize);
                });

                return command;
            };

            /**
             *
             * @param command
             * @returns {*}
             */
            self.execute = function (command) {
                $safeApply(function () {
                    command.execute();

                    var undoable = command.undoable;

                    checkRedoUndo();

                    cr_DrawFactory.fabric.renderAll();

                    cr_DrawFactory.fabric.calcOffset();

                    cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize);
                });

                return command;
            };

            /**
             *
             * @returns {boolean}
             */
            self.undo = function () {
                if (self.iterator > 0) {
                    self.iterator--;
                } else {
                    return false;
                }

                $safeApply(function () {
                    self.commands[self.iterator].undo();

                    checkRedoUndo();

                    cr_DrawFactory.fabric.renderAll();

                    cr_DrawFactory.fabric.calcOffset();

                    cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize);
                });

                return true;
            };

            /**
             *
             * @returns {boolean}
             */
            self.redo = function () {
                if (self.iterator > self.commands.length - 1) {
                    return false;
                }

                $safeApply(function () {
                    self.commands[self.iterator].execute();

                    self.iterator++;

                    checkRedoUndo();

                    cr_DrawFactory.fabric.renderAll();

                    cr_DrawFactory.fabric.calcOffset();

                    cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize);
                });

                return true;
            };

            /**
             *
             */
            self.clear = function () {
                $safeApply(function () {
                    self.commands = [];
                    self.iterator = 0;

                    checkRedoUndo();

                    cr_DrawFactory.fabric.renderAll();

                    cr_DrawFactory.fabric.calcOffset();

                    cr_EventsManager.manager(cr_Enums.EVENTS_STORAGES.PROPERTIES.name).emit(cr_Enums.EVENTS_STORAGES.PROPERTIES.events.initialize);
                });
            };

            return self;
        }]);