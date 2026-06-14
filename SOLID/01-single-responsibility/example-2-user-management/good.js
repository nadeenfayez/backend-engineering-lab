const db = [];


class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

}


class UserRepository {

    save(user) {
        db.push(user);
    }

}


class EmailService {

    sendWelcomeEmail(user) {
        console.log(`Welcome ${user.email}.`);
    }

}


// Test

const user = new User("Ahmed", "ahmed@yahoo.com");


const userRepo = new UserRepository;

const emailService = new EmailService();


userRepo.save(user);

emailService.sendWelcomeEmail(user);


console.log(db);