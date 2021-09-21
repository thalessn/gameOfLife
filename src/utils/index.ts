
export const create2DArray = (numberRows: number, numberColumns: number) => {
    return new Array(numberRows).fill(0).map((row, index) => {
        return new Array(numberColumns).fill(0);
    });
}

const generateRandomZeroOrOne = () => {
    return (Math.floor(Math.random() * 4) === 1) ? 1 : 0;
}

export const createRandom2DArray = (numberRows: number, numberColumns: number) => {
    let grid = create2DArray(numberRows, numberColumns);
    for(let indexRow = 0; indexRow < numberRows; indexRow++){
        for(let indexColumn = 0; indexColumn < numberColumns; indexColumn++){
            grid[indexRow][indexColumn] = generateRandomZeroOrOne();
        }
    }
    return grid;
}

export const copyGrid = (grid: Array<any>) => {
    return JSON.parse(JSON.stringify(grid));
}