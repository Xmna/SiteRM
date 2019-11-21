var myVideo= document.getElementById("vidio");
console.log(myVideo);
function player(){
myVideo.play();
}
function pausar()
{
myVideo.pause();
}
  
function stop()
{
var myVideo = document.getElementById("vidio");
myVideo.currentTime=0;
myVideo.pause();
}