describe('mortgage calculator controller tests', function() {

    beforeEach(module('app'));
    var $scope;
    var $controller;
    var vm;

    describe('with $scope object mock', function() {
        beforeEach(inject(function(_$controller_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;

            // Init the controller, passing in a $scope object
            vm = $controller('CalculatorController', {
                $scope: $scope,
            });

        }));

        it('should have an existing controller', function() {
            expect(vm).toBeDefined();
        });

        it('should have a title', function() {
            $scope.$apply();
            expect(vm.title).toBe("CalculatorController");
        });

        describe('.calculatePayment()', function() {
            it('should exist', function() {
                expect(vm.calculatePayment).toBeDefined();
            });

            it('it should calculate accurate mortgage payments', function() {

                var tempObj = {};

                tempObj = {
                    rate: 3.85,
                    period: 12,
                    term: 30,
                    balance: 400000
                }

                vm.calculatePayment(tempObj);

                //  expect(roundedMonthlyPayment).toBe(1875.23);
                expect(vm.result).toBe("$1875.23 is your payment.");
            });
        });

    });

});
