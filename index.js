let number;

do {
    number = prompt("Ingresa un número:");
    number = Number(number);
    
    if (isNaN(number) || number <= 0) {
        alert("Entrada no válida. Debes ingresar un número positivo.");
    }
} while (isNaN(number) || number <= 0);

let fibonacciSeries = [];

for (let i = 0; i < number; i++) {
    if (i === 0) {
        fibonacciSeries[i] = 0;
    } else if (i === 1) {
        fibonacciSeries[i] = 1;
    } else {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
}

console.log(fibonacciSeries.join(", "));
document.body.innerHTML = `<p>Serie de Fibonacci: ${fibonacciSeries.join(", ")}</p>`;