const modeSwitch = document.getElementById('mode');

modeSwitch.addEventListener('change', function() {
  if (modeSwitch.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});
