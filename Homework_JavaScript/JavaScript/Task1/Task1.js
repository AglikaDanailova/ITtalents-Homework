/**
 * Created by aglika on 17/01/2016.
 */

var symbols = prompt ('Въведете няколко символа.');

if (symbols !== null && symbols.length > 0) {

    var mostSymbols = [];

    mostSymbols = symbols.split('');

        var counter = 0;
        var length = mostSymbols.length;
        var tempCount = 0;
        var currentSymbol;

        for (var i = 0; i <=  length - 1; i++) {
            for (var j = 0; j <= length - 1; j++) {

                if (mostSymbols[i] == mostSymbols[j]) {
                    counter++;
                }
            }
            if (tempCount < counter) {
                tempCount = counter;
                currentSymbol = mostSymbols[i];
            }
            counter = 0;

        }
        document.querySelector('#result').innerHTML = 'Най-често срещаният символ е <b>' + currentSymbol + '</b> (' + tempCount + ' пъти).';
    }

else {
    document.querySelector('#result').innerHTML = 'Не сте въвели символи.';
}
