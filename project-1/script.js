const favoriteBtn = document.getElementById('favoriteBtn');
const favoriteIcon = document.getElementById('favoriteIcon');
const messageBtn = document.getElementById('messageBtn');
const connectBtn = document.getElementById('connectBtn');

favoriteBtn.addEventListener('click', () => {
  favoriteBtn.classList.toggle('active');
  const isActive = favoriteBtn.classList.contains('active');
  favoriteIcon.textContent = isActive ? '♥' : '♡';
});

messageBtn.addEventListener('click', () => {
  messageBtn.classList.toggle('is-clicked');

  if (messageBtn.classList.contains('is-clicked')) {
    messageBtn.textContent = 'Message Sent';
  } else {
    messageBtn.textContent = 'Message';
  }
});

connectBtn.addEventListener('click', () => {
  connectBtn.classList.toggle('is-clicked');

  if (connectBtn.classList.contains('is-clicked')) {
    connectBtn.textContent = 'Connected';
  } else {
    connectBtn.textContent = 'Connect';
  }
});
