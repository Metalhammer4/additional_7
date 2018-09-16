module.exports = function solveSudoku(matrix) {
  // your solution
  var undetectedDublicate = Array([9]);
  const clean = () => {
      for (let i = 1; i <= 9; i++) undetectedDublicate[i] = false;   
  }

  const rowTrue = (row) => {
    clean();
      for (let col = 0; col < 9; col++) {
          if (matrix[row][col] != 0) {
              if (undetectedDublicate[matrix[row][col]]) return false; 
                  undetectedDublicate[matrix[row][col]] = true;
          }
      }
      return true;
  }

  const colTrue = (col) => {
    clean();
      for (let row = 0; row < 9; row++) {
          if (matrix[row][col] != 0) {
              if (undetectedDublicate[matrix[row][col]]) return false; 
                  undetectedDublicate[matrix[row][col]] = true;
          }
      }
      return true;
  }

  const blockTrue = (startRow, startCol) => {
    clean();
      for (let row = startRow; row < startRow + 3; row++) {
          for (let col = startCol; col < startCol + 3; col++) {
              if (matrix[row][col] != 0) {
                  if (undetectedDublicate[matrix[row][col]]) return false; 
                      undetectedDublicate[matrix[row][col]] = true;
              }  
          }
      }
      return true;
  }

  const recursiveQuest = (row, col) => {
      while (row < 9 && matrix[row][col] != 0) {
          col++;
          if (col == 9) {
              row++;      
              col = 0; 
          }
      }
      if (row == 9) return true;
      for (let k = 1; k <= 9; k++) {
          matrix[row][col] = k;
          if (rowTrue(row) 
              && colTrue(col) 
              && blockTrue(row - row % 3, col - col % 3) 
              && recursiveQuest(row, col)) 
              return true;
      }  
    matrix[row][col] = 0;
      return false;  
  } 

 recursiveQuest(0, 0);
  return matrix;
}