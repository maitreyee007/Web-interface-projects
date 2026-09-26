const countElement = document.getElementById('count');
const increaseButton = document.querySelector('.btn-increase');
const decreaseButton = document.querySelector('.btn-decrease');
const resetButton = document.querySelector('.btn-reset');

let count = 0;

function renderCount() {
  countElement.textContent = count;
}

increaseButton.addEventListener('click', () => {
  count += 1;
  renderCount();
});

decreaseButton.addEventListener('click', () => {
  count -= 1;
  renderCount();
});

resetButton.addEventListener('click', () => {
  count = 0;
  renderCount();
});

renderCount();
