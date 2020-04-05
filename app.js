window.addEventListener("load", () => {
  let long;
  let lat;
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureDescription = document.querySelector(".temperature-description");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(lat);
      console.log(long);

      //adding a proxy to make api work on localhost
      let proxy = "https://cors-anywhere.herokuapp.com/";
      //declaring the api url with the proxy
      const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temperature, summary, icon } = data.currently;
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
          var tt = setIcons(icon, document.querySelector(".icon"));
          console.log(tt);
        });
    });
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
