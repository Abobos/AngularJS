(function () {
  const linkDemo = function () {
    return {
      restrict: "A",
      link: function (scope, element, attribute) {
        element = element[0];

        element.addEventListener("click", () => {
          element.innerHTML = "you clicked me";
        });
        element.addEventListener("mouseenter", () => {
          element.style.backgroundColor = "yellow";
        });
        element.addEventListener("mouseleave", () => {
          element.style.backgroundColor = "white";
        });
      },
    };
  };
  angular.module("customersApp").directive("linkDemo", linkDemo);
})();
