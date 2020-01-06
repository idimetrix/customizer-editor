angular.module('cr_Customify').factory('cr_Config', ['$location', function ($location) {
    var self = this;


    return self;
}]);


angular.module('cr_Customify').run(function (editableOptions, editableThemes) {
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3';
});

angular.module('cr_Customify').config(['$httpProvider', function ($httpProvider) {
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    //$httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.withCredentials = false;
    $httpProvider.defaults.useXDomain = true;


    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function (obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function (data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];

}]);

angular.module('cr_Customify').run(['editableOptions', 'editableThemes', function (editableOptions, editableThemes) {
    editableThemes.bs3.inputClass = 'input-xs';
    editableThemes.bs3.buttonsClass = 'btn-xs';
    editableOptions.theme = 'bs3';
}]);

angular.module('cr_Customify').config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'l10n/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useLocalStorage();
}]);

angular.module('cr_Customify').config(['$provide', function ($provide) {
    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function (taRegisterTool, taOptions) {
        taOptions.classes = {
            focussed: 'focussed',
            toolbar: 'btn-toolbar',
            toolbarGroup: 'btn-group',
            toolbarButton: 'btn btn-default btn-sm',
            toolbarButtonActive: 'active',
            disabled: 'disabled',
            textEditor: '',
            htmlEditor: ''
        };

        return taOptions; // whatever you return will be the taOptions
    }]);

    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function (taRegisterTool, taOptions) {
        // $delegate is the taOptions we are decorating
        // register the tool with textAngular

        taRegisterTool('backgroundColor', {
            display: "<button colorpicker class='btn btn-default ng-scope' title='Background Color' type='button' colorpicker-close-on-select colorpicker-position='bottom' ng-model='backgroundColor' style='color: {{backgroundColor}}'><i style='color: {{backgroundColor}}' class='fa fa-paint-brush'></i></button>",
            action: function (deferred) {
                var self = this;

                this.$editor().wrapSelection('backgroundColor', this.backgroundColor);
                if (typeof self.listener == 'undefined') {
                    self.listener = self.$watch('backgroundColor', function (newValue) {
                        self.$editor().wrapSelection('backColor', newValue);
                    });
                }
                self.$on('colorpicker-selected', function () {
                    deferred.resolve();
                });
                self.$on('colorpicker-closed', function () {
                    deferred.resolve();
                });
                return false;
            },
            activeState: function (commonElement) {// state is detected by the HTML class 'gloss'
                console.log('activeState', arguments, this, commonElement);

                //this.backgroundColor = 'rgb(0, 0, 0)';

                if (commonElement) {
                    this.backgroundColor = commonElement.css('background-color');

                    return commonElement.is('span')
                }

                return false;
            }
        });
        taOptions.toolbar[1].unshift('backgroundColor');

        taRegisterTool('fontColor', {
            display: "<button colorpicker type='button' class='btn btn-default ng-scope'  title='Font Color'  colorpicker-close-on-select colorpicker-position='bottom' ng-model='fontColor' style='color: {{fontColor}}'><i style='color: {{fontColor}}' class='fa fa-font '></i></button>",
            action: function (deferred) {
                var self = this;

                if (typeof self.listener == 'undefined') {
                    self.listener = self.$watch('fontColor', function (newValue) {
                        self.$editor().wrapSelection('foreColor', newValue);
                    });
                }
                self.$on('colorpicker-selected', function () {
                    deferred.resolve();
                });
                self.$on('colorpicker-closed', function () {
                    deferred.resolve();
                });
                return false;
            },
            activeState: function (commonElement) {// state is detected by the HTML class 'gloss'
                console.log('activeState', arguments, this);

                //this.fontColor = 'rgb(0, 0, 0)';

                if (commonElement) {
                    this.fontColor = commonElement.css('color');

                    return commonElement.is('font')
                }

                return false;
            }
        });
        taOptions.toolbar[1].unshift('fontColor');

        taOptions.setup.textEditorSetup = function ($element) {
            $element.attr('ui-codemirror', '');
        };
        return taOptions;
    }]);

    $provide.decorator('taTools', ['$delegate', function (taTools) {
        taTools.html = $.extend(taTools.html, {
            buttontext: 'HTML',
            iconclass: null
        });

        return taTools;
    }]);

}]);