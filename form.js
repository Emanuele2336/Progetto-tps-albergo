const createForm = (parentElement) => {
    let data;
    let callback = null;
  ///modifica
    let reservation={
      data://data prenotazione,
      camera:{
        "singola": 10,
  "doppia": 5,
  "suite": 3
      }
    }
    return {  
      setLabels: (labels) => { data = labels; },  
      onsubmit: (callbackInput) => { callback = callbackInput},
      render: () => { 
        parentElement.innerHTML = 
          data.map((name, index) => {
              return `<div>${name}\n<input id="${name}" type="text" /></div>`;
            }).join('\n')
            + "<button type='button' id='submit'>Submit</button>";  
        document.querySelector("#submit").onclick = () => {
          const result = data.map((name) => {
            return document.querySelector("#" + name).value;
          });
          callback(result);
        }          
      },
    };
  };
  