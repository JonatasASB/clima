



document.querySelector('.busca').addEventListener('submit', async (event) => {

    event.preventDefault();
    let input = document.querySelector('#searchInput').value;
    console.log(input)

    if (input !== '') {
        warning('Caregando...')
        const API_key = window.API_KEY
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=6e94651cdaae9deab20c649663f5db67&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();
        console.log(json)

        if (json.cod === 200) {
            clearInfo();
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        } else {
            clearInfo();
            warning('Não encontramos essa localização')
        }
    } else {
        clearInfo();
        warning('Preencha o campo de pesquisa')
    }
});

    function showInfo(json) {
        warning(' ')
        

        let name = json.name;
        let country = json.country;
        let temp = json.temp;
        let tempIcon = json.tempIcon;
        let windSpeed = json.windSpeed;
        let windAngle = json.windAngle;

        document.querySelector('.titulo').innerHTML = `${name}, ${country}`;
        document.querySelector('.tempInfo').innerHTML = `${temp} <sup>o</sup>C`;
        document.querySelector('.ventoInfo').innerHTML = `${windSpeed}km/h`;
        document.querySelector('.ventoPonto').style.transform = `rotate(${windAngle - 90}deg)`;
        document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${tempIcon}@2x.png`);
        document.querySelector('.resultado').style.display = 'block';
    }

    function warning(msg) {
        document.querySelector('.aviso').innerHTML = msg
}
function clearInfo() {
    warning('');
    document.querySelector('.resultado').style.display = 'none';
}
