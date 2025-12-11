export default function createGame() {
  const keys = ["a", "s", "d", "f"];
  let currentIndex = 0;

  const keySpan = document.getElementById("key");
  const newGameBtn = document.getElementById("new-game");

  function newKey() {
    currentIndex = Math.floor(Math.random() * keys.length);
    keySpan.textContent = keys[currentIndex];
    PNotify.success("New game started!");
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === keys[currentIndex]) {
      PNotify.success("Correct!");
      newKey();
    } else {
      PNotify.error("Wrong key!");
    }
  });

  document.addEventListener("keypress", (event) => event.preventDefault());

  newGameBtn.addEventListener("click", newKey);

  newKey();
}
