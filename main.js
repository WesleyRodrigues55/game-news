const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9ef03c45cc674844b98e279d1213121e';

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Manipule os dados conforme necessário
        console.log(data)
        news(data);
    })
    .catch(error => {
        console.error('Erro ao buscar os dados:', error);
    });


function news(data) {
    const news = document.getElementById('news')

    data.articles.map((item) => {
        const div = document.createElement('div')
        div.classList.add('box-news')
        div.innerHTML = `
            <h3>${item.title}</h3>
            <i><b>Author:</b> ${item.author} - <b>Fonte:</b> ${item.source.name}</i>
            <p>${item.content}</p>
            <img src="${item.urlToImage}" class="w-100"/>
        `;

        news.append(div)
    })
}