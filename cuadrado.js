function isMagicSquare(arr) {
    const n = arr.length;
    let sum = 0;
    let firstSum = 0;

    // Validar tamaño del arreglo
    if (n <= 0 || n % 2 !== 1) {
        return false;
    }

    // Obtener suma de primera fila y validar números consecutivos
    for (let i = 0; i < n; i++) {
        if (typeof arr[i][i] !== 'number' || arr[i][i] <= 0) {
            return false;
        }
        if (i === 0) {
            firstSum = arr[i][i];
        } else {
            if (arr[i][i] - 1 !== arr[i - 1][i - 1]) {
                return false;
            }
        }
        sum += arr[i][i];
    }

    // suma de cada fila
    for (let i = 0; i < n; i++) {
        let rowSum = 0;
        for (let j = 0; j < n; j++) {
            rowSum += arr[i][j];
        }
        if (rowSum !== sum) {
            return false;
        }
    }

    // suma de cada columna
    for (let i = 0; i < n; i++) {
        let colSum = 0;
        for (let j = 0; j < n; j++) {
            colSum += arr[j][i];
        }
        if (colSum !== sum) {
            return false;
        }
    }

    // suma de la diagonal principal
    let mainDiagonalSum = 0;
    for (let i = 0; i < n; i++) {
        mainDiagonalSum += arr[i][i];
    }
    if (mainDiagonalSum !== sum) {
        return false;
    }

    //  suma de la diagonal secundaria
    let secondaryDiagonalSum = 0;
    for (let i = 0; i < n; i++) {
        secondaryDiagonalSum += arr[i][n - i - 1];
    }
    if (secondaryDiagonalSum !== sum) {
        return false;
    }

    // Si se pasan todas las validaciones, el arreglo es un cuadrado mágico
    return true;
}

console.log(isMagicSquare(arr) ? 'El arreglo es un cuadrado mágico' : 'El arreglo no es un cuadrado mágico');