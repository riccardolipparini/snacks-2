// const automobili = [
//     {
//         "marca": "Fiat",
//         "modello": "punto",
//         "alimentazione": "Gpl"
//     },
//     {
//         "marca": "volkswagen",
//         "modello": "Golf",
//         "alimentazione": "Metano"
//     },
//     {
//         "marca": "Toyota",
//         "modello": "punto",
//         "alimentazione": "benzina"
//     },
//     {
//         "marca": "Fiat",
//         "modello": "panda",
//         "alimentazione": "elettrica"
//     },
//     {
//         "marca": "Range Rover",
//         "modello": "punto",
//         "alimentazione": "Diesel"
//     },
//     {
//         "marca": "Porshe",
//         "modello": "Cayenne",
//         "alimentazione": "benzina"
//     },
//     {
//         "marca": "Honda",
//         "modello": "civic",
//         "alimentazione": "Gpl"
//     },
//     {
//         "marca": "Opel",
//         "modello": "Corsa",
//         "alimentazione": "Metano"
//     },
//     {
//         "marca": "Fiat",
//         "modello": "500",
//         "alimentazione": "elettrica"
//     },
//     {
//         "marca": "Ferrari",
//         "modello": "bohboh",
//         "alimentazione": "benzina"
//     }
    

// ];

// const benzina = automobili.filter((auto) => {
//     return auto.alimentazione == "benzina" ;
// }
// );
// console.log(benzina);

// const diesel = automobili.filter((auto) => {
//     return auto.alimentazione == "Diesel" ;
// }
// );
// console.log(diesel);

// const alimentazioniVarie = automobili.filter((auto) => {
//     // return auto.alimentazione !== ("benzina" && "Diesel");
//     return auto.alimentazione !== "benzina" && auto.alimentazione !== "Diesel"
// }
// );
// console.log(alimentazioniVarie);

const persone = [
    {
        "nome": "Riccardo",
        "cognome": "Lipparini",
        "età": 25
    },
    {
        "nome": "Paolo",
        "cognome": "Franchi",
        "età": 21
    },
    {
        "nome": "Francesca",
        "cognome": "Sassani",
        "età": 40
    },
    {
        "nome": "Giulia",
        "cognome": "Franchi",
        "età": 15
    },
    {
        "nome": "Angelo",
        "cognome": "Zanzi",
        "età": 71
    },
    {
        "nome": "Franco",
        "cognome": "Franchini",
        "età": 16
    }
];

 const guida = persone.map((patente) => {
     if (patente.età < 18){
         return `${patente.nome}, ${patente.cognome} non può guidare`
     }else {
         return `${patente.nome}, ${patente.cognome} può guidare;`
     }
 });
 console.log(guida);
