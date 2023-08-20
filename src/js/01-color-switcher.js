function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

elements.btnStart.addEventListener('click', handlerStart);
elements.btnStop.addEventListener('click', handlerStop);
elements.btnStop.disabled = true;

function handlerStart() {
  elements.btnStart.disabled = true;
  elements.btnStop.disabled = false;
  return (id = setInterval(() => {
    elements.body.style.backgroundColor = getRandomHexColor();
  }, 1000));
}

function handlerStop() {
  elements.btnStart.disabled = false;
  elements.btnStop.disabled = true;
  clearInterval(id);
}
