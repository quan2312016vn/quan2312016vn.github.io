function getTKB(){
  var x=document.getElementById("day");
  var day=x.value;
  var y=document.getElementById("list");
  var z=document.getElementById("list2");
  y.style.color="black";
  var list="Sáng: ";
  var list2="Chiều: Không có tiết buổi chiều";
  switch(day){
    case '2':
        list+="SHCN ,Lý, Lý, Toán (H), Toán (H)";
        break;
     case '3':
        list+="Lí, Lý, Công dân, Tin, Văn";
       
        break;
    case '4':
        list+="Sinh, Anh, Sử, Toán (S), Toán (S)";
        list2="Chiều: Thể dục (tiết 4, 5)";
        break;
    case '5':
        list+="Sinh, Sinh, Toán (H), Anh, Địa; 
        
        break;
    case '6':
        list+="Địa, Văn, Văn, Hoá, Hoá";
        list2="Chiều: Văn, Toán (S), Toán (S) (Tiết 3, 4, 5)";
        break;
    case '7':
        list+="Công Nghệ, Hoá, Hoá, Anh, Anh";
        break;          
  default:
        list="Không có danh sách thời khóa biểu cho ngày này, hoặc bạn nhập sai.";
        list2="";
      y.style.color="red";
    }
   y.innerHTML=list;
   z.innerHTML=list2; 
}
