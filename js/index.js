
// Bai 1

function tinhLuong() {
    var luong1Ngay = document.getElementById("luongMotNgay").value * 1;
    var soNgayLam = document.getElementById("soNgayLam").value * 1;

    // tính tiền lương 
    var tienLuong = luong1Ngay * soNgayLam;

    var btn = document.getElementById("resul");
    btn.innerHTML = `${tienLuong} `;
    console.log(luong1Ngay, soNgayLam, tienLuong)

}

// end bai 1


// Bai 2

function tinhTrungBinh() {
    // lấy value và đổi sang number số thực
    var soThuc1 = document.getElementById("number1").value * 1;
    var soThuc2 = document.getElementById("number2").value * 1;
    var soThuc3 = document.getElementById("number3").value * 1;
    var soThuc4 = document.getElementById("number4").value * 1;
    var soThuc5 = document.getElementById("number5").value * 1;

    // Tính trung bình
    var trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;

    var btn = document.getElementById("resul");
    btn.innerHTML = `${trungBinh} `;
    console.log({ soThuc1, soThuc2, soThuc3, soThuc4, soThuc5, trungBinh })

}

// end bai 2

// bài 3

function quyDoiTien() {
    const tyGiaUSD = Number(23500);
    var tienUSD = document.getElementById("soTienUSD").value * 1;

    // quy đổi tiền sang VND
    var tienVND = new Intl.NumberFormat('vn-VN').format(tyGiaUSD * tienUSD);

    var btn = document.getElementById("resul");
    btn.innerHTML = `${tienVND} VND `;

    console.log({ tienUSD, tienVND });

}


// end bài 3


// bài 4
function tinhHCN() {

    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;

    // tính dien tich chu vi
    var dienTich = (chieuDai * chieuRong);
    var chuVi = (chieuDai + chieuRong) * 2;

    var btn = document.getElementById("resul");
    btn.innerHTML = `Diện tích: ${dienTich}, chu vi: ${chuVi}`;

    console.log({ dienTich, chuVi });
}
// end bài 4

// bai 5
function tinhTongKySo() {
    var numberInt = document.getElementById("numberInt").value * 1;

    // tách số  hàng DV và hàng chục
    var soHangDV = numberInt % 10;
    var soHangChuc = Math.floor(numberInt / 10);

    // tính tính tổng 2 ký số

    var tong2KySo = soHangChuc + soHangDV;

    var btn = document.getElementById("resul");
    btn.innerHTML = `${tong2KySo}`;

    console.log({ soHangDV, soHangChuc })
}
// end bai 5
