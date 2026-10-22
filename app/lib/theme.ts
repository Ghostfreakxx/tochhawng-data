// Runs in <head> before the page paints, so there is no flash of the wrong
// theme. A saved choice wins; otherwise the device setting is used and
// followed if it changes.
export const themeScript = `(function () {
  try {
    var root = document.documentElement;
    var media = matchMedia("(prefers-color-scheme: dark)");
    var saved = localStorage.getItem("theme");
    root.dataset.theme =
      saved === "light" || saved === "dark" ? saved : media.matches ? "dark" : "light";
    media.addEventListener("change", function (e) {
      if (!localStorage.getItem("theme")) root.dataset.theme = e.matches ? "dark" : "light";
    });
  } catch (e) {}
})();`;
