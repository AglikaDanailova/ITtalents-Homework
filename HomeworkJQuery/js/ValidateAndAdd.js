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



    $('#add').click(function checkForm() {

        if ($('#make').val() === '' || $('#model').val() === '' || $('#year').val() === '' || $('#km').val() === '') {
            $('fieldset').css("border", "1px solid #ff517c");
            $('form p').remove();
            $('form').append('<p class="alerts">Please fill in the whole form!</p>');
        }
        else {

            $('fieldset').css("border", "1px solid #threedface");
            $('form p').remove();
            var cars = [];
            function add () {
                cars.pushStack({
                    "make": $('#make').val(),
                    "model": $('#model').val(),
                    "year": $('#year').val(),
                    "km": $('#km').val()
                });
                return cars;
            };
            console.log(cars);
            $('#table').css("display","block");
            $('#table table').append("<tr><td>" + "1</td><td>"+
                cars.make + "</td><td>"+
                cars.model + "</td><td>"+
                cars.year + "</td><td>"+
                cars.km +
                "</td><td><button class='control'></button><button class='control'></button></td></tr>");
            //$('#make, #model, #year, #km').val('').css("border", "1px solid #threedface");
        }
    });

});
