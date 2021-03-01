function toggleActiveState() {
  this.classList.toggle('selected');
}

var buttons = document.querySelectorAll('button');
[].forEach.call(buttons, function (btn) {
  btn.addEventListener('click', toggleActiveState, false);
});