(function () {
  const CustomersController = function (
    $scope,
    $log,
    customersFactory,
    appSettings,
    $window
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

    $scope.deleteCustomer = function (customerId) {
      customersFactory.deleteCustomer(customerId).then(
        function successCallback({ data }) {
          if (data.status) {
            const customerPosition = $scope.customers.findIndex(
              ({ id }) => customerId === id
            );

            $scope.customers.splice(customerPosition, 1);

            $window.alert("delete successfully");
          } else {
            $window.alert("undable to delete customer");
          }
        },
        function errorCallback(response) {
          $log.log(response.data.error);
        }
      );
    };
  };

  CustomersController.$inject = [
    "$scope",
    "$log",
    "customersFactory",
    "appSettings",
    "$window",
  ];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();
