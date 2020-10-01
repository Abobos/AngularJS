(function () {
  const OrdersController = function (
    $scope,
    $log,
    $routeParams,
    customersFactory
  ) {
    const { customerId } = $routeParams;

    $scope.customerDetails = null;

    function init() {
      customersFactory.getCustomerDetails(customerId).then(
        function successCallback({ data }) {
          $scope.customerDetails = data;
        },
        function errorCallback(response) {
          $log.log(response.data.error);
        }
      );
    }

    init();
  };

  OrdersController.$inject = [
    "$scope",
    "$log",
    "$routeParams",
    "customersFactory",
  ];

  angular
    .module("customersApp")
    .controller("OrdersController", OrdersController);
})();
