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
    const news = document.getElementById('box-news-header')
    const boxNewsHeader = document.getElementsByClassName('box-news-header')

    data.results.slice(0, 3).map((item, i) => {
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
            <div class="box-news-header m-2">
                <div class="info-news-header">
                    <h2>${item.name}</h2>
                </div>
            </div>
        `;
        news.append(div)
        boxNewsHeader[i].style.backgroundImage = `url("${item.background_image}")`
    })
}

const newsBody = (data) => {
    const news = document.getElementById('box-news-body')
    const boxNewsBody = document.getElementsByClassName('box-news-body')

    data.results.slice(0, 2).map((item, i) => {
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
        boxNewsBody[i].style.backgroundImage = `url("${item.background_image}")`
    })
}

window.addEventListener("DOMContentLoaded", (e) => {
    const keyTest = '975632c0c3dc4a3ba4ed3aab3a1d9b24';
    const urlApiHeader = 'https://api.rawg.io/api/games?key=' + keyTest;
    const urlApiBody = 'https://api.rawg.io/api/games?key=' + keyTest;


    getApi(urlApiHeader, newsHeader)
    getApi(urlApiBody, newsBody)
})