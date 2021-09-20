export const create2DArray = (numberRows: number, numberColumns: number) => {
    return new Array(numberRows).fill(0).map((row, index) => {
        return new Array(numberColumns).fill(0);
    });
}

export const copyGrid = (grid: Array<any>) => {
    return JSON.parse(JSON.stringify(grid));
}