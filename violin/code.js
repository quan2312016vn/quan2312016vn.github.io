$(document).ready(function(){
var num;
var time;
var y=document.getElementById("main");
$("#starter").click(function(){
  $("#starter").css("display","none");
  setTimeout(function(){batdau();},2000);
  
});
function batdau(){
  
  var x=document.getElementById("note");
  function change(){
    num=Math.floor(Math.random()*(18-2+1)+2);
    x.src=num+".jpg";
    time=5;
    function timer(){
      time--;
      if(time>0){
        setTimeout(function(){timer();},1000);
      }
      else{
        change();
      }
    }    
    timer();
  
  }
  change();}
  });
  
