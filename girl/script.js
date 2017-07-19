$(document).ready(function(){
  var str=Math.round(Math.random()*10) + ".jpg";;
  
  $("img").attr("src",str);
  $(".get").click(function(){
    str=Math.round(Math.random()*10) + ".jpg";
    
    $("img").attr("src",str);
  });
});
