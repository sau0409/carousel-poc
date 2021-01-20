let btnLeft = document.querySelector(".btn--left");
let btnRight = document.querySelector(".btn--right");
let allBox = document.querySelectorAll(".box");
//to store current image being displayed
let currentImageIndex = 1;
let boxCount = allBox.length;

//initially hiding left button
btnLeft.setAttribute("style", "display: none");

btnRight.addEventListener("click", () => {
  //checking if right most image is beng displayed
  if (currentImageIndex !== boxCount) {
    //moving next image into scroll view
    allBox[currentImageIndex].scrollIntoView({ behavior: "smooth" });
    currentImageIndex++;
    btnLeft.setAttribute("style", "display: block");
  } else {
    currentImageIndex = 1;
    allBox[0].scrollIntoView({ behavior: "smooth" });
  }
  if (currentImageIndex === 1) {
    btnLeft.setAttribute("style", "display: none");
  }
});

btnLeft.addEventListener("click", () => {
  //checking if left most image is displayed
  if (currentImageIndex !== 1) {
    currentImageIndex--;
    //moving previous image into scroll view
    allBox[currentImageIndex - 1].scrollIntoView({ behavior: "smooth" });
  }
  //hiding left button
  if (currentImageIndex === 1) {
    btnLeft.setAttribute("style", "display: none");
  }
});
