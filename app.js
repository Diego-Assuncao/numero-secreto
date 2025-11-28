alert("Boas vindas ao jogo do número secreto");

let numeroMaximo = 200
let secretNumber = parseInt(Math.random() * numeroMaximo + 1);
console.log(secretNumber);

let number;
let tentativas = 1;

while(number != secretNumber){
   number = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

   if (secretNumber == number){
        break;
    }else{
        if(number > secretNumber){
            alert(`O número é menor que ${number}`);
        }else{
            alert(`O número secerto é maior que ${number}`);
        }
    
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Isso aí! Você descobriu o número secreto ${secretNumber} com ${tentativas} ${palavraTentativa}`);
/*let num = prompt("Informe um número: ");
let contador = 1;

while (num >= contador){
    console.log(`${contador}`);
    contador++;
}*/

