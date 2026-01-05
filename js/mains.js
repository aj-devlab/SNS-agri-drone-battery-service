
window.addEventListener("load", () => {
  const level = document.querySelector(".battery-level");
  const text = document.querySelector(".battery-text");
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");

  setTimeout(() => {
    level.style.width = "100%";
    level.style.background = "#00f7ff";
    text.innerText = "100%";
  }, 2500);

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";
  }, 4500);

  setTimeout(() => {
    intro.remove();
    main.classList.remove("hidden");
  }, 5500);
});
