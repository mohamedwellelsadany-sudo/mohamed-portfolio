document.addEventListener("DOMContentLoaded", () => {
  const ticker = document.querySelector(".ticker-track");
  if (ticker) {
    ticker.addEventListener("mouseenter", () => ticker.style.animationPlayState = "paused");
    ticker.addEventListener("mouseleave", () => ticker.style.animationPlayState = "running");
  }
});