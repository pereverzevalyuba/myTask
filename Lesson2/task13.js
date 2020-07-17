var str = 'var_text_hello';
var arr = str.split('_');
var newArr = [];

for (i = 1; i < arr.length; i++) {
    arr[0].toLowerCase();
    newArr.push(firstSymUp(arr[i]));
}

function firstSymUp(word) {
    var res = word.slice(0,1).toUpperCase() + word.slice(1);
    return res;
}

console.log(arr[0] + newArr.join(''));