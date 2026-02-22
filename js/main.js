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
if (document.getElementById("community-name")) {

  fetch(`${API_BASE}?type=COMMUNITY`)
    .then(res => res.json())
    .then(data => {

      if (!Array.isArray(data) || data.length === 0) return;

      const info = data[0]; // ใช้แถวแรกเป็นข้อมูลหลัก

      document.getElementById("community-name").textContent =
        info.name || "ไม่พบชื่อชุมชน";

      document.getElementById("community-location").textContent =
        info.location || "";

      document.getElementById("community-summary").textContent =
        info.summary || "";

      document.getElementById("community-history").textContent =
        info.history || "";

      // อาชีพหลัก (comma separated)
      const jobsList = document.getElementById("community-jobs");
      jobsList.innerHTML = "";

      if (info.main_jobs) {
        const jobs = info.main_jobs.split(",");
        jobs.forEach(job => {
          const li = document.createElement("li");
          li.textContent = job.trim();
          jobsList.appendChild(li);
        });
      }

    })
    .catch(err => console.error("Community fetch error:", err));
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
