export const minutes = document.getElementById("minutes");
export const seconds = document.getElementById("seconds");
export const addBtn = document.getElementById("addbutton");
export const removeBtn = document.getElementById("removebutton");

export let time;
export let isrunning = false;
export const timerduration = 25 * 60;
export let timeleft = timerduration;

export function updateTimerDisplay() {
  let min = Math.floor(timeleft / 60);
  let sec = timeleft % 60;

  minutes.textContent = min.toString().padStart(2, "0");
  seconds.textContent = sec.toString().padStart(2, "0");
}

export function starttimer() {
  if (!isrunning) {
    time = setInterval(() => {
      if (timeleft > 0) {
        timeleft--;
        updateTimerDisplay();
      } else {
        clearInterval(time);
        isrunning = false;
        resetTimer();
      }
    }, 1000);
    isrunning = true;
  }
}

export function pausetimer() {
  clearInterval(time);
  isrunning = false;
}

export function resetTimer() {
  clearInterval(time);
  isrunning = false;
  timeleft = timerduration;
  updateTimerDisplay();
}

export function modifyTimer(minutes) {
  let newtime = timeleft + minutes * 60;
  if (newtime < 0) {
    newtime = 0;
  } else if (newtime > timerduration) {
    newtime = timerduration;
  }

  timeleft = newtime;
  updateTimerDisplay();
}
