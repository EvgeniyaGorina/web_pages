var backUpBtn,backup,homeTop;
backup=document.querySelector('.backup');
backUpBtn=document.getElementById('backUpBtn');
var barIcon= document.getElementById('barIcon');
var navUl = document.getElementById('nav-ul');





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


