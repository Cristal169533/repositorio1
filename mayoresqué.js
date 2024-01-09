function contarValoresMayoresQueX(numeros, x) {
    let mayores = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > x) {
            mayores++;
        }
    }
    return mayores;
}

function handleUserInput() {
    let numeros = [6];
    let size = 5;
    let x = 5;

    for (let i = 0; i < size; i++) {
        numeros.push(prompt("Ingresa un numero:"));
    }

    let mayores = contarValoresMayoresQueX(numeros, x);

    console.log("De tus lista " + mayores + " valores son mayores a " + x);
}

handleUserInput();