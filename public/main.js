/* eslint-disable no-console */

function notifyButtonPress(buttonId, currState) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/activity', true);
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      // const res = JSON.parse(xhr.responseText);
      // console.log(res);
    }
  };
  let pressed;
  if (currState === 'selected') {
    pressed = true;
  } else {
    pressed = false;
  }
  const json = {
    button: buttonId,
    pressed,
  };
  xhr.onerror = () => {
    console.log('Network error');
  };
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(json));
}

function toggleActiveState() {
  this.classList.toggle('selected');
  const currentState = this.className;
  notifyButtonPress(this.id, currentState);
}

const buttons = document.querySelectorAll('button');
[].forEach.call(buttons, (btn) => {
  btn.addEventListener('click', toggleActiveState, false);
});
