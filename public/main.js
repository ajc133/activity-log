/* eslint-disable no-console */

function submitButtons() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/activity', true);
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      // const res = JSON.parse(xhr.responseText);
      // console.log(res);
    }
  };
  const buttons = document.querySelectorAll('.activity');
  const buttonData = [];
  [].forEach.call(buttons, (btn) => {
    const today = new Date().toISOString();
    const pressed = btn.classList.contains('selected');
    const json = {
      timestamp: today,
      activity: btn.id,
      pressed,
    };
    buttonData.push(json);
  });
  xhr.onerror = () => {
    console.log('Network error');
  };
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ activities: buttonData }));
  console.log(JSON.stringify(buttonData));
}

function toggleActiveState() {
  this.classList.toggle('selected');
  // const currentState = this.className;
  // notifyButtonPress(this.id, currentState);
}

const buttons = document.querySelectorAll('.activity');
[].forEach.call(buttons, (btn) => {
  btn.addEventListener('click', toggleActiveState);
});

const submit = document.getElementById('submit');
submit.addEventListener('click', submitButtons);
