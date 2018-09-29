module.exports = function getZerosCount(number, base) {

    let res = 100000000;
    for (let i = 2; i <= base; i++) {
        if (base % i === 0) {
            count1 = 0;
            while (base % i === 0) {
                count1++;
                base /= i;
            }
            count2 = getMultipliersCount(number, i);
            res = Math.min(res, count2 / count1)
        }
    }
    return Math.floor(res);

}

function getMultipliersCount(number, div) {

    let sum = 0, divider = div;
    while (true) {
        quantity = (number - number % divider) / divider;
        if (quantity > 0) {
            sum += quantity;
            divider *= div;
        }
        else {
            break;
        }
    }
    return sum;
}



