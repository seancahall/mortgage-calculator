(function() {
    'use strict';

    angular
        .module('app')
        .controller('CalculatorController', CalculatorController);

    CalculatorController.$inject = [];

    /* @ngInject */
    function CalculatorController() {

        // alias context, instantiate the model variables
        var vm = this;
        vm.balance = 0;
        vm.rate = 0;
        vm.term = 0;
        vm.period = 0;

        // calculate the mortgage payment
        function calculatePayment() {
            let monthlyInterestRate = (vm.rate / 100) / vm.period;
            let numberOfPayments = vm.term * vm.period;
            let compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
            let interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
            let monthlyPayment = vm.balance * interestQuotient;
            vm.result = "$" + monthlyPayment.toFixed(2) + " is your payment.";
        }

        vm.calculatePayment = calculatePayment;
    }
})();
