class Footballer {

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }


    getRole() {
        return this.role.getName();
    }

}


class PlayerRole {  // Make the base class behave like an interface

    constructor() {
        if (this.getName === PlayerRole.prototype.getName) {
            throw new Error('Classes extending PlayerRole must implement getName()');
        }
    }


    getName() {
        throw new Error('getName() must be implemented.');
    }

}


class GoalkeeperRole extends PlayerRole {

    getName() {
        return 'goalkeeper';
    }

}


class DefenderRole extends PlayerRole {

    getName() {
        return 'defender';
    }

}


class MidfielderRole extends PlayerRole {

    getName() {
        return 'midfielder';
    }

}


class ForwardRole extends PlayerRole {

    getName() {
        return 'forward';
    }

}


class InvalidRole extends PlayerRole {

}


const moSalah = new Footballer("Mohamed Salah", new MidfielderRole());
console.log(`The footballer ${moSalah.name} is a ${moSalah.getRole()}.`);


// Test interface error

// const invalidRole = new InvalidRole();