// const apikey = "ccffe1fa1824317235e5988f34237a7a";
// const url = "https://api.openweathermap.org/data/2.5/weather?q=";
// const units = "&units=metric";

// const searchBox = document.querySelector("#inputfeild");
// const searchBtn = document.querySelector(".searchbtn button");
// console.log(searchBtn);
// console.log(searchBox.value);
// async function getWeather(city) {
//   try {
//     const response = await fetch(`${url}${city}${units}&appid=${apikey}`);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("There has been a problem with your fetch operation:", error);
//   }
// document.querySelector(".weathercity h1").innerHTML = data.name;
//   document.getElementsByClassName("weatherpoints").innerHTML = `${data.main.temp} °C`;
//   document.getElementsByClassName( "humidity").innerHTML = `${data.main.humidity} %`;
//   document.getElementsByClassName("wind").innerText = `${data.wind.speed} km/h`;
// }
// searchBtn.addEventListener("click", () => {
//   getWeather(searchBox.value);
// });
// searchBox.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     getWeather(searchBox.value);
//   }
// });



const apikey = "ccffe1fa1824317235e5988f34237a7a";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const units = "&units=metric";

const searchBox = document.querySelector("#inputfeild");
const searchBtn = document.querySelector(".searchbtn button");

async function getWeather(city) {
  try {
    const response = await fetch(`${url}${city}${units}&appid=${apikey}`);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    console.log(data);

    
    document.querySelector(".weathercity h1").innerHTML = data.name;
    document.querySelector(".weatherpoints h1").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

  } catch (error) {
    console.error("Error fetching weather:", error);
    alert("City not found or API issue!");
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    getWeather(searchBox.value);
  }
});
