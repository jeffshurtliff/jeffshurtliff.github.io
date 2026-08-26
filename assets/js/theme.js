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

  function isExternalSiteLink(link) {
    var url;

    try {
      url = new URL(link.href, window.location.href);
    } catch (error) {
      return false;
    }

    return (url.protocol === "http:" || url.protocol === "https:") &&
      url.origin !== window.location.origin;
  }

  function configureExternalSiteLinks() {
    document.querySelectorAll("a[href]").forEach(function (link) {
      if (!isExternalSiteLink(link)) {
        return;
      }

      link.setAttribute("target", "_blank");

      var relationships = (link.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
      var hasNoopener = relationships.some(function (relationship) {
        return relationship.toLowerCase() === "noopener";
      });

      if (!hasNoopener) {
        relationships.push("noopener");
        link.setAttribute("rel", relationships.join(" "));
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    // This also covers external links authored in Markdown page content.
    configureExternalSiteLinks();

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
