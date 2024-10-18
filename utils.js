const filltable=()=>{
    for(let i=1;i<32;i++){
        let n=i;
        let s=n+"/03/2025";
        let list=[s,"10","5","3"];
        table.addRow(list);
    }
}


/*form.onsubmit=()=>{
   let da= document.querySelectorAll("#Data");
   let s= document.querySelectorAll("#Singola");
   let d= document.querySelectorAll("#Doppia");
   let su= document.querySelectorAll("#Suite");

   let data=da.value;
   let singola=s.value;
   let doppia=doppia.value;
   let suite=su.value;

   for (let i =0 ; i<data.length;i++){
   if(date===data[i][0]){
   let a= data[i][1]-parseInt(singola);
   let b= data[i][2]-parseInt(doppia);
   let c= data[i][3]-parseInt(suite);
    if(a >= 0 && b >= 0 && c >= 0){
        modifytable(data,[a,b,c]);
    }
   }
}
};*/

const getDataFromForm=()=>{
    const dataFF=document.getElementById("Data");
    const singola=document.getElementById("Singola");
    const doppia=document.getElementById("Doppia");
    const suite=document.getElementById("Suite");

    let dataVal=dataFF.value;
    let sinVal=singola.value;
    let doppVal=doppia.value;
    let suiteVal=suite.value;

    for(let i=0;i<dataFF.length;i++){
        

    }



}
