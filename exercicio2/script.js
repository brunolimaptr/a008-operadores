const a = prompt("Qual a sua idade?")
const b = prompt("Qual a idade do seu melhor amigo?")

console.log("O primeiro numero é maior que segundo?",(a > b))
console.log("O primeiro numero é igual ao segundo?",(a === b))
console.log("O primeiro numero é divisível pelo segundo?", (a % b === 0))
console.log("O segundo numero é divisível pelo primeiro?",(b % a === 0))