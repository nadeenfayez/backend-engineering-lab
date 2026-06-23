const discounts = {
    '50%': 0.5,
    '60%': 0.4,
    '70%': 0.3
}


function calcPrice(price, discountType) {
    const discount = discounts[discountType];

    if (discount === undefined) return 'Invalid discount.';

    return price * discount;
}


// Test

const discountValue = calcPrice(1000, '700%');

console.log(discountValue);