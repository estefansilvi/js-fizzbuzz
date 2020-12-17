var numeri = document.getElementById('lista-numeri');
// inizio il ciclo for indicando il range entro cui deve stare
for( var i = 1; i <= 100; i++){

// chiedo se il numero sia 3 0 5 o un loro  multiplo, in quel caso esce FlizzBuzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
    
    // chiedo se il numero è solamente 3 o un suo multiplo e in quel caso esce Flizz
  } else if (i % 3 == 0) {
    console.log('Fizz');

    // chiedo se il numero è solamente 5 o un suo multiplo e in quel caso esce Buzz
  } else if (i % 5 == 0) {
    console.log('Buzz');

    // stampo tutti i numeri che non sono 3, 5 o un loro multiplo
  } else {
    console.log(i);
  }

}
