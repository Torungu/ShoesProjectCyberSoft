


function getDetail() {
    var urlParam = new URLSearchParams(window.location.search);
    var id = urlParam.get('id');

    var promise = axios ({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id='+id,
        method: 'GET'
    });

    promise.then(function(res) {
        var prod = res.data.content;

        document.querySelector('#hinh-anh').src = prod.image;
        document.querySelector('#ten').innerHTML = prod.name;
        document.querySelector('#mo-ta').innerHTML = prod.description;
        document.querySelector('#gia').innerHTML = prod.price + "$";

        outPutProducts(prod.relatedProducts)
    });

    promise.catch(function(err){
        console.log(err);
    });
}


getDetail();