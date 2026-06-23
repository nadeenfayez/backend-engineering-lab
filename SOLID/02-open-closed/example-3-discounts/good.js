function calculateFinalPrice(price, discount) {

    return discount.apply(price);

}


class Discount {    // Make the base class behave like an interface

    constructor() {
        if (this.apply === Discount.prototype.apply) {
            throw new Error('Classes extending Discount must implement apply()');
        }
    }

    apply(price) {
        throw new Error('apply() must be implemented.');
    }

}


class FiftyPercentDiscount extends Discount {

    apply(price) {
        return price * 0.5;
    }

}


class SixtyPercentDiscount extends Discount {

    apply(price) {
        return price * 0.4;
    }

}


class SeventyPercentDiscount extends Discount {

    apply(price) {
        return price * 0.3;
    }

}


class BlackFridayDiscount extends Discount {

    apply(price) {
        return price - 300;
    }

}


class InvalidDiscount extends Discount {


}


// Test

const finalPrice = calculateFinalPrice(1000, new BlackFridayDiscount());

console.log(finalPrice);


// Test interface error

// const invalidDiscount = new InvalidDiscount();