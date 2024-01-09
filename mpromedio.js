function calcularPromedio() {
    let nDatos = parseInt(prompt("Cuantos datos ingresará?"));
    let suma = 0;
    let datosMayores = 0;
    for (let i = 1; i <= nDatos; i++) {
        let dato = parseFloat(prompt("Dato " + i + ":"));
        suma += dato;
        if (dato > suma / i) {
            datosMayores++;
        }
    }
    console.log(datosMayores + " datos son mayores que el promedio");
}

calcularPromedio();