class CalorieTracker {

    constructor(maxCalories, logger) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
        this.logger = logger;
    }


    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;

        if (this.currentCalories > this.maxCalories) {
            this.logger.log("Max calories exceeded.");
        }
    }

}


class Logger {
    log(message) {
        console.log(message);
    }
}


// Test

const logger = new Logger();

const calorieTracker = new CalorieTracker(2000, logger);

calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);