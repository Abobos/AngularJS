(function () {
  const CustomersController = function (
    $scope,
    $log,
    customersFactory,
    appSettings
  ) {
    $scope.SortBy = "name";
    $scope.SortBy = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {
      customersFactory.getCustomers().then(
        function successCallback({ data }) {
          $scope.customers = data;
        },
        function errorCallback(response) {
          $log.log(response.data.error);
        }
      );
    }

    init();
    $scope.doSort = function (propName) {
      $scope.SortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = [
    "$scope",
    "$log",
    "customersFactory",
    "appSettings",
  ];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();
