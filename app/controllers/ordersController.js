(function () {
  const OrdersController = function ($scope, $routeParams, customersService) {
    const { customerId } = $routeParams;
    $scope.customerDetails = null;

    function init() {
      $scope.customerDetails =
        customersService.getCustomerDetails(customerId) || null;
    }

    init();
  };

  OrdersController.$inject = ["$scope", "$routeParams", "customersService"];

  angular
    .module("customersApp")
    .controller("OrdersController", OrdersController);
})();
