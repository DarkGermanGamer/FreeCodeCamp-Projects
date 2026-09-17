const buttons = document.querySelectorAll(".favorite-icon");

buttons.forEach(btn => {
  btn.addEventListener("click", () => toggleFavourite(btn))
})

function toggleFavourite(btn) {
  if(btn.classList.contains("filled")) {
    btn.classList.remove("filled");
    btn.innerHTML = `&#9825;`;
  }
  else {
    btn.classList.add("filled");
    btn.innerHTML = `&#10084;`;
  }
}