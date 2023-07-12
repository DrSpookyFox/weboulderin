if (localStorage) {
  document
    .getElementById("preferencesForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const preferences = {
        minGrade: document.getElementById("minGrade").value,
        maxGrade: document.getElementById("maxGrade").value,
        crashPads: document.getElementById("crashPads").value,
        spotters: document.getElementById("spotters").value,
        minTemp: document.getElementById("minTemp").value,
        maxTemp: document.getElementById("maxTemp").value,
      };

      console.log(preferences);
      //   const name = document.getElementById('preferences');

      //   // Save the name in localStorage.
      //   localStorage.setItem('preferences', preferences);
    });
}
