class Mobile {

    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    start(battery) {
        if (battery === 0) {
            return this.log(`Your mobile (${this.name} - ${this.model}) is dead.`);
        }

        this.log(`Your mobile (${this.name} - ${this.model}) is starting..`);
    }

    log(message) {
        console.log(message);
    }

}


// Test

const mobile = new Mobile("iPhone", "Apple v17");

mobile.start(0);