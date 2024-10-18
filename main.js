const table= createTable(document.querySelector("#tabella"));

const form = createForm(document.querySelector('#form'));
table.build([["Data", "Singola","Doppia","Suite"]]);
table.render();
form.setLabels(["Data", "Singola", "Doppia","Suite"]);
form.render();
filltable();
//table.modifyRow("2/03/2025",[3,3,3])
//table.viewtable();
table.render();
form.onsubmit(getDataFromForm());
