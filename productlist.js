
let product_list_container = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
    .then(response => response.json())
    .then((data) => showList(data));

    function showList(products){ 
        console.log(products);
        let markup = "";
        products.map((product)=>{markup +=
            `<a href="product.html" class="box box-1">
            <img src="img/navy_backpack${productId}.webp" alt="brand navn">
            <h4>${product.productdisplayname}</h4>
            <p>${product.brandname}, ${product.articletype}<br> DKK <b>${product.price}</b> <br> <u>more info...</u></p>
        </a>
        `;}).join("");
        console.log(markup);
        product_list_container.innerHTML = markup;
    }