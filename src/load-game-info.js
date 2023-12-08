const getApi = (url, callback) => {
    fetch(url).then(
        (response) => response.json(),
        (error) => console.error(error)
    ).then(
        data => callback(data),
        erro => console.error(erro)
    )
}

function getParameterUrl(parameter) {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    return params.get(parameter);
}

function outputRatings(data) {
    const ratings = document.getElementById('ratings')
    return data.ratings.map((item) => {
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.classList.add('col-lg-3')
        div.innerHTML = `
                <div class="box-ratings mt-2">
                    <p>
                        <span style="text-transform: uppercase">${item.title}</span>
                        <br>${item.count}+
                        <br>${item.percent}%
                    </p>
                </div>
            `
        ratings.append(div)
    })
}

function outputPlatforms(data) {
    const platforms = document.getElementById('platforms')
    const bgPlatform = document.getElementsByClassName('box-platform')
    return data.platforms.map((item, i) => {
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.classList.add('col-lg-3')
        div.innerHTML = `
            <div class="box-platform">
                <p>
                    <span style="text-transform: uppercase">${item.platform.name}</span>
                    <br>${item.platform.games_count}+
                </p>
            </div>
        `

        platforms.append(div)
        console.log(bgPlatform[i])
        bgPlatform[i].style.backgroundImage = `url("${item.platform.image_background}")`
    })
}

const publishersBody = (data) => {
    const title = document.getElementById('subtitle-game-info')
    const bgPublisher = document.getElementById('background-game-info')
    const description = document.getElementById('description-game-info')
    bgPublisher.setAttribute('src', data.background_image)

    title.innerHTML = data.name
    description.innerHTML = data.description
    description.style.fontWeight = "normal"

    outputRatings(data);
    outputPlatforms(data)
}

window.addEventListener("load", (e) => {
    const valueParameter = getParameterUrl('id')
    const apiKey = process.env.API_KEY_GAMES;
    const urlApiBody = 'https://api.rawg.io/api/games/' + valueParameter + '?key=' + apiKey;
    getApi(urlApiBody, publishersBody)
})