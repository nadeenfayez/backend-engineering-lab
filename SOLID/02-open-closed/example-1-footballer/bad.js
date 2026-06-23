class Footballer {

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }


    getFootballerRole() {
        switch (this.role) {

            case 'goalkeeper':
                console.log(`The footballer ${this.name} is a goalkeeper.`);
                break;

            case 'defender':
                console.log(`The footballer ${this.name} is a defender.`);
                break;

            case 'midfielder':
                console.log(`The footballer ${this.name} is a midfielder.`);
                break;

            case 'forward':
                console.log(`The footballer ${this.name} is a forward.`);
                break;

            default:
                console.log(`Unsupported footballer role: ${this.role}.`);
                break;

        }
    }

}


// Test

const messi = new Footballer("Lionel Messi", "forward");
messi.getFootballerRole();

const moSalah = new Footballer("Mohamed Salah", "midfielder");
moSalah.getFootballerRole();