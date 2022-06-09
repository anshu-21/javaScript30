console.log("Hello world");

//this will play the sound that associated with pressed key
// and it will add the playing class for the animation
const play = (e) => {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return; //It will stop th function from running
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
};

//this will remove the playing class after the event ends
const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  console.log(this);
  e.target.classList.remove("playing");
};

window.addEventListener("keydown", play);
const keys = document.querySelectorAll(`.key`);
keys.forEach((a) => a.addEventListener("transitionend", removeTransition));
