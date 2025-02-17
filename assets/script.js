const API_key  = window.API_KEY
console.log(API_key)


document.querySelector('.busca').addEventListener('submit', (event) => {

    event.preventDefault();
    let input = document.querySelector('#searchInput').value;
    console.log(input)

    if (input !== '') {
        warning('Caregando...')
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=${API_key}`
    } else {
        warning('Preencha o campo de pesquisa')
    }
});

function warning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}