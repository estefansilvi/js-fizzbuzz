var numeri = document.getElementById('numeri');

var limite = 100;
var divisore = 25 ;

numeri.innerHTML += '<ul>'
   for (var i = 1; i <= limite; i++) {
     //il numero è divisibile 4
     numeri.innerHTML += '<li>' + i + '</li>';
     if (i % divisore == 0) {
       if (i === limite) {
         numeri.innerHTML += '</ul>';
       } else {
         numeri.innerHTML += '</ul><ul>';
       }
     }
     // chiedo se il numero sia 3 0 5 o un loro  multiplo, in quel caso esce FlizzBuzz
     if (i % 3 == 0 && i % 5 == 0) {
       console.log('FizzBuzz');
       numeri.innerHTML+='<li class="color-orange">FizzBuzz</li>';
       // chiedo se il numero è solamente 3 o un suo multiplo e in quel caso esce Flizz
     } else if (i % 3 == 0) {
       console.log('Fizz');
       numeri.innerHTML+='<li class="color-yellow">Fizz</li>';

       // chiedo se il numero è solamente 5 o un suo multiplo e in quel caso esce Buzz
     } else if (i % 5 == 0) {
       console.log('Buzz');
       numeri.innerHTML+='<li class="color-red">Buzz</li>';

       // stampo tutti i numeri che non sono 3, 5 o un loro multiplo
     } else {
       console.log(i);
       numeri.innerHTML+='<li class="color-white">'+ i + '</li>';
     }
   }


// inizio il ciclo for indicando il range entro cui deve stare


//concluso il ciclo for
