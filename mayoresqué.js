<button onclick="mayoresQueX()">Verificar</button>
    function mayoresQueX() {
    let numeros = [6];
    let size = 5;
    let x = 5;

    for (let i = 0; i < size; i++) {
        numeros.push(prompt("Ingresa un numero:"));
    }

 
    let mayores = 0;
    for (let i = 0; i < size; i++) {
        if (numeros[i] > x) {
            mayores++;
        }
    }

    document.getElementById("resultado").innerHTML = "De tus lista " + mayores + " valores son mayores a " + x;
}
