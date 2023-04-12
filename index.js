const seachFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.class-list');

seachFrom.addEventListener('submit', retrieve)

function retrieve(e){

    e.preventDefault()

    const apiKey = 'f202563e74b74bd69505afaaaca576c5'

    let topic = input.value;

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)

        data.articles.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', 'blank');
            a.textContent = article.title
            li.appendChild(a);
            newsList.appendChild(li);
        })
    })

}