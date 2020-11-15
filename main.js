// esercizio 1
// 1.1 creare un array di oggetti:
// 1.2 ogni oggetto descriverà una bici da corsa con le seguneti proprietà: nome e peso
// 1.3 stampare a schermo la bici con peso minore con handlebars




// 1.1 e 1.2
var biciclette = [
    {
        nome : "Pinarello",
        peso : 10 
    },
    {
        nome : "Bianchi",
        peso : 8,
    },
    {
        nome : "Scott",
        peso : 11
    }
];

// handlebars
var source = $('#bike-template').html();
var template = Handlebars.compile(source);

// 1.3
var biciclettaLeggera = biciclette[0];

for(var i = 1; i < biciclette.length; i++){
    if( biciclette[i].peso < biciclettaLeggera.peso){
        biciclettaLeggera = biciclette[i];
    }
}

console.log(biciclettaLeggera);

// stampa i risultati
var data = {
    nome : biciclettaLeggera.nome,
    peso : biciclettaLeggera.peso
};

var html = template(data);
$('.container').append(html);
