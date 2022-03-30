function playKey(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  const button = document.getElementById(keyCode);
  button.classList.add('playing');
  setTimeout(()=>button.classList.remove('playing'), 300);
  audio.currentTime = 0;
  audio.play();  
}

window.addEventListener("keydown", e => {
  playKey(e.keyCode);
});

document.querySelectorAll('button').forEach(el=>el.addEventListener('click', ()=>playKey(el.id)))