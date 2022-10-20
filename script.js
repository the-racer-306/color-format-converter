let output = document.querySelector(".output");
let outputColor;
let hex_content = document.querySelector(".hex-content");

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let r = document.getElementById("red").value || 0;
  let g = document.getElementById("green").value || 0;
  let b = document.getElementById("blue").value || 0;
  outputColor =
    "#" +
    [r, g, b].map((x) => parseInt(x).toString(16).padStart(2, 0)).join("");
  output.innerHTML = outputColor;
  hex_content.style.backgroundColor = outputColor;
});
