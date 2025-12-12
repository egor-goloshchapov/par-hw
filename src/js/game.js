export default function createGame() {
  const keys = ["a", "s", "d", "f"];
  let currentIndex = 0;

  const keySpan = document.getElementById("key");
  const newGameBtn = document.getElementById("new-game");

  function newKey() {
    currentIndex = Math.floor(Math.random() * keys.length);
    keySpan.textContent = keys[currentIndex];
  }

  document.addEventListener("keypress", (event) => event.preventDefault());

  newGameBtn.addEventListener("click", newKey);
}
