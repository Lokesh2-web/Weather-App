const apiKey = "f286662fbb36b66edf9626d015e9fd84";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon");

const searchBox = document.querySelector("input.search");
const searchBtn = document.querySelector("button.search");


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status == 404){
    alert("Invalid City..");
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".search input").clear;
  }
  else{
    document.querySelector(".weather").style.display = "block";
  }


  let data = await response.json();
  // console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
  document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "weather-app-img (1)/images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "weather-app-img (1)/images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "weather-app-img (1)/images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "weather-app-img (1)/images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "weather-app-img (1)/images/mist.png";
  }
  document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click",() => {

  checkWeather(searchBox.value)
});




