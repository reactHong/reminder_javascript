const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const carrotSound = new Audio('./sound/carrot_pull.mp3');
const winSound = new Audio('./sound/game_win.mp3');

export const playAlert = () => play(alertSound);
export const playBackground = () => play(bgSound);
export const stopBackground = () => stop(bgSound);
export const playBug = () => play(bugSound);
export const playCarrot = () => play(carrotSound);
export const playWin = () => play(winSound);

function play(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stop(sound) {
  sound.pause();
}
