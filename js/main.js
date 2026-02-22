document.addEventListener("DOMContentLoaded", () => {

  // ===== Stats =====
  fetch("data/stats.json")
    .then(res => res.json())
    .then(data => {

      if (document.getElementById("population")) {
        document.getElementById("population").textContent = data.population;
        document.getElementById("households").textContent = data.households;
        document.getElementById("updated").textContent = data.updated;
      }

      if (document.getElementById("home-population")) {
        document.getElementById("home-population").textContent = data.population;
        document.getElementById("home-households").textContent = data.households;
        document.getElementById("home-updated").textContent = data.updated;
      }

    })
    .catch(err => console.error("Stats fetch error:", err));

  // ===== Community =====
  if (document.getElementById("community-name")) {

    fetch("data/community.json")
      .then(res => res.json())
      .then(data => {

        document.getElementById("community-name").textContent = data.name;
        document.getElementById("community-location").textContent =
          "ต." + data.tambon + " อ." + data.amphur + " จ." + data.province;

        document.getElementById("community-summary").textContent = data.summary;
        document.getElementById("community-history").textContent = data.history;

        const jobsList = document.getElementById("community-jobs");
        jobsList.innerHTML = "";

        data.main_jobs.forEach(job => {
          const li = document.createElement("li");
          li.textContent = job;
          jobsList.appendChild(li);
        });

      })
      .catch(err => console.error("Community fetch error:", err));
  }

});
