// variável para captar o botão
const botao = document.querySelector('#btn')
// variavel para captar a div
const div = document.querySelector('#principal')
// variavel para captar o input
const data = document.querySelector('#data')
// variavel para captar a main
const div1 = document.querySelector('#titulo')
// variavel para captar a div do copyright
const div2 = document.querySelector('#copyright')
//evento para api aparecer ao apertar no botão
const sound = document.querySelector('audio')
window.addEventListener('load', function() {
    Requisicao(data.value)
})
// evento que carrega a foto do dia, automaticamente, quando a página é carregada
botao.addEventListener('click', function (e) {
    e.preventDefault()
    Requisicao(data.value)
    sound.play()
    
})
// função que faz a requisição da API APod da Nasa
async function Requisicao(date) {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DiuHqrkQtTM0MHOeHeREjXEjMeDOeBRpEoBcdlvr&date=${date}`)
    console.log(response);
    let dadosObj = await response.json()
    console.log(dadosObj);
    apiNasa(dadosObj)
}
// fução que iça os elementos do objeto da APOD requisitados na página
function apiNasa(dadosObject) {
    div1.innerHTML = `<h1>${dadosObject.title} (${dadosObject.date})</h1>`
    if (dadosObject.media_type === 'image') {
        div.innerHTML = `<img src="${dadosObject.url}">`
    } 
    else  {
        div.innerHTML = `<iframe src="${dadosObject.url}"></iframe>`
    }
    div.innerHTML += `<p>${dadosObject.explanation}</p>`
    if (dadosObject.copyright !== undefined) {
        div2.innerHTML = `<h6> Credits: ${dadosObject.copyright}</h6>`
    } 
    
}