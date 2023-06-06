//all code is based on W3Schools: https://www.w3schools.com/howto/howto_js_countdown.asp
//and stackoverflow answer: https://stackoverflow.com/questions/40263537/javascript-countdown-timer-in-gmt-utc

var countDownDate = new Date('Apr 30, 2023 10:00:00 GMT+09:00').getTime();

var x = setInterval(function() {
  
  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
  var hours = ("0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  var minutes = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  var seconds = ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
  
  //document.getElementById("evtTimer").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
  document.title = days + ":" + hours + ":" + minutes + ":" + seconds;
  
  if (distance <= 0) {

    clearInterval(x);

    //document.getElementById("evtTimer").innerHTML = "Event begins now!";
    document.title = "GourmetDayLife / Astraea Centrale";

  }
}, 1000);
