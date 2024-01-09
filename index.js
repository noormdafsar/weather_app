const apiKey = '94955b9d1eba9642ebdff5e301572c4c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button');

async function weatherUpdate(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector('.error').style.display = 'block' //show
        document.querySelector('.weather').style.display = 'none' // hide
    }
    else{
        var data = await response.json()
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        
        if(data.weather[0].main == 'Clouds'){
            document.querySelector('.weather-icon').src = './images/clouds.png'
        }
        else if(data.weather[0].main == 'Clear'){
            document.querySelector('.weather-icon').src = './images/clear.png'
        }
        else if(data.weather[0].main == 'Drizzle'){
            document.querySelector('.weather-icon').src = './images/drizzle.png'
        }
        else if(data.weather[0].main == 'Humidity'){
            document.querySelector('.weather-icon').src = './images/humidity.png'
        }
        else if(data.weather[0].main == 'Mist'){
            document.querySelector('.weather-icon').src = './images/mist.png'
        }else if(data.weather[0].main == 'Rain'){
            document.querySelector('.weather-icon').src = './images/rain.png'
        }else if(data.weather[0].main == 'Snow'){
            document.querySelector('.weather-icon').src = './images/snow.png'
        }else if(data.weather[0].main == 'Wind'){
            document.querySelector('.weather-icon').src = './images/wind.png'
        }
        document.querySelector('.weather').style.display='block'
        document.querySelector('.error').style.display = 'none' 
    }



}
searchBtn.addEventListener('click', () => {
    weatherUpdate(searchBox.value);
})

