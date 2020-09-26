(function () {
  const OrdersController = function ($scope, $routeParams) {
    const { customerId } = $routeParams;

    function init() {
      const requestedCustomerDetail = $scope.customers.find(
        ({ id }) => +customerId === id
      );
      $scope.orders = requestedCustomerDetail.orders;
    }

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

    init();
  };

  OrdersController.$inject = ["$scope", "$routeParams"];

  angular
    .module("customersApp")
    .controller("OrdersController", OrdersController);
})();
