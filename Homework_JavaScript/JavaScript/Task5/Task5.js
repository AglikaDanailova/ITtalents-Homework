/**
 * Created by aglika on 17/01/2016.
 */



document.getElementById('submit').addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementById('submit').addEventListener("click", function(){

    //var volume = radius1*radius1;
    var radius = document.getElementById('radius').value;

    document.querySelector('#volume').value = Math.PI*4/3*Math.pow(radius,3);
});


