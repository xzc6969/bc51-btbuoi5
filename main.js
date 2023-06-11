// Bài 1
// Điểm ưu tiên khu vực
var KV_A = 2;
var KV_B = 1;
var KV_C = 0.5;
// Điểm ưu tiên đối tượng
var DT_1 = 2.5;
var DT_2 = 1.5;
var DT_3 = 1;

var KV = 0;
var DT = 0;

function getEle(id) {
  return document.getElementById(id);
}
// Tính điểm ưu tiên khu vực
function diemUutienKV(area) {
  if (area === "A") {
    KV += KV_A;
  } else if (area === "B") {
    KV += KV_B;
  } else if (area === "C") {
    KV += KV_C;
  } else {
    alert("Vui lòng chọn khu vực!");
  }
  return KV;
}
// Tính điểm ưu tiên đối tượng
function diemUutienDT(object) {
  if (object === "1") {
    DT += DT_1;
  } else if (object === "2") {
    DT += DT_2;
  } else if (object === "3") {
    DT += DT_3;
  } else {
    alert("Vui lòng chọn đối tượng!");
  }
  return DT;
}

function ketqua() {
  var point = getEle("point").value * 1;
  var point1 = getEle("point1").value * 1;
  var point2 = getEle("point2").value * 1;
  var point3 = getEle("point3").value * 1;
  var area = getEle("area").value;
  var object = getEle("object").value;
  var res = "";
  var tongDiem =
    point1 + point2 + point3 + diemUutienKV(area) + diemUutienDT(object);
  if (tongDiem === 0) {
    res = "Bạn đã rớt do tổng điểm nhỏ hơn hoặc bằng 0";
  } else if (tongDiem >= point) {
    res = "Bạn đã đậu. Tổng điểm: " + tongDiem;
  } else {
    res = "Bạn đã rớt. Tổng điểm: " + tongDiem;
  }
  document.getElementById("result1").innerHTML = res;
}

// Bài 2
var KW_1 = 500;
var KW_2 = 650;
var KW_3 = 850;
var KW_4 = 1100;
var KW_5 = 1300;

function tinhTienDien() {
  var name = getEle("name").value;
  var kw = getEle("kw").value * 1;
  var tongTien = 0;
  if (0 < kw && kw <= 50) {
    tongTien = kw * KW_1;
  } else if (50 < kw && kw <= 100) {
    tongTien = 50 * KW_1 + (kw - 50) * KW_2;
  } else if (100 < kw && kw <= 200) {
    tongTien = 50 * KW_1 + 50 * KW_2 + (kw - 100) * KW_3;
  } else if (200 < kw && kw <= 350) {
    tongTien = 50 * KW_1 + 50 * KW_2 + 100 * KW_3 + (kw - 200) * KW_4;
  } else if (kw > 350) {
    tongTien =
      50 * KW_1 + 50 * KW_2 + 100 * KW_3 + 150 * KW_4 + (kw - 350) * KW_3;
  }
  // Format VN
  var VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 3,
  });
  var res = "Họ tên: " + name + "; Tiền điện: " + VND.format(tongTien);
  getEle("result2").innerHTML = res;
}

// Bài 3

function tinhTienThue() {
  var name1 = getEle("name1").value;
  var total = getEle("total").value * 1;
  var people = getEle("people").value * 1;
  var thunhap = total - 4000000 - people * 1600000;
  var tienthue = 0;
  if (0 < thunhap && thunhap <= 60000000) {
    tienthue = (thunhap * 5) / 100;
  } else if (60000000 < thunhap && thunhap <= 120000000) {
    tienthue = (thunhap * 10) / 100;
  } else if (120000000 < thunhap && thunhap <= 210000000) {
    tienthue = (thunhap * 15) / 100;
  } else if (210000000 < thunhap && thunhap <= 384000000) {
    tienthue = (thunhap * 20) / 100;
  } else if (384000000 < thunhap && thunhap <= 624000000) {
    tienthue = (thunhap * 25) / 100;
  } else if (624000000 < thunhap && thunhap <= 960000000) {
    tienthue = (thunhap * 30) / 100;
  } else if (thunhap > 960000000) {
    tienthue = (thunhap * 35) / 100;
  } else {
    alert("Số tiền thu nhập không hợp lệ");
  }
  var VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 3,
  });
  var res ="Họ tên: " +name1 +"; Tiền thuế thu nhập cá nhân: " +VND.format(tienthue);
  getEle("result3").innerHTML = res;
}

// Bài 4
var ND_HD=4.5;
var ND_CB=20.5;
var ND_CC=7.5;


var DN_HD=15;
var DN_CB=75;
var DN_CC=50;

function tinhTienCap(){
  var MKH = getEle("MKH").value*1;
  var SKCC = getEle("SKCC").value*1;
  var SKN = getEle("SKN").value*1;
  var tienCap = 0;
  var e =getEle("client");
  var LKH = e.options[e.selectedIndex].text;
  
  // if(LKH == "Doanh nghiệp"){
  //   getEle("SKN").style.display = "block";
  // }
  if(LKH == "Nhà dân"){
    tienCap = ND_HD + ND_CB + ND_CC*SKCC;
  }else if(LKH == "Doanh nghiệp" && SKN>=0 && SKN<=10){
    tienCap = DN_HD + DN_CB + DN_CC*SKCC;
  }else if(LKH == "Doanh nghiệp" && SKN>10){
    tienCap = DN_HD + DN_CB + 5*(SKN-10) + DN_CC*SKCC;
  }else{
    alert("Vui long chọn loại khách hàng")
  }
  var USD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 3,
  });
  var res = "Mã khách hàng: "+MKH+ "; Tiền cáp: "+USD.format(tienCap);
  getEle("result4").innerHTML =res;
}