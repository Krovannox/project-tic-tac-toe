/* Create a 3x3 Array */
function createGameboard() {
    /* Create an empty array */
    const gameboard = [];

    /* Create the rows and columns of the board */
    const rows = 3;
    const columns = 3;

    /* Create an array of arrays using a nested for loop */
    for (let i = 0; i < rows; i++) {
        gameboard[i] = [];

        for (let j = 0; j < columns; j++) {
            gameboard[i][j] = 0;
        }
    }

    return gameboard;
}

console.table(createGameboard());