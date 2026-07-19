// Pattern Printing V

function patternPrinting(N) {
    for (let i=0; i<N; i++) {
      let row = "";
  
      // Print decreasing stars with underscores
      for (let j=0; j<N-i; j++) {
        row = row + "*" + " ";
      }
  
      // Add increasing spaces (underscores)
      for (let k=0; k<i; k++) {
        row = row + "  ";
      }
  
      // Print the row except for the last extra underscore
      let result = "";
      for (let m=0; m<row.length-1; m++) {
        result = result + row[m];
      }
  
      console.log(result);
    }
}
patternPrinting(5)
