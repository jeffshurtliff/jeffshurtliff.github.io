(function () {
  "use strict";

  function currentTheme() {
    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
  }

  function updateButton(button, theme) {
    var nextTheme = theme === "dark" ? "light" : "dark";
    var label = "Switch to " + nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1) + " Mode";
    button.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
    button.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    button.querySelector(".theme-toggle__icon").textContent = theme === "dark" ? "☀" : "☾";
    button.querySelector(".theme-toggle__label").textContent = label;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) {
      return;
    }

    updateButton(button, currentTheme());

    button.addEventListener("click", function () {
      var theme = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
      try {
        window.localStorage.setItem("site-theme", theme);
      } catch (error) {
        // The selected theme still applies for this page when storage is unavailable.
      }
      updateButton(button, theme);
    });
  });
}());
