
function calcularProductoInterno() {
    let vectorA = document.getElementById("vectorA").value.split(",").map(Number);
    let vectorB = document.getElementById("vectorB").value.split(",").map(Number);

    let productoInterno = 0;
    for (let i = 0; i < vectorA.length; i++) {
        productoInterno += vectorA[i] * vectorB[i];
    }

    let resultado = "producto interno entre a y b: " + productoInterno;

    if (productoInterno === 0) {
        resultado += "<br>a y b son ortogonales";
    } else {
        resultado += "<br>a y b no son ortogonales";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
