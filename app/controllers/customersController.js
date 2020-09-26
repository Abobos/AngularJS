(function () {
  const CustomersController = function ($scope, customersService) {
    $scope.SortBy = "name";
    $scope.SortBy = false;
    $scope.customers = [];

    function init() {
      $scope.customers = customersService.getCustomers();
    }

    init();
    $scope.doSort = function (propName) {
      $scope.SortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ["$scope", "customersService"];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();
