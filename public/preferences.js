// const e = require("express");
const preferencesForm = document.getElementById("preferencesForm");

if (preferencesForm.addEventListener) {
  preferencesForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const preferences = {
      minGrade: document.getElementById("minGrade").value,
      maxGrade: document.getElementById("maxGrade").value,
      crashPads: document.getElementById("crashPads").value,
      spotters: document.getElementById("spotters").value,
      minTemp: document.getElementById("minTemp").value,
      maxTemp: document.getElementById("maxTemp").value,
    };
    localStorage.setItem("preferences", JSON.stringify(preferences));
  });
}
