'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

    $scope.alerts = [
            {
                icon: 'glyphicon-user',
                color: 'btn-success',
                blurb: '20,408',
                desctiption: 'Total Customers'
            },
            {
              icon: 'glyphicon-home',
              color: 'btn-default',
              blurb: '20,408',
              desctiption: 'Total Customers'
            },
            {
              icon: 'glyphicon-user',
              color: 'btn-warning',
              blurb: '20,408',
              desctiption: 'Total Customers'
            },
            {
              icon: 'glyphicon-th',
              color: 'btn-danger',
              blurb: '20,408',
              desctiption: 'Total Customers'
            },
            {
              icon: 'glyphicon-th-list',
              color: 'btn-success',
              blurb: '20,408',
              desctiption: 'Total Customers'
            },
            {
              icon: 'glyphicon-user',
              color: 'btn-success',
              blurb: '20,408',
              desctiption: 'Total Customers'
            },
            {
              icon: 'glyphicon-filter',
              color: 'btn-default',
              blurb: '20,408',
              desctiption: 'Total Customers'
            }
        ];
    }
  ]);