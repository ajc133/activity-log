function toggleActiveState() {
  this.classList.toggle('selected');
  notifyButtonPress(this.id);
}

function notifyButtonPress(buttonId) {
  let xhr = new XMLHttpRequest();
  const route = window.location + 'item/' + buttonId;
  xhr.open('POST', route, true);
  xhr.onload = function() {
    console.log('Sent');
  }
  xhr.onerror = function() {
    console.log('Network error');
  }
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.send();
}

var buttons = document.querySelectorAll('button');
[].forEach.call(buttons, function (btn) {
  btn.addEventListener('click', toggleActiveState, false);
});