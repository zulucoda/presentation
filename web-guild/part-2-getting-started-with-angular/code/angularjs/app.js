/**
 * Created by muzi on 2015/11/12.
 */
(function () {
   'use strict';

    var app = angular.module('acme',
        [
            'ngRoute',
            'acme.employee.service',
            'acme.employee.controller'
        ]);

    app.config(function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/employee'});
    });

})();