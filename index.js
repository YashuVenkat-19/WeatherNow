function getWeather() {
  const loc = document.getElementById("city").value;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=+" +
    loc +
    "&appid=41a6b7f8745af0c1ce2fb830a6aeb6fe";
  console.log(loc);
  fetch(url)
    .then((response) => response.json())
    .then((datas) => {
      console.log(datas);
      var id = (datas.main.temp - 273.15).toPrecision(2);
      document.getElementById("out").innerHTML =
        "It is " + id + "°C " + "in " + loc + ".";
      document.getElementById("desc1").innerHTML = datas.weather[0].main;
      document.getElementById(
        "desc2"
      ).innerHTML = `<img src="http://openweathermap.org/img/w/${datas.weather[0].icon}.png">`;
      document.getElementById("desc3").innerHTML = datas.weather[0].description;
      document.getElementById("outer").style.display = "block";
    })
    .catch((err) => {
      document.getElementById("outer").innerHTML = "Something went wrong!";
      document.getElementById("outer").style.display = "block";
    });
}

function reload() {
  window.location.reload(true);
}
