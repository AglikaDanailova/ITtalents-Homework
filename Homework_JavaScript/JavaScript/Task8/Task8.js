/**
 * Created by aglika on 18/01/2016.
 */

document.getElementById('add').addEventListener('click', function(e){
    e.preventDefault();
});

document.getElementById('add').addEventListener('click', function(){
    document.getElementById('input').id = 'show';
});

document.getElementById('changes').addEventListener('click', function(e){
    e.preventDefault();
});

document.getElementById('changes').addEventListener('click', function(){

    var name1 = document.getElementById('firstname').value;
    var name2 = document.getElementById('lastname').value;
    var points = document.getElementById('points').value;

    if(name1.length > 0 && name2.length > 0 && points.length > 0) {
        document.getElementById('table').lastChild.innerHTML += '<tr><td>' + name1 + '</td><td>' + name2 + '</td><td>' + points + '</td></tr>'
    }
    else {
        alert('You haven\'t entered values.');
    }
    });
