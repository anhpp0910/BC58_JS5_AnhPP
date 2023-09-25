// Bài 1
// Hàm tính điểm 3 môn
function tinhDiem3Mon(diemMon1, diemMon2, diemMon3) {
  var diem3Mon = diemMon1 + diemMon2 + diemMon3;
  return diem3Mon;
}

// Hàm tính điểm ưu tiên
function tinhDiemUuTien(khuVuc, doiTuong) {
  var diemUuTien = 0;
  var diemKhuVuc = 0;
  var diemDoiTuong = 0;
  switch (khuVuc) {
    case "X":
      {
        diemKhuVuc = 0;
      }
      break;
    case "A":
      {
        diemKhuVuc = 2;
      }
      break;
    case "B":
      {
        diemKhuVuc = 1;
      }
      break;
    case "C":
      {
        diemKhuVuc = 0.5;
      }
      break;
  }
  switch (doiTuong) {
    case "0":
      {
        diemDoiTuong = 0;
      }
      break;
    case "1":
      {
        diemDoiTuong = 2.5;
      }
      break;
    case "2":
      {
        diemDoiTuong = 1.5;
      }
      break;
    case "3":
      {
        diemDoiTuong = 1;
      }
      break;
  }
  return (diemUuTien = diemKhuVuc + diemDoiTuong);
}

// Hàm tính tổng điểm và xét kết quả
document.getElementById("btn1").onclick = function () {
  var diemChuan = Number(document.getElementById("diemChuan").value);
  var diemMon1 = Number(document.getElementById("diemMon1").value);
  var diemMon2 = Number(document.getElementById("diemMon2").value);
  var diemMon3 = Number(document.getElementById("diemMon3").value);
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value;
  var diemTongKet =
    tinhDiem3Mon(diemMon1, diemMon2, diemMon3) +
    tinhDiemUuTien(khuVuc, doiTuong);
  var passOrFail = "";
  if (
    diemMon1 !== 0 &&
    diemMon2 !== 0 &&
    diemMon3 !== 0 &&
    diemTongKet >= diemChuan
  ) {
    passOrFail = "Đậu!!!";
  } else {
    passOrFail = "Rớt!!!";
  }
  document.getElementById("ketQua1").style.display = "block";
  document.getElementById(
    "ketQua1"
  ).innerHTML = `Tổng điểm đạt được: ${diemTongKet} - ${passOrFail}`;
};

// Bài 2
function tinhTien50KWDau(soKW) {
  var tien50KWDau = soKW * 500;
  return tien50KWDau;
}

function tinhTien50KWKe(soKW) {
  var tien50KWKe = soKW * 650;
  return tien50KWKe;
}

function tinhTien100KWKe(soKW) {
  var tien100KWKe = soKW * 850;
  return tien100KWKe;
}

function tinhTien150KWKe(soKW) {
  var tien150KWKe = soKW * 1100;
  return tien150KWKe;
}

function tinhTienKWConLai(soKW) {
  var tienKWConLai = soKW * 1300;
  return tienKWConLai;
}

