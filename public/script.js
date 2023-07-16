window.onload = (e) => {
  console.log("page is fully loaded");
  fetch("/weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // body: json.stringify({
    // this is where you can write longitutude, latitude, and other things
    // }),
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("gunksCurrentWeather").innerHTML = data.temp;
    });
};
