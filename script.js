"use strict";

const totalScore1El = document.querySelector("#score--0");
const totalScore2El = document.querySelector("#score--1");
const currentScore1El = document.querySelector("#current--0");
const currentScore2El = document.querySelector("#current--1");
const rollDiceEl = document.querySelector(".btn--roll");
const rollNewEl = document.querySelector(".btn--new");
const rollHoldEl = document.querySelector(".btn--hold");
const diceImgEl = document.querySelector(".dice");
const playerActiveEl1 = document.querySelector(".player--0");
const playerActiveEl2 = document.querySelector(".player--1");
//initial values
totalScore1El.textContent = 0;
totalScore2El.textContent = 0;
diceImgEl.classList.add("hidden");
const score = [0, 0];
let activePlayer = 0;
// let prevDiceValue = 0;
function getCubeNumber() {
  return Math.trunc(Math.random() * 6) + 1;
}
let currentScore = 0;
rollDiceEl.addEventListener("click", () => {
  let diceValue = getCubeNumber();
  //for consective cube not stay same
  // console.log(diceValue);
  // if (!prevDiceValue) {
  //   prevDiceValue = diceValue;
  // } else {
  //   while (prevDiceValue === diceValue) {
  diceValue = getCubeNumber();
  //   }
  // prevDiceValue = diceValue;
  // }
  diceImgEl.classList.remove("hidden");
  diceImgEl.src = `dice-${diceValue}.png`;
  if (diceValue !== 1) {
    currentScore += diceValue;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    score[activePlayer] = 0;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerActiveEl1.classList.toggle("player--active");
    playerActiveEl2.classList.toggle("player--active");
  }
});

//iife
// (function useffect() {
//   console.log(activePlayer, "act");
// })();
rollHoldEl.addEventListener("click", () => {
  if (score[activePlayer] >= 100) {
    document.querySelector(`#name--${activePlayer}`).textContent = `Player ${
      activePlayer + 1
    } WINS`;
    score[0] = 0;
    score[1] = 0;
    currentScore = 0;
    document.querySelector(`#score--0`).textContent = 0;
    document.querySelector(`#score--1`).textContent = 0;
    document.querySelector(`#current--0`).textContent = 0;
    document.querySelector(`#current--1`).textContent = 0;
    document.querySelector(".dice").classList.add("hidden");
  }
  score[activePlayer] = score[activePlayer] + currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    score[activePlayer];
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerActiveEl1.classList.toggle("player--active");
  playerActiveEl2.classList.toggle("player--active");
});

document.querySelector(".btn--new").addEventListener("click", () => {
  activePlayer = 0;
  playerActiveEl1.classList.toggle("player--active");
  playerActiveEl2.classList.toggle("player--active");

  score[0] = 0;
  score[1] = 0;
  currentScore = 0;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document.querySelector(".dice").classList.add("hidden");
});
