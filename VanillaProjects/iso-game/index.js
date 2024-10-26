// Génération automatique des cellules de la grille
const grid = document.getElementById("grid");
for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.className = "grid-cell";
  grid.appendChild(cell);
}

// Gestion du cube
const cube = document.getElementById("cube");
const gridSize = 50;
let posX = 0,
  posY = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && posY > 0) posY--;
  if (event.key === "ArrowDown" && posY < 9) posY++;
  if (event.key === "ArrowLeft" && posX > 0) posX--;
  if (event.key === "ArrowRight" && posX < 9) posX++;

  const translateX = posX * gridSize;
  const translateY = posY * gridSize;
  cube.style.transform = `translate(${translateX}px, ${translateY}px)`;
});
