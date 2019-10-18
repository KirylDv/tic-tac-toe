class TicTacToe {
    constructor() {
        this.stage = 0;
        this.field = [['-', '-', '-'],
                     ['-', '-', '-'],
                     ['-', '-', '-']];
    }

    getCurrentPlayerSymbol() {
        return (this.stage & 1) ? "o": "x";
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === "-"){
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.stage++;
            // console.log(this.field);
        }
    }

    isFinished() {
        return ((this.getWinner() !== null) || this.noMoreTurns());
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if( this.field[i][0] === this.field[i][1] && this.field[i][1] === this.field[i][2] && this.field[i][1] !== "-")
                return this.field[i][0];
        }
        for (let i = 0; i < 3; i++) {
            // console.log(this.field[0][i], this.field[1][i], this.field[2][i]);
            if( this.field[0][i] === this.field[1][i] && this.field[1][i] === this.field[2][i] && this.field[1][i] !== "-")
                return this.field[0][i];
        }
        if(this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2] && this.field[1][1] !== "-"){
            return this.field[1][1];
        }
        if(this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0] && this.field[1][1] !== "-"){
            return this.field[1][1];
        }
        return null;
    }

    noMoreTurns() {
        return this.stage > 8;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex] !== "-" ? this.field[rowIndex][colIndex]: null;
    }
}

module.exports = TicTacToe;