document.getElementById("btn2").onclick = function () {
  var soKW = Number(document.getElementById("soKW").value);
  var tienDien = 0;
  if (soKW <= 50) {
    tienDien = tinhTien50KWDau(soKW);
  } else if (soKW <= 100) {
    tienDien = tinhTien50KWDau(50) + tinhTien50KWKe(soKW - 50);
  } else if (soKW <= 200) {
    tienDien =
      tinhTien50KWDau(50) + tinhTien50KWKe(50) + tinhTien100KWKe(soKW - 100);
  } else if (soKW <= 350) {
    tienDien =
      tinhTien50KWDau(50) +
      tinhTien50KWKe(50) +
      tinhTien100KWKe(100) +
      tinhTien150KWKe(soKW - 200);
  } else {
    tienDien =
      tinhTien50KWDau(50) +
      tinhTien50KWKe(50) +
      tinhTien100KWKe(100) +
      tinhTien150KWKe(150) +
      tinhTienKWConLai(soKW - 350);
  }
  document.getElementById("ketQua2").style.display = "block";
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Tiền điện là: ${tienDien.toLocaleString()}VND`;
};

// Bài 3
// Hàm tính tiền thuế nếu thu nhập đến 60
function thuNhapDen60(tongThuNhap) {
  return tongThuNhap * 0.05;
}

// Hàm tính tiền thuế nếu thu nhập trên 60 đến 120
function thuNhapTren60Den120(tongThuNhap) {
  return tongThuNhap * 0.1;
}

// Hàm tính tiền thuế nếu thu nhập trên 120 đến 210
function thuNhapTren120Den210(tongThuNhap) {
  return tongThuNhap * 0.15;
}

// Hàm tính tiền thuế nếu thu nhập trên 210 đến 384
function thuNhapTren210Den384(tongThuNhap) {
  return tongThuNhap * 0.2;
}

// Hàm tính tiền thuế nếu thu nhập trên 384 đến 624
function thuNhapTren384Den624(tongThuNhap) {
  return tongThuNhap * 0.25;
}

// Hàm tính tiền thuế nếu thu nhập trên 624 đến 960
function thuNhapTren624Den960(tongThuNhap) {
  return tongThuNhap * 0.3;
}

// Hàm tính tiền thuế nếu thu nhập trên 960
function thuNhapTren960(tongThuNhap) {
  return tongThuNhap * 0.35;
}

// Hàm tính thuế TNCN
document.getElementById("btn3").onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  var tongThuNhapNam = Number(document.getElementById("tongThuNhapNam").value);
  var soNguoiPhuThuoc = Number(
    document.getElementById("soNguoiPhuThuoc").value
  );
  var tienThue = 0;
  if (tongThuNhapNam <= 60e6) {
    tienThue = thuNhapDen60(tongThuNhapNam) - 4e6 - soNguoiPhuThuoc * 1.6e6;
  } else if (tongThuNhapNam > 60e6 && tongThuNhapNam <= 120e6) {
    tienThue =
      thuNhapTren60Den120(tongThuNhapNam) - 4e6 - soNguoiPhuThuoc * 1.6e6;
  } else if (tongThuNhapNam > 120e6 && tongThuNhapNam <= 210e6) {
    tienThue =
      thuNhapTren120Den210(tongThuNhapNam) - 4e6 - soNguoiPhuThuoc * 1.6e6;
  } else if (tongThuNhapNam > 210e6 && tongThuNhapNam <= 384e6) {
    tienThue =
      thuNhapTren210Den384(tongThuNhapNam) - 4e6 - soNguoiPhuThuoc * 1.6e6;
  } else if (tongThuNhapNam > 384e6 && tongThuNhapNam <= 624e6) {
    tienThue =
      thuNhapTren384Den624(tongThuNhapNam) - 4e6 - soNguoiPhuThuoc * 1.6e6;
  } else if (tongThuNhapNam > 624e6 && tongThuNhapNam <= 960e6) {
    tienThue =
      thuNhapTren624Den960(tongThuNhapNam) - 4e6 - soNguoiPhuThuoc * 1.6e6;
  } else {
    tienThue = thuNhapTren960(tongThuNhapNam);
  }
  document.getElementById("ketQua3").style.display = "block";
  document.getElementById(
    "ketQua3"
  ).innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${tienThue.toLocaleString()} VND`;
};

// Bài 4
// Disable ô nhập số kết nối khi loại KH là nhà dân
document.getElementById("nhaDan").onclick = function () {
  document.getElementById("soKetNoi").disabled = true;
  document.getElementById("soKetNoi").value = "";
};

// Enable ô nhập số kết nối khi loại KH là doanh nghiệp
document.getElementById("doanhNghiep").onclick = function () {
  document.getElementById("soKetNoi").disabled = false;
};

// Hàm tính hoá đơn cho nhà dân
function tinhHoaDonND(soKenhCaoCap) {
  var tongTienND = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
  return tongTienND;
}

// Hàm tính hoá đơn cho doanh nghiệp
function tinhHoaDonDN(soKetNoi, soKenhCaoCap) {
  var tongTienDN = 0;
  if (soKetNoi <= 10) {
    tongTienDN = 15 + 75 + 50 * soKenhCaoCap;
  } else {
    tongTienDN = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenhCaoCap;
  }
  return tongTienDN;
}

// Hàm tính tổng hoá đơn
document.getElementById("btn4").onclick = function () {
  var soKetNoi = Number(document.getElementById("soKetNoi").value);
  var soKenhCaoCap = Number(document.getElementById("soKenhCaoCap").value);
  var loaiKH = document.querySelector("input[name=selector]:checked").value;
  var tongTien = 0;
  if (loaiKH === "nhaDan") {
    tongTien = tinhHoaDonND(soKenhCaoCap);
  } else {
    tongTien = tinhHoaDonDN(soKetNoi, soKenhCaoCap);
  }
  document.getElementById("ketQua4").style.display = "block";
  document.getElementById(
    "ketQua4"
  ).innerHTML = `Hoá đơn cáp của quý khách là: ${tongTien.toLocaleString()}$`;
};
