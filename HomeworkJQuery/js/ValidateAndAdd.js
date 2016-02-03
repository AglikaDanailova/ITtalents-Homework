/**
 * Created by aglikа on 02/02/2016.
 */
$(document).ready(function(){

    $('#make, #model, #year, #km').blur(function(){
        if ($(this).val() === ''){
            $(this).parent("div").find('p').remove();
            $(this).css("border", "1px solid #ff517c").parent("div").append("<p class='alerts'>Please fill in the field.</p>");
        }
        if ($(this).val() != ''){
            $(this).css("border", "1px solid #659993").siblings('p').remove();
        }
    });

    $('#year, #km').blur(function(){
        if ($(' #year, #km').val() % 1 != 0 ){
            $(this).parent("div").find('p').remove();
            $(this).css("border", "1px solid #ff517c").parent("div").append("<p class='alerts'>Invalid value.</p>");

        }
    });

    $('#add').click(function(e){
        e.preventDefault();
    });

    var cars = [];

    $('#add').click(function checkForm() {

        if ($('#make').val() === '' || $('#model').val() === '' || $('#year').val() === '' || $('#km').val() === '') {
            $('fieldset').css("border", "1px solid #ff517c");
            $('form p').remove();
            $('form').append('<p class="alerts">Please fill in the whole form!</p>');
        }
        else {

            $('fieldset').css("border", "1px solid #threedface");
            $('form p').remove();

            var make = $('#make').val();
            var model = $('#model').val();
            var year = $('#year').val();
            var km = $('#km').val();

                cars.push({
                    "make": make,
                    "model": model,
                    "year": year,
                    "km": km
                });

            var num = $('#table tr').length - 1;
            var order = $('#table tr').length;

                $('#table').css("display","block");
                $('#table table').append("<tr><td>" +
                    order + "</td><td>"+
                    cars[num].make + "</td><td>"+
                    cars[num].model + "</td><td>"+
                    cars[num].year + "</td><td>"+
                    cars[num].km +
                    "</td><td><button class='control' id='edit'>E</button><button class='control' id='delete'>X</button></td></tr>");

            }

            $('#make, #model, #year, #km').val('').css("border", "1px solid #threedface");
        });

});

$('#delete').click(function(e){
    e.preventDefault();
});


$('#delete').click(function deleteRow() {
    $(this).parent('tr').;

});