function thi(){
  play();
  function play(){
var a = new Date();
var b = new Date(2018,6,25,0,0,0);
var x=document.getElementById("time");
var timeless=(b.getTime()-a.getTime());
var timelessday=Math.floor((((b.getTime()-a.getTime())/1000)/3600)/24);
var timelesshour=Math.floor(((timeless/1000/3600/24)-timelessday)*24);
var timelessmin=Math.floor((((timeless/1000/3600/24)-timelessday)*24-timelesshour)*60);
var timelesssec=Math.ceil((((((timeless/1000/3600/24)-timelessday)*24-timelesshour)*60)-timelessmin)*60);
x.innerHTML=timelessday+" ngày "+timelesshour+"h:"+timelessmin+"m:"+timelesssec+"s";
    setTimeout(function(){play();},500);
}
}
