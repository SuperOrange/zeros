module.exports = function getZerosCount(number) {
    let result = 0;
    let pow = 1;

    while (5 ** pow < number) {
        result += Math.floor(number / Math.pow(5, pow++));
    }

    return result;
};
