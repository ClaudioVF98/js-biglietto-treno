// Quanti Kilometri deve percorrere il cliente
const numeroKilometri = prompt("Quanti Kilometri devi percorrere?")
console.log(parseInt(numeroKilometri));

// Quanti anni ha il cliente
const numeroAnni = prompt("Quanti anni hai?")
console.log(parseInt(numeroAnni));

// Il prezzo del viaggio è di 21 centesimi al Kilometro
const prezzo = (numeroKilometri * 0.21)
console.log(prezzo);

// Se il cliente è minorenno si applica uno sconto del 20%, se è over 65 del 40%

if (numeroAnni < 18) {
    const discount20 = ((prezzo / 100) * 80);
    console.log (discount20);

} else if (numeroAnni > 65) {
    const discount40 = (prezzo/100)*60;
    console.log (discount40);
    
}

