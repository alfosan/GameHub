const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: canvas.width / 2, y: canvas.height - 50, size: 20, color: "red", vy: 0 };
let platforms = Array.from({ length: 5 }, (_, i) => ({
  x: Math.random() * canvas.width,
  y: canvas.height - i * 150,
  width: 100,
  height: 10,
  color: "green",
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);

  platforms.forEach((p) => {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.width, p.height);
  });
}

function update() {
  player.vy += 0.5;
  player.y += player.vy;

  platforms.forEach((p) => {
    if (
      player.y + player.size > p.y &&
      player.y + player.size < p.y + p.height &&
      player.x + player.size > p.x &&
      player.x < p.x + p.width
    ) {
      player.vy = -10;
    }
  });

  if (player.y > canvas.height) {
    player.y = canvas.height - 50;
    player.vy = 0;
  }
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();