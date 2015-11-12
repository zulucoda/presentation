/**
 * Created by muzi on 2015/11/12.
 */
(function () {
    'use strict';

    var app = angular.module('acme.employee.service', []);

    app.factory('EmployeeService', function ($http) {

        var serviceBase = 'http://localhost:3000/';
        var serviceFactory = {};

        serviceFactory.get = function () {
            return $http.get(serviceBase + 'employees').then(function (results) {
                return results.data;
            });
        };

        serviceFactory.save = function (employee) {
            return $http.post(serviceBase + 'employees', employee).then(function (results) {
                return results;
            });
        };

        return serviceFactory;

    });


}());
