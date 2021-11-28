const API_KEY = 'API_KEY';
const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            weather.innerText = `${data.weather[0].main} / ${Math.round(parseInt(data.main.temp))}ºC`
            city.innerText = `${data.name}`;
        });
}
function onGeoErr(){ 
    alert('위치 정보를 받아오는데 실패함!');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);