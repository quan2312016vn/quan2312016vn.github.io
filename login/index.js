function href(){
var user=document.getElementById("user").value;
var pass=document.getElementById("pass").value;
if (user==pass && user!=""){

  document.getElementById('link').href="https://pornhub.com/"
}else{
    document.getElementById('check').style.display="inline";
}
}
