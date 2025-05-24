//To jest worker.js

onemessage = function (e) {
    const { A, B } = e.data;
    const result = multiplyMatrices(A, B);
    postMessage(result);
}


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
