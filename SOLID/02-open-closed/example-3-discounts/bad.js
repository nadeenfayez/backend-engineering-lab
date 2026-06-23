function calculateFinalPrice(price, discount) {
    if (discount == '50%') {
        return price * 0.5;
    }

    else if (discount == '60%') {
        return price * 0.4;
    }

    else if (discount == '70%') {
        return price * 0.3;
    }

    else {
        return 'Invalid discount.';
    }
}


// Test

const finalPrice = calculateFinalPrice(1000, '60%');

console.log(finalPrice);
