(function () {
  const OrdersController = function ($scope, $routeParams, customersFactory) {
    const { customerId } = $routeParams;
    $scope.customerDetails = null;

    function init() {
      $scope.customerDetails =
        customersFactory.getCustomerDetails(customerId) || null;
    }

    init();
  };

  OrdersController.$inject = ["$scope", "$routeParams", "customersFactory"];

  angular
    .module("customersApp")
    .controller("OrdersController", OrdersController);
})();
