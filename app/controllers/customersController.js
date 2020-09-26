(function () {
  const CustomersController = function ($scope, customersFactory) {
    $scope.SortBy = "name";
    $scope.SortBy = false;
    $scope.customers = [];

    function init() {
      $scope.customers = customersFactory.getCustomers();
    }

    init();
    $scope.doSort = function (propName) {
      $scope.SortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ["$scope", "customersFactory"];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();
