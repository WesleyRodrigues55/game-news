const getApi = (url, callback) => {
    fetch(url).then(
        (response) => response.json(),
        (error) => console.error(error)
    ).then(
        data => callback(data),
        erro => console.error(erro)
    )
}

function convertDate(datetime) {
    const data = new Date(datetime);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'America/Sao_Paulo'
    };

    const formatoBR = new Intl.DateTimeFormat('pt-BR', options).format(data);
    return formatoBR;
}

const newsHeader = (data) => {
    console.log(data)
    const news = document.getElementById('box-news-header')
    const boxNewsHeader = document.getElementsByClassName('box-news-header')

    data.results.slice(0, 6).map((item, i) => {
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
            <a href="../pages/publishers.html?slug=${item.slug}" class="box">
                <div class="box-news-header m-2">
                    <div class="info-news-header">
                        <h2>${item.name}</h2>
                    </div>
                </div>
            </a>
        `;
        news.append(div)

        boxNewsHeader[i].style.backgroundImage = `url("${item.image_background}")`

    })
}

const newsBody = (data) => {
    const news = document.getElementById('box-news-body')
    const boxNewsBody = document.getElementsByClassName('box-news-body')

    data.results.slice(0, 4).map((item, i) => {
        const div = document.createElement('div')
        div.classList.add('col-md-6')
        div.innerHTML = `
            <div class="box-news-body m-2">
                <div class="info-news-body">
                    <h2>${item.name}</h2>
                </div>
            </div>
        `;
        news.append(div)
        boxNewsBody[i].style.backgroundImage = `url("${item.image_background}")`
    })
}

window.addEventListener("load", (e) => {
    const apiKey = process.env.API_KEY_GAMES;
    const urlApiHeader = 'https://api.rawg.io/api/publishers?key=' + apiKey;
    const urlApiBody = 'https://api.rawg.io/api/tags?key=' + apiKey;


    getApi(urlApiHeader, newsHeader)
    getApi(urlApiBody, newsBody)
})