const hourE1= document.getElementById("hours");

const minutesE1=document.getElementById("minutes");
const secondE1=document.getElementById("second");
const ampmE1=document.getElementById("ampm");

function updateclock()
{
    let h= new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="PM";
  
    if(h>12)
    {
        h=h-12;
         ampm="PM";
        
    }
    h=h<10? "0"+h:h;
    m=m<10? "0"+m:m;
    s=s<10? "0"+s:s;

    hourE1.innerText=h;
    minutesE1.innerText=m;
    secondE1.innerText=s;
    ampmE1,(innerText=ampm)
    setTimeout(()=>{
  updateclock();
    },1000)
}
updateclock();