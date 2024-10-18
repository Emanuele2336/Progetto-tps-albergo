const filltable=()=>{
    for(let i=1;i<32;i++){
        let n=i;
        let s=n+"/03/2025";
        let list=[s,"10","5","3"];
        table.addRow(list);
    }
}
const getDataFromForm =()=>{
        console.log("prima")
        table.viewtable();
        let da= document.querySelector("#Data");
        let s= document.querySelector("#Singola");
        let d= document.querySelector("#Doppia");
        let su= document.querySelector("#Suite");
     
        let data=da.value;
        let singola=s.value;
        let doppia=d.value;
        let suite=su.value;
        data = data.replace("/","");
        for (let i =0 ; i<table.getData().length;i++){
        //console.log(typeof(data)+" // "+typeof(table.getData()[i][0]))
        if(parseInt(data)==parseInt(table.getData()[i][0].replace("/",""))){
        let temp=[];
        let a= parseInt(table.getData()[i][1])-parseInt(singola);
        temp.push(a);
        let b= parseInt(table.getData()[i][2])-parseInt(doppia);
        temp.push(b);
        let c= parseInt(table.getData()[i][3])-parseInt(suite);
        temp.push(c);
         if(a >= 0 && b >= 0 && c >= 0){
            console.log("pdpdpd");
            table.modifyRow(data.value,temp);
            table.render();
            console.log("dopo:");
            table.viewtable();
         }
        }
     }
     
     

     table.render();
}


