// สำหรับหน้าแรก
if (document.getElementById("home-population")) {

  fetch("data/stats.json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("home-population").textContent = data.population;
      document.getElementById("home-households").textContent = data.households;
      document.getElementById("home-updated").textContent = data.updated;
    })
    .catch(err => console.error(err));

}
