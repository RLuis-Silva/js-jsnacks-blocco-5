// jsnack 2
// Partendo da un array creiamo uno nuovo con solo i valori che hanno la
//  posizione compresa tra i due numeri inseriti dall' utente



var mioArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara" ];

var tot = mioArray.length - 1;
var min = parseInt(prompt("Indici di inizio, tra 0 e' "+ tot) );
var max = parseInt(prompt("Indici di fine (superiore a indice inizio), tra 0 e'" + tot));

var nuovoArray = [];

for( var i = 0; i < mioArray.length; i++){
    if( (min <= i) && (max >= i) ){
        nuovoArray.push(mioArray[i]);
    }
}


console.log("orginal", mioArray);
console.log("Indexes: ", min, max);
console.log("New", nuovoArray);