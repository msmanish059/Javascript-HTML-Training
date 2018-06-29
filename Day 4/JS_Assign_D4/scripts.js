function loading()
{  
   innerDivWidth =  document.getElementById("innerDiv").style.width;
            let width = 0;
            let totalTime = 3000;
            let frameTime = 10;
            let intervalId = setInterval(function() {                  
                if(width >= 99){document.getElementById("innerDiv").style.backgroundColor = "#ba0000";}//Changing loader color on 100%
                
                innerDiv = document.getElementById("innerDiv");
                        if(width <= 100){
                        innerDiv.style.width = width + "%";
                        document.getElementById("progress").innerHTML = Math.round(width) + "%";
                        width += (100/totalTime)*frameTime;
                    }
                        else {
            clearInterval(intervalId);
            }
        }, frameTime);
        

    
    }

    