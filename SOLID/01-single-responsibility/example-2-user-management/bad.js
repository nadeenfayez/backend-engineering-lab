const db = [];


class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }


    save() {
        db.push(this);
    }


    sendWelcomeEmail() {
        console.log(`Welcome ${this.email}.`);
    }

}


// Test

const user = new User("Ahmed", "ahmed@yahoo.com");


user.save();

user.sendWelcomeEmail();


console.log(db);