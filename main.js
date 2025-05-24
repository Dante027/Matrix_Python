
// function about multiplication of matrices

function multiplyMatrices(A, B) {
    const rows = A.length;
    const columns = B[0].length;
    const result = Array.from({ length: rows },
        () => Array(columns).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            for (let k = 0; k < A[0].length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;

}

// Funkcja odpowiadajaca
//za WYSWIETLANIE operacji mnozenia na macierzach

function startMultiplication() {
    const C = multiplyMatrices(A, B);
    console.log(C);  // potem do zrobienia wizualne wyswietalnie

}
