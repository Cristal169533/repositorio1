function isValid(arr) {
    for (let i = 0; i < 9; i++) {
        let rowMap = {};
        let colMap = {};
        let regionMap = {};

        for (let j = 0; j < 9; j++) {
            let val = arr[i][j];

            //  valor en la fila si es único
            if (rowMap[val]) {
                return false;
            }
            rowMap[val] = true;

            // valor en la columna si es único
            if (colMap[val]) {
                return false;
            }
            colMap[val] = true;

            
            let regionIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (regionMap[regionIndex + '_' + val]) {
                return false;
            }
            regionMap[regionIndex + '_' + val] = true;
        }
    }

    return true;
}

let sudokuSolution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

console.log(isValid(sudokuSolution));