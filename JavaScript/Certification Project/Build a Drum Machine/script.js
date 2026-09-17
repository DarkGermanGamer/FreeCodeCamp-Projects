const display = document.getElementById("display")
const drumPads = document.querySelectorAll(".drum-pad");

drumPads.forEach(pad => {
  const id = pad.getAttribute("id").slice(5);
  const audio = pad.querySelector("audio");

  pad.addEventListener("click", () => {
    audio.play();
    display.innerText = id;
  })

  document.addEventListener("keydown", (e) => {
    if(e.key.toUpperCase() == id) {
      audio.play();
      display.innerText = id;
    }
  });
})