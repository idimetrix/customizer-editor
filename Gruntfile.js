module.exports = function (grunt) {

    var BUILD_DIR = grunt.option('build_dir') ? grunt.option('build_dir') : 'build';

    var BUILD_KEY = new Date().getTime();
    BUILD_KEY = '';

    var INDEX_FILE = 'editor.php';
    var IMAGES_FOLDER = 'img';

    var FILES = [
        'vendor/**',
        'tpl/**',
        'img/**'
    ];

    var VENDOR_CSS = [

    ];

    var APP_CSS = [
        'css/cr_animate.css',
        'css/cr_helpers.css',
        'css/cr_app.css'
    ];

    var VENDOR_JS = [

    ];

    var APP_JS = [

        'js/cr_app.js',

        // utils
        'js/cr_class.js',
        'js/cr_checker.js',
        'js/cr_utils.js',

        // config
        'js/config/cr_Config.js',

        // modules
        'js/modules/SafeApply.js',
        'js/modules/fabric.manager.js',

        // enums
        'js/enums/cr_Enums.js',

        // data
        'js/data/cr_DataFactory.js',

        // directives
        'js/directives/cr_Fullscreen.js',
        'js/directives/cr_Layout.js',

        // dialogs
        'js/dialogs/cr_BaseDialog.js',
        'js/dialogs/cr_AlertDialog.js',
        'js/dialogs/cr_ConfirmDialog.js',

        // factories
        'js/factories/cr_AppFactory.js',
        'js/factories/cr_EditorFactory.js',
        'js/factories/cr_DrawFactory.js',
        'js/factories/cr_LanguageFactory.js',
        'js/factories/cr_LayoutFactory.js',
        'js/factories/cr_LoaderFactory.js',
        'js/factories/cr_PreloaderFactory.js',
        'js/factories/cr_TreeFactory.js',
        'js/factories/cr_ContentFactory.js',
        'js/factories/cr_FullscreenFactory.js',
        'js/factories/cr_ScrollbarFactory.js',
        'js/factories/cr_DrawerFactory.js',

        // filters
        'js/filters/cr_CutFilter.js',
        'js/filters/cr_TrimFilter.js',

        // managers
        'js/managers/cr_KeysManager.js',
        'js/managers/cr_MouseManager.js',
        'js/managers/cr_DialogsManager.js',
        'js/managers/cr_EventsManager.js',
        'js/managers/cr_UtilsManager.js',
        'js/managers/cr_CommandsManager.js',
        'js/managers/cr_ModelsManager.js',
        'js/managers/cr_URLManager.js',
        'js/managers/cr_ResourcesManager.js',

        // models
        'js/models/cr_BaseModel.js',
        'js/models/cr_UserModel.js',
        'js/models/cr_ProductModel.js',
        'js/models/cr_ProjectModel.js',
        'js/models/cr_LibraryModel.js',
        'js/models/cr_MotifModel.js',
        'js/models/cr_SizeModel.js',
        'js/models/cr_UploadModel.js',
        'js/models/cr_ExtraFontModel.js',
        'js/models/cr_PreviewModel.js',
        'js/models/cr_PrintItems.js',
        'js/models/cr_LibraryItems.js',
        'js/models/cr_TypesPrint.js',
        'js/models/cr_textFontItems.js',
        'js/models/cr_ListColor.js',
        'js/models/cr_LoadImages.js',
        'js/models/db/cr_db_CategoryModel.js',
        'js/models/db/cr_db_FontpicModel.js',
        'js/models/db/cr_db_PicModel.js',
        'js/models/db/cr_db_PictagModel.js',
        'js/models/db/cr_db_ProductModel.js',
        'js/models/db/cr_db_TemplateModel.js',
        'js/models/db/cr_db_UploadpicModel.js',
        'js/models/db/cr_db_UserModel.js',
        'js/models/draw/cr_CircleModel.js',
        'js/models/draw/cr_ImageModel.js',
        'js/models/draw/cr_RectModel.js',
        'js/models/draw/cr_TextModel.js',
        'js/models/draw/cr_LineModel.js',
        'js/models/draw/cr_PolygonModel.js',
        'js/models/draw/cr_SVGModel.js',

        // services
        'js/services/cr_BaseService.js',
        'js/services/cr_RequestService.js',
        'js/services/cr_UploadService.js',

        // utils
        'js/utils/cr_ArrayUtils.js',
        'js/utils/cr_DataUtils.js',
        'js/utils/cr_DateUtils.js',
        'js/utils/cr_LogUtils.js',
        'js/utils/cr_NumberUtils.js',
        'js/utils/cr_ObjectUtils.js',
        'js/utils/cr_StringUtils.js',
        'js/utils/cr_ColorUtils.js',
        'js/utils/cr_CustomUtils.js',

        // commands
        'js/commands/cr_BaseCommand.js',
        'js/commands/cr_MacroCommand.js',
        'js/commands/cr_ClearWorkAreaCommand.js',
        'js/commands/cr_ExportWorkAreaAsJPGCommand.js',
        'js/commands/cr_ExportWorkAreaAsPDFCommand.js',
        'js/commands/cr_ExportWorkAreaAsPNGCommand.js',
        'js/commands/cr_ExportWorkAreaCommand.js',
        'js/commands/cr_ImportWorkAreaCommand.js',
        'js/commands/cr_ObjectAddCommand.js',
        'js/commands/cr_ObjectChangeCommand.js',
        'js/commands/cr_ObjectManipulationCommand.js',
        'js/commands/cr_ObjectRemoveCommand.js',
        'js/commands/cr_PanWorkAreaCommand.js',
        'js/commands/cr_ZoomWorkAreaCommand.js',

        // controllers
        'js/controllers/cr_AppCtrl.js',
        'js/controllers/cr_EditorCtrl.js',
        'js/controllers/cr_DrawCtrl.js'

    ];

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build_folder: {
                src: [BUILD_DIR]
            },
            build_files: {
                src: [
                    BUILD_DIR + '/js/app.min.js',
                    BUILD_DIR + '/js/vendor.min.js',
                    BUILD_DIR + '/css/app.min.css',
                    BUILD_DIR + '/css/vendor.min.css'
                ]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: FILES, dest: BUILD_DIR}
                ]
            }
        },
        htmlbuild: {
            dist: {
                src: INDEX_FILE,
                dest: BUILD_DIR,
                options: {
                    beautify: false,
                    relative: true,
                    scripts: {
                        all: BUILD_DIR + '/js/all' + BUILD_KEY + '.min.js'
                        //all: [BUILD_DIR + '/js/vendor.min.js', BUILD_DIR + '/js/app.min.js']
                    },
                    styles: {
                        all: [BUILD_DIR + '/css/all' + BUILD_KEY + '.min.css']
                        //all: [BUILD_DIR + '/css/vendor.min.css', BUILD_DIR + '/css/app.min.css']
                    }
                }
            }
        },
        uglify: {
            combine_vendor: {
                options: {
                    mangle: false,
                    compress: false,
                    beautify: false,
                    warnings: false,
                    //wrap: 'wrapper',
                    sourceMap: false
                },
                files: VENDOR_JS && VENDOR_JS.length ? [
                    {
                        src: VENDOR_JS,
                        dest: BUILD_DIR + '/js/vendor.min.js'
                    }
                ] : []
            },
            combine_app: {
                options: {
                    mangle: true,
                    compress: true,
                    beautify: false,
                    warnings: false,
                    wrap: 'wrapper',
                    sourceMap: false
                },
                files: [
                    {
                        src: APP_JS,
                        dest: BUILD_DIR + '/js/app.min.js'
                    }
                ]
            },
            final_combine_js: {
                options: {
                    mangle: false,
                    compress: false,
                    beautify: false,
                    warnings: false,
                    wrap: 'wrapper',
                    sourceMap: false
                },
                files: [
                    {
                        src: [BUILD_DIR + '/js/vendor.min.js', BUILD_DIR + '/js/app.min.js'],
                        dest: BUILD_DIR + '/js/all' + BUILD_KEY + '.min.js'
                    }
                ]
            }
        },
        cssmin: {
            combine_vendor: {
                files: VENDOR_CSS && VENDOR_CSS.length ? [
                    {
                        src: VENDOR_CSS,
                        dest: BUILD_DIR + '/css/vendor.min.css'
                    }
                ] : []
            },
            combine_app: {
                files: [
                    {
                        src: APP_CSS,
                        dest: BUILD_DIR + '/css/app.min.css'
                    }
                ]
            },
            final_combine_css: {
                files: [
                    {
                        src: [BUILD_DIR + '/css/vendor.min.css', BUILD_DIR + '/css/app.min.css'],
                        dest: BUILD_DIR + '/css/all' + BUILD_KEY + '.min.css'
                    }
                ]
            }
        },
        imagemin: {
            dynamic: {
                files: [
                    {
                        expand: true,
                        cwd: IMAGES_FOLDER + '/',
                        src: ['*.{png,jpg,gif}'],
                        dest: BUILD_DIR + '/' + IMAGES_FOLDER
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', [
        'clean:build_folder',
        'copy',
        'uglify:combine_vendor',
        'uglify:combine_app',
        'uglify:final_combine_js',
        'cssmin:combine_vendor',
        'cssmin:combine_app',
        'cssmin:final_combine_css',
        'imagemin',
        'htmlbuild',
        'clean:build_files'
    ]);
};