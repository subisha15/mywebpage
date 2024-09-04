// Get the elements
const flagIcon = document.getElementById("flag-icon");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close-btn");

// Show the popup form when flag icon is clicked
flagIcon.addEventListener("click", function (event) {
  event.preventDefault();
  popupForm.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  popupForm.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == popupForm) {
    popupForm.style.display = "none";
  }
});
