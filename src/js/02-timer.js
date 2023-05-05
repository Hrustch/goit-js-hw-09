import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
start.disabled = true;
let selectedDate;
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');
const start = document.querySelector('[data-start]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - new Date().getTime() <= 0) {
      Notify.failure(`Please choose a date in the future`);
      start.disabled = true;
    } else {
      start.disabled = false;
    }
  },
};



function addLeadingZero(value) {
  return String(value).padStart(2, 0);
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


function onTimerStart() {
  start.disabled = true;
  selectedDate = fp.selectedDates[0];
  const timerId = setInterval(() => {
    const currentDate = new Date();
    const countdown = selectedDate - currentDate;
    if (countdown < 0) {
      clearInterval(timerId);
      return;
    }
    updateTimer(convertMs(countdown));
  }, 1000);
}


function updateTimer({ days, hours, minutes, seconds }) {
  daysValue.textContent = addLeadingZero(days);
  hoursValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}


start.addEventListener('click', onTimerStart);
const fp = flatpickr('#datetime-picker', options);
