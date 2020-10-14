var imageHolder,DOMpct,pct,backUpBtn,backup,homeTop;
DOMpct=document.querySelector('.pct');
backup=document.querySelector('.backup');
backUpBtn=document.getElementById('backUpBtn');
imageHolder=[1,2,3];
var i=0;
var barIcon= document.getElementById('barIcon');
var navUl = document.getElementById('nav-ul');


//Nav
    barIcon.addEventListener('click',()=>{
    navUl.classList.toggle('show');
});

//Slaid show

setInterval( function (){
    console.log('This is interval');
  if(i <=imageHolder.length){
      console.log('This is image holder');
   i = (i===imageHolder.length) ? 0 : i++;
      pct=imageHolder[i++];
      console.log(i+' This is work');
      DOMpct.style.display='block';
      DOMpct.src = './image/pct-'+ pct +'.png';    
} 
},7000);



//back up to top button
 
 
  window.onscroll = function () {scroll()};
  function scroll() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    backup.style.display = "block";
  } else {
    backup.style.display = "none";
  }
}




  function backUp() {
  document.body.scrollTop= 0;
  document.documentElement.scrollTop = 0;
  //console.log(ToTopCounter.plusOneInvoke() + 'devide: '+ DevideModule.devideInvoke() );
  }

function mouseOver(){
    backUpBtn.src = './image/backup_back_side.svg'; 
    backUpBtn.style.width='54px';
    backUpBtn.style.height='48px';    
   }
  
function mouseOut(){
   backUpBtn.src='./image/Logo backup.svg'; 
};


//READ MORE BUTTON
/*var show = false;
    function showF() {
    	show = !show;
        console.log('show: '+show);
        if (show) {
        	document.getElementById("buttonReadMore").innerHTML='Schovat';
        } else {
        document.getElementById("buttonReadMore").innerHTML='Èíst více';
        }
    }

*/



/*
 * Modules example closures 
 * 
 * var ToTopCounter = (function () {
     var count = 0;
    var plusOne =  function () {
        return count += 1;
    }; 
    return { plusOneInvoke : function () {
            return plusOne();
    } };
})();


var DevideModule = (function (module) {
    
    var devide = function () {
        return module.plusOneInvoke() / 2;
    };
        return { devideInvoke :  () => {
            return devide();
    } };
    
})(ToTopCounter);*/


