const loggedInUsers = [];


class User {

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

}


class AuthService {

    login(user, password) {
        return user.password === password;
    }

}


class UserRepository {

    save(user) {
        loggedInUsers.push(user);
    }

}

// Test

const user = new User("ahmed@gmail.com", "pass123@");


const authService = new AuthService();

const userRepo = new UserRepository();


if (authService.login(user, "pass123@")) {
    console.log("Logged in successfully.");

    userRepo.save(user);
}


console.log("loggedInUsers:", loggedInUsers);