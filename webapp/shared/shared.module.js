(function() {
    'use strict';
    /**
     * Shared Module
     *
     * This module include all common utilities modules used accross the app.
     */
    angular.module('shared', [
        'gettext',
        'ngAnimate', 
        'ngCookies', 
        'ngSanitize', 
        'ngResource', 
        'ui.bootstrap',

        'exception',
        'router'
    ]).run(['gettextCatalog', function(gettextCatalog) {
            gettextCatalog.currentLanguage = 'sv';
            //gettextCatalog.debug = true;
        }
    ]);
})();