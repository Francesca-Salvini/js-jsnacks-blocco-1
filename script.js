// CONSEGNA

// PRIMO ESERCIZIO 
// Crea 10 oggetti che rappresentano una zucchina, 
// indicandone per ognuno varietà, peso e lunghezza. 
// Calcola la somma del peso di tutte le zucchine.

// var arrayZucchine = [
//     {
//         "varieta" : "Zucchino nero di Milano" ,
//         "peso" : 200,
//         "lunghezza" : 20 
//     },
//     {
//         "varieta" : "Zucchino romanesco" ,
//         "peso" : 150,
//         "lunghezza" : 12 
//     },
//     {
//         "varieta" : "Zucchino ortolano di Faenza" ,
//         "peso" : 120,
//         "lunghezza" : 10 
//     },
//     {
//         "varieta" : "Zucchina lunga fiorentina" ,
//         "peso" : 70,
//         "lunghezza" : 30 
//     },
//     {
//         "varieta" : "Zucchino siciliano" ,
//         "peso" : 320,
//         "lunghezza" : 60 
//     },
//     {
//         "varieta" : "Zucchina striata di Napoli" ,
//         "peso" : 100,
//         "lunghezza" : 14 
//     },
//     {
//         "varieta" : "Zucchina bianca triestina" ,
//         "peso" : 80,
//         "lunghezza" : 20 
//     },
//     {
//         "varieta" : "Zucchina rigata pugliese" ,
//         "peso" : 115,
//         "lunghezza" : 16 
//     },
//     {
//         "varieta" : "Zucchino tondo di Piacenza" ,
//         "peso" : 90,
//         "lunghezza" : 12
//     },
//     {
//         "varieta" : "Zucchino tondo di Nizza" ,
//         "peso" : 50,
//         "lunghezza" : 6 
//     }
// ];

// var somma = 0;
// // console.log(arrayZucchine);
// for(var i = 0; i < arrayZucchine.length; i++){
//     var thisZucchina = arrayZucchine[i];
//     // console.log(thisZucchina);

//     var pesoZucchine = thisZucchina.peso;
//     console.log(pesoZucchine);

//     somma += pesoZucchine;
    
// }

// OUTPUT
// console.log("Il peso complessivo delle zucchine è: " , somma);
 
// FINE PRIMO ESERCIZIO

// SECONDO ESERCIZIO
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var arrayZucchine = [
        {
            "varieta" : "Zucchino nero di Milano" ,
            "peso" : 200,
            "lunghezza" : 20 
        },
        {
            "varieta" : "Zucchino romanesco" ,
            "peso" : 150,
            "lunghezza" : 12 
        },
        {
            "varieta" : "Zucchino ortolano di Faenza" ,
            "peso" : 120,
            "lunghezza" : 10 
        },
        {
            "varieta" : "Zucchina lunga fiorentina" ,
            "peso" : 70,
            "lunghezza" : 30 
        },
        {
            "varieta" : "Zucchino siciliano" ,
            "peso" : 320,
            "lunghezza" : 60 
        },
        {
            "varieta" : "Zucchina striata di Napoli" ,
            "peso" : 100,
            "lunghezza" : 14 
        },
        {
            "varieta" : "Zucchina bianca triestina" ,
            "peso" : 80,
            "lunghezza" : 20 
        },
        {
            "varieta" : "Zucchina rigata pugliese" ,
            "peso" : 115,
            "lunghezza" : 16 
        },
        {
            "varieta" : "Zucchino tondo di Piacenza" ,
            "peso" : 90,
            "lunghezza" : 12
        },
        {
            "varieta" : "Zucchino tondo di Nizza" ,
            "peso" : 50,
            "lunghezza" : 6 
        }
    ];

    var menodiQuindici = [];
    var piuDiQuindici = [];
    // console.log(arrayZucchine);

    for(var i = 0; i < arrayZucchine.length; i++ ){
        var thisZucchina = arrayZucchine[i];

        // console.log(thisZucchina);
        if (thisZucchina.lunghezza < 15) {
            menodiQuindici.push(thisZucchina);
        } else {
            piuDiQuindici.push(thisZucchina);
        }

        
    }

    // OUTPUT
    console.log("meno di 15", menodiQuindici);
    console.log("piu di 15", piuDiQuindici);

    // sommo i pesi delle zucchine in ciascun array (menodiQuindici e piuDiQuindici)
    var sommaMenoDiQuindici = 0;
    var sommaPiuDiQuindici = 0;

    // ciclo per i pesi delle zucchine lunghe meno di 15 cm
    for(var i = 0; i < menodiQuindici.length; i++){
        var thisZucchina = menodiQuindici[i];
        // console.log(thisZucchina);
    
        var pesoZucchine = thisZucchina.peso;
        // console.log(pesoZucchine);
    
        sommaMenoDiQuindici += pesoZucchine;
        
    }
    // ciclo per i pesi delle zucchine lunghe più di 15 cm
    for(var j = 0; j < piuDiQuindici.length; j++){
        var thisZucchina = piuDiQuindici[j];
        // console.log(thisZucchina);
    
        var pesoZucchine = thisZucchina.peso;
        // console.log(pesoZucchine);
    
        sommaPiuDiQuindici += pesoZucchine;
        
    }

    // OUTPUT
    console.log("Il peso complessivo delle zucchine con lunghezza minore di 15 cm è: " , sommaMenoDiQuindici , "grammi") ;
    console.log("Il peso complessivo delle zucchine con lunghezza maggiore di 15 cm è: " , sommaPiuDiQuindici , "grammi" ) ;
// FINE SECONDO ESERCIZIO