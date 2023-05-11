let buttonSum = document.getElementById('botaoSoma');

const Somar = () => {
  let num1 = prompt("escreva um numero...")
  let num2 = prompt("escreva um numero para somar com o primeiro...")

  let soma = +num1 + +num2
  let erro = "burro"

  alert(`O resultado da soma é de ${soma}, não validado entrada de letras`)
} 


buttonSum.addEventListener('click', () => Somar())