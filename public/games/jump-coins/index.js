const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let coins = parseInt(localStorage.getItem("coins") || "0");

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "gold";
  ctx.font = "30px Arial";
  ctx.fillText(`Monedas: ${coins}`, 50, 50);
}

canvas.addEventListener("click", () => {
  coins++;
  localStorage.setItem("coins", coins.toString());
  draw();
});

draw();