let gifWrapperStart = document.createElement("div");
gifWrapperStart.setAttribute("id", "gif-wrapper");
gifWrapperStart.innerHTML =
  '<iframe src="https://giphy.com/embed/vzO0Vc8b2VBLi" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
document.body.appendChild(gifWrapperStart);

const burnBtn = document.getElementById("burn-btn");
const moneyBtn = document.getElementById("money-btn");
const btnWrapper = document.getElementsByClassName("btn-wrapper");
const burn = document.getElementById("burn");
const money = document.getElementById("money");
//fetch the data of the current page from the dom.

function pushGif(urlGif) {
  if (document.getElementById("gif-wrapper")) {
    const gifWrapper = document.getElementById("gif-wrapper");
    gifWrapper.remove();
  }

  const gifWrapper = document.createElement("div");
  gifWrapper.setAttribute("id", "gif-wrapper");
  gifWrapper.innerHTML = urlGif;
  document.body.appendChild(gifWrapper);
}

burnBtn.addEventListener("click", () => {
  pushGif(
    '<iframe src="https://giphy.com/embed/3oKGzgNfssFG1xlwC4" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
  );

  btnWrapper.style.visibility = "hidden";
});

moneyBtn.addEventListener("click", () => {
  pushGif(
    '<iframe src="https://giphy.com/embed/LCdPNT81vlv3y" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
  );

  btnWrapper.style.visibility = "hidden";
});
