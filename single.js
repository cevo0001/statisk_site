let productId = 1525;
let product_container = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
    .then(Response => Response.json())
    .then((data) => {
        product_container.innerHTML = `
            <div class="kasse-1">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="produktsbillede">
            </div>
    
            <div class="kasse-2">
                <h2 class="produkt"><b>${data.productdisplayname}</b></h2>
                <h4>Unisex</h4>
                <h4>ID</h4>
                <h4>${data.id}</h4>
                <h4>Color</h4>
                <h4>Navy Blue</h4>
                <br>
                <h2 class="produkt">${data.brandname}</h2>
                <h3><b>DKK ${data.price}</b></h3>
            </div>
    
            <div class="kasse-3">
                <h3>Size</h3>
                <select name="Sizes" id="select1">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                </select>
                <a href="product.html"><h3 class="add">Add to Basket</h3></a>
                <a href="product.html" class="checkout"><h3><u>Go to checkout</u></h3></a>
            </div>
            `;
    })
    








    