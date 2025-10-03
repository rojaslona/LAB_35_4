// Programa que solicita 3 números, los analiza y muestra resultados ordenados

const num1 = Number(prompt("Ingresa el primer número:"));
const num2 = Number(prompt("Ingresa el segundo número:"));
const num3 = Number(prompt("Ingresa el tercer número:"));

const numeros = [num1, num2, num3];

if (num1 === num2 && num2 === num3) {
  console.log("Todos los números son iguales:", numeros);
  document.body.innerHTML += `<p>Todos los números son iguales: ${numeros.join(", ")}</p>`;
} else {
  const mayorAMenor = [...numeros].sort((a, b) => b - a);
  const menorAMayor = [...numeros].sort((a, b) => a - b);

  console.log('De mayor a menor:', mayorAMenor);
  console.log('De menor a mayor:', menorAMayor);

  document.body.innerHTML += `<p>De mayor a menor: ${mayorAMenor.join(", ")}</p>`;
  document.body.innerHTML += `<p>De menor a mayor: ${menorAMayor.join(", ")}</p>`;
}

