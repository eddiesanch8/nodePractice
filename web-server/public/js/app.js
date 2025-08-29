const form = document.querySelector("#weather-form");
const search = document.querySelector("[data-forminput]");
const locationMsg = document.querySelector("[data-location]");
const forecastMsg = document.querySelector("[data-forecast]");
const errorMsg = document.querySelector("[data-error]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value.trim();
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          errorMsg.textContent = data.error;
        } else {
          locationMsg.textContent = data.location;
          forecastMsg.textContent = data.forecast;
        }
      });
    }
  );
});
