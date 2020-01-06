angular.module('cr_Customify')
    .factory('cr_LanguageFactory', ['$rootScope', '$translate', function ($rootScope, $translate) {
        var self = this;

        self.language = {
            opened: false
        };

        self.languages = {
            en: 'English',
            ru: 'Русский'
            //de_DE: 'German',
            //it_IT: 'Italian'
        };

        self.selectedLanguage = self.languages[$translate.proposedLanguage()] || self.languages['en'];

        self.setLanguage = function (languageKey, $event) {
            self.selectedLanguage = self.languages[languageKey];

            $translate.use(languageKey);

            self.language.opened = !self.language.opened;
        };

        return self;
    }]);