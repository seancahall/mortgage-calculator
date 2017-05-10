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
        vm.title = 'CalculatorController';

        // calculate the mortgage payment
        function calculatePayment(obj) {
            let monthlyInterestRate = (obj.rate / 100) / obj.period;
            let numberOfPayments = obj.term * obj.period;
            let compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
            let interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
            let monthlyPayment = obj.balance * interestQuotient;
            let roundedMonthlyPayment = monthlyPayment.toFixed(2);
            vm.result = "$" + roundedMonthlyPayment + " is your payment.";
        }

        vm.calculatePayment = calculatePayment;
    }
})();
