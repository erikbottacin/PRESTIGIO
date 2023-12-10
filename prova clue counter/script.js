let previousScrollY;
let currentScrollY;
let direction;
let points = [
  { id: 1, top: 100, visited: false },
  { id: 2, top: 800, visited: false },
  { id: 3, top: 1600, visited: false },
  { id: 4, top: 2300, visited: false },
  // mettere qua i punti, top definisce a che altezza
];

let pointCounter = 0;

function onScroll() {
  const scrollTop = window.pageYOffset;

  if (currentScrollY === scrollTop) return;

  previousScrollY = currentScrollY;
  currentScrollY = scrollTop;

  if (currentScrollY > previousScrollY) {
    direction = "down";
    checkPoints();
  } else if (currentScrollY < previousScrollY) {
    direction = "up";
    removePoints(); // Chiamata per rimuovere i punti quando si scorre verso l'alto
  }
}

function checkPoints() {
  points.forEach(point => {
    if (!point.visited && point.top <= currentScrollY) {
      console.log(`Point ${point.id} reached!`);
      point.visited = true;
      pointCounter++; // Incrementa il contatore
      updateCounter(); // Aggiorna la visualizzazione del contatore
    }
  });
}

function removePoints() {
  points.slice().reverse().forEach(point => {
    if (point.visited && point.top > currentScrollY) {
      console.log(`Point ${point.id} removed!`);
      point.visited = false;
      pointCounter--; // Decrementa il contatore
      updateCounter(); // Aggiorna la visualizzazione del contatore
    }
  });
}

function updateCounter() {
  const counterElement = document.getElementById('pointCounter');
  if (counterElement) {
    counterElement.textContent = pointCounter.toString();
  }
}  

function setupScroll() {
  previousScrollY = 0;
  currentScrollY = 0;
  direction = "up";
  document.addEventListener("scroll", onScroll);
}

setupScroll();