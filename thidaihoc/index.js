function thi(){
var a = new Date();
var b = new Date(2018,5,22,0,0,0);
var x=document.getElementById("time");
var timeless=Math.ceil((((b.getTime()-a.getTime())/1000)/3600)/24);
x.innerHTML=timeless+" ngày";
}