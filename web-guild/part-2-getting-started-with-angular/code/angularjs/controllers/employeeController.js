(function () {
    'use strict';

    var app = angular.module('acme.employee.controller', ['acme.employee.service']);

    app.config(function ($routeProvider) {
        $routeProvider.when('/employee', {
            templateUrl: 'views/employee.html',
            controller: 'EmployeeController'
        });

    });

    app.controller('EmployeeController', function ($scope, EmployeeService) {

        $scope.employee = {};

        function getEmployeeList() {
            EmployeeService.get().then(function (data) {
                $scope.employeeList = data;
            });
        }

        getEmployeeList();

        $scope.save = function () {
            EmployeeService.save($scope.employee).then(function () {
                getEmployeeList();
            });

        };

    });

}());