///////// INDEX ///////////

// randomly pick and return 3 different indexes from an array length (3 products for slides)
function indexGenerator(len) {
    const num = new Set();
    while(num.size !== 3) {
        num.add(Math.floor(Math.random() * len));
    }
    return [...num]
}
// Output grid
function outPutProducts(data) {
    let content = "";
    data.forEach(function(e, index) {
        content += `
        <div class="col-md-4">
            <a href="./detail.html?id=${e.id}" class="card">
                <div class="thumb">
                    <img src=${e.image} alt="" />
                </div>
                <div class="content">
                    <h3>${e.name}</h3>
                    <p>${e.shortDescription}</p>
                </div>
                <div class="button">
                    <div>Buy now</div>
                    <div>${e.price}$</div>
                </div>
            </a>
        </div>
        `;
    });
    document.getElementById("productDisplay").innerHTML = content;
}
// Output slides
function outPutSlides(slideList) {
    let content =  "";
    slideList.forEach(function(e, index) {
        if (index == 0) {
            content += `
                <div class="carousel-item active">
                    <a href="./detail.html?id=${e.id}">
                        <div class="row">
                            <div class="col-md-8">
                                <img src=${e.image} alt="" />
                            </div>
                            <div class="col-md-4">
                                <div class="carousel-content">
                                    <h2>${e.name}</h2>
                                    <p>${e.description}</p>
                                    <span>Buy now</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        } else {
            content += `
                <div class="carousel-item">
                    <a href="./detail.html?id=${e.id}">
                        <div class="row">
                            <div class="col-md-8">
                                <img src=${e.image} alt="" />
                            </div>
                            <div class="col-md-4">
                                <div class="carousel-content">
                                    <h2>${e.name}</h2>
                                    <p>${e.description}</p>
                                    <span>Buy now</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }
        
    });
    document.getElementById("slideDisplay").innerHTML = content;
}

// Get array of products from backend and display
function getProductInfoApi () {
    var promise = axios ({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'
    });

    promise.then(function(result) {
        
        // Randomly get 3 indexes
        let indexes = indexGenerator(result.data.content.length);
     
        // List of products of randomly-pick indexes
        let slideList = [result.data.content[indexes[0]], result.data.content[indexes[1]], result.data.content[indexes[2]]];

        outPutSlides(slideList);

        // display all products in array (grid display)
        outPutProducts(result.data.content);
    });

    promise.catch(function(err) {
        console.log(err);
    });
}

window.onload = function() {
    getProductInfoApi ();
}


