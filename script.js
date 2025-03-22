var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;


function start(){
    timer = true;
    stopWatch();


}
function stop(){
    timer = false;
}
function reset(){
    timer = false;
    hr = 0;
 min = 0;
sec = 0;
 count = 0;
 document.querySelector("#hr").innerHTML = "00"; document.querySelector("#min").innerHTML = "00"; document.querySelector("#sec").innerHTML = "00"; document.querySelector("#count").innerHTML = "00";

}

function stopWatch(){
    if(timer==true){
        count = count+1;
    
        if(count==100){
            sec = sec+1;
            count = 0;
        }
            if(sec==60){
                sec = 0;
                min = min+1;
               
            }
            if(min==60){
                hr = hr+1;
                min = 0;
                sec = 0;
               
            }
            var hrString = hr;
            var minString = min;
            var secString = sec;
            var countString = count;

            if(hr<10){
                hrString = "0" + hrString;
            }
            if(min<10){
                minString = "0" + minString;
            }
            if(sec<10){
                secString = "0" + secString;
            }
            if(count<10){
                countString = "0" + countString;
            }
           
         
            document.querySelector("#hr").innerHTML = hrString;
            document.querySelector("#min").innerHTML = minString;
        document.querySelector("#sec").innerHTML = secString;
        document.querySelector("#count").innerHTML = countString;
        setTimeout("stopWatch()",10)
    }

}