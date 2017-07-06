$(document).ready(function(){
  $("body").addClass("animated fadeIn");
  $("nav>a").click(function(){
    $("body").removeClass("animated fadeIn");
    setTimeout(function(){
      $("body").addClass("animated fadeIn");
    },1);
  });
});
