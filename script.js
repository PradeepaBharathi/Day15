let data=[
    {
      "id": "1",
      "name": "Pradeepa",
      "email": "Pradeepa@yahoo.com"
    },
    {
      "id": "2",
      "name": "Bharathi",
      "email": "Bharathi@yahoo.com"
    },
    {
      "id": "3",
      "name": "Deepa",
      "email": "deepa@yahoo.com"
    },
    {
      "id": "4",
      "name": "Rathi",
      "email": "rathi@yahoo.com"
    },
    {
      "id": "5",
      "name": "Devika",
      "email": "devika@hotmail.com"
    },
    {
      "id": "6",
      "name": "Rizwana",
      "email": "rizwana@yahoo.com"
    },
    {
      "id": "7",
      "name": "sri",
      "email": "Sri@hotmail.com"
    },
    {
      "id": "8",
      "name": "Jagruthi",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Bargavi",
      "email": "bargavi@hotmail.com"
    },
    {
      "id": "10",
      "name": "Sudeepthi",
      "email": "deepthi@hotmail.com"
    },
    {
      "id": "11",
      "name": "Vaidhee",
      "email": "vaidhee@gmail.com"
    },
    {
      "id": "12",
      "name": "Sangeetha",
      "email": "sangee@yahoo.com"
    },
    {
      "id": "13",
      "name": "Divya",
      "email": "divya@hotmail.com"
    },
    {
      "id": "14",
      "name": "Anu",
      "email": "anu@yahoo.com"
    },
    {
      "id": "15",
      "name": "Padmavathi",
      "email": "padma@gmail.com"
    },
    {
      "id": "16",
      "name": "Babitha",
      "email": "babitha@hotmail.com"
    },
    {
      "id": "17",
      "name": "Karthick",
      "email": "karthick@yahoo.com"
    },
    {
      "id": "18",
      "name": "Sathish",
      "email": "Sathish@gmail.com"
    },
    {
      "id": "19",
      "name": "Rachel",
      "email": "rachel@gmail.com"
    },
    {
      "id": "20",
      "name": "Manoj",
      "email": "Manoj@yahoo.com"
    },
    {
      "id": "21",
      "name": "Ajith",
      "email": "ajith@yahoo.com"
    },
    {
      "id": "22",
      "name": "Kumar",
      "email": "kumar@yahoo.com"
    },
    {
      "id": "23",
      "name": "Prem",
      "email": "prem@hotmail.com"
    },
    {
      "id": "24",
      "name": "Abhi",
      "email": "abhi@gmail.com"
    },
    {
      "id": "25",
      "name": "vidya",
      "email": "vidya@hotmail.com"
    },
    {
      "id": "26",
      "name": "Vinothini",
      "email": "vino@gmail.com"
    },
    {
      "id": "27",
      "name": "Aishwarya",
      "email": "aishu@gmail.com"
    },
    {
      "id": "28",
      "name": "Laya",
      "email": "laya@gmail.com"
    },
    {
      "id": "29",
      "name": "Navya",
      "email": "navya@hotmail.com"
    },
    {
      "id": "30",
      "name": "Aathira",
      "email": "athira@hotmail.com"
    },
    {
      "id": "31",
      "name": "Elakiya",
      "email": "delaki@hotmail.com"
    },
    {
      "id": "32",
      "name": "Sai",
      "email": "sai@gmail.com"
    },
    {
      "id": "33",
      "name": "Vedha",
      "email": "vedha@gmail.com"
    },
    {
      "id": "34",
      "name": "Nivedha",
      "email": "nive@hotmail.com"
    },
    {
      "id": "35",
      "name": "Dharshini",
      "email": "dhajju@hotmail.com"
    },
    {
      "id": "36",
      "name": "Srinithi",
      "email": "sri@yahoo.com"
    },
    {
      "id": "37",
      "name": "Asuntha",
      "email": "asu@yahoo.com"
    },
    {
      "id": "38",
      "name": "Dhanam sri",
      "email": "dhanam@hotmail.com"
    },
    {
      "id": "39",
      "name": "Nivendhini",
      "email": "nivee@yahoo.com"
    },
    {
      "id": "40",
      "name": "Shalini",
      "email": "salini@hotmail.com"
    },
    {
      "id": "41",
      "name": "Ilakiya",
      "email": "ilaki@yahoo.com"
    },
    {
      "id": "42",
      "name": "Viji",
      "email": "vijii@hotmail.com"
    },
    {
      "id": "43",
      "name": "Kavya",
      "email": "kavya@hotmail.com"
    },
    {
      "id": "44",
      "name": "Yoga",
      "email": "yoga@gmail.com"
    },
    {
      "id": "45",
      "name": "Jothi",
      "email": "jothi6@gmail.com"
    },
    {
      "id": "46",
      "name": "Hamsa",
      "email": "hamsa@hotmail.com"
    },
    {
      "id": "47",
      "name": "Prarthana",
      "email": "prarthu@gmail.com"
    },
    {
      "id": "48",
      "name": "Asley",
      "email": "ash@yahoo.com"
    },
    {
      "id": "49",
      "name": "Vadana",
      "email": "vadhu@gmail.com"
    },
    {
      "id": "50",
      "name": "Subha",
      "email": "subhu@gmail.com"
    },
    
  ];
    let num=(data.length)/5;
    let div=document.createElement("div");
    document.body.appendChild(div);
    document.body.style.textAlign="center";
    for(let i=0;i<num;i++){
      let button=document.createElement("input");
      button.setAttribute("name","switch");
      button.setAttribute("type","radio");
      button.innerHTML=`${i+1}`;
      document.body.appendChild(button);

      button.addEventListener('click',()=>{
        div.innerHTML=" ";
        let table =  document.createElement("table");
        table.setAttribute("class","main");
        table.style.border="2px solid black";
        div.appendChild(table);
        div.style.display="flex";
        div.style.justifyContent="center";
        div.style.padding="50px";
        let end=(i+1)*5;
        let start = end-5;
        console.log(i);
        let ar=[];
        ar=Object.keys(data[0])
        let tr = document.createElement("tr");
        tr.setAttribute("class","heading")
        document.querySelector("table").appendChild(tr);
        for(let k=0;k<ar.length;k++){
          let th= document.createElement("th");
          th.innerHTML=ar[k];
          tr.appendChild(th);
        }
        for(let k=start;k<end;k++){
          let trd=document.createElement("tr");
          document.querySelector("table").appendChild(trd);
          for(let j=0;j<ar.length;j++){
            let td=document.createElement("td");
            td.innerHTML=data[k][ar[j]];
            trd.appendChild(td);
            td.style.padding="30px";
          }
        }
      });
  }
