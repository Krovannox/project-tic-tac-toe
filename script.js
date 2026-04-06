function gameControl() {
    // Simplified board using only an array with the 9 positions of the 3x3 board
    let gameboard = Array(9).fill(null);
    console.log(gameboard);

    // Function to place the markers in the gameboard array
    function placeMarker(position, marker) {
        // Check if there's already a marker in that position
        if (gameboard[position] !== null) return;

        gameboard[position] = marker;
        console.log(gameboard);

        // If a winning condition is met announce the winner and restart the gameboard
        if (checkWin(marker)) {
            console.log(`Player ${marker} WINS!`);
            restartGameboard();
        }
    }

    // Declare an array with the possible winning combinations
    const winningCombinations = [
        [0, 1, 2], // First row
        [3, 4, 5], // Second row
        [6, 7, 8], // Third row
        [0, 3, 6], // First column
        [1, 4, 7], // Second column
        [2, 5, 8], // Third column
        [0, 3, 8], // First diagonal
        [2, 4, 6], // Second diagonal
    ];

    // Function that checks if a winning combinations is true, taking the player marker into account
    function checkWin(playerMarker) {
        // Return true if one of the possible combinations meets the condition
        return winningCombinations.some(combination => {
            // Return true if every index of the combination matches the player marker
            return combination.every(index => gameboard[index] === playerMarker);
        });
    }

    // Function that restarts the gameboard to it's initial state
    function restartGameboard() {
        gameboard = Array(9).fill(null);
        console.log("Restarting the board");
        console.log(gameboard);
    }

    return { placeMarker };
}

const game = gameControl();