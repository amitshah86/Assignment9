window.setInterval(function(){

  var today = new Date();
  var minutes = today.getMinutes();
  var hours = today.getHours();
  var seconds = today.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
}

  if (minutes < 10) {
    minutes = "0" + minutes;
}

  if (seconds < 10) {
    seconds = "0" + seconds;
} 

var time = hours + ":" + minutes + ":" + seconds;

console.log(time);

$(".clock").text(time);

} , 1000);