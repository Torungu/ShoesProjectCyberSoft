function Valid() {
    this.checkArr = function (value, divErr, mess) {
        if (value.trim() === "") {
            getEle(divErr).innerHTML = mess
            getEle(divErr).style.display = 'block'
            return false;
        }
        getEle(divErr).innerHTML = ''
        getEle(divErr).style.display = 'none'
        return true;
    }
    this.checkLetter = function (value, divErr, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        if (value.match(letter)) {
            getEle(divErr).innerHTML = ""
            getEle(divErr).style.display = 'none'
            return true
        }
        getEle(divErr).innerHTML = mess;
        getEle(divErr).style.display = 'block'
        return false;
    }
    this.checkNumber = function (value, divErr, mess) {
        var letter = /^[0-9]+$/;
        if (value.match(letter)) {
            getEle(divErr).innerHTML = ""
            getEle(divErr).style.display = 'none'
            return true
        }
        getEle(divErr).innerHTML = mess;
        getEle(divErr).style.display = 'block'
        return false;
    }
    this.checkEmail = function (value, divErr, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(letter)) {
            getEle(divErr).innerHTML = ""
            getEle(divErr).style.display = 'none'
            return true
        }
        getEle(divErr).innerHTML = mess;
        getEle(divErr).style.display = 'block'
        return false;
    }
    this.checkSame = function (value1, value2, divErr, mess) {
        if (value1 === value2) {
            getEle(divErr).innerHTML = ""
            getEle(divErr).style.display = 'none'
            return true
        }
        getEle(divErr).innerHTML = mess;
        getEle(divErr).style.display = 'block'
        return false;
    }
}