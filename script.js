
let bt = document.querySelector("#bt"); 
let result  =  document.querySelector("#info");  
let img = document.querySelector("#img");
let url1 = `https://countries-api-abhishek.vercel.app/countries/`; 
 async function getdata(){ 
    let user  = document.getElementById("input").value;    
    let url2  = url1+user; 
     let info  = await fetch(url2); 
     let data = await info.json();  
      let para = document.createElement('div'); 
     let  name =  para.src = data.data.name;  
     let  bor =  para.src = data.data.borders;  
     let  cap =  para.src = data.data.capital;  
     let  pop =  para.src = data.data.population; 
     let lang =  para.src = data.data.languages;  
     let cure =  para.src = data.data.currency; 
     let  re =  para.src = data.data.region;  
    console.log(result.innerText = "Name :" +name+"\n"+"Border :"+bor+"\n"+"Capital :"
    +cap+"\n"+"population :"+pop+"\n"+"Languages :"+lang+"\n"+"currency :"+cure+"\n"+"Region :"+re);  
        
    const img = document.createElement('img');
    img.src = data.data.flag;
    document.getElementById('con').appendChild(img);


 }


  