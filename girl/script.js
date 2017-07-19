$(document).ready(function(){
  var str=Math.floor(Math.random()*10) + ".jpg";;
  
  $("img").attr("src",str);
  $(".get").click(function(){
    str=Math.floor(Math.random()*10) + ".jpg";
    
    $("img").attr("src",str);
  });
});
