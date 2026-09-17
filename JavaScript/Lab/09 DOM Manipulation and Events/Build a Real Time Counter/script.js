const maxChars = 50;

let textarea = document.getElementById("text-input");
let charCount = document.getElementById("char-count");

textarea.addEventListener("input", () => {
  if(textarea.value.length < maxChars) {
    charCount.classList.remove("warn");
  }
  else {
    textarea.value = textarea.value.slice(0, maxChars)
    charCount.classList.add("warn");
  }

  charCount.innerText = `Character Count: ${textarea.value.length}/${maxChars}`;
});