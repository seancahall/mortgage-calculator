angular
// module
    .module('app', [])
    // component
    .component('calculator', {
        controller: "CalculatorController",
        controllerAs: "vm",
        templateUrl: "app/calculator-form.html"
    });
