
const theseason = new URLSearchParams(window.location.search).get("season");
let product_list_container = document.querySelector(".product_list_container");
document.querySelector("h1").textContent= theseason;

document.querySelectorAll("button").forEach((knap) => knap.addEventListener("click", showFiltered));

let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?season=${theseason}`)
    .then(response => response.json())
    .then((data) => {allData= data; showList(data);});


    function showList(products){ 
        console.log(products);
        const markup = products.map(
        (product) =>`
                
                <a href="product.html?id=${product.id}" class="box box-1">
                  <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="produktsbillede" />
                  <div class="skjul soldout ${product.soldout ? "vis" : ""}"><p>Sold out</p></div>
                  <div class="skjul sale-badge ${product.discount ? "vis" : ""}"><p>-${product.discount}%</p></div>
                <h4>${product.productdisplayname}</h4>
                <p> ${product.brandname}, ${product.articletype} <br> DKK <b>${product.price}</b> <br> <u>more info...</u></p>
            </a>`
        ).join("");
        product_list_container.innerHTML=markup;
        }

        function showFiltered() {
          const filter = this.dataset.filter; // Henter værdien fra knappen
          console.log("Filter valgt:", filter); // Debugging
        
          if (!allData) return; // Hvis data ikke er indlæst, stop
        
          let filteredProducts;
        
          if (filter === "All") {
            filteredProducts = allData;
          } else if (filter === "Sale") {
            filteredProducts = allData.filter((product) => product.discount > 0);
          } else if (filter === "Accessories") {
            filteredProducts = allData.filter((product) => product.category === "Accessories");
          } else {
            filteredProducts = allData.filter((product) => product.gender === filter);
          }
        
          showList(filteredProducts);
        }
        