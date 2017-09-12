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
        list+="SHCN ,Lý, Lý, Toán, Toán";
        break;
     case '3':
        list+="Lí, Sinh, Văn, Công dân, Tin";
       
        break;
    case '4':
        list+="Sử, Sinh, Anh, Toán, Toán";
        list2="Chiều: Thể dục (tiết 4, 5)";
        break;
    case '5':
        list+="Văn, Văn, Toán, Anh, Anh"; 
        list2="Chiều: Quốc phòng (tiết 2, 3)";
        break;
    case '6':
        list+="Lý, Công Nghệ, Địa, Hoá, Hoá";
        list2="Chiều: Sử, Toán, Toán (Tiết 3, 4, 5)";
        break;
    case '7':
        list+="Hoá, Hoá, Văn, Anh, Sinh";
        break;          
  default:
        list="Không có danh sách thời khóa biểu cho ngày này, hoặc bạn nhập sai.";
        list2="";
      y.style.color="red";
    }
   y.innerHTML=list;
   z.innerHTML=list2; 
}
