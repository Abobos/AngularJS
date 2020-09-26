(function () {
  const CustomersController = function ($scope, customersService, appSettings) {
    $scope.SortBy = "name";
    $scope.SortBy = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {
      $scope.customers = customersService.getCustomers();
    }

    init();
    $scope.doSort = function (propName) {
      $scope.SortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ["$scope", "customersService", "appSettings"];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();
