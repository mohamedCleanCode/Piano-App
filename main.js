// Get All Kyes To Loop On Them
let keys = document.querySelectorAll(".key");

// Get Valume Input
let volume = document.querySelector(`[type="range"]`);

// Get Check Box Input
let checkBox = document.querySelector(`[type="checkbox"]`);

// Array Of Keys
let arrOfKeys = [];

// Get Default Sound
let audio = new Audio("./soundes/w.wav");

// Function To Play Sound
let playSound = (key) => {
  // Change Src Audio To Current Click
  audio.src = `./soundes/${key}.wav`;
  // Play Audio
  audio.play();
  // Get Current Ele To Add active And Remove It After While
  let ele = document.querySelector(`[data-key="${key}"]`);
  ele.classList.add("active");
  setTimeout(() => {
    ele.classList.remove("active");
  }, 100);
};

// Add Click Event To Keys
keys.forEach((key) => {
  arrOfKeys.push(key.dataset.key);
  key.addEventListener("click", () => playSound(key.dataset.key));
});

// Function Press Keys On Keyboard
let pressKeys = (e) => {
  // If Click On Ele Are There Array On The Top Can Run Onley
  if (arrOfKeys.includes(e.key)) playSound(e.key);
};

// Function Of Valume
let rangeValume = (e) => {
  audio.volume = e.target.value;
};

// Function Of Check Box
let showHideKeys = (e) => {
  document.querySelectorAll("li span").forEach((span) => {
    span.classList.toggle("hide");
  });
};

// Press Keys On Keyboard
document.addEventListener("keydown", pressKeys);

// Valume Input Handel
volume.addEventListener("input", rangeValume);

// Check Box Handel
checkBox.addEventListener("click", showHideKeys);
