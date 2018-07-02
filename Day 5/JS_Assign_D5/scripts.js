let conHeight = document.getElementById("container").style.height;
conHeight = parseInt(conHeight)-10;
let conWidth = document.getElementById("container").style.width;
conWidth = parseInt(conWidth)-10;
 let moveX = 0;
 let moveY  = 0;
 let reverse = false;
 let movingObject = document.getElementById("movingObject");

 function makeWave(){
     movingObject.style.top = moveY;
     movingObject.style.left = moveX;
     moveX += 0.5;
     if(moveY >= conHeight){reverse = true;}
     if(moveY <= 0){reverse = false;}
     if(reverse === false){moveY+=2;}
     if(reverse === true){moveY-=2;}
     if(moveX >= conWidth){moveX = 0;}
    
     requestAnimationFrame(makeWave);
 }