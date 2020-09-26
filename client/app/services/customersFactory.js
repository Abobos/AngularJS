(function () {
  const customersFactory = function ($http) {
    return {
      getCustomers: function () {
        return $http.get("/customers");
      },

      getCustomerDetails: function (customerId) {
        return $http.get(`/customers/${customerId}`);
      },
    };
  };

  customersFactory.$inject = ["$http"];
  angular.module("customersApp").factory("customersFactory", customersFactory);
})();
