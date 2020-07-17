var num = '748';

toNine(num);
function toNine (a) {
    var arr = a.spit('');
var sum1 = 0;
    for(var i = 0; i < arr.length; i++){
        sum1 += arr[i];
    }
    if (sum1 > 9){
        num = sum1 * 2;
        toNine(num);
    }else{
    console.log(num);
    }
}