let hour=document.querySelector("#hour");
let minute=document.querySelector("#minute");
let second=document.querySelector("#second");



setInterval(()=>{
    d= new Date();
    htime= d.getHours();
    mintime= d.getMinutes();
   sectime= d.getSeconds();
    hrotation=30*htime+mintime/2;
    minrotation=6*mintime;
    scrotation=6*sectime;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${minrotation}deg)`;
    second.style.transform=`rotate(${scrotation}deg)`;
},1000);