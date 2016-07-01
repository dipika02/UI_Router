angular.module('formApp', [ 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form_profile.html'
        })
        
        .state('form.interes', {
            url: '/interes',
            templateUrl: 'form_interes.html'
        })
        
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form_payment.html'
        });
        
    $urlRouterProvider.otherwise('/form/profile');
})

.controller('formController', function($scope) {
    
    $scope.formData = {};
    
    $scope.processForm = function() {
        alert('awesome!');
    };
    
});