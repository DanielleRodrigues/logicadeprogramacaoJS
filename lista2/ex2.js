/*ATIVIDADE 2
Faça um programa que entre com três números e coloque em ordem crescente.*/

const prompt = require('prompt-sync')();
const text1 = prompt('Insira o primeiro número: ');
const text2 = prompt('Insira o segundo número: ');
const text3 = prompt('Insira o terceiro número: ');

const num1 = Number (text1);
const num2 = Number (text2);
const num3 = Number (text3);

if (num3 > num2 && num3 > num1 && num1 < num2 && num1 < num3);{
    console.log(`Ordem: ${num1}, ${num2}, ${num3}`);
}

if (num2 > num1 && num2 > num3 && num1 < num2 && num1 < num3);{
    console.log(`Ordem: ${num1},${num3}, ${num2}`);
}	
if (num1 > num2 && num1 > num3 && num2 < num1 && num2 < num3);{
    console.log(`Ordem: ${num2}, ${num3}, ${num1}`);
}
if (num3 > num2 && num3 > num1 && num2 < num1 && num2 < num3){	
    console.log(`Ordem: ${num2}, ${num1}, ${num3}`);
}
if (num1 > num2 && num1 > num3 && num3 < num1 && num3 < num2){
    console.log(`Ordem: ${num3}, ${num2}, ${num1}`);
}
if (num2>num3 && num2 > num1 && num3 < num1 && num3 < num2){
    console.log(`Ordem: ${num3},  ${num1}, ${num2}`);
}




/*if (num3 > num1)
{
    if  (num1 > num2)
    {
        console.log(`Ordem: ${num2,num1, num3}`); 
    }
}

else if (n2< n3)
{
    console.log(`Ordem: ${num1,num2, num3}`); 
}
if (num1 > num2)
   if (num2 > num3 )
   {
    console.log(`Ordem: ${num3,num2, num1}`);
   }
else if (num3 < num1)
{
    console.log(`Ordem: ${num2,num3, num1}`);
}

if (num1 < num2)
    if (num3 < num1)
    {
        console.log(`Ordem: ${num3,num1, num2}`);
    }
    else if (num3 < num2)
{
    console.log(`Ordem: ${num1,num3, num2}`); 
}
*/
