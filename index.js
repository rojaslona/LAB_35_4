// Programa que solicita 3 números, los analiza y muestra resultados ordenados

// Solicitar números al usuario
const num1 = Number(prompt('Ingresa el primer número:'));
const num2 = Number(prompt('Ingresa el segundo número:'));
const num3 = Number(prompt('Ingresa el tercer número:'));

// Guardar en un arreglo para facilitar el ordenamiento
const numeros = [num1, num2, num3];

// Verificar si todos los números son iguales
if (num1 === num2 && num2 === num3) {
  console.log('Todos los números son iguales:', numeros);
  document.body.innerHTML += `<p>Todos los números son iguales: ${numeros.join(', ')}</p>`;
} else {
  // Ordenar de mayor a menor
  const mayorAMenor = [...numeros].sort((a, b) => b - a);
  // Ordenar de menor a mayor
  const menorAMayor = [...numeros].sort((a, b) => a - b);

  console.log('De mayor a menor:', mayorAMenor);
  console.log('De menor a mayor:', menorAMayor);

  document.body.innerHTML += `<p>De mayor a menor: ${mayorAMenor.join(', ')}</p>`;
  document.body.innerHTML += `<p>De menor a mayor: ${menorAMayor.join(', ')}</p>`;
}

