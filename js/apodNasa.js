// criando uma requisição de API
const requisiçao = new XMLHttpRequest()
// configurando a requisição do caminho da API
requisiçao.onload = function() {
    if (requisiçao.status >= 200 && requisiçao.status <= 299) {
        const pedido = requisiçao.response

        let conversao = JSON.parse(pedido);
        console.log(conversao);

        nasa(conversao)
        
    }
}

const date = document.querySelector('#data')
requisiçao.open (
    "GET", 
    `https://api.nasa.gov/planetary/apod?api_key=DiuHqrkQtTM0MHOeHeREjXEjMeDOeBRpEoBcdlvr&date=${date}`
)

requisiçao.send()

const img = document.querySelector('#imagem')
const p = document.querySelector('#explicacao')
const h6 = document.querySelector('#copyright')
const iframe = document.querySelector('#video')
function nasa (object) {
    if(object.media_type === "image") {
    img.setAttribute('src', `${object.url}`)
    }
    else {
        iframe.setAttribute('src', `${object.url}`)
    }
    p.textContent = object.explanation
    h6.textContent = object.copyright
}