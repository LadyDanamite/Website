const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "5e66ca85dd5b956abbe4b0f3fae72ee9"

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherDataByCity(city)
            console.log(weatherData)
            displayWeatherInfo(weatherData)
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please Enter a City")
    }
})

async function getWeatherDataByCity(city){
    const {lon, lat} = await getCityLocation(city);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error("Could not fetch weather data")
    }

    return await response.json();
}

    async function getCityLocation(city){
        const locationUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
        const response = await fetch(locationUrl);
        const location = await response.json();
        return location[0]
    }

function displayWeatherInfo(data){

    const {name: city, 
        main: {temp, humidity}, 
        weather: [{description}]} = data

    card.textContent = "";
    card.style.display = "flex"

    const cityDisplay = document.createElement("h1")
    const tempDisplay = document.createElement("p")
    const humidityDisplay = document.createElement("p")
    const descDisplay = document.createElement("p")
    
    cityDisplay.textContent = city
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)} C`
    humidityDisplay.textContent = `Humidity: ${humidity}%`
    descDisplay.textContent = description

    cityDisplay.classList.add("cityDisplay")
    tempDisplay.classList.add("tempDisplay")
    humidityDisplay.classList.add("humidityDisplay")
    descDisplay.classList.add("descDisplay")

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
}

function  displayError(message){
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay")

    card.textContent = ""
    card.style.display = "flex"
    card.appendChild(errorDisplay)
}