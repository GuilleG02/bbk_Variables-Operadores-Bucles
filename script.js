
var numeroUno = 20;
let texto ='Texto';
numeroUno = 22;
const array = ["Numeros",1,2,3,4,5];
let numeroDos = 18;

console.log('Suma ', numeroUno + numeroDos); //SUMA
console.log('Multiplicación ', numeroUno * numeroDos); //RESTA
console.log('Resta ', numeroUno - numeroDos); //MULTIPLICACIÓN
console.log('División ', numeroUno / numeroDos); //DIVISIÓN
console.log('Elevar ', numeroUno **3); //ELEVAR
console.log('Resto ', numeroUno % numeroDos); //RESTO

const numeros = [1,2,3,4,5,6,7,8,9,10];
let total = 0;

for(let i = 0; i < numeros.length; i++) total += numeros[i];
console.log('La suma del Array es:', total); //TOTAL ARRAY

console.log(Math.max(...numeros)); //NÚMERO MÁXIMO ARRAY

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] >= 5) {
        let resultado = numeros[i] + 1;
        console.log('Al ser igual o mayor a 5, el numero ', numeros[i],'ha sufrido +1. El resultado es: ', resultado)

    }else if(numeros[i]<5){
        let resultado = numeros[i] - 1;
        console.log('Al ser menor a 5, el numero ', numeros[i],'ha sufrido -1. El resultado es: ', resultado)

    }
} //OPERACIONES POR NÚMERO ARRAY


console.log('El número de elementos en el array es de: ',numeros.length) //LONGITUD DEL ARRAY


const nombres = ['David','Nico','Unai','David','Nico','Unai','Guille'];


for (let i = 0; i < nombres.length; i++) {
    let contador = 1;
  
    for (let x = i + 1; x < nombres.length; x++) {
    
    if (nombres[i] === nombres[x]) {
        contador++;


    }
    
    if (contador > 1) {
        
        console.log('El elemento ', nombres[i], 'se repite ', contador, 'veces.')
    }
    
  }
    }









