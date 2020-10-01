(function () {
  const app = angular.module("customersApp", ["ngRoute", "ngAnimate"]);

  app.config(function ($routeProvider) {
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
      .otherwise({ redirectTo: "/" });
  });

  app.directive("helloWorld", function () {
    return {
      template: "Hello World",
    };
  });
})();
