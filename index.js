const imageEl = document.getElementById("image");
const numberEl = document.getElementById("number");
let count = 0;
const maxCount = 100;

const incrementLoader = () => {
  if (count < maxCount) {
    count++;
    numberEl.textContent = count + "%";
    const opacity = count / maxCount;
    imageEl.style.opacity = opacity;
    imageEl.style.filter = `blue($(10 - 10 * opacity)px)`;
  } else if (count === maxCount) {
    clearInterval(loaderInterval);
    numberEl.textContent = "";
  }
};

const loaderInterval = setInterval(incrementLoader, 40);