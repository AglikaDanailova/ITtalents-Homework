/**
 * Created by aglika on 18/01/2016.
 */

var pokemon1 = "images/pokemon1.png";
var pokemon2 = "images/pokemon2.jpg";
var pokemon3 = "images/pokemon3.jpg";
var pokemon4 = "images/pokemon4.jpg";
var pokemon5 = "images/pokemon5.jpg";

var images = [
    pokemon1, pokemon2, pokemon3, pokemon4, pokemon5
];

document.getElementById('pic').src = images[Math.floor((Math.random() * 5))];