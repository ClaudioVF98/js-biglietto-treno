// Quanti Kilometri deve percorrere il cliente
const numeroKilometri = prompt("Quanti Kilometri devi percorrere?")
console.log(parseInt(numeroKilometri));

// Quanti anni ha il cliente
const numeroAnni = prompt("Quanti anni hai?")
console.log(parseInt(numeroAnni));

// Se il cliente è minorenno si applica uno sconto del 20%, se è over 65 del 40%
const prezzoMinorenne = (((0.21 * numeroKilometri) / 100)* 80)
const prezzoOver65 = (((0.21 * numeroKilometri) / 100)* 60)
let prezzo

if (numeroAnni < 18) {
    prezzo = prezzoMinorenne.toPrecision(3)
    console.log(parseFloat(prezzoMinorenne.toPrecision(3)));
} else if (numeroAnni > 65) {
    prezzo = prezzoOver65.toPrecision(3)
    console.log(parseFloat(prezzoOver65.toPrecision(3)));    
}

document.getElementById("prezzo-finale").innerHTML = "Il prezzo del tuo biglietto è €" + prezzo;