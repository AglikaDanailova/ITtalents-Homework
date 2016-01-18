/**
 * Created by aglika on 18/01/2016.
 */

document.getElementById('calculateButton').addEventListener('click', function(e){
    e.preventDefault();
});
document.getElementById('calculateButton').addEventListener('click', function(){
    var number = document.getElementById('number').value;
    var option1 = document.getElementById('from').value;
    var option2 = document.getElementById('to').value;

    if (option1 == 'kg' && option2 == 'lb'){
        document.getElementById('result').innerHTML = number * 2.20462262;
    }
    else if (option1 == 'lb' && option2 == 'kg'){
        document.getElementById('result').innerHTML = number / 2.20462262;
    }
    else{
        document.getElementById('result').innerHTML = "Change your convert options.";
    }
});