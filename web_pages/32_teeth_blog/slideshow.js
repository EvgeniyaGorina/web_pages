var imageHolder,DOMpct,pct;
DOMpct=document.querySelector('.pct');
imageHolder=[1,2,3];
var ci=0;
var barIcon= document.getElementById('barIcon');
var navUl = document.getElementById('nav-ul');


//Nav
    barIcon.addEventListener('click',()=>{
        console.log(navUl);
    navUl.classList.toggle('show');
});

//Slaid show

setInterval( function (){
    console.log('This is interval');
    console.log(ci);
  if(ci <= imageHolder.length){
      console.log('This is image holder');
   ci = (ci===imageHolder.length) ? 0 : ci++;
      pct=imageHolder[ci++];
      console.log(ci+' This is work');
      DOMpct.style.display='block';
      DOMpct.src = './image/pct-'+ pct +'.png';    
} 
},6000);

