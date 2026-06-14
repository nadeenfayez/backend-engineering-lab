class Mobile {

    constructor(name, model, logger) {
        this.name = name;
        this.model = model;
        this.logger = logger;
    }


    start(battery) {
        if (battery === 0) {
            return this.logger.log(`Your mobile (${this.name} - ${this.model}) is dead.`);
        }

        this.logger.log(`Your mobile (${this.name} - ${this.model}) is starting..`);
    }
}


class Logger {

    log(message) {
        console.log(message);
    }

}


// Test

const logger = new Logger();

const mobile = new Mobile("iPhone", "Apple v17", logger);


mobile.start(0);