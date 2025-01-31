
let product_list_container = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
    .then(response => response.json())
    .then((data) => showList(data));

    function showList(products){ 
        console.log(products);
        let markup = "";
        products.map(product=>{
markup+=`test`
        }).join("");
        product_list_container.innerHTML=markup;

        }