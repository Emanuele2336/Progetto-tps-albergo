const createTable = (parentElement) => {
    let data;
    return {
      build: (dataInput) => {
        data = dataInput;
      },
      //modifica
      add: (reservation)=> {
//conntrollo per vedere se la prenotazione è valida
      },
      render: () => {
        let htmlTable = "<table>";
        htmlTable += data.map((row) => 
          "<tr>" + row.map((col) => 
            "<td>" + col + "</td>"
          ).join("")
        ).join("") + "</tr>";
        htmlTable += "</table";
        parentElement.innerHTML = htmlTable;
      }
    }
  }
  
  