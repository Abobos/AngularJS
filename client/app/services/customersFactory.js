(function () {
  const customersFactory = function ($http) {
    return {
      getCustomers: function () {
        return $http.get("/customers");
      },

      getCustomerDetails: function (customerId) {
        return $http.get(`/customers/${customerId}`);
      },

      getOrders: function () {
        return $http.get("/orders");
      },
    };
  };

  customersFactory.$inject = ["$http"];
  angular.module("customersApp").factory("customersFactory", customersFactory);
})();
