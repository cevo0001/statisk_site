let season_list_container = document.querySelector(".season_list_container");

fetch(`https://kea-alt-del.dk/t7/api/seasons/`)
    .then(response => response.json())
    .then((data) => showList(data));

    function showList(seasons){ 
        console.log(seasons);
        const markup = seasons.map(
        (season) =>`<div class="spring">
                <a href="productlist.html?season=${season.season}">${season.season}</a>
            </div>`
        ).join("");
        season_list_container.innerHTML=markup;
        }

        