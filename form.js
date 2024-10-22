const createForm = (parentElement) => {
    let data;
    let callback = null;
    return {  
      setLabels: (labels) => { data = labels; },  
      onsubmit: (callbackInput) => { callback = callbackInput},
      render: () => { 
        parentElement.innerHTML = 
          data.map((name, index) => {
              return `<div>${name}\n<input id="${name}" type="text" /></div>`;
            }).join('\n')
            + "<button type='button' id='submit'>Submit</button>";  
        let a = document.querySelector("#submit")
        a.onclick = () => {
          const result = data.map((name) => {
            set();
            return document.querySelector("#" + name).value;
          });
          callback(result);
        }          
      },
    };
  };
 //ciao 