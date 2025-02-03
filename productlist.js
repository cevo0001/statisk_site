
let product_list_container = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
    .then(response => response.json())
    .then((data) => showList(data));

    function showList(products){ 
        console.log(products);
        const markup = products.map(
        (product) =>` <a href="product.html?id=${product.id}" class="box box-1">
                  <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="produktsbillede" />
                <h4>${product.productdisplayname}</h4>
                <p> ${product.brandname}, ${product.articletype} <br> DKK <b>${product.price}</b> <br> <u>more info...</u></p>
            </a>`
        ).join("");
        product_list_container.innerHTML=markup;
        }