(function () {
  angular.module("customersApp", ["ngRoute", "ngAnimate"]);

  angular.module("customersApp").config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "CustomersController",
        templateUrl: "app/views/customers.html",
      })
      .when("/orders/:customerId", {
        controller: "OrdersController",
        templateUrl: "app/views/orders.html",
      })
      .when("/orders", {
        controller: "allOrdersController",
        templateUrl: "app/views/allorders.html",
      })
      .when("/direct", {
        controller: "DirectivesController",
        templateUrl: "app/views/direct.html",
      })
      .otherwise({ redirectTo: "/" });
  });
})();
