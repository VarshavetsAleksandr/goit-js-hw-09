import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const elements = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('[data-start]'),
  day: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

elements.button.disabled = true;
let currentDate = new Date().getTime();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectDate = selectedDates[0];
    if (selectDate - currentDate < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      elements.button.disabled = false;
      elements.input.disabled = true;
      elements.button.addEventListener('click', handlerClick);
    }
  },
};

const calendars = flatpickr(elements.input, options);

function formatTime(value) {
  return value.toString().padStart(2, '0');
}

function handlerClick() {
  elements.button.disabled = true;
  let selectDate = new Date(elements.input.value).getTime();
  let ms = selectDate - currentDate;
  let id;
  if (ms > 0) {
    id = setInterval(() => {
      ms -= 1000;
      elements.day.textContent = formatTime(convertMs(ms).days);
      elements.hours.textContent = formatTime(convertMs(ms).hours);
      elements.minutes.textContent = formatTime(convertMs(ms).minutes);
      elements.seconds.textContent = formatTime(convertMs(ms).seconds);
    }, 1000);
  } else {
    clearInterval(id);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
