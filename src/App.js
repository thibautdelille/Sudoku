import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';
import { useState } from 'react';

const FINAL_GRID = [
  [8, 3, 5, 4, 1, 6, 9, 2, 7],
  [2, 9, 6, 8, 5, 7, 4, 3, 1],
  [4, 1, 7, 2, 9, 3, 6, 5, 8],
  [5, 6, 9, 1, 3, 4, 7, 8, 2],
  [1, 2, 3, 6, 7, 8, 5, 4, 9],
  [7, 4, 8, 5, 2, 9, 1, 6, 3],
  [6, 5, 2, 7, 8, 1, 3, 9, 4],
  [9, 8, 1, 3, 4, 5, 2, 7, 6],
  [3, 7, 4, 9, 6, 2, 8, 1, 5],
];

const COMPLEXITY = 0.3;

const STARTING_GRID = FINAL_GRID.map((arr) => {
  return arr.map((num) => {
    // randomly set 0s to 1s
    if (Math.random() > COMPLEXITY) {
      return 0;
    } else {
      return num;
    }
  });
});

function App() {
  const [finalGrid, setFinalGrid] = useState(FINAL_GRID);

  const [grid, setGrid] = useState(STARTING_GRID);

  const handleValidation = (value, gridIndex, subGridIndex) => {
    // let valid = true;
    // let reason = { grid, subGrid };
    // const subGrid = grid[gridIndex];

    // // check if the value is already in the subGrid
    // if (subGrid.includes(Number(value))) {
    //   valid = false;
    //   reason = { gridIndex, subGridIndex: subGrid.findIndex(value) };
    // }

    // // get the row based on the subGridIndex and gridIndex
    // const column = grid.map(() => {
    //   // if the gridIndex is  < 3 
    //   // I need to get the row mod(3) of the subGridIndex
    //   // concat the thos 3 row together
    //   if
    //   // if the gridIndex is  < 6

    // }); 

    //check if the value is already in the column

    // check if the value is already in the FinalGrid
  
    if (value === finalGrid[gridIndex][subGridIndex]) {
      const newGrid = [...grid];
      newGrid[gridIndex][subGridIndex] = Number(value);
      setGrid(newGrid);
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="App">
      Sudoku
      <Grid grid={grid} validateValue={handleValidation}></Grid>
    </div>
  );
}

export default App;
