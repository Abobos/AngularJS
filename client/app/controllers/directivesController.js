(function () {
  const DirectivesController = function ($scope) {
    $scope.customer = {
      id: 1,
      joined: "2000-12-02",
      name: "John",
      city: "Chandler",
      orderTotal: 9.9956,
      orders: [
        {
          id: 1,
          product: "Shoes",
          total: 9.9956,
        },
      ],
    };
    $scope.customers = [
      {
        id: 1,
        joined: "2000-12-02",
        name: "John",
        city: "Chandler",
        orderTotal: 9.9956,
        orders: [
          {
            id: 1,
            product: "Shoes",
            total: 9.9956,
          },
        ],
      },
      {
        id: 2,
        joined: "1965-01-25",
        name: "Zed",
        city: "Las Vegas",
        orderTotal: 19.99,
        orders: [
          {
            id: 2,
            product: "Baseball",
            total: 9.995,
          },
          {
            id: 3,
            product: "Bat",
            total: 9.995,
          },
        ],
      },
    ];

    $scope.addCustomer = function (name) {
      console.log(name);
      $scope.customers.push({
        name: name ? name : "New Customer" + 1,
        city: counter + "Cedar Point $t",
        age: counter,
      });
    };

    $scope.changeData = function () {
      $scope.customer = {
        name: "James",
        city: 1 + "Cedar Point St",
      };
    };
    DirectivesController.$inject = ["$scope"];
  };
  angular
    .module("customersApp")
    .controller("DirectivesController", DirectivesController);
})();
