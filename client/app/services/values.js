(function () {
  angular.module("customersApp").value("appSettings", {
    title: "Customers Application",
    version: "1.0",
    api: "http://localhost:8080",
  });
})();

// angular.module('customersApp').constant('appSettings', {
//     title: 'Customers Application',
//     version: '1.0',
// })
