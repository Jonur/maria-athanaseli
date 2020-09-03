(function () {
  // Adds the current year to the footer to avoid updating this manually and annually
  var currentYear = new Date().getFullYear();
  document.getElementById("current-year").innerHTML = currentYear;
})();
