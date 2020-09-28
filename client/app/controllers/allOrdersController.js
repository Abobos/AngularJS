(function () {
  const allOrdersContoller = function ($scope, customersFactory) {
    $scope.orders = null;
    $scope.ordersTotal = 0.0;
    $scope.totalType = "";

    function init() {
      customersFactory.getOrders().then(
        function successCallback(response) {
          $scope.orders = response.data;
          getOrdersTotal();
        },
        function errorCallback(response) {
          $log.log(response.error);
        }
      );
    }

    function getOrdersTotal() {
      $scope.ordersTotal = $scope.orders.reduce(
        (total, order) => (total += order.total),
        0
      );

      $scope.totalType =
        $scope.ordersTotal > 100
          ? "p-3 mb-2 bg-success text-white"
          : "p-3 mb-2 bg-danger text-white";
    }

    init();
  };
  allOrdersContoller.$inject = ["$scope", "customersFactory"];

  angular
    .module("customersApp")
    .controller("allOrdersController", allOrdersContoller);
})();
