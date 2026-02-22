document.addEventListener("DOMContentLoaded", () => {

  fetch("data/stats.json")
    .then(res => res.json())
    .then(data => {

      // Dashboard page
      if (document.getElementById("population")) {
        document.getElementById("population").textContent = data.population;
        document.getElementById("households").textContent = data.households;
        document.getElementById("updated").textContent = data.updated;
      }

      // Home page
      if (document.getElementById("home-population")) {
        document.getElementById("home-population").textContent = data.population;
        document.getElementById("home-households").textContent = data.households;
        document.getElementById("home-updated").textContent = data.updated;
      }

    })
    .catch(err => console.error("Fetch error:", err));

});
