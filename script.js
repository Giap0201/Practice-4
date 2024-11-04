var checkNameAdress = /^[a-zA-Z0-9]{2,}$/;
var checkMobile = /^(03|09)[1-9][0-9]{7}$/;
var checkEmail = /^[\w]+@[\w]+\.[a-zA-Z]{2,}$/;
var checkpPassWord = /^[a-zA-Z0-9!@#$%^&*]{8,}$/; // ít nhất 8 ký tự

var test = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
// Kiểm tra trường có rỗng không
function checkNull(name) {
    return name.value.trim().length === 0;
}

// Kiểm tra nhập vào có phải là số không
function checkInt(name) {
    return !isNaN(name.value) && name.value.trim() !== "";
}

// Sự kiện khi submit form
var checkform = document.querySelector("#form");
checkform.addEventListener('submit',function(event){
    if(checkValid(this)){
        alert("Thanh cong");
        this.submit();
    }
    else{
        event.preventDefault();
    }
})
// Hàm kiểm tra hợp lệ form
function checkValid(form) {
    let off = document.querySelector("#Off");
    let telex = document.querySelector("#Telex");
    let vni = document.querySelector("#Vni");
    let viqr = document.querySelector("#VIQR");
    if(!off.checked && !telex.checked && !vni.checked && !viqr.checked){
        alert("Vui long chon bo go");
        return false;
    }


    //kiem tra chon khu song chua
    if(form.khusong.value ===""){
        alert("Vui long chon khu vuc sinh song");
        form.khusong.focus();
        return false;
    }
    // Kiểm tra tên truy cập
    if (checkNull(form.tentruycap) || !checkNameAdress.test(form.tentruycap.value)) {
        alert("Tên truy cập không được bỏ trống và phải có ít nhất 2 ký tự.");
        form.tentruycap.focus();
        return false;
    }

    // Kiểm tra mật khẩu
    if (checkNull(form.password) || !checkpPassWord.test(form.password.value)) {
        alert("Mật khẩu không được bỏ trống và phải có ít nhất 8 ký tự.");
        form.password.focus();
        return false;
    }

    // Kiểm tra khớp mật khẩu
    if (form.password.value !== form.xacnhanmatkhau.value) {
        alert("Mật khẩu xác nhận không khớp.");
        form.xacnhanmatkhau.focus();
        return false;
    }

    // Kiểm tra tên đầy đủ
    if (checkNull(form.tendaydu) || !checkNameAdress.test(form.tendaydu.value)) {
        alert("Tên đầy đủ không được bỏ trống và phải có ít nhất 2 ký tự.");
        form.tendaydu.focus();
        return false;
    }
    if (checkNull(form.email) || !checkEmail.test(form.email.value)) {
        alert("Email khong hop le");
        form.email.focus();
        return false;
    }
    if (checkNull(form.mobile) || !checkMobile.test(form.mobile.value)) {
        alert("So dien thoai khong duoc bo trong va co 10 ki tu bat dau bang 03 hoac 09");
        form.mobile.focus();
        return false;
    }

    //kiem tra dia chi
    if(checkNull(form.diachi) || !checkNameAdress.test(form.diachi.value)){
        alert("Dia chi khong hop le vui long xem lai");
        form.diachi.focus();
        return false;
    }
    if(checkNull(form.mabaove) || mabaove.value !== "RAt"){
        alert("Ma so bao ve khong hop le");
        form.mabaove.focus();
        return false;
    }
    let checkbox = document.querySelector("#checkbox");
    if(!checkbox.checked){
        alert("Vui long dong y voi quy dinh va dieu kien");
        return false;
    }
    // Nếu mọi thứ đều hợp lệ, form sẽ được submit
    return true;
}
