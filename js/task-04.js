const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

let count = 0;

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

function decrement() {
 count = count - 1;
  counterValue.textContent = count;
}

function increment() {
  count = count + 1;
  counterValue.textContent = count;
}
