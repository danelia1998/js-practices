function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    this.running = false;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
 
    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive");
        }
        if (amount > capacity) {
            throw new Error("You can't put more water, than " + capacity);
        }
        waterAmount = amount;
    };
 
    function onReady() {
        console.log('Coffee is ready');
    }
 

    this.run = function () {
        setTimeout(onReady, getTimeToBoil());
        this.running = true;
    };
 
    this.setOnReady = function (func) {
        this.running = false;
        return func();
    }
 
    this.isRunning = function () {
        return this.running
    }
 }
 
 var coffeeMachine = new CoffeeMachine(20000, 500);
 coffeeMachine.setWaterAmount(100);

 console.log('Before: ' + coffeeMachine.isRunning());
 
 coffeeMachine.run();
 
//  console.log('In progress: ' + coffeeMachine.isRunning());
 
//  coffeeMachine.setOnReady(function() {
//      console.log('After: ' + coffeeMachine.isRunning());
//  });