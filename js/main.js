const API_BASE = "https://script.google.com/macros/s/AKfycbyoFuzSd9aHPEWGuLCSJaoxJBZIhfDmP470cPrz9MhDy792sLmU0SeROhB1vdFewROpjQ/exec";

document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // Utility Fetch Function
  // =========================
  function fetchData(type) {
    return fetch(`${API_BASE}?type=${type}`)
      .then(res => res.json())
      .catch(err => {
        console.error(`${type} fetch error:`, err);
        return [];
      });
  }

  // =========================
  // NEWS PAGE
  // =========================
  if (document.getElementById("news-list")) {

    fetchData("EVENTS").then(data => {

      const container = document.getElementById("news-list");
      container.innerHTML = "";

      data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <h3>${item.title || "-"}</h3>
          <small>พ.ศ. ${item.year_be || "-"}</small>
          <p>${item.description || ""}</p>
          <div style="font-size:12px;color:#666;">
            หมวดหมู่: ${item.category || "-"} |
            อ้างอิง: ${item.source_note || "-"}
          </div>
        `;

        container.appendChild(card);
      });

    });
  }

  // =========================
  // COMMUNITY PAGE
  // =========================
  if (document.getElementById("community-list")) {

    fetchData("COMMUNITY").then(data => {

      const container = document.getElementById("community-list");
      container.innerHTML = "";

      data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name || "-";
        container.appendChild(li);
      });

    });
  }

  // =========================
  // LOCATIONS PAGE
  // =========================
  if (document.getElementById("location-list")) {

    fetchData("LOCATIONS").then(data => {

      const container = document.getElementById("location-list");
      container.innerHTML = "";

      data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.description || ""}</p>
        `;

        container.appendChild(card);
      });

    });
  }

  // =========================
  // LEADERS PAGE
  // =========================
  if (document.getElementById("leaders-list")) {

    fetchData("LEADERS").then(data => {

      const container = document.getElementById("leaders-list");
      container.innerHTML = "";

      data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <h3>${item.name}</h3>
          <p>ตำแหน่ง: ${item.position || "-"}</p>
          <p>ช่วงเวลา: ${item.period || "-"}</p>
        `;

        container.appendChild(card);
      });

    });
  }

});
