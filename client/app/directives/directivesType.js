(function () {
  angular.module("customersApp").directive("helloWorld", function () {
    return {
      template: "Hello World",
    };
  });

  angular.module("customersApp").directive("sharedScope", function () {
    return {
      template:
        "<div>Name: {{ customer.name }}  City: {{ customer.city }} </div>",
    };
  });

  angular.module("customersApp").directive("isolatedScope", function () {
    return {
      scope: {},
      template:
        "<div>Name: {{ customer.name }}  City: {{ customer.city }} </div>",
    };
  });

  angular
    .module("customersApp")
    .directive("isolatedScopeWithString", function () {
      return {
        scope: {
          name: "@",
        },
        template: "Name: {{name}}</div>",
      };
    });

  angular
    .module("customersApp")
    .directive("isolatedScopeWithObject", function () {
      return {
        scope: {
          datasource: "=",
        },
        template: `Name: {{datasource.name}} City: {{datasource.city}}
          <br /><button ng-click="datasource.name=\'Fred\'">change</button>
          </div>`,
      };
    });

  angular
    .module("customersApp")
    .directive("isolatedScopeWithEvent", function () {
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
