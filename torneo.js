var partidos = [];
var resultados = [];

function solicitarNombresEquipos() {
    for (var i = 1; i <= 8; i++) {
        var nombre = prompt("Ingrese el nombre del equipo " + i + ":");
        partidos.push(nombre);
    }
    jugarPartidos();
}

function jugarPartidos() {
    while (partidos.length > 1) {
        var ronda = [];
        for (var i = 0; i < partidos.length; i += 2) {
            var equipoA = partidos[i];
            var equipoB = partidos[i + 1];
            var resultado = prompt("Ganador del partido " + equipoA + " - " + equipoB + ":");
            if (resultado === equipoA) {
                ronda.push(equipoA);
            } else {
                ronda.push(equipoB);
            }
        }
        partidos = ronda;
    }
    alert("El campeon es: " + partidos[0]);
}

solicitarNombresEquipos();