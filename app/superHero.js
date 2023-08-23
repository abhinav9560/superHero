(function () {
    const charId = window.location.href.split('?')[1].split('=')[1]
    const getSuperHeroInfo = async () => {
        try {
            const apiUrl = `https://gateway.marvel.com/v1/public/characters/${charId}?ts=1692641688501&apikey=8d1ecc9697923a43b75b1458a3cf829f&hash=0bc8f65562064100f76cf86dd8bcba31`;

            const response = await fetch(apiUrl);
            const {data} = await response.json();
            const item = data.results[0]
            console.log(item);
            document.body.innerHTML = `<div class='container'><img src="${item.thumbnail.path}.${item.thumbnail.extension}"/> <h3>${item.name}</h3><p>${item.description}</p></div><h2>Comics</h2><ul>${item.comics.items.map(i => {
                return`<li>${i.name} (<a href='${i.resourceURI}'>${i.resourceURI}</a>)</li>`
            })}</ul>`
        } catch (error) {
            console.error(error);
        }
    };
    window.onload = () => {
        getSuperHeroInfo()
    };
})()