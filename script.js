let progress = document.querySelector(".progress");

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

  progress.style.width = `${scrollPercent}%`;
});
