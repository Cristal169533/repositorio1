function calculateDotProduct(vectorA, vectorB) {
    let dotProduct = 0;
    for (let i = 0; i < vectorA.length; i++) {
        dotProduct += vectorA[i] * vectorB[i];
    }
    return dotProduct;
}

function areVectorsOrthogonal(vectorA, vectorB) {
    let dotProduct = calculateDotProduct(vectorA, vectorB);
    return dotProduct === 0;
}

function handleUserInput() {
    let vectorA = prompt("Ingrese el vector a:").split(",").map(Number);
    let vectorB = prompt("Ingrese el vector b:").split(",").map(Number);

    let dotProduct = calculateDotProduct(vectorA, vectorB);
    let isOrthogonal = areVectorsOrthogonal(vectorA, vectorB);

    console.log("producto interno entre a y b: " + dotProduct);
    if (isOrthogonal) {
        console.log("a y b son ortogonales");
    } else {
        console.log("a y b no son ortogonales");
    }
}

handleUserInput();