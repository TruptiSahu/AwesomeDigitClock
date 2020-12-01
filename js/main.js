const hr = document.querySelector('.clock__hand--hr h3');
const min = document.querySelector('.clock__hand--min h3');
const sec = document.querySelector('.clock__hand--sec h3');
const meridiem = document.querySelector('.meridiem');

const getTime = () => {
  const date = new Date();
  let presentHr = date.getHours();
  let presentMin = date.getMinutes();
  let presentSec = date.getSeconds();

  hr.textContent = presentHr;
  min.textContent = presentMin;
  sec.textContent = presentSec;
  meridiem.textContent = 'AM';

  if (presentHr === 12) {
    meridiem.textContent = 'PM';
  } else if (presentHr === 0) {
    hr.textContent = 12;
    meridiem.textContent = 'AM';
  } else if (presentHr > 12) {
    hr.textContent = presentHr - 12;
    meridiem.textContent = 'PM';
  }
};

setInterval(getTime, 1000);
