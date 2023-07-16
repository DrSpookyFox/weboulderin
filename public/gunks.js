let storedPreferences = localStorage.getItem("preferences");
userPreferences = JSON.parse(storedPreferences);
console.log(userPreferences.maxGrade);
if (userPreferences != "null") {
  document.getElementById("userMinGradeRange").innerHTML =
    userPreferences.minGrade;

  document.getElementById("userMaxGradeRange").innerHTML =
    userPreferences.maxGrade;

  document.getElementById("userCrashPads").innerHTML =
    userPreferences.crashPads;

  document.getElementById("userSpotters").innerHTML = userPreferences.spotters;

  document.getElementById("userColdTemp").innerHTML = userPreferences.minTemp;

  document.getElementById("userHotTemp").innerHTML = userPreferences.maxTemp;
}
