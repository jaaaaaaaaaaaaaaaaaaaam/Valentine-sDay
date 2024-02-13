const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let clickedOnce = false;

yesBtn.addEventListener("click", () => {
  if (clickedOnce) {
    // Redirect to index.html if clicked for the second time
    window.location.href = "suprise.html";
  } else {
    // Change text and GIF on first click
    question.innerHTML = "I love you Ai😘!";
    gif.src = "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
    yesBtn.innerHTML = "Click me again";
    yesBtn.style.backgroundColor = "#ff3860"; // Change background color to yellow (or any color you prefer)
    clickedOnce = true;
  }
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
