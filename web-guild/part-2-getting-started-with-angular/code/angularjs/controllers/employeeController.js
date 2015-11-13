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

        $scope.genderList = [
            {
                name: 'female',
                description: 'female'
            },
            {
                name: 'male',
                description: 'male'
            },
            {
                name: 'unsure',
                description: 'unsure'
            }
        ];

        $scope.employee = {
            gender : 'unsure'
        };

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