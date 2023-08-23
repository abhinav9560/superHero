var superHero =  (function () {
    const list = document.getElementById('list');
    const input = document.querySelector('input');
    const searchBtn = document.getElementById('search');

    const getSuperHeroList = async () => {
        try {
            const apiUrl = 'https://gateway.marvel.com/v1/public/characters?limit=50&ts=1692641688501&apikey=8d1ecc9697923a43b75b1458a3cf829f&hash=0bc8f65562064100f76cf86dd8bcba31';

            const response = await fetch(apiUrl);
            const data = await response.json();
            data.data.results.map(item => {
                console.log(item);
                list.innerHTML = list.innerHTML + `<a id='item-block' href="./app/superHero.html?id=${item.id}"><div  class='item-block'> <img class='image' src="${item.thumbnail.path}.${item.thumbnail.extension}"/><h3>${item.name}</h3></div></a>`
            })
        } catch (error) {
            console.error(error);
        }
    };
    const onSearch = async () => {
        try {
            const apiUrl = `https://gateway.marvel.com/v1/public/characters?limit=20&nameStartsWith=${input.value}&ts=1692641688501&apikey=8d1ecc9697923a43b75b1458a3cf829f&hash=0bc8f65562064100f76cf86dd8bcba31`;
            list.innerHTML = ''
            const response = await fetch(apiUrl);
            const data = await response.json();
            // console.log(data);
            data.data.results.map(item => {
                list.innerHTML = list.innerHTML + `<div onClick='onSuperHeroClick()' id='item-block' class='item-block'> <i id='heart' class="fa fa-heart" style="font-size:24px;"></i> <img class='image' src="${item.thumbnail.path}.${item.thumbnail.extension}"/><h3>${item.name}</h3></div>`
                // const superHeroBlock = document.getElementById('item-block');
                // superHeroBlock.addEventListener('click', onSuperHeroClick);
            })
        } catch (error) {
            console.error(error);
        }
    }
    const onSuperHeroClick = () => {
        console.log("clickedd");
    }

    window.onload = () => {
        getSuperHeroList();
        searchBtn.addEventListener('click', onSearch);
    };
    return{
        onSearch:onSearch,
        onClick:onSuperHeroClick
    }
})();
