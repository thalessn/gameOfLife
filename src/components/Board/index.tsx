import React, { useCallback, useEffect, useState } from "react";
import ItemBoard from "../ItemBoard";
import { Container, Grid } from "./styles";
import { create2DArray, copyGrid } from "../../utils";

const Board: React.FC = ({ children }) => {
  const width = 1400;
  const height = 600;
  const sizeItemBoard = 25;
  const numberOfRows = height / sizeItemBoard;
  const numberOfColumns = width / sizeItemBoard;

  const [grid, setGrid] = useState(() => {
    return create2DArray(numberOfRows, numberOfColumns);
  });

  const [running, setRunning] = useState(false);

  const countNeighbors = useCallback((
    grid: Array<any>,
    indexRow: number,
    indexColumn: number
  ) => {
    let sum = 0;
    for (
      let indexRowNeighbor = -1;
      indexRowNeighbor < 2;
      indexRowNeighbor++
    ) {
      for (
        let indexColumnNeighbor = -1;
        indexColumnNeighbor < 2;
        indexColumnNeighbor++
      ) {
        if (
          indexRow + indexRowNeighbor >= 0 &&
          indexRow + indexRowNeighbor < numberOfRows &&
          indexColumn + indexColumnNeighbor >= 0 &&
          indexColumn + indexColumnNeighbor < numberOfColumns
        ) {
          sum +=
            grid[indexRow + indexRowNeighbor][
              indexColumn + indexColumnNeighbor
            ];
        }
      }
    }
    sum -= grid[indexRow][indexColumn];
    return sum;
  }, [numberOfRows, numberOfColumns]);

  const runSimulation = useCallback(() => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    for (let i = 0; i < numberOfRows; i++) {
      for (let j = 0; j < numberOfColumns; j++) {
        let numberOfNeighbors = countNeighbors(grid, i, j);
        let isDead = grid[i][j] ? 0 : 1;

        if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
          newGrid[i][j] = 0;
        } else if (numberOfNeighbors === 3 && isDead) {
          newGrid[i][j] = 1;
        }
      }
    }
    setGrid(newGrid);
  }, [grid, countNeighbors, numberOfRows, numberOfColumns]);

  useEffect(() => {
    if (running) {
      const intervalId = setInterval(runSimulation, 100)
      return () => clearInterval(intervalId);
    }
  }, [running, runSimulation])


  const handleCellGridClick = (indexRow: number, indexColumn: number) => {
    const newGrid = copyGrid(grid);
    newGrid[indexRow][indexColumn] = grid[indexRow][indexColumn] ? 0 : 1;
    setGrid(newGrid);
  };

  return (
    <>
      <Container>
        <Grid
          width={width}
          height={height}
          numberOfRows={numberOfRows}
          numberOfColumns={numberOfColumns}
          sizeItemBoard={sizeItemBoard}
        >
          {grid.map((row: Array<any>, indexRow: number) =>
            row.map((column: Array<any>, indexColumn: number) => (
              <ItemBoard
                key={`${indexRow}-${indexColumn}`}
                handleOnClick={() => handleCellGridClick(indexRow, indexColumn)}
                isPaint={grid[indexRow][indexColumn] ? 1 : 0}
              />
            ))
          )}
        </Grid>
      </Container>
      <button
        onClick={() => {
          setRunning(!running);
        }}
      >
        {running ? "stop" : "start"}
      </button>
    </>
  );
};

export default Board;
