function chonHang(){
    var loaiHang = document.getElementById("loaiHang").value;
    var donGia = document.getElementById("donGia");

    if(loaiHang == 1){
        donGia.value = '300000';
    }
    else if(loaiHang == 2){
        donGia.value = '400000'

    }
    else if(loaiHang == 3){
        donGia.value = '500000'
    }
    else {
        donGia.value = '600000'
    }
}

function soLuong(){
    var donGia = document.getElementById("donGia").value*1;
    console.log("🚀 ~ file: index.js ~ line 22 ~ soLuong ~ donGia", donGia)
    var soluong = document.getElementById("soLuonghang").value*1;
    document.getElementById("thanhTien").value = soluong*donGia;
}   
function vanchuyennoiThanh(){
    document.getElementById("phivanchuyen").value = 0;
}
function vanchuyenngoaiThanh(){
    document.getElementById("phivanchuyen").value = 30000;
}


