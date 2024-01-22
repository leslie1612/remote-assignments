// Click to Change Text.
const welcomeMessage = document.querySelector("h2");
welcomeMessage.addEventListener("click", () => {
  welcomeMessage.textContent = "Have a Good Time!";
});

// Click to Show More Content Boxes.
const hidddenInfo = document.querySelector(".hidden");
const btn = document.querySelector(".js-more-information");
btn.addEventListener("click", () => {
  if (hidddenInfo.style.display === "none") {
    hidddenInfo.style.display = "block";
    btn.textContent = "點擊隱藏";
  } else {
    hidddenInfo.style.display = "none";
    btn.textContent = "點擊查看更多新聞";
  }
});
