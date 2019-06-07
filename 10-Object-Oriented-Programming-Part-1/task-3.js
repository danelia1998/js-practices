function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
   
    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
   
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive");
        }
    };
   
    function onReady() {
        console.log('Coffee is ready');
    }
   
    this.run = function() {
        setTimeout(onReady, getTimeToBoil());
    };
   
    this.addWater = function(amount){
        if (amount > capacity) {
            throw new Error("You can't put more water, than 400 ");
        }
        waterAmount = amount;
    }
   }
   
   var coffeeMachine = new CoffeeMachine(100000, 400);
   coffeeMachine.addWater(500);
   coffeeMachine.run();