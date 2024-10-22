const filltable=()=>{
   let data=new Date();
    for(let i=0;i<30;i++){
        let n=i;
        let s=new Date (new Date().setDate(data.getDate()+i)).toLocaleDateString();
        let list=[s,"10","5","3"];
        table.addRow(list);
    }
}
const getDataFromForm =()=>{
        table.viewtable();
        let da= document.querySelector("#Data");
        let s= document.querySelector("#Singola");
        let d= document.querySelector("#Doppia");
        let su= document.querySelector("#Suite");
     
        let data=da.value;
        let singola=s.value;
        let doppia=d.value;
        let suite=su.value;
        let datac = data.replace("/","");
        for (let i =0 ; i<table.getData().length;i++){
        //console.log(typeof(data)+" // "+typeof(table.getData()[i][0]))
        if(parseInt(datac)===parseInt(table.getData()[i][0].replace("/",""))){
        let temp=[];
        let a= parseInt(table.getData()[i][1])-parseInt(singola);
        let b= parseInt(table.getData()[i][2])-parseInt(doppia);
        let c= parseInt(table.getData()[i][3])-parseInt(suite);
        temp.push(a,b,c);
         if(a >= 0 && b >= 0 && c >= 0){
            console.log(data+" "+temp)
            table.modifyRow(data,temp);
            table.render();
            table.viewtable();
            //set();
         }else{
            alert("non ci sono abbastanza camere disponibili");
         }
        }
     }
     
     /*
        Salvare le disponibilità (per data) su cache remota. Usare un solo oggetto dizionario per tutte le date e salvarlo in remoto con una chiave opportuna.
     */
      




     d.value="";
     s.value="";
     su.value="";
     da.value="";

}



const set=()=>{
   const myToken="67fea5bf-6439-4377-bf9b-65f43a7459e9";
   let myJSONObject=JSON.stringify(table.getData());
   let myKey="chiave";
   fetch("https://ws.cipiaceinfo.it/cache/set", {
      method: "POST",
      headers: {
          "content-type": "application/json",
          "key": myToken
      },
      body: JSON.stringify({
          key: myKey,
          value: myJSONObject
      })
  })
      .then(r => r.json())
      .then(r => {
          console.log("l oggetto myjsonobject è "+ myJSONObject);
      })

}



const get=()=>{
   const myToken="67fea5bf-6439-4377-bf9b-65f43a7459e9";
   let myKey="chiave";
   fetch("https://ws.cipiaceinfo.it/cache/get", {
      method: "POST",
      headers: {
          "content-type": "application/json",
          "key": myToken
      },
      body: JSON.stringify({
          key: myKey
      })
  })
      .then(r => r.json())
      .then(r => {
          myObject1 = JSON.parse(r.result);
          r.innerText=myObject1.dato;
          console.log(myObject1); 
  })
}




