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
      .when("/direct", {
        controller: "DirectivesController",
        templateUrl: "app/views/direct.html",
      })
      .otherwise({ redirectTo: "/" });
  });

  app.directive("helloWorld", function () {
    return {
      template: "Hello World",
    };
  });

  app.directive("sharedScope", function () {
    return {
      template:
        "<div>Name: {{ customer.name }}  City: {{ customer.city }} </div>",
    };
  });

  app.directive("isolatedScope", function () {
    return {
      scope: {},
      template:
        "<div>Name: {{ customer.name }}  City: {{ customer.city }} </div>",
    };
  });

  app.directive("isolatedScopeWithString", function () {
    return {
      scope: {
        name: "@",
      },
      template: "Name: {{name}}</div>",
    };
  });

  app.directive("isolatedScopeWithObject", function () {
    return {
      scope: {
        datasource: "=",
      },
      template: `Name: {{datasource.name}} City: {{datasource.city}}
      <br /><button ng-click="datasource.name=\'Fred\'">change</button>
      </div>`,
    };
  });

  app.directive("isolatedScopeWithEvent", function () {
    return {
      scope: {
        datasource: "=",
        action: "&",
      },
      template: `Name: {{datasource.name}} City: {{datasource.city}}
      <br /><button ng-click="action()">change</button></div>`,
    };
  });
})();
