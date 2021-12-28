function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
    }
    function onGeoError() {
    alert("Can't find you. No weather for you.");
    }
    
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


const API_KEY = "3e7c2a3f150c37bea6ea7f3b15072b50" 