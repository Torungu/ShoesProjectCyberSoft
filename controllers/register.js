function getEle(id) {
    return document.getElementById(id);
}
var valid = new Valid();
function newFunction() {
    if (getEle('email').value) {
        getEle('errEmail').style.display = 'none'
    }
    if (getEle('password').value) {
        getEle('errPass').style.display = 'none'
    }
    if (getEle('password_confirm').value) {
        getEle('errPassConfirm').style.display = 'none'
    }
    if (getEle('name').value) {
        getEle('errName').style.display = 'none'
    }
    if (getEle('phone').value) {
        getEle('errPhone').style.display = 'none'
    }
}
getEle('getInfo').onclick = function (event) {
    var user = new InfoUser();
    user.email = getEle('email').value;
    user.password = getEle('password').value;
    user.name = getEle('name').value;
    user.gender = getEle('gender1').checked;
    user.phone = getEle('phone').value;
    var password_confirm = getEle('password_confirm').value;
    isValid = true;

    isValid &= valid.checkArr(user.email, 'errEmail', "Vui lòng nhập Email (*)") && valid.checkEmail(user.email, 'errEmail', "Vui lòng nhập đúng định dạng Email (*)")

    isValid &= valid.checkArr(user.password, 'errPass', "Vui lòng nhập mật khẩu (*)")

    isValid &= valid.checkArr(user.name, 'errName', "Vui lòng nhập tên (*)") && valid.checkLetter(user.name, 'errName', "Vui lòng nhập đúng định dạng tên (*)")

    isValid &= valid.checkArr(user.phone, 'errPhone', "Vui lòng nhập số điện thoại (*)") && valid.checkNumber(user.phone, 'errPhone', "Vui lòng nhập đúng định dạng số (*)")

    isValid &= valid.checkArr(password_confirm, 'errPassConfirm', "Vui lòng nhập mật khẩu (*)") && valid.checkSame(user.password, password_confirm, 'errPassConfirm', "Mật khẩu không trùng (*)")
    event.preventDefault();

    if (isValid) {
        var promise = axios({
            url: 'https://shop.cyberlearn.vn/api/Users/signup',
            method: 'POST',
            data: user
        })
        promise.then(function (result) {
            console.log(result.data.content)
            alert(result.data.message)
            window.location.reload()
        })
        promise.catch(function (error) {
            getEle('errEmail').innerHTML = error.response.data.message
            getEle('errEmail').style.display = 'block'
        })
    }
}