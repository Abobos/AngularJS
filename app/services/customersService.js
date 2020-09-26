(function () {
  const customersService = function () {
    const customers = [
      {
        id: 1,
        city: "time",
        name: "John",
        orderTotal: 10.09,
        joined: "2020-04-03",
        orders: [
          {
            id: 1,
            product: "Shoes",
            total: 910.09,
          },
        ],
      },
      {
        id: 2,
        city: "Blessing",
        name: "Doris",
        orderTotal: 8989.9,
        joined: "2020-10-01",
        orders: [
          {
            id: 2,
            product: "Trousers",
            total: 998.0,
          },
          {
            id: 3,
            product: "Shirts",
            total: 998.0,
          },
        ],
      },
    ];

    this.getCustomers = function () {
      return customers;
    };

    this.getCustomerDetails = function (customerId) {
      const customerDetails = customers.find(({ id }) => +customerId === id);
      return customerDetails && customerDetails;
    };
  };

  angular.module("customersApp").service("customersService", customersService);
})();
