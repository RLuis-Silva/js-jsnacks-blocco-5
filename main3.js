// jsnack3
// Creiamo una copia dell' array di partenza e aggiungiamo ai singoli elementi una nuova
// proprietà position che contiene una lettera casuale.
// non dobbiamo modificare l'array iniziale

var arrayOggetti = [
    { name: 'Poppy', type: 'tshirt', color: 'red'},
    { name: 'Jumping', type:'occhiali', color:'blue'},
    { name: 'CrissCross', type:'scarpe', color:'black'},
    { name: 'Jenny', type: 'borsa', color: 'pink'},
];

// var nuovoArrayOgg = arrayOggetti.slice(); non fa un deep clone
var nuovoArrayOgg = [];
// nuovoArrayOgg[0].position = 'a';

for(var i = 0; i < arrayOggetti.length; i++){
    var copiaOggetti = {
        name: arrayOggetti[i].name,
        type: arrayOggetti[i].type,
        color: arrayOggetti[i].color,
        position: 'a'
    }

    nuovoArrayOgg.push(copiaOggetti);
}


console.table(arrayOggetti);
console.table(nuovoArrayOgg);


function generaPosizione(){
    var lettee = "abcdefghijklmopqrstuvwxyz";

    var lettera = lettere[randomNumero(0, lettere.lenght - 1)];
    return lettera;
}


function randomNumero(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
}