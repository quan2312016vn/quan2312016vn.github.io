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
        list+="SHCN, Lý, Lý, GDCD, Địa";
        break;
     case '3':
        list+="Văn, Văn, Anh, Tin, Sinh";
        list2="Chiều: Quốc phòng (tiết 2, 3)";
        break;
    case '4':
        list+="Anh, Anh, Toán, Toán, Sinh";
        list2="Chiều: Thể dục (tiết 4, 5)";
        break;
    case '5':
        list+="Sử, Sử, Toán, Toán, Công Nghệ"; 
        list2="Chiều: Lý, Lý, Sinh (tiết 3, 4, 5)";
        break;
    case '6':
        list+="Toán, Toán, Hóa, Hóa, Văn";
        break;
    case '7':
        list+="Anh, Văn, Toán, Hóa, Hóa";
        break;          
  default:
        list="Không có danh sách thời khóa biểu cho ngày này, hoặc bạn nhập sai.";
        list2="";
      y.style.color="red";
    }
   y.innerHTML=list;
   z.innerHTML=list2; 
}
