import * as timer from "./timer.js";
import * as songs from "./sounds.js";

const playBtn = document.getElementById("playbutton");
const pauseBtn = document.getElementById("pausebutton");
const stopBtn = document.getElementById("stopbutton");

playBtn.addEventListener("click", function () {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
  pauseBtn.style.display = "inline-block";
  timer.starttimer();
});

pauseBtn.addEventListener("click", function () {
  pauseBtn.style.display = "none";
  playBtn.style.display = "inline-block";
  timer.pausetimer();
});

stopBtn.addEventListener("click", function () {
  stopBtn.style.display = "none";
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  timer.resetTimer();
});

timer.updateTimerDisplay();

timer.addBtn.addEventListener("click", () => {
  if (!timer.isrunning) {
    timer.modifyTimer(5);
  }
});

timer.removeBtn.addEventListener("click", () => {
  if (!timer.isrunning) {
    timer.modifyTimer(-5);
  }
});

function stopAllsongs() {
  songs.songTree.pause();
  songs.songTree.currentTime = 0;
  songs.songRain.pause();
  songs.songRain.currentTime = 0;
  songs.songStore.pause();
  songs.songStore.currentTime = 0;
  songs.songFire.pause();
  songs.songFire.currentTime = 0;
}

function toggleSound(sound) {
  if (sound.paused) {
    stopAllsongs();
    sound.play();
  } else {
    sound.pause();
    sound.currentTime = 0;
  }
}

document
  .getElementById("tree")
  .addEventListener("click", () => toggleSound(songs.songTree));
document
  .getElementById("rain")
  .addEventListener("click", () => toggleSound(songs.songRain));
document
  .getElementById("store")
  .addEventListener("click", () => toggleSound(songs.songStore));
document
  .getElementById("fire")
  .addEventListener("click", () => toggleSound(songs.songFire));
