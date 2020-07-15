function getDivisors(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
    arrDivs = arr.concat(i);
    }
    }
    return arr;
    }
    console.log(getDivisors(2));