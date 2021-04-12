const api = {
    key: "f0e72afc22b127f04dac9bc79cac0389",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
      
    }
  }
  function getResults (inputVal) {
    console.log(inputVal);
    var apikey="f0e72afc22b127f04dac9bc79cac0389";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apikey}`;
    console.log(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apikey}&units=metric`);
    fetch(url)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data
    displayResults(data);
  })
}

function displayResults (d) {
    let city = document.querySelector('.location .city');
    city.innerText = d.name;
  
    /*let now = new Date(d.timezone);
    let date = document.querySelector('.location .date');
    date.innerText = erHTML = now.toDateString();*/
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = Math.round(parseFloat(d.main.temp)-273.15)+ "°C";

    let weath = document.querySelector('.current .weather');
    const { icon, description }=d.weather[0];
    weath.innerHTML = description;
  
}