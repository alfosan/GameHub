const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: canvas.width / 2, y: canvas.height - 50, size: 50, color: "white" };
let balls = Array.from({ length: 10 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height / 2,
  size: 20,
  color: `hsl(${Math.random() * 360}, 100%, 50%)`,
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = player.color;
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
  ctx.fill();

  balls.forEach((b) => {
    ctx.fillStyle = b.color;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function update() {
  canvas.addEventListener("mousemove", (e) => {
    player.x = e.clientX;
    player.y = e.clientY;
  });

  balls = balls.filter((b) => {
    const dx = b.x - player.x;
    const dy = b.y - player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance > player.size + b.size;
  });
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
