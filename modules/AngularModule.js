var myApp = angular.module("SbuxModule", ['ui.router']);
myApp.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    //Define states of UI
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller:'homeController'
        })
        .state('store', {
            url: '/store',
            templateUrl: 'store_locations.html',
            controller:'homeController'
        })
        .state('items', {
            url: '/items',
            templateUrl: 'items_products.html',
            controller:'homeController'
        })
        .state('customer', {
            url: '/customer',
            templateUrl: 'customer.html',
            controller:'homeController'
        })
        .state('tables', {
            url: '/tables',
            templateUrl: 'tables.html',
            controller:'homeController'
        })
         .state('details', {
            url: '/details',
            templateUrl: 'details.html',
            controller:'homeController'
        })
    
    

        
}])
myApp.run(function ($location,$rootScope){
    $location.path("/home");
})