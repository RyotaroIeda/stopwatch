let startbutton = document.getElementById('startbutton');
let stopbutton = document.getElementById('stopbutton');
let resetbutton = document.getElementById('resetbutton');
let time =document.getElementById('time');

let minutes = 0;
let seconds = 0;
let millisecond =0;

let stopwatch = () => {
  millisecond++;
  if (millisecond % 100 === 0) {
    seconds++;
    millisecond = 0;
  }
  if (seconds % 60 === 0) {
    minutes++;
    seconds = 0;
  }
  time.innerHTML = ('00' + minutes).slice(-4,-2) + ':' + ('00' + seconds).slice(-2) + ':' + (millisecond);
}

let interval;

startbutton.addEventListener('click',() => {
  interval = setInterval(stopwatch, 10);
  startbutton.disabled = true;
  stopbutton.disabled = false;
  resetbutton.disabled = true;
});
stopbutton.addEventListener('click', () => {
  clearInterval(interval);
  startbutton.disabled = false;
  stopbutton.disabled = true;
  resetbutton.disabled = false;
});
resetbutton.addEventListener('click' , () => {
  time.innerHTML = '00:00:00';
  minutes = 0;
  seconds = 0;
  millisecond = 0;
  startbutton.disabled = false;
  stopbutton.disabled = true;
  resetbutton.disabled = true;
});