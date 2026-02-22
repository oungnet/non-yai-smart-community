document.addEventListener("DOMContentLoaded", () => {

  fetch("data/stats.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("โหลดข้อมูลไม่สำเร็จ");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("population").textContent = data.population;
      document.getElementById("households").textContent = data.households;
      document.getElementById("updated").textContent = data.updated;
    })
    .catch(error => {
      console.error(error);
    });

});
