function calculate(){
    var bill_count = document.getElementById('bill_count').value;
    var service_quality = document.getElementById('service_quality').value;
    var people_num = document.getElementById('people_num').value;

    if (!bill_count || !service_quality){
        alert('Please enter values!');
        return;
    }

    if(!people_num || people_num <=1){
        people_num=1;
    }   else {
        document.getElementById('each').style.display = 'block';
    }

    var total = (bill_count = service_quality) / people_num;
       
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function(){
    calculate();
}
