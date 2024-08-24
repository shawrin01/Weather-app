async function getData(cityName) {
  const promise = await fetch(
   `http://api.weatherapi.com/v1/current.json?key=00ca3c77e80a47fe961140505242308&q=${cityName}&aqi=no"`

  )
  return await promise.json();
}
var button = document.querySelector('button');
const input = document.querySelector('#input');
const city = document.querySelector('#city');
const wind = document.getElementById('wind');
const hum = document.getElementById('hum');
    const dat = document.getElementById('dat');
    const temp = document.getElementById('temp');

    button.addEventListener("click",async function () {
       const val = input.value;
         const result = await getData(val);
       city.innerText = result.location.name;
       wind.innerText = `${result.current.wind_kph}` +"km/h";
       hum.innerText = result.current.humidity +"%";
       dat.innerText = result.location.localtime;
       temp.innerText = result.current.temp_c +"deg C";
    })

