window.onload = function () {
  
    var seconds = 00; 
    var minutes = 00; 
    var appendHours = document.querySelector(".hours");
    var appendMinutes = document.querySelector(".minutes");
    var appendSeconds = document.querySelector(".seconds");
    var buttonStart = document.querySelector('.start-btn');
    var buttonStop = document.querySelector('.stop-btn');
    var buttonReset = document.querySelector('.reset-btn');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 1000);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
        clearInterval(Interval);
        hours = "00";
        minutes = "00";
        seconds = "00";
        appendHours.innerHTML = hours;
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      seconds++; 
      
      if(seconds <= 9){
        appendSeconds.innerHTML = "0" + seconds;
      }
      
      if (seconds > 9){
            appendSeconds.innerHTML = seconds; 
            if (seconds > 60) {
                    seconds = 0;
                    appendSeconds.innerHTML = '0' + seconds;
                    minutes++;
                    if(minutes <= 9){
                        appendMinutes.innerHTML = "0" + minutes;
                }
                
                if (minutes > 9){
                    if (minutes > 60) {
                        minutes = 0;
                        appendMinutes.innerHTML = "0" + minutes;
                        hours++;
                        if(hours < 9)
                            appendHours.innerHTML = '0' + hours;
                        else
                            appendHours.innerHTML = hours;
                    } 
                    appendMinutes.innerHTML = minutes;
                }
            }
        }
    } 
}
