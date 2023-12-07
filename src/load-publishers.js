const getApi = (url, callback) => {
    fetch(url).then(
        (response) => response.json(),
        (error) => console.error(error)
    ).then(
        data => callback(data),
        erro => console.error(erro)
    )
}

function getParameterUrl() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    return params.get('slug');
}

const publishersBody = (data) => {
    const valueParameter = getParameterUrl()
    const index = data.results.findIndex(item => item.slug === valueParameter);

    if (index !== -1) {
        const title = document.getElementById('subtitle-publishers')
        const publisher = data.results[index];
        title.innerHTML = publisher.name

        const news = document.getElementById('box-publishers-header')
        const bgPublisher = document.getElementById('background-publisher')
        bgPublisher.setAttribute('src', publisher.image_background)

        publisher.games.map((item, i) => {
            const div = document.createElement('div')
            div.classList.add('col-md-4')
            div.classList.add('col-lg-3')
            div.innerHTML = `
            <div class="box-publishers-header m-2">
                <div class="info-publishers-header">
                    <h2>${item.name}</h2>
                </div>
            </div>
        `;
            news.append(div)
        })
    } else {
        console.log("Slug não encontrado no array.");
    }
}

window.addEventListener("load", (e) => {
    const apiKey = process.env.API_KEY_GAMES;
    const urlApiBody = 'https://api.rawg.io/api/publishers?key=' + apiKey;
    getApi(urlApiBody, publishersBody)
})