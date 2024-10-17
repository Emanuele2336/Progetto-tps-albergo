const table= createTable(document.querySelector("#tabella"));
const form = createForm(document.querySelector('#form'));
table.build([["Data", "Singola","Doppia","Suite"]]);
table.render();
form.setLabels(["Data", "Singola", "Doppia","Suite"]);
form.render();
const filltable=()=>{
    for(let i=1;i<32;i++){
        let n=i;
        let s=n+"/03/2025";
        let list=[s,"10","5","3"];
        table.addRow(list);
    }
}
filltable();
table.viewtable();
table.render();