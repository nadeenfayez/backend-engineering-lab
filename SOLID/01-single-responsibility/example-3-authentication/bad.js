const loggedInUsers = [];


class User {

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }


    login(password) {
        return password === this.password;
    }


    save() {
        loggedInUsers.push(this);
    }

}


// Test

const user = new User("ahmed@gmail.com", "pass123@");


if (user.login("pass123@")) {
    console.log("Logged in successfully.");

    user.save();
}


console.log("loggedInUsers:", loggedInUsers);