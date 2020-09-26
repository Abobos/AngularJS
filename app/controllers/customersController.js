(function () {
  const CustomersController = function ($scope) {
    $scope.customers = [
      {
        id: 1,
        city: "time",
        name: "John",
        orderTotal: 10.09,
        joined: "2020-04-03",
        orders: [
          {
            id: 1,
            product: "Shoes",
            total: 910.09,
          },
        ],
      },
      {
        id: 2,
        city: "Blessing",
        name: "Doris",
        orderTotal: 8989.9,
        joined: "2020-10-01",
        orders: [
          {
            id: 2,
            product: "Trousers",
            total: 998.0,
          },
          {
            id: 3,
            product: "Shirts",
            total: 998.0,
          },
        ],
      },
    ];
    $scope.doSort = function (propName) {
      $scope.SortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ["$scope"];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();
