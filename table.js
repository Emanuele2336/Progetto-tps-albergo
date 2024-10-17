const createTable = (parentElement) => {
    let data;
    return {
      build: (dataInput) => {
        data = dataInput;
      },
      //modifica
      render: () => {
        let htmlTable = "<table>";
        htmlTable += data.map((row) => 
          "<tr>" + row.map((col) => 
            "<td>" + col + "</td>"
          ).join("")
        ).join("") + "</tr>";
        htmlTable += "</table";
        parentElement.innerHTML = htmlTable;
      },
      addRow: (dataInput)=>{
        data.push(dataInput);
      },
      viewtable: ()=>{
        console.log(data);
      },
      //modifica corrisponde ad un array di 3 elementi che rappresentano le nuove camere singole doppie e triple disponibili per la data indicata da date.
      modifyRow: (date,modifica) =>{
        for (let i =0 ; i<data.length;i++){
          if(date===data[i][0]){
            let temp=[];
            temp = [date,modifica[0],modifica[1],modifica[2]];
            data[i]=temp;
          }
        }
      }
    }
  }//ciao
  
  