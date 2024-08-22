
let counter = 0;

function here() {
  counter++;
  document.getElementById("counter").textContent = counter;
}

function toggleMusic() {
  let audio = document.getElementById("rainyMusic");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function toggle2Music() {
  let audio = document.getElementById("forestMusic");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function toggle3Music() {
  let audio = document.getElementById("meditationMusic");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
function toggle4Music() {
  let audio = document.getElementById("focusMusic");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
let rainyMusic = document.getElementById("rainyMusic");

let forestMusic = document.getElementById("forestMusic");
let meditationMusic = document.getElementById("meditationMusic");
let focusMusic = document.getElementById("focusMusic");

rainyMusic.addEventListener("play", function toggleMusic() {
  forestMusic.pause();
  meditationMusic.pause();
  focusMusic.pause();
});

forestMusic.addEventListener("play", function toggle2Music() {
  rainyMusic.pause();
  meditationMusic.pause();
  focusMusic.pause();
});
meditationMusic.addEventListener("play", function toggle3Music() {
  forestMusic.pause();
  rainyMusic.pause();
  focusMusic.pause();
});
pianoMusic.addEventListener("play", function toggle4Music() {
  forestMusic.pause();
  rainyMusic.pause();
  fireMusic.pause();
});

function reseting(counter) {
  let distractionCount = document.getElementById("counter").innerHTML;
  distractionCount = 0;
  console.log(distractionCount);
  document.getElementById("counter").innerText = distractionCount;
}

document.getElementById("changeBackgroundButton").addEventListener("click",function() {
  var currentBackground = document.body.style.backgroundImage;
  if (currentBackground.includes(`/img/tree.jpg`)) {
    document.body.style.backgroundImage = "url(`/img/nature.jpg`)"; 
  } else {
      document.body.style.backgroundImage = "url(`/img/tree.jpg`)";
  }
} );
