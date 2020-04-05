window.addEventListener("load", () => {
  let long;
  let lat;
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(lat);
      console.log(long);

      let proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    });
  }
});
