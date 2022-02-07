(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());



/* var start= document.getElementById('start')
var reset= document.getElementById('reset')

var hours= document.getElementById('hours')
var minutes= document.getElementById('minutes')
var seconds= document.getElementById ('seconds')

//store a reference to var
var startTimer= " ";


function timer() {
    if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
        hours.value =0
        minutes.value =0
        seconds.value =0


    } else if(seconds.value !=0)  {
        seconds.value --;


    } else if (minutes.value !=0 && seconds.value ==0) {
        seconds.value = 59;
        minutes.value --;

    }else if( hours.value !=0 && minutes.value ==0){
        minutes.value =59;
        hours.value --;

    }
        return;
}


function stopTimer() {
    clearInterval(startTimer)
}


start.addEventListener('click', function(){
    //intialize the var startTimer
    stopTimer()
        startTimer=setInterval(function(){
            timer();
        },1000);

})

reset.addEventListener('click', function(){
    hours.value =0
    minutes.value =0
    seconds.value =0

    stopTimer()

}) */