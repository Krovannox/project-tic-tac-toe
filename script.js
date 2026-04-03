/* Simplified board using only an array with the 9 positions of the 3x3 board */
const gameboard = Array(9).fill(null);
console.log(gameboard);

/* Function to place the markers in the gameboard array */
function placeMarker(position, marker) {
    /* Check if there's already a marker in that position */
    if (gameboard[position] !== null) return;

    gameboard[position] = marker;
    console.log(gameboard);
}