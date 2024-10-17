const table= createTable(document.querySelector("#tabella"));
const form = createForm(document.querySelector('#form'));
table.build([["Data", "Singola","Doppia","Suite"]]);
table.render();
form.setLabels(["Data", "Singola", "Doppia","Suite"]);
form.render();
filltable();
table.viewtable();
table.render();